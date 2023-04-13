import { connectToMongoDB } from "@/lib/db";
import { seedPlayers } from "@/lib/seed";
import { PFUser } from "@/models/PFUser";
import { withAuth } from "@clerk/nextjs/dist/api";
import { NextApiRequest, NextApiResponse } from "next";

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToMongoDB();
    // TODO: This will have to be updated to run by tournament bracket
    const foundUsers = await PFUser.find();
    const seededPlayers = seedPlayers(foundUsers);
    res.status(200).json(seededPlayers);
  } catch (error) {
    throw new Error(
      "There was an error finding users",
      error as any as ErrorOptions
    );
  }
});

export default handler;
