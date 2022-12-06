import React from "react";
import "../App.css";
import Logo from "../assets/instagram_logo.png";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Profile from "../assets/profilePic.jpg";
function sideBar() {
    return (
        <>
            <div className="sideBarContainer">

                <div className="logoDiv">
                    <Link to={"/"} className="text-decoration">
                        <img src={Logo} alt="" className="logoImg" />
                    </Link>
                </div>

                <div className="menu" >
                    <Link to={"/"} className="text-decoration">
                        <div className="flex">
                            <AiFillHome className="icons" />
                            <p className="texts" style={{ marginRight: "40px" }}>
                                Home
                            </p>
                        </div>
                    </Link>
                    <div className="flex">
                        <AiOutlineSearch className="icons" />
                        <p className="texts" style={{ marginRight: "30px" }}>
                            Search
                        </p>
                    </div>
                    <div className="flex">
                        <MdOutlineExplore className="icons" />
                        <p className="texts" style={{ marginRight: "25px" }}>
                            Explore
                        </p>
                    </div>
                    <Link to={"/direct/inbox"} className="text-decoration">
                        <div className="flex">
                            <RiMessengerLine className="icons" />
                            <p className="texts" style={{ marginRight: "10px" }}>
                                Messages
                            </p>
                        </div>
                    </Link>
                    <div className="flex">
                        <FaRegHeart className="icons" style={{ marginLeft: "15px" }} />
                        <p className="texts">Notifications</p>
                    </div>
                    <div className="flex">
                        <AiOutlinePlusSquare className="icons" />
                        <p className="texts" style={{ marginRight: "35px" }}>
                            Create
                        </p>
                    </div>
                    <Link to={"/_bayr_aaaaa"} className="text-decoration">
                        <div className="flex">
                            <img src={<Profile />} className="icons" />
                            <p className="texts" style={{ marginRight: "35px" }}>
                                Profile
                            </p>
                        </div>
                    </Link>
                    <div className="possition flex">
                        <RxHamburgerMenu className="icons" />
                        <p className="texts">More</p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default sideBar;