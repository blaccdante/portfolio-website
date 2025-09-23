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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 p-4 sm:p-5 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 touch-manipulation"
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-white font-semibold text-base sm:text-lg group-hover:text-purple-300 transition-colors line-clamp-2 flex-1 mr-2">
              {repo.name}
            </h3>
            <ExternalLink className="text-white/50 group-hover:text-white/70 transition-colors flex-shrink-0" size={16} />
          </div>
          {repo.description && (
            <p className="text-white/70 mt-2 text-sm leading-relaxed line-clamp-3">{repo.description}</p>
          )}
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs text-white/60 mt-3 sm:mt-4">
            {repo.language && (
              <span className="bg-white/10 px-2 py-1 rounded-full">{repo.language}</span>
            )}
            <span className="flex items-center gap-1">
              <span>★</span> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <span>⑂</span> {repo.forks_count}
            </span>
          </div>
          {repo.topics && repo.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {repo.topics.slice(0, 4).map((t) => (
                <span key={t} className="text-[10px] sm:text-[11px] px-2 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white/70 border border-white/10">
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