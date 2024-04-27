import prisma from "@/lib/prisma";
import {useParams} from "next/navigation";
import {NextRequest, NextResponse} from "next/server";


// get list of choices picked for a user
export async function GET(req: NextRequest, {params}: { params: { id: string } }){
    const UserChoices = await prisma.userChoice.findMany({
        where: {
            userId: parseInt(params.id)
        }
    });
    return NextResponse.json(UserChoices);
}

// given a userId: number and an array of choiceId: number[], create all UserChoice
export async function POST(req: NextRequest,{params}: { params: { id: string } }){
    const {choiceIds} = await req.json()
    const userChoices = await prisma.userChoice.createMany({
        data: choiceIds.map((choiceId: string) => ({
            userId: parseInt(params.id),
            choiceId: parseInt(choiceId)
        }))
    });
    return NextResponse.json(userChoices);
}

//given a userId: number, delete all UserChoice
export async function DELETE(req: NextRequest,{params}: { params: { id: string } }){
    const userChoices = await prisma.userChoice.deleteMany({
        where: {
            userId: parseInt(params.id)
        }
    });
    return NextResponse.json(userChoices);
}