import React from "react";
import "../App.css";

function storyBox({ user }) {
    console.log(user)
    return (
        <>
            <div className="">
                <img src={user.image} className="circle" />
                <p>{user.firstName}</p>
            </div>
        </>
    );
}

export default storyBox;