import Image from "next/image";

export default function TabContent({ expData, activeTab }) {
  if (activeTab !== 5) {
    return (
      <div className="space-y-6 w-full max-w-3xl mx-auto px-6 fade-in-up">
        <div className="glass-strong p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-row items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 p-2 shrink-0">
                <img
                  src={expData[activeTab].logo}
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row flex-wrap items-baseline gap-1">
                  <p className="text-white font-medium">
                    {expData[activeTab].position}
                  </p>
                  <p className="text-gray-400">@</p>
                  <p className="font-bold text-primary">
                    {expData[activeTab].company}
                  </p>
                </div>
                <p className="text-sm text-gray-400">{expData[activeTab].years}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-300 mb-6">
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1 text-xs">●</span>
              <span>{expData[activeTab].item1}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1 text-xs">●</span>
              <span>{expData[activeTab].item2}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1 text-xs">●</span>
              <span>{expData[activeTab].item3}</span>
            </p>
          </div>

          {/*      <div className="flex flex-row gap-6 items-center justify-center pt-4 border-t border-white/10">
            <div className="relative w-10 h-10 hover:scale-110 transition-transform duration-300">
              <img
                src={expData[activeTab].tech1}
                alt="Technology 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative w-10 h-10 hover:scale-110 transition-transform duration-300">
              <img
                src={expData[activeTab].tech2}
                alt="Technology 2"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative w-10 h-10 hover:scale-110 transition-transform duration-300">
              <img
                src={expData[activeTab].tech3}
                alt="Technology 3"
                className="w-full h-full object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto px-6 fade-in-up">
      <div className="glass-strong p-6 rounded-2xl border border-white/10">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-4 mb-6">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 p-2">
              <img
                src={expData[activeTab].logo}
                alt="Misc Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="uppercase font-bold text-white">Other Jobs</p>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex flex-row items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <div className="relative w-8 h-8 shrink-0">
              <img
                src={expData[activeTab].image1}
                alt="Job 1"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-300">{expData[activeTab].item1}</p>
          </div>

          <div className="flex flex-row items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <div className="relative w-8 h-8 shrink-0">
              <img
                src={expData[activeTab].image2}
                alt="Job 2"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-300">{expData[activeTab].item2}</p>
          </div>

          <div className="flex flex-row items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <div className="relative w-8 h-8 shrink-0">
              <img
                src={expData[activeTab].image3}
                alt="Job 3"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-300">{expData[activeTab].item3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
