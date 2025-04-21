import { NextResponse } from "next/server";

const threads = [
    {
        id: 1,
        title: "Thread 1",
        content: "This is the content of thread 1",
    },
    {
        id: 2,
        title: "Thread 2",
        content: "This is the content of thread 2",
    },
    {
        id: 3,
        title: "Thread 3",
        content: "This is the content of thread 3",
    },
]

export async function GET() {
    const response = {
        body: threads,
        status: 200,
    };

    return NextResponse.json(response);
}