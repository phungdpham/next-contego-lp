import React, { useState } from "react";
import Link from "next/link";
import {
  CodeBracketIcon,
  SwatchIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Section from "components/Section";
import FeatureIcon from "components/FeatureIcon";
import Logo from "../images/logo.png"

function Navbar(props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const classes = {
    navLink:
      "font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-blue-500 py-6",
    navLinkIcon:
      "opacity-50 transform transition duration-200 ease-out group-hover:rotate-180 inline-block w-4 h-4",
    dropdown: {
      base: "absolute top-19 pt-1 z-10 invisible group-hover:visible transform transition duration-800 ease-in opacity-0 group-hover:opacity-100",
      left: "right-0",
      center: "left-1/2 -translate-x-1/2",
      right: "left-0",
      normal: "w-48",
      large: "w-96",
      inner:
        "bg-white shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden",
      title:
        "text-xs uppercase font-semibold tracking-wider text-blue-800 mb-5",
      link: "text-gray-600 hover:text-blue-600 font-medium text-sm flex items-center space-x-2",
      icon: "opacity-25 inline-block w-5 h-5",
      feature:
        "p-3 rounded-xl flex items-center space-x-4 text-gray-600 font-medium text-sm",
      featureName: "font-semibold mb-1",
      featureDescription: "opacity-75",
    },
    accountDropdown: {
      base: "absolute right-0 origin-top-right mt-2 w-48 z-10",
      inner:
        "bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100 shadow-xl rounded",
      link: "flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700",
      linkActive: "text-gray-700 bg-gray-100",
      linkInactive:
        "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700",
      icon: "opacity-50 inline-block w-5 h-5",
    },
  };

  return (
    <Section bgColor={props.bgColor}>
      <div className="container py-4">
        <div className="flex justify-between">
          <Link href="/">
            <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-red-700 hover:text-red-400">
              <div
                className="opacity-75 hi-outline hi-cube-transparent inline-block w-36 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Image src={Logo} alt=""/>
                {/* <img 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                /> */}
              </div>
              {/* <span>Contégo Spa Designs</span> */}
            </a>
          </Link>
          <button className="bg-red-700 px-2 py-2 rounded-lg">
        <a
          href="tel:7148958865"
          className="flex gap-2 items-center text-white text-base"
        >
          {/* <img src={phoneIcon} alt="" className="text-white"/> */}
          <div className="animate-bounce">
          <svg
            className="h-6 w-6 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{' '}
            <path d="M15 7a2 2 0 0 1 2 2" /> <path d="M15 3a6 6 0 0 1 6 6" />
          </svg>
          </div>
          714.895.8865
        </a>
      </button>
        </div>
        {/* <div className={"lg:hidden" + (!mobileNavOpen ? " hidden" : "")}>
          <div className="grid grid-cols-1 sm:grid-cols-3 border rounded-xl my-5">
            <div className="col-span-2 p-3 space-y-6">
              <div className="px-3 pt-3">
                <h4 className={`${classes.dropdown.title}`}>
                  Featured Products
                </h4>
              </div>
              <nav className="flex flex-col space-y-1">
                <Link href="/">
                  <a
                    className={`hover:text-blue-600 hover:bg-blue-50 ${classes.dropdown.feature}`}
                  >
                    <div>
                      <FeatureIcon color="blue">
                        <CodeBracketIcon />
                      </FeatureIcon>
                    </div>
                    <div>
                      <h5 className={`${classes.dropdown.featureName}`}>
                        HTML Editor
                      </h5>
                      <p className={`${classes.dropdown.featureDescription}`}>
                        Write and manipulate your markup directly in your
                        browser
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className={`hover:text-emerald-600 hover:bg-emerald-50 ${classes.dropdown.feature}`}
                  >
                    <div>
                      <FeatureIcon color="emerald">
                        <SwatchIcon />
                      </FeatureIcon>
                    </div>
                    <div>
                      <h5 className={`${classes.dropdown.featureName}`}>
                        CSS Editor
                      </h5>
                      <p className={`${classes.dropdown.featureDescription}`}>
                        Style your markup code with smart tools supporting Sass
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className={`hover:text-orange-600 hover:bg-orange-50 ${classes.dropdown.feature}`}
                  >
                    <div>
                      <FeatureIcon color="orange">
                        <PuzzlePieceIcon />
                      </FeatureIcon>
                    </div>
                    <div>
                      <h5 className={`${classes.dropdown.featureName}`}>
                        Web Page Builder
                      </h5>
                      <p className={`${classes.dropdown.featureDescription}`}>
                        Explore all available components and build your website
                      </p>
                    </div>
                  </a>
                </Link>
              </nav>
            </div>
            <div className="p-6 space-y-6">
              <h4 className={`${classes.dropdown.title}`}>Learn</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/">
                  <a className={`${classes.dropdown.link}`}>Resource Center</a>
                </Link>
                <Link href="/">
                  <a className={`${classes.dropdown.link}`}>Developer</a>
                </Link>
                <Link href="/">
                  <a className={`${classes.dropdown.link}`}>User Guides</a>
                </Link>
              </nav>
              <h4 className={`${classes.dropdown.title}`}>More</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/about">
                  <a className={`${classes.dropdown.link}`}>About</a>
                </Link>
                <Link href="/pricing">
                  <a className={`${classes.dropdown.link}`}>Pricing</a>
                </Link>
                <a
                  className={`${classes.dropdown.link}`}
                  href="https://app.mysite.com/auth/signin"
                >
                  Sign in
                </a>
              </nav>
            </div>
          </div>
        </div> */}
      </div>
    </Section>
  );
}

export default Navbar;
