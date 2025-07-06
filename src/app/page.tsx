import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="m-4">
             <SignedOut>
              <SignInButton mode="modal" />
              <SignUpButton mode="modal">
                <Button>
                  Sign in
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* <Button variant={'secondary'}>Click me</Button> */}
    </div>
  );
}
