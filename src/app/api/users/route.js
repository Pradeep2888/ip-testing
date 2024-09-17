// api/handler.js
import { NextResponse } from 'next/server';
import { initializeConnection } from '../../../helper/sqldb'; // Adjust the path accordingly

export async function POST(request) {
    try {
        // Ensure the connection is initialized
        const connection = await initializeConnection();

        // Parse the request body
        const { name, email, password } = await request.json();

        // Execute the SQL query with parameterized values
        await connection.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );

        // Respond with success
        return NextResponse.json({ success: true, message: 'Item created' });
    } catch (error) {
        // Respond with error
        return NextResponse.json({ success: false, error: error.message });
    }
}
