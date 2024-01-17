import React from "react";
import Section from "components/Section";

function Footer(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
      className={props.sticky && "mt-auto"}
    >
      <footer className="container">
        <div className="flex flex-col md:flex-row-reverse md:justify-between space-y-6 md:space-y-0 text-center md:text-left text-sm lg:text-base">
          <div className="text-gray-600">
            <span className="font-medium">
              © 2024 Contego Spa Designs, All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
