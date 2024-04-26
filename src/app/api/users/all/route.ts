
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// get all users
export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}


// delete all users; returns number of users deleted {count: number}
export async function DELETE() {
    const batchPayload = await prisma.user.deleteMany({});
    return NextResponse.json(batchPayload);
}

