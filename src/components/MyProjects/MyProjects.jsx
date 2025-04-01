import React from "react";
import "./MyProjects.scss";
import ThemePattern from "../../assets/theme_pattern.svg";
import myWorkData from "../../assets/mywork_data";
import ArrowIcon from "../../assets/arrow_icon.svg";

function MyProjects() {
  return (
    <div id="Portfolio" className="my-projects">
      <div className="my-projects__title">
        <h1>Featured Projects</h1>
        <img src={ThemePattern} alt="Theme Pattern" />
      </div>
      <div className="my-projects__featured">
        {myWorkData.map((work, index) => {
          return <img src={work.w_img} alt="My Project Image" />;
        })}
      </div>
      <div className="my-projects__showmore">
        <p>Show More</p>
        <img src={ArrowIcon} alt="Arrow Icon" />
      </div>
    </div>
  );
}

export default MyProjects;
