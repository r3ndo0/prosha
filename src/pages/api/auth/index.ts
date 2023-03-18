import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { setCookies } from "cookies-next";
import { PrismaClient } from "@prisma/client";

type Data = {
  message: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, password } = req.body;
  if (req.method === "POST") {
    const user = await prisma.user.findUnique({
      where: {
        credentials: {
          username,
          password,
        },
      },
    });

    if (user) {
      const token = jwt.sign(
        { userId: user.id },
        process.env.TOKEN_SECRET as string,
        {
          expiresIn: "1d",
        }
      );
      setCookies("token", token, {
        req,
        res,
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      res.status(200).json({ message: "Success" });
    } else {
      res.status(403);
    }
  }
}
