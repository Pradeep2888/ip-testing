import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        // Get the user's IP address from the headers or connection
        const ip = request.headers.get('x-forwarded-for') || request.connection.remoteAddress;
           console.log(ip)
        return NextResponse.json({ success: true, message: 'IP saved', ip });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}
