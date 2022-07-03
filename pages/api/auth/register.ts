import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../supabaseClient';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface RegisterObject extends UserProfile {
    password: string;
    repeatPassword: string;
    role: 'organizer' | 'user'
}

function hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
}

function generateJwtToken(user: UserProfile): string {
    return jwt.sign({ user }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const body = req.body as RegisterObject;
        const { password, repeatPassword, role, username, ...profileData } = body;
        if (password !== repeatPassword) {
            res.status(400).json({ error: 'Passwords do not match' });
            return;
        }
        const userData: User = {
            password: hashPassword(password),
            username: username,
            role: body.role
        }
        const { data, error }:any = await supabase.from('appUser').insert(userData);
        if (error) {
            res.status(400).json({ error });
            return;
        }
        const { data:profile, error:profileError } = await supabase.from('userProfile').insert({
            ...profileData,
            userId: Array.isArray(data) ? data[0].id : data.id
        });
        if (profileError) {
            res.status(400).json({ profileError });
            return;
        }
        return res.status(200).json({ user: data, profile, token: generateJwtToken(Array.isArray(profile) ? profile[0] : profile as UserProfile) });
    }
//   const { data, error } = await supabase.from('appEvent').select('*, userId (*)')
//   res.status(200).json({ data, error })
    res.status(404).json({ error: 'Not found' })
}