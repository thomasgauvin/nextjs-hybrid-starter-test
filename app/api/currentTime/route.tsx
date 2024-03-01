import { NextResponse } from 'next/server';
import { headers } from 'next/headers'

export async function GET() { 
    const currentTime = new Date().toLocaleTimeString('en-US');
    const headersList = headers();
    // const clientPrincipal = atob(headersList.get('x-ms-client-principal') || '');

    return NextResponse.json({ 
        message: `Hello from the API! The current time is ${currentTime}.`
    });
}