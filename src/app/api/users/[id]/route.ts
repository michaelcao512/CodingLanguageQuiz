import prisma from "@/lib/prisma";
import {User} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import bcrypt from "bcryptjs";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const user  = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    return NextResponse.json(user);
}

// update user by id from request body
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const body  = await request.json();
    console.log(body)
    const { name, email, password, biography, personalityTypeId} = body;
    let hashedPassword = password;
    if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
    }
    const oldUser = await prisma.user.findUnique({  where: { id: parseInt(id) } });
    if (!oldUser) {
        return NextResponse.json({ message: "user not found" });
    }

    const newHashedPassword = hashedPassword || oldUser.password;
    const newName = name || oldUser.name;
    const newEmail = email || oldUser.email;
    const newBiography = biography || oldUser.biography;
    const newPersonalityTypeId = personalityTypeId || oldUser.personalityTypeId;

    const newDetails = {
        name: newName,
        email: newEmail,
        password: newHashedPassword,
        biography: newBiography,
        personalityTypeId: newPersonalityTypeId
    }

    const user: User = await prisma.user.update({
        where: { id: parseInt(id) },
        data: newDetails
    });
    console.log("user:", user);
    return NextResponse.json(user);
}

// delete user by id
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    if (!id) {
        return NextResponse.json({ message: "id not found" });
    }
    const user: User = await prisma.user.delete({ where: { id: id} });
    return NextResponse.json(user);
}
