import React from "react";
import Image from "next/image";
const BookList = ({ books }) => {
  return (
    <div className="">
      <div
        role="tablist"
        className="tabs tabs-xs sm:tabs-sm md:tabs-md lg:tabs-md xl:tabs-md w-fit  "
      >
        {/* Tab1 */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
          aria-label="Myoo.io"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10 ">
          <div className="flex flex-col items-start space-y-5 w-full text-small">
            <div className="flex flex-row justify-start space-x-5">
              <Image
                className=" object-scale-down max-h-full m-auto "
                src="https://dcoromina.s-ul.eu/career/UaOSuGDu"
                width={40}
                height={40}
                alt="image of author"
              />
              <div className="flex flex-col w-96 ">
                <div className="flex flex-row ">
                  <p>Chief Technology Officer @ </p>{" "}
                  <p className="text-orange-400 font-bold">Myoo.io</p>
                </div>
                <div className="">2022-present</div>
              </div>
            </div>
            <div className=" w-full">
              <ul>
                - In charge of building and mantaining the project
                infraestructure
              </ul>
              <ul>- Responsible for building and managing a dev team</ul>
              <ul>- Main software developer</ul>
            </div>
          </div>
        </div>
        {/* Tab2 */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
          aria-label="MyHealp"
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="flex flex-col items-start space-y-5 w-full text-small">
            <div className="flex flex-row justify-start space-x-5">
              <Image
                className=" object-scale-down max-h-full m-auto "
                src="https://dcoromina.s-ul.eu/career/vuc1n8GY"
                width={50}
                height={50}
                alt="image of author"
              />
              <div className="flex flex-col w-96 ">
                <div className="flex flex-row text-wrap">
                  <p>Developer @ </p>{" "}
                  <p className="text-orange-400 font-bold">MyHealp</p>
                </div>
                <div className="">2020-2022</div>
              </div>
            </div>
            <div className=" w-full">
              <ul>
                - Backend development using PHP and SQL of a GPS tracking
                project
              </ul>
              <ul>- Developer of a health and fitness chatbot</ul>
              <ul>- Full-stack developer</ul>
            </div>
          </div>
        </div>

        {/* Tab3 GOurmetfuel*/}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
          aria-label="GourmetFuel"
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="flex flex-col items-start space-y-5 w-full text-small">
            <div className="flex flex-row justify-start space-x-5">
              <Image
                className=" object-scale-down max-h-full m-auto "
                src="https://dcoromina.s-ul.eu/career/rU1aDGKh"
                width={50}
                height={50}
                alt="image of author"
              />
              <div className="flex flex-col w-96 ">
                <div className="flex flex-row text-wrap">
                  <p>Web Developer @ </p>{" "}
                  <a className="text-orange-400 font-bold" href="google.com">
                    GourmetFuel
                  </a>
                </div>
                <div className="">2019</div>
              </div>
            </div>
            <div className=" w-full">
              <ul>
                - Updated the website from an old architecture to a new one
              </ul>
              <ul>- Developed multiple features to help improve the site</ul>
              <ul>- Part of my Erasmus+ project</ul>
            </div>
          </div>
        </div>
        {/* Tab4 */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
          aria-label="SiOlot"
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="flex flex-col items-start space-y-5 w-full text-small">
            <div className="flex flex-row justify-start space-x-5">
              <Image
                className=" object-scale-down max-h-full m-auto "
                src="https://dcoromina.s-ul.eu/career/ZJpdRc5J"
                width={50}
                height={50}
                alt="image of author"
              />
              <div className="flex flex-col w-96 ">
                <div className="flex flex-row text-wrap">
                  <p>SysAdmin @ </p>{" "}
                  <p className="text-orange-400 font-bold">SiOlot</p>
                </div>
                <div className="">2017</div>
              </div>
            </div>
            <div className=" w-full">
              <ul>- Mounted and repaired different systems</ul>
              <ul>- Helped installing multiple servers </ul>
              <ul>- Developed basic webs</ul>
            </div>
          </div>
        </div>
        {/* Tab5 */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab checked:text-orange-500 checked:font-bold hover:text-orange-500 checked:border-b-2 font-bold "
          aria-label="Misc."
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="flex flex-col items-start space-y-5 w-full text-small">
            <div className="flex flex-row justify-start space-x-5">
              <Image
                className=" object-scale-down max-h-full m-auto "
                src="https://dcoromina.s-ul.eu/career/N8jd9elH"
                width={50}
                height={50}
                alt="image of author"
              />
              <div className="flex flex-col w-96 ">
                <div className="flex flex-row text-wrap">
                  <p>Chief Technology Officer @ </p>{" "}
                  <p className="text-orange-400 font-bold">Myoo.io</p>
                </div>
                <div className="">2022-present</div>
              </div>
            </div>
            <div>
              <ul>
                - In charge of building and mantaining the project
                infraestructure
              </ul>
              <ul>- Responsible for building and managing a dev team</ul>
              <ul>- Main software developer</ul>
            </div>
          </div>
        </div>
        {/* / Career menu */}
      </div>
    </div>
  );
};

const ExpApp = (index) => {
  const books = [
    {
      id: 1,
      company: "Myoo.io",
      years: "2022 - 2024",
      logo: "https://dcoromina.s-ul.eu/career/UaOSuGDu",
      position: "Chief Technology Officer",
      tech1: "Flutter",
      tech2: "Supabase",
      tech3: "Python",
      item1: "In charge of building and mantaining the project infraestructure",
      item2: "Responsible for building and managing a dev team",
      item3: "Main software developer",
    },
    {
      id: 2,
      company: "siolot",
      years: "2022 - 2024",
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
  return <BookList books={books} />;
};
export default ExpApp;
