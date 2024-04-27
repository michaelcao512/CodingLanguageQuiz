import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

// deletes a personalityType
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }){
    const id = parseInt(params.id);
    if (!id) {
        return NextResponse.json({ message: "id not found" });
    }
    const personalityType = await prisma.personalityType.delete({ where: { id: id} });
    return NextResponse.json({ message: "personalityType deleted", personalityType });
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }){
    const id = parseInt(params.id);
    if (!id) {
        return NextResponse.json({ message: "id not found" });
    }
    const personalityType = await prisma.personalityType.findUnique({ where: { id: id} });
    console.log("FROM API: ", personalityType, id);
    return NextResponse.json({ personalityType });
}