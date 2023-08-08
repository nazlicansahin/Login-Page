import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/user";
// sve new user to database
export async function POST(req) {
    try {
        const { name, nickname, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB(); //modelsdeki user i  baz alarak yaziyoruz buralari o yuzden user import edilir
        await User.create({ name, nickname, email, password: hashedPassword });
        return NextResponse.json({ message: 'user registered.' }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred while reigstering the user.' }, { status: 500 })
    }
}