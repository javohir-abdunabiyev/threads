"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

const SignOut = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <Button onClick={() => signOut()}>
                    Выйти
                </Button>
            </>

        )
    }
}

export default SignOut;