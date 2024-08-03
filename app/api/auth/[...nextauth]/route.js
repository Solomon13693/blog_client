import { authOptions } from "@/lib";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

module.exports = {
  handler,
  GET: handler,
  POST: handler,
};
