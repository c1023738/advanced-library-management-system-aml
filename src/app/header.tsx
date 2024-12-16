import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { getMember, getServerClient } from "@/lib/wix";
import { loginAction, logoutAction } from "@/actions";
import { getClient } from "@/lib/wix-client";

export async function Header() {
  const member = await getMember();
  const isLoggedIn = await (await getServerClient()).auth.loggedIn();
  return (
    <div className="bg-gray-100 border-b py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and text on the left side */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={100} height={100} />
          </Link>
          <span className="font-bold text-xl">Advanced Media Library</span>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-6 ml-auto">
          <Button variant="link" asChild>
            <Link href="/Explore">Explore</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/Support">Support</Link>
          </Button>
        </div>

        {/* Login and Account buttons on the right */}
        <div className="ml-6 flex space-x-4">
          <Button variant="link" asChild>
            <Link href="/Account">Account</Link>
          </Button>
          <div>
            {(await getServerClient()).auth.loggedIn() ? (
              <div>
                <p> Hello , {member?.nickname}</p>
                <form action={logoutAction}>
                  <Button variant={"outline"}>Logout</Button>
                </form>
              </div>
            ) : (
              <form action={loginAction}>
                <Button variant={"outline"}>Login</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
