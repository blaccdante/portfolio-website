import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { getSkillColor, getStaggerDelay } from "@/utils";
import type { Skill } from "@/types/portfolio";

export function SkillsSection() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const categoryName = skill.category.charAt(0).toUpperCase() + skill.category.slice(1);
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryDisplayNames: Record<string, string> = {
    Frontend: "Frontend",
    Backend: "Backend", 
    Database: "Databases",
    Devops: "DevOps & Cloud",
    Web3: "Web3 & Blockchain",
    Mobile: "Mobile",
    Other: "Creative & Animation"
  };

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with, with proficiency levels
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: getStaggerDelay(categoryIndex), duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-white font-semibold mb-4 text-lg">
              {categoryDisplayNames[category] || category}
            </h3>
            <div className="space-y-3">
              {categorySkills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: getStaggerDelay(categoryIndex) + getStaggerDelay(skillIndex, 0.05), 
                    duration: 0.4 
                  }}
                  className="flex items-center justify-between"
                >
                  <span className="text-white/90 text-sm font-medium">{skill.name}</span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          level <= skill.proficiency
                            ? 'bg-gradient-to-r from-purple-400 to-pink-600'
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
