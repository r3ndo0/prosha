import { getCookie } from "cookies-next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

import { type User } from "@prisma/client";

export default async function getUser(req: any, res: any) {
  const prisma = new PrismaClient();

  const token = getCookie("token", { res, req }) as string;
  if (token) {
    try {
      const { userId } = jwt.verify(
        token,
        process.env.TOKEN_SECRET as string
      ) as JwtPayload;

      let user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      user = JSON.parse(JSON.stringify(user)) as User;
      const { password, ...userData } = user;

      return userData;
    } catch (error) {
      console.log(error);
      return null;
    }
  } else {
    return;
  }
}
