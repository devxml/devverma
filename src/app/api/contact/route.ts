import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function validate(data: ContactPayload): string | null {
  if (!data.name?.trim() || data.name.trim().length < 2) {
    return "Invalid name";
  }
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "Invalid email";
  }
  if (!data.message?.trim() || data.message.trim().length < 10) {
    return "Invalid message";
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const error = validate(body);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log the submission for development purposes
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
