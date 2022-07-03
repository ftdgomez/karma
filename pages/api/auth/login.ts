// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../supabaseClient';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

function comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
}

function generateJwtToken(user: UserProfile): string {
    return jwt.sign({ user }, process.env.JWT_SECRET as string, { expiresIn: '30d' });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const { username } = req.body;
        const { data:userFromDb, error:errorGettingUserFromDb } =
            await supabase.from('appUser').select('*').match({ username });
        if (!errorGettingUserFromDb) {
            const { password, id } = Array.isArray(userFromDb) ? userFromDb[0] : userFromDb;
            if (comparePassword(req.body.password, password)) {
                const {data:profileData, error: errorGettingProfileData} = await supabase.from('userProfile').select('*').match({userId: id});
                if (!errorGettingProfileData) {
                    return res.status(200).json({
                        user: Array.isArray(userFromDb) ? userFromDb[0] : userFromDb,
                        profile: Array.isArray(profileData) ? profileData[0] : profileData,
                        token: generateJwtToken(Array.isArray(profileData) ? profileData[0] : profileData as UserProfile)
                    })
                }
            }
        }
        return res.status(400).json({ error: 'Wrong login data' });
    }
    return res.status(404).send('not found');
}
