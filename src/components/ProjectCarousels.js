import "./ProjectCarousels.css";
import { useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCarousels = () => {
  const ref = useRef(null);

  const onClickLeftHandler = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft - width;
  };
  const onClickRightHandler = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft + width;
  };

  return (
    <div className="project-container">
      <button className="prev-btn btn " onClick={onClickLeftHandler}>
        &lt;
      </button>
      <button className="next-btn btn " onClick={onClickRightHandler}>
        &gt;
      </button>
      <div className="carousel-container" id="move" ref={ref}>
        <div className="projects">
          <h4>DO YOU KONW ME ? CLI Quiz app</h4>
          <p>November, 2022</p>
          <p>A Quiz about me.</p>
          <div>
            <Link to="/Project" className="btn ">
              Demo
            </Link>
            <Link to="/SOURCE" className="btn btn-white ">
              SOURCE
            </Link>
          </div>
        </div>
        <div className="projects">
          <h3> Tarak mehta ka ulta chasma ! CLI Quiz app</h3>
          <p>November ,2022</p>
          <p>A Quiz about a famous show.</p>
          <div>
            <Link to="/Demo" className="btn ">
              Demo
            </Link>
            <Link to="/SOURCE" className="btn btn-white ">
              SOURCE
            </Link>
          </div>
        </div>
        <div className="projects">
          <h3>Minion translation </h3>
          <p>November , 2022</p>
          <p>A way to banana language</p>
          <div>
            <Link to="/Demo" className="btn ">
              Demo
            </Link>
            <Link to="/SOURCE" className="btn btn-white ">
              SOURCE
            </Link>
          </div>
        </div>
        <div className="projects">
          <h3>Do you know phinease and ferb language ?</h3>
          <p>November , 2022</p>
          <p>English to latin translator.</p>
          <div>
            <Link to="/Demo" className="btn ">
              Demo
            </Link>
            <Link to="/SOURCE" className="btn btn-white ">
              SOURCE
            </Link>
          </div>
        </div>
        <div className="projects">
          <h3>Flag interpreter</h3>
          <p>November, 2022</p>
          <p>find out the flag names.</p>
          <div>
            <Link to="/Demo" className="btn ">
              Demo
            </Link>
            <Link to="/SOURCE" className="btn btn-white ">
              SOURCE
            </Link>
          </div>
        </div>
        <div className="projects">
          <h3>Song recommendations </h3>
          <p>November, 2022</p>
          <p>list of song recommendations.</p>
          <div>
            <Link to="/Demo" className="btn ">
              Demo
            </Link>
            <Link to="/SOURCE" className="btn btn-white ">
              SOURCE
            </Link>
          </div>
        </div>
        <div className="projects">
          <h3>Is your birthday lucky ?</h3>
          <p>December, 2022</p>
          <p>computer science knows your kundli.</p>
          <div>
            <Link to="/Demo" className="btn ">
              Demo
            </Link>
            <Link to="/SOURCE" className="btn btn-white ">
              SOURCE
            </Link>
          </div>
        </div>
        <div className="projects">
          <h3> Learn About triangles</h3>
          <p>December, 2022</p>
          <p>A Quiz on triangles.</p>
          <div>
            <Link to="/Demo" className="btn ">
              DEMO
            </Link>
            <Link to="/SOURCE" className="btn btn-white ">
              SOURCE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousels;
