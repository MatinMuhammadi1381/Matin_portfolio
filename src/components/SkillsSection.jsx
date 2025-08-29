import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  /*frontend*/
  { name: "Html/CSS", level: 100, category: "FrontEnd" },
  { name: "React.js", level: 90, category: "FrontEnd" },
  { name: "JavaScript", level: 80, category: "FrontEnd" },
  { name: "TypeScript", level: 50, category: "FrontEnd" },
  { name: "TailwindCSS", level: 80, category: "FrontEnd" },
  { name: "Next.js", level: 40, category: "FrontEnd" },
  { name: "Material Ui", level: 60, category: "FrontEnd" },

  /*Python*/

  { name: "Python", level: 95, category: "BackEnd" },
  { name: "Django", level: 85, category: "BackEnd" },
  { name: "Flask", level: 70, category: "BackEnd" },
  { name: "FastAPI", level: 60, category: "BackEnd" },
  { name: "Django REST Framework", level: 75, category: "BackEnd" },
  { name: "AWS", level: 65, category: "BackEnd" },
  { name: "Docker", level: 70, category: "BackEnd" },

  /* Dart / Flutter*/
  { name: "Dart", level: 80, category: "Android" },
  { name: "Flutter", level: 70, category: "Android" },
  { name: "Dart SDK", level: 90, category: "Android" },
  { name: "Flutter SDK", level: 80, category: "Android" },

  /* Tools*/
  { name: "Git", level: 90, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Terminal", level: 85, category: "Tools" },
  { name: "GitHub", level: 90, category: "Tools" },
  { name: "Slack", level: 80, category: "Tools" },
  { name: "Trello", level: 75, category: "Tools" },
];

const categories = ["All", "FrontEnd", "BackEnd", "Android", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className=" py-24 px-4 relative bg-secondary/30">
      <div className=" container mx-auto max-w-5xl">
        <h2 className=" text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className=" text-primary">مهارت های</span> من
        </h2>

        <div className=" flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              key={key}
            >
              {category}
            </button>
          ))}
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className=" bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className=" text-left mb-4">
                <h3 className=" font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className=" w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className=" bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className=" text-right mt-1">
                <span className=" text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
