// app/api/login/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    (await cookies()).set("user_token", "12345", {
        httpOnly: true,
        path: '/',
      });
      
  try {
    const { email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("fyp_db");
    const users = db.collection("users");

    const user = await users.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.password !== password) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", name: user.name });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
