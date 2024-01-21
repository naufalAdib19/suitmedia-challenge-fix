import React from "react";

type LazyCardType = {
  src: string;
  alt: string;
};

const LazyCardImage = ({ props }: { props: LazyCardType }) => {
  return (
    <>
      <img src={props.src} alt={props.alt} className="w-full h-[170px]" />
    </>
  );
};

export default LazyCardImage;
