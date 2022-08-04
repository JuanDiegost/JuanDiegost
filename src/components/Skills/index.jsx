import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import Skill from "../Skill";

export default function Skills() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/assets/skills.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  });

  return (
    <div>
      <div className="flex gap-5 justify-around items-center">
        <h3 class="p-5 p5 mx-auto text-xl font-semibold text-gray-900 dark:text-white">
          Skills
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-20 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-6 xl:grid-cols-10 dark:text-white sm:p-8">
        {data.map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            img={skill.svg}
            time={skill.time}
          />
        ))}
      </div>
    </div>
  );
}
