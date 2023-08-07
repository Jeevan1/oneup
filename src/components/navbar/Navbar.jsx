import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import {
  RiQuestionnaireLine,
  RiSettings5Line,
  RiArrowDownSLine,
} from "react-icons/ri";
import Logo from "../Logo";
import "./Navbar.scss";
import SearchBar from "../SearchBar";
import Feedback from "../feedback/Feedback";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [feedback, setFeedback] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <div className="Navbar border-bottom d-flex">
      <div className="container-fluid d-flex justify-content-between ps-4 pe-0">
        <div className="Navbar__1 d-flex align-items-center gap-4">
          <GrMenu className="icon fs-4" />
          <Logo height={"25px"} />
          <SearchBar width={"400px"} style={"bg-light"} />
        </div>
        <div className="Navbar__2 d-flex align-items-center  fs-4">
          <RiQuestionnaireLine
            className="icon"
            onClick={() => setFeedback(!feedback)}
          />
          <RiSettings5Line className="icon" />

          <div className=" position-relative">
            <div className={"profile d-flex align-items-center px-1 gap-0"} onClick={() => setProfile(!profile)}>
              <p>JS</p>
              <RiArrowDownSLine className="icon" />
            </div>
            {profile && <div className="sub_links border border-2 ">
              <div className="px-4 py-2 border-bottom">
                <h6>Jeevan Shrestha</h6>
                <p>SUGA</p>
              </div>
              <Link className="link px-4 py-2 my-1 " to={"./user_settings"}  onClick={() => setProfile(false)}>
                User Setting
              </Link>
              <hr />
              <Link className="link px-4 py-2 my-1" to={"./login"}  onClick={() => setProfile(false)}>
                Log Out
              </Link>
            </div>}
          </div>
          <div className="Navbar__3">
            {feedback && <Feedback hide={setFeedback} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
