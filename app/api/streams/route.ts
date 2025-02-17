import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import {prismaCLient} from "@/app/lib/db"

const CreateStreamSchema = z.object({
    createorId: z.string(),
    url: z.string(),
})

export async function POST(req: NextRequest) {
    try{
     const data = CreateStreamSchema.parse(await req.json());
     prismaCLient.stream.create({
        // userId: ,  
     })

    }
    catch(e){
        NextResponse.json({
            message: "Error while adding a stream",
        }, {
            status: 411
        }
    )
        
    }
}