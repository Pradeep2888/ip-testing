import { NextResponse } from "next/server"

export function GET(request){
     return NextResponse.json({
           'message':'testing get'
     })
}
export function DELETE (request,{params}){
   console.log(params.userid)
    return NextResponse.json({
         'message':'testing delete'
    })
}