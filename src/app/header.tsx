"user client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header(){
    return <div className="bg-gray-100 border-b py-6">
        <div className="container mx-auto flex justify-between items center">
            <Button variant="link" asChild>
                <Link href="">AML Library</Link>
            </Button>
            <div>
            <Button variant="link" asChild>
                <Link
                 href="/Explore">Explore</Link>
            </Button>
            </div>
            <div>Support</div>
            <div>Login</div>

        </div>

    </div>
}