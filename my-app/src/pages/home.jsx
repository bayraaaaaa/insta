import React from "react";
import "../App.css";
import SideBar from "../components/sideBar";
import StoryBox from "../components/storyBox";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Post from "../components/Post";
function Home() {
    const [data, setData] = useState([]);
    const instance = axios.create({
        baseURL: "https://dummyjson.com",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "app-id": "63104c3120f6e665ecf628ba",
        },
    });
    const getData = async () => {
        const response = await instance.get(`/users`);
        setData(response.data.users);
        // console.log(response.data.users);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="container">
                <div style={{ gridColumn: "1/2" }}>
                    <SideBar />

                </div>
                <div style={{ gridColumn: "2/3" }}></div>
                <div style={{ backgroundColor: "yellow", gridColumn: "3/4" }}>
                    <div style={{ width: "450px", height: "90px", display: "flex", border: "1px solid transparent", borderRadius: "10px", overflow: "scroll", backgroundColor: "cyan" }}>
                        {data &&
                            data.map((user, id) => {
                                return <StoryBox user={user} key={id} />;
                            })}
                    </div>
                    {dataPost &&
                        dataPost.map((user, index) => {
                            return (
                                <div className="">
                                    <Posts key={index} user={user} />
                                </div>
                            );
                        })}
                    
                </div>

                <div style={{ backgroundColor: "blue", gridColumn: "4/5" }}></div>
            </div>

        </>
    );
}

export default Home;