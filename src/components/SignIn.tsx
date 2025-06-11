import { useState } from "react";
import Google from "../images/Google.png";
import Facebook from "../images/Facebook.png";
import Apple from "../images/Apple.png";
import ThemeToggle from "../components/ThemeToggle.tsx";

const SignIn = () => {
  const [sign, setSign] = useState(true);
  const signState1 = () => {
    setSign(true);
  };
  const signState2 = () => {
    setSign(false);
  };
  const signInForm = [{ title: "Email Address", icon: "Mail" }];
  const signUpForm = [
    { title: "Name", icon: "User" },
    { title: "Email Address", icon: "Mail" },
    { title: "Password", icon: "KeyRound" },
  ];
  return (
    <>
      {/* CONTAINER */}
      <div className="w-[95%]  md:w-[130vh] relative bg-container flex rounded-md overflow-hidden shadow-xl">
        {/* lEFT-CONTAINER */}
        <div className="h-inherit flex-1 flex flex-col items-center justify-center">
          {/* THEME TOGGLE */}
          <ThemeToggle />
          {/* HEADER */}
          <div className="py-9">
            <h1 className="text-lg font-medium text-primary">
              SRF Internship 2025
            </h1>
          </div>

          {/* MAIN */}
          <div className="w-full flex flex-col items-center my-10">
            {/* TOP INTRO */}
            <div className="text-center">
              <h1 className="text-2xl text-primary font-semibold">
                Welcome Back
              </h1>
              <p className="text-secondary text-xs">
                Welcome Back ,Please enter Your details
              </p>
            </div>

            {/* SIGN IN STATE */}
            <div className="h-12 w-[60%] bg-background mt-5 rounded-xl flex items-center relative shadow-lg">
              {/* SIGN IN */}
              <div className="h-full flex-1 flex justify-center items-center">
                <p
                  className={` text-sm z-10 font-medium cursor-pointer ${
                    sign === true ? "text-primary opacity-70" : "text-ternary"
                  }`}
                  onClick={signState1}
                >
                  Sign In
                </p>
              </div>

              {/* SIGN UP */}
              <div className="h-full flex-1 flex justify-center items-center">
                <p
                  className={` text-sm z-10 font-medium cursor-pointer ${
                    sign === false ? "text-primary opactiy-70" : "text-ternary"
                  }`}
                  onClick={signState2}
                >
                  Sign Up
                </p>
              </div>
              {/* BACKGROUND */}
              <div
                className={`h-[86%] w-[50%] bg-container rounded-lg absolute ${
                  sign === true ? "translate-x-[2%]" : "translate-x-[98%]"
                }`}
              ></div>
            </div>

            {/* MAIN FORM */}
            <form
              action="/"
              className="flex flex-col w-full items-center gap-3 mt-5"
            >
              {sign
                ? signInForm.map((item, index) => {
                    return (
                      <input
                        type="text"
                        key={index}
                        placeholder={item.title}
                        className="border-2 border-secondary h-13 text-sm font-medium text-primary opacity-70 w-[65%] px-10 rounded-xl placeholder:text-xs placeholder:text-ternary shadow-md"
                      />
                    );
                  })
                : signUpForm.map((item, index) => (
                    <input
                      type={item.icon === "KeyRound" ? "password" : "text"}
                      key={index}
                      placeholder={item.title}
                      className="border-2 border-secondary h-13 text-sm font-medium text-primary opacity-70 w-[65%] px-10 rounded-xl placeholder:text-xs placeholder:text-ternary shadow-md"
                    />
                  ))}
              <button className="bg-btn h-13 w-[65%] rounded-xl text-container text-sm shadow-3xl hover:shadow-lg hover:scale-95">
                Continue
              </button>
            </form>
            {/* LINKS */}
            <div className="w-full flex flex-col items-center ">
              {/* OTHERS SECTION */}
              <div className="w-full py-5 relative flex justify-center">
                <p className="absolute text-ternary text-xs font-middle text-center bg-container top-3 px-1">
                  Or Continue With
                </p>
                <hr className="border-background w-[60%] " />
              </div>

              {/* LINKS */}
              <div className="flex gap-5">
                <img
                  src={Google}
                  alt="google_img"
                  className="size-10 border-1 border-secondary rounded-full duration-75 hover:translate-y-[-5px]"
                />
                <img
                  src={Apple}
                  alt="Apple_img"
                  className="size-10 px-2.5 py-2 rounded-full bg-black duration-75 hover:translate-y-[-5px]"
                />
                <img
                  src={Facebook}
                  alt="Facebook_img"
                  className="size-10 hover:translate-y-[-5px] "
                />
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="">
            <p className="text-secondary text-[0.6rem] shadow-sky-500 text-center px-19 py-8">
              Join the millions of smart investors who trust us to manage their
              finances. Log in to access your personalized dashboard, track your
              portfolio performance, and make informed investment decisions
            </p>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className=" bg-blue-300 h-inherit md:flex-1 bg-linear-to-bl from-blue-700 to-blue-400"></div>
      </div>
    </>
  );
};

export default SignIn;
