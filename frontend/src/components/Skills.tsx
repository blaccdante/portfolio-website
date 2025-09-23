import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Skill {
  name: string
  level: number
  icon: string
  color: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: '⚛️', color: 'from-cyan-400 to-blue-600' },
        { name: 'TypeScript', level: 90, icon: '📘', color: 'from-blue-500 to-blue-700' },
        { name: 'Next.js', level: 88, icon: '▲', color: 'from-gray-700 to-gray-900' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨', color: 'from-cyan-400 to-teal-600' },
        { name: 'Vue.js', level: 75, icon: '💚', color: 'from-green-400 to-green-600' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢', color: 'from-green-400 to-green-600' },
        { name: 'Express', level: 88, icon: '🚀', color: 'from-gray-500 to-gray-700' },
        { name: 'Python', level: 82, icon: '🐍', color: 'from-blue-400 to-yellow-400' },
        { name: 'PostgreSQL', level: 85, icon: '🐘', color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', level: 78, icon: '🍃', color: 'from-green-500 to-green-700' },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 93, icon: '📚', color: 'from-orange-400 to-red-500' },
        { name: 'Docker', level: 80, icon: '🐳', color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 75, icon: '☁️', color: 'from-yellow-400 to-orange-500' },
        { name: 'CI/CD', level: 78, icon: '⚙️', color: 'from-purple-400 to-purple-600' },
        { name: 'Linux', level: 85, icon: '🐧', color: 'from-gray-600 to-gray-800' },
      ]
    }
  ]

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            setAnimatedSkills(prev => new Set(prev).add(skill.name))
          })
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.1 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={
                          animatedSkills.has(skill.name) 
                            ? { width: `${skill.level}%` } 
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                      
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={
                          animatedSkills.has(skill.name)
                            ? { x: '100%' }
                            : { x: '-100%' }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Code Commits', value: '2000+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold gradient-text mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills