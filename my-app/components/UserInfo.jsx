export default function UserInfo() {
    return (
        <div className='grid place-items-center h-screen'>
            <div className='shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6'>
                <div>
                    Name: <span className="font-bold">John</span>
                </div>
                <div>
                    Nickname: <span className="font-bold">Johnnick</span>
                </div>
                <div>
                    Email: <span className="font-bold">John@johnmail.com</span>
                </div>
                <button className="bg-pink-400 text-white font-bold px-6 py-2 mt-3 ">Log Out</button>
            </div>
        </div>
    )
}