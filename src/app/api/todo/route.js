import connect from "@/lib/dBConfig/Connect";
import TodoModel from "@/lib/models/todoModel";
import { NextResponse } from "next/server";
connect()

export async function GET(request){
    const todo= await TodoModel.find();
    return NextResponse.json({
        msg:todo
    })
}

export async function PUT(request){
    const todo= await request.nextUrl.searchParams.get('mongoId');
    await TodoModel.findByIdAndUpdate(todo,{
        $set:{
            isCompleted:true
        }
    })
    return NextResponse.json({
        msg:"todo completed successfully"
    })
}


export async function DELETE(request) {
    try {
        const mongoId = request.nextUrl.searchParams.get('mongoId');

        if (!mongoId) {
            return NextResponse.json({ msg: 'mongoId is required' }, { status: 400 });
        }

        const deletedTodo = await TodoModel.findByIdAndDelete(mongoId);

        if (!deletedTodo) {
            return NextResponse.json({ msg: 'TODO not found' }, { status: 404 });
        }

        return NextResponse.json({ msg: 'TODO deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ msg: 'An error occurred', error: error.message }, { status: 500 });
    }
}
export async function POST(request){
    const {title,des}=await request.json();

    await TodoModel.create({
        title,
        des
    })
    return NextResponse.json({
        mes:"post create successfully"
    })
}