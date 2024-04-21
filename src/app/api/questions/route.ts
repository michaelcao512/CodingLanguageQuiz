import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET() {
    const questions = await prisma.question.findMany({
            include: {
                choices: {
                    include: {
                        personalityType: true
                    }
                },
            }
        }
    );
    return NextResponse.json(questions);
}


type reqBody = {
    "text": string;
    "choices": {
        "text": string;
        "personalityTypeId": number;
    }[]
}
export async function POST (req: NextRequest){
    const body: reqBody = await req.json()
    const {text, choices} = body;
    const newQuestion = await prisma.question.create({
        data: {
            text: text,
            choices: {
                create: choices.map((choice: { text: string; personalityTypeId: number; }) => {
                    return {
                        text: choice.text,
                        personalityType: {
                            connect: {
                                id: choice.personalityTypeId
                            }
                        }
                    }
                })
            }
        },
        include: {
            choices: {
                include: {
                    personalityType: true
                }
            }
        }
    });
    return NextResponse.json(newQuestion);
}

export async function DELETE(){
    const questions = await prisma.question.deleteMany();
    return NextResponse.json(questions);
}