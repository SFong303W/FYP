"use client";
import OtpInput from "@/components/OtpInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit numeric code
  };

  // const nodemailer = require("nodemailer");

  // const sendVerificationEmail = async (email: any, code: any) => {
  //   const transporter = nodemailer.createTransport({
  //     service: "Gmail", // or use another email service
  //     auth: {
  //       user: "your-email@gmail.com",
  //       pass: "your-email-password", // Use environment variables for security
  //     },
  //   });
  
  //   const mailOptions = {
  //     from: "your-email@gmail.com",
  //     to: email,
  //     subject: "Your Verification Code",
  //     text: `Your verification code is: ${code}`,
  //   };
  
  //   try {
  //     await transporter.sendMail(mailOptions);
  //     console.log("Email sent successfully!");
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      console.log("Response:"+data?.error);
      if (res.ok) {
        setMessage("✅ Login successful!");
        // 可以在这里跳转页面，比如 dashboard
        router.push('/community')
      } else {
        setMessage("❌ " + data.error);
      }
    } catch (err) {
      setMessage("⚠️ Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4" onSubmit={generateVerificationCode}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <OtpInput/>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
          {message && <p className="text-center mt-4 text-sm text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
}
