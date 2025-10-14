import { ChevronDown } from "lucide-react";

export default function History() {
  return (
    <div className="">
      <div className="w-full h-20 flex justify-center items-center">
        <h1 className="font-bold text-[20px]">Statistic</h1>
      </div>
      <div className="p-4">
        <p className="text-gray-400 text-sm">Total moved this year</p>
        <p className="text-3xl font-bold mt-1">$9,305.02</p>
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-[14px] font-bold">Overview</h2>
          <div className="flex">
          <p className="text-[14px] font-bold mr-2">Month </p>
          <ChevronDown/>
          </div>
        </div>
      </div>
    </div>
  );
}
