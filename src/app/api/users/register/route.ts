import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        const body: createUserRequest = await request.json();
        const { name, email, password } = body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        });

        return NextResponse.json({ message: "user created", user });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return NextResponse.json({ error: 'Username or email already exists' }, { status: 400 });
        }
        else {
            return NextResponse.json({ error: 'Failed to create user', errorMessage: error }, { status: 500 });
        }
    }
}
