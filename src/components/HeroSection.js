import React from "react";
import Section from "components/Section";
import NoName from "components/NoName";

function HeroSection(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container flex flex-col lg:flex-row-reverse space-y-3 lg:space-y-0 text-center lg:text-left">
        <div className="lg:w-1/2 lg:self-center">
          <NoName
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
          />
        </div>
        <div className="lg:w-1/2 lg:mr-0 lg:flex lg:justify-center lg:items-center pb-12 md:pb-0">
          <div className="relative">
            <div className="absolute pattern-dots text-blue-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3" />
            <div className="absolute pattern-dots text-blue-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3" />
            <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12" />
            <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3" />
            <iframe
              className="w-full h-96 lg:w-96 lg:h-[320px] relative object-cover rounded-lg mx-auto shadow-lg"
              src="https://www.youtube.com/embed/owMKb4xWjuI?si=6dA4tSEl5qXLWPAy"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
