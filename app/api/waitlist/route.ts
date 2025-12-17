import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as Payload | null;
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (name.length < 2 || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid name or email." },
        { status: 400 }
      );
    }

    const endpoint = process.env.GOOGLE_SHEETS_WEBAPP_URL;
    if (!endpoint) {
      return NextResponse.json(
        { ok: false, error: "Server is not configured (missing endpoint)." },
        { status: 500 }
      );
    }

    const secret = process.env.WAITLIST_SECRET;
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        createdAt: new Date().toISOString(),
        source: "ochi-landing",
        ...(secret ? { secret } : {}),
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: `Sheets error (${res.status}): ${text}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
