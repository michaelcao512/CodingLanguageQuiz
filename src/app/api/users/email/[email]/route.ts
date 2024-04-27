// gets user object by email
import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

// get user object by email
export async function GET(req: NextRequest, params: { email: string }){
    const user = await prisma.user.findFirst({
        where: {
            email: params.email
        }
    });
return NextResponse.json(user);
}