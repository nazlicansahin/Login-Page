import Link from "next/link"
export default function RegisterForm() {// RegisterForm u register app icindfeki register page e y,nlendiriyoruz
    return (
        <div className="grid place-items-center h-screen">

            <div className="shadow-lg p-5 rounded-lg border-t-4 border-pink-400">
                <h1 className="text-xl font-bold my-4">Enter the details</h1>
                <form className="flex flex-col gap-3">
                    <input type="text" placeholder=" Enter your full name" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <input type="text" placeholder="Enter your nickname" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <input type="text" placeholder="Enter your email" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <input type="password" placeholder="Enter your password" className="block border border-grey-light w-full p-3 rounded mb-4" name="name" />
                    <button className="w-full text-center py-3 rounded bg-pink-500 text-white hover:bg-pink-700 focus:outline-none my-1">Register</button>
                    <div className="  bg-slate-500 text-sm text-white mt-2 w-fit px-3 py-1 rounded-sm">Error message</div>
                    <Link href={"/register"} className='text-sm mt-3 text-right px-5'>
                        Already have an account? <span className='underline'>Login here</span>
                    </Link>
                </form>

            </div></div>)


}