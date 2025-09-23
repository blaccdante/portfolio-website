"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
};

export function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to load repositories";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p className="text-white/80">Loading repositories...</p>;
  if (error) return <p className="text-red-300">Error: {error}</p>;
  if (!repos || repos.length === 0) return <p className="text-white/80">No repositories found.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors">
              {repo.name}
            </h3>
            <ExternalLink className="text-white/50" size={16} />
          </div>
          {repo.description && (
            <p className="text-white/70 mt-2 text-sm">{repo.description}</p>
          )}
          <div className="flex gap-4 text-xs text-white/60 mt-4">
            {repo.language && <span>{repo.language}</span>}
            <span>★ {repo.stargazers_count}</span>
            <span>⑂ {repo.forks_count}</span>
          </div>
          {repo.topics && repo.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {repo.topics.slice(0, 5).map((t) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/10 text-white/70">
                  {t}
                </span>
              ))}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}