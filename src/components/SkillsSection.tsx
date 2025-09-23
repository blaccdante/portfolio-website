import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { getStaggerDelay } from "@/utils";
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
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto px-2">
          Technologies and tools I work with, with proficiency levels
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: getStaggerDelay(categoryIndex), duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg text-center sm:text-left">
              {categoryDisplayNames[category] || category}
            </h3>
            <div className="space-y-2 sm:space-y-3">
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
                  <span className="text-white/90 text-xs sm:text-sm font-medium flex-1 mr-3">{skill.name}</span>
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          level <= skill.proficiency
                            ? 'bg-gradient-to-r from-purple-400 to-pink-600 shadow-sm'
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
