import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, subject, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Log enquiry cleanly (hook up Resend / SMTP / CRM webhook here)
    console.log('[WHO PARK CONTACT ENQUIRY]', {
      fullName,
      email,
      phone: phone || 'N/A',
      subject,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
  }
}