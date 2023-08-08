import { NextResponse } from "next/server";
// sve new user to database
export async function POST(request) {
    try {
        const { name, nickname, email, password } = request.json();
        return NextResponse.json({ message: 'user registered.' }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred while reigstering the user.' }, { status: 500 })
    }
}