import React from "react";
const experienceData = [
  {
    Company: "Myoo.io",
    Years: "2022 - 2024",
    Logo: "url",
    Position: "Chief Technology Officer",
    Tech1: "Flutter",
    Tech2: "Supabase",
    Tech3: "Python",
    Item1: "In charge of building and mantaining the project infraestructure",
    Item2: "Responsible for building and managing a dev team",
    Item3: "Main software developer",
  },
  {
    Company: "MyHealp/TracMove",
    Years: "2022 - 2024",
    Logo: "url",
    Position: "Chief Technology Officer",
    Tech1: "Flutter",
    Tech2: "Supabase",
    Tech3: "Python",
    Item1: "In charge of building and mantaining the project infraestructure",
    Item2: "Responsible for building and managing a dev team",
    Item3: "Main software developer",
  },
  {
    Company: "GourmetFuel",
    Years: "2022 - 2024",
    Logo: "url",
    Position: "Chief Technology Officer",
    Tech1: "Flutter",
    Tech2: "Supabase",
    Tech3: "Python",
    Item1: "In charge of building and mantaining the project infraestructure",
    Item2: "Responsible for building and managing a dev team",
    Item3: "Main software developer",
  },
];

const ExperienceSection = () => {
  experienceData.map((experienceData, index) => {
    return (
      <p key={`${experienceData.Company}_{anObjectMapped.email}`}>
        {experienceData.Company} - {experienceData.Years}
      </p>
    );
  });
};

export default ExperienceSection;
