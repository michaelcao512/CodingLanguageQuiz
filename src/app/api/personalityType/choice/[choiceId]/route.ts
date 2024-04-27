import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

// gets a personality type by choice id
export async function GET(req: NextRequest, {params}: { params: { choiceId: string }}) {
    const choice = await prisma.choice.findUnique({
        where: {
            id: parseInt(params.choiceId)
        }
    });

    const personalityType = await prisma.personalityType.findUnique({
        where: {
            id: choice?.personalityTypeId
        }
    });


    return NextResponse.json({ personalityType });
    
}