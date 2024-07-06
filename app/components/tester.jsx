import React from "react";
import Image from "next/image";
const TestApp = (index) => {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Tab 1"
      />
      <div role="tabpanel" className="tab-content p-10">
        Tab content 1
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Tab 2"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-10">
        Tab content
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Tab 3"
      />
      <div role="tabpanel" className="tab-content ">
        <div className="">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image
                className=" object-scale-down max-h-full m-auto "
                src="https://dcoromina.s-ul.eu/career/ZJpdRc5J"
                width={50}
                height={50}
                alt="image of author"
              />
              <div className="flex flex-col">
                <p>Position</p>
                <p>Year</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <ul>- Mounted and repaired different systems</ul>
            <ul>- Helped installing multiple servers</ul>
            <ul>- Developed basic webs</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestApp;
