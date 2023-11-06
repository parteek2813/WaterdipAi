import React from "react";

interface HeadingProps {
  heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return <div className="heading">{heading}</div>;
};

export default Heading;
