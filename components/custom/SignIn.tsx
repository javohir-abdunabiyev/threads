"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const SignIn = () => {
    return (
        <>
            <Button onClick={() => signIn()}>
                Зарегистрироваться
            </Button>
        </>
    )
}

export default SignIn;