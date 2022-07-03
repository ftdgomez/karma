// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("appEvent")
      .select("*, userId (*)");
    return res.status(200).json({ data, error });
  }
  if (req.method === "POST") {
    // create the event
    await supabase.from("appEvent").insert(req.body.document);
    const { data } = await supabase
      .from("organizerProfile")
      .select("*")
      .match({ userId: req.body.currentUser.id });
    // add to the EventsPublished
    const { error } = await supabase
      .from("organizerProfile")
      .update({
        ...(Array.isArray(data) ? data[0] : data),
        eventsPublished:
          (Array.isArray(data) ? data[0] : data).eventsPublished + 1,
      })
      .match({ userId: req.body.currentUser.id });
    console.log("error: ", error);
    return res.status(200).json({ success: true });
  }

  return res.status(404).send("not found");
}
