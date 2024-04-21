import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }){
    const id = parseInt(params.id);
    if (!id) {
        return NextResponse.json({ message: "id not found" });
    }
    const personalityType = await prisma.personalityType.delete({ where: { id: id} });
    return NextResponse.json({ message: "personalityType deleted", personalityType });


}