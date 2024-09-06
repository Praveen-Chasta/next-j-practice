import client from "@/app/db"
import { NextRequest, NextResponse } from "next/server";



export async function GET(){
    // Do Validation Here
    // Add Database Here

    const user = await client.user.findFirst()

    return NextResponse.json
    ({ 
        name : user?.username,
        password : user?.password
    })
    
}

// postgresql://Practice_owner:5ErmOYDC7Gdy@ep-little-frog-a5kwj8io.us-east-2.aws.neon.tech/Practice?sslmode=require

export async function POST(req: NextRequest){

    const body = await req.json()
    
    try{
        await client.user.create({
            data : {
                username : body.username,
                password : body.password
            }
        })
    
        return NextResponse.json({
            body
        })
    }catch(e){
        return NextResponse.json({
            message : "Error while signing up"
        },{
            status : 400
        })
    }
}