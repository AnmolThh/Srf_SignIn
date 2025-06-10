import { ArrowRight } from "lucide-react";

const Btn = () => {
  return (
    <>
      <button className="bg-white text-gray-900 font-semibold h-15 w-46 rounded-full relative flex items-center justify-center pl-12 shadow-lg">
        <ArrowRight className="text-white absolute p-2 left-3 bg-green-300 size-9 rounded-full" />
        Spin Now
      </button>
    </>
  );
};

export default Btn;
