import React from "react";
import Section from "components/Section";
import NoName from "components/NoName";

function HeroSection2(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="absolute inset-x-0 bottom-0 text-blue-700 text-opacity-50" />
      <div className="relative container">
        <div className="text-center">
          <NoName
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
          />
        </div>
        <div className="pb-4 md:pb-0" />
      </div>
      <div className="relative container">
        <div className="text-center" />
        <div className="pb-4 md:pb-0" />
      </div>
    </Section>
  );
}

export default HeroSection2;
