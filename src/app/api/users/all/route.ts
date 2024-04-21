
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// get all users
export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}


// delete all users
export async function DELETE() {
    const users = await prisma.user.deleteMany({});
    return NextResponse.json({ message: "all users deleted", users });
}

