import Image from "next/image";

export default function TabContent({ expData, activeTab }) {
  if (activeTab !== 5) {
    return (
      <div className="  space-y-5 w-11/12 flex flex-col justify-center items-center px-6">
        <div className="flex flex-col items-start justify-center w-fit">
          <div className="flex flex-row items-center gap-3  ">
            <img
              src={expData[activeTab].logo}
              alt="/"
              className="w-10 h-auto max-w-10"
            />
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className=":text-orange-500">
                  {expData[activeTab].position + " @"}
                </p>
                <p className="font-bold text-orange-500">
                  {" "}
                  {expData[activeTab].company}{" "}
                </p>
              </div>
              <p> {expData[activeTab].years}</p>
            </div>
          </div>
        </div>
        <div className="space-y-1 text-sm w-fit">
          <p>{expData[activeTab].item1}</p>
          <p>{expData[activeTab].item2}</p>
          <p>{expData[activeTab].item3}</p>
        </div>
        <div className=" flex flex-row space-x-10 items-center justify-center">
          <img
            src={expData[activeTab].tech1}
            alt="/"
            className="w-10 h-auto max-w-10"
          />
          <img
            src={expData[activeTab].tech2}
            alt="/"
            className="w-10 h-auto max-w-10"
          />
          <img
            src={expData[activeTab].tech3}
            alt="/"
            className="w-10 h-auto max-w-10"
          />
        </div>
      </div>
    );
  }
  return (
    <div className=" space-y-5 w-11/12 ">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-3">
          <img
            src={expData[activeTab].logo}
            alt="/"
            className="w-10 h-auto max-w-10"
          />

          <p className=" uppercase font-bold">Other Jobs</p>
        </div>
      </div>
      <div className="space-y-2 text-sm ">
        <div className="flex flex-row items-center gap-5">
          <img
            src={expData[activeTab].image1}
            alt="/"
            className="w-7 h-auto max-w-10"
          />

          <p className="  ">{expData[activeTab].item1}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <img
            src={expData[activeTab].image2}
            alt="/"
            className="w-9 h-auto max-w-10"
          />

          <p className="  ">{expData[activeTab].item2}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <img
            src={expData[activeTab].image3}
            alt="/"
            className="w-9 h-auto max-w-10"
          />

          <p className="  ">{expData[activeTab].item3}</p>
        </div>
      </div>
    </div>
  );
}
