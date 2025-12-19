import { supabaseAdmin } from "@/lib/supabase-admin";
import { type NextRequest, NextResponse } from "next/server";

// Simple contact form data - only name and phone
interface ContactFormData {
  name: string;
  phone: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Name and phone number are required" },
        { status: 400 },
      );
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = body.phone.replace(/[\s\-\(\)]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number" },
        { status: 400 },
      );
    }

    // Save to Supabase using admin client (bypasses RLS)
    const { data, error } = await supabaseAdmin
      .from("contacts")
      .insert([
        {
          name: body.name.trim(),
          phone: body.phone.trim(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We will contact you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
