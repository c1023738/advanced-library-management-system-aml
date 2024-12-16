"use server";

import client from "@/lib/wix";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction() {
  const data = await client.auth.generateOAuthData(
    `${process.env.NEXT_PUBLIC_URL}/login-callback`,
    process.env.NEXT_PUBLIC_URL
  );
  cookies().set("oauthRedirectData", JSON.stringify(data));
  const { authUrl } = await client.auth.getAuthUrl(data);

  redirect(authUrl);
}
