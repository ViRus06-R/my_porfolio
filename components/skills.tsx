"use client"

import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'C++', level: 80 },
  { name: 'Mongo DB', level: 90 },
  { name: 'Next.js', level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

