import { NextResponse } from "next/server";

const GITHUB_USER = "blaccdante";

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=12&sort=updated`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "portfolio-app",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: `GitHub error ${res.status}` }, { status: res.status });
    }

    const repos = await res.json();

    const simplified = repos
      .filter((r: any) => !r.fork)
      .map((r: any) => ({
        id: r.id,
        name: r.name,
        html_url: r.html_url,
        description: r.description,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        language: r.language,
        topics: r.topics ?? [],
      }));

    return NextResponse.json(simplified, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Unknown error" }, { status: 500 });
  }
}