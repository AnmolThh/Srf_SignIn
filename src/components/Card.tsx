interface cardProp {
  title: string;
  subtitle: string;
}

const Card = ({ title, subtitle }: cardProp) => {
  return (
    <>
      <div className="h-[60vh] w-[35vh] bg-container rounded-md shadow-lg flex flex-col p-2 gap-4 hover:scale-105 duration-100 hover:shadow-2xl">
        {/* IMAGE SECTION */}
        <div className="w-full flex-6 bg-gray-300 rounded-sm relative">
          <div className="absolute right-5 top-5 text-sm font-semibold text-gray-800 hover:cursor-pointer">
            Skip
          </div>
        </div>

        {/* INFO SECTION */}
        <div className="w-full flex-2">
          <h1 className="text-xl text-gray-800 font-semibold text-center px-5">
            {title}
          </h1>
          <p className="text-xs text-gray-600 text-center">{subtitle}</p>
        </div>

        {/* BUTTON */}
        <div className="w-full flex-1 bg-green-blue-400 ">
          <button className="h-full w-full text-white text-sm bg-black/90 rounded-md hover:shadow-2xl hover:cursor-pointer hover:bg-black/85 hover:translate-y-[-6px] hover:scale-101">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
