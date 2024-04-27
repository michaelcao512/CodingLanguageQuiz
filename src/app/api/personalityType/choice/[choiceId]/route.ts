import {NextRequest} from "next/server";
import prisma from "@/lib/prisma";

// gets a personality type by choice id
export async function GET(req: NextRequest, params: { choiceId: string }) {
    const { choiceId } = params;

    const personalityType = await prisma.personalityType.findUnique({
        where: {
            id: parseInt(choiceId)
        }
    });
    }
    
}