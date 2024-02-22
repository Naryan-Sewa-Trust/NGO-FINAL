import React, { useEffect } from "react";
import { texts } from "./constant";
import { useLocation } from "react-router-dom";
import Header from "./common/Header";
import Learn from "./learn";

const LearnMore = () => {
  const location = useLocation();
  const { title, img } = location.state;

  const arr = texts.filter((text) => {
    return text.title === title;
  });
  console.log(arr);
  const description = arr[0].description;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="d-flex flex-column">
      <Header learn="learn" />
      <Learn img={img} title={title} description={description} />
    </div>
  );
};

export default LearnMore;
