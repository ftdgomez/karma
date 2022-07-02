// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../supabaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { data, error } = await supabase.from('appEvent').select('*, userId (*)')
  res.status(200).json({ data, error })
}