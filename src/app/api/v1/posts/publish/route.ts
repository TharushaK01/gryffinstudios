import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    // 1. Check Authorization Header
    const authHeader = req.headers.get("authorization");
    const secretKey = process.env.BLOG_AUTOMATION_SECRET;

    if (!authHeader || authHeader !== `Bearer ${secretKey}`) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 },
      );
    }

    // 2. Parse payload sent by your AI Agent
    const body = await req.json();
    const { title, slug, content, excerpt, coverImage } = body;

    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug, and content" },
        { status: 400 },
      );
    }

    // 3. Save as local MDX file
    const blogsDirectory = path.join(process.cwd(), "content/blogs");

    // Ensure the folder exists
    if (!fs.existsSync(blogsDirectory)) {
      fs.mkdirSync(blogsDirectory, { recursive: true });
    }

    const filePath = path.join(blogsDirectory, `${slug}.mdx`);

    const mdxContent = `---
title: "${title}"
date: "${new Date().toISOString()}"
excerpt: "${excerpt || ""}"
coverImage: "${coverImage || ""}"
---

${content}
`;

    fs.writeFileSync(filePath, mdxContent, "utf8");

    return NextResponse.json(
      { success: true, message: "Blog saved to MDX successfully", slug },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
