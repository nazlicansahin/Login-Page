'use client'
import { useRouter } from "next/navigation";

import Link from "next/link"
import { useState } from "react"
export default function RegisterForm() {// RegisterForm u register app icindfeki register page e y,nlendiriyoruz
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !nickname || !password) {
            setError('All fields are necessary')
            return;
        }
        try {
            const resUserExists = await fetch("api/userExist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists.");
                return;
            }
            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, nickname, email, password,
                })
            })
            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push('/')
            }
            else {
                console.log('Registration failed');
            }
        } catch (error) {
            console.log('Error during registration: ', error);
        }
    }
    return (
        <div className="grid place-items-center h-screen">

            <div className="shadow-lg p-5 rounded-lg border-t-4 border-pink-400">
                <h1 className="text-xl font-bold my-4">Enter the details</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder=" Enter your full name" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <input onChange={(e) => setNickname(e.target.value)} type="text" placeholder="Enter your nickname" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <button className="w-full text-center py-3 rounded bg-pink-500 text-white hover:bg-pink-700 focus:outline-none my-1">Register</button>

                    {error && (
                        <div className="  bg-slate-500 text-sm text-white mt-2 w-fit px-3 py-1 rounded-sm">{error}</div>
                    )}<Link href={"/register"} className='text-sm mt-3 text-right px-5'>
                        Already have an account? <span className='underline'>Login here</span>
                    </Link>
                </form>

            </div></div>)


}