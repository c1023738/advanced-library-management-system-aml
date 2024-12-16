"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Import Image for optimized image handling

export function Header() {
    return (
        <div className="bg-gray-100 border-b py-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and text on the left side */}
                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <Image
                            src="/Logo.png" 
                            alt="Logo"
                            width={100}
                            height={100}
                        />
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

                {/* Login button on the right */}
                <div className="ml-6 flex space-x-4">
                    {/* Account button */}
                    <Button variant="link" asChild>
                        <Link href="/Account">Account</Link>
                    </Button>

                    {/* Login button */}
                    <Button variant="link" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
