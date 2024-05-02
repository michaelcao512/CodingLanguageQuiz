import prisma from "@/lib/prisma";
import {Question} from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const question: Question | null = await prisma.question.findUnique({ where: { id: parseInt(id) } });
    return NextResponse.json(question);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    const body  = await request.json();
    const { text, choices } = body;
    const question: Question = await prisma.question.update({
        where: { id: parseInt(id) },
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
    return NextResponse.json({message: "databaseTypes updated", question});
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

    const id = parseInt(params.id);
    if (!id) {
        return NextResponse.json({ message: "id not found" });
    }
    const question: Question = await prisma.question.delete({ where: { id: id} });
    return NextResponse.json({ message: "databaseTypes deleted", question });
}
