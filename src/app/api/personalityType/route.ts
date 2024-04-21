import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET() {
    const personalityTypes = await prisma.personalityType.findMany({})
    return NextResponse.json(personalityTypes);
}

export async function DELETE() {
    const deletedPersonalityTypes = await prisma.personalityType.deleteMany();
    return NextResponse.json(deletedPersonalityTypes);
}
export async function POST(req: Request) {
    const body = await req.json();
    const { name, description } = body;
    const newPersonalityType = await prisma.personalityType.create({
        data: {
            name: name,
            description: description
        }
    });
    return NextResponse.json(newPersonalityType);
}
