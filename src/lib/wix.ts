import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";
import { cookies } from "next/headers";
import { members, authorization } from "@wix/members";

export async function getServerClient() {
  return createClient({
    modules: { items, members, authorization },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: JSON.parse((await cookies()).get("session")?.value || "null"),
    }),
  });
}

export async function getMember() {
  const client = getServerClient();

  if (!(await client).auth.loggedIn()) {
    return undefined;
  }

  const { member } = await (await client).members.getCurrentMember();

  return member
    ? {
        id: member._id,
        loginEmail: member.loginEmail,
        nickname: member.profile?.nickname,
        slug: member.profile?.slug,
      }
    : undefined;
}
