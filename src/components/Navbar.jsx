import Link from "next/link";
import React from "react";

const navOptions = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

const Navbar = ({activeProp}) => {
  const [active, setActive] = React.useState( activeProp ? activeProp : "Home");

  return (
    <div className="w-full flex items-center justify-between px-[4rem] pt-[2rem]">
      <div className="flex items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 scale-75"
        >
          <path
            d="M18 0L22.8616 13.1384L36 18L22.8616 22.8616L18 36L13.1384 22.8616L0 18L13.1384 13.1384L18 0Z"
            fill="white"
            style={{ fill: "white", fillOpacity: 1 }}
          />
        </svg>
        <h1 className="gilroy">SAMEER.GUPTA</h1>
      </div>
      <div className="fixed z-[100] left-[50%] translate-x-[-50%] rounded-full bg-[#232323] py-[1rem] px-[1rem] flex justify-between gilroy text-[0.85rem]">
        {navOptions.map((option, index) => {
          return (
            <>
              {active === option.name ? (
                <Link
                  href={option.link}
                  className="flex px-[1.75rem] items-center"
                >
                  <svg
                    width="6"
                    height="7"
                    viewBox="0 0 6 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <circle
                      cx="3"
                      cy="3.5"
                      r="3"
                      fill="white"
                      //   style="fill:white;fill-opacity:1;"
                    />
                  </svg>
                  <h2>{option.name}</h2>
                </Link>
              ) : (
                <Link
                  href={option.link}
                  className="flex px-[1.75rem] text-[#8E8E8F]"
                  onClick={() => setActive(option.name)}
                >
                  <h2>{option.name}</h2>
                </Link>
              )}
            </>
          );
        })}
      </div>
      <div className="flex justify-between items-center bg-white py-[1rem] px-[2rem] rounded-full">
        <h1 className="text-black gilroy text-[0.8rem] mr-4">Let&apos;s Chat</h1>
        <svg
          width="6"
          height="7"
          viewBox="0 0 6 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="3"
            cy="3.5"
            r="3"
            fill="#1D1D1F"
            // style="fill:#1D1D1F;fill:color(display-p3 0.1137 0.1137 0.1216);fill-opacity:1;"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
