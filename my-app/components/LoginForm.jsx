"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid place-items-center h-screen">

            <div className="shadow-lg p-5 rounded-lg border-t-4 border-pink-400">
                <h1 className="text-xl font-bold my-4">Log in</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />

                    <button className="w-full text-center py-3 rounded bg-pink-500 text-white hover:bg-pink-700 focus:outline-none my-1">Login</button>
                    {error && (
                        <div className="  bg-slate-500 text-sm text-white mt-2 w-fit px-3 py-1 rounded-sm">{error}</div>
                    )}
                    <Link href={"/register"} className='text-sm mt-3 text-right px-5'>
                        Don't have an account? <span className='underline'>Register here</span>
                    </Link>
                </form>

            </div></div>)
}