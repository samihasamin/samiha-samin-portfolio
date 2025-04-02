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
          return (
            <a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.w_img} alt={`Project ${work.w_no}`} />
            </a>
          );
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
