import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
    axiosWithAuth().get("/friends")
        .then(res => console.log(res))
        .catch(err => console.log(err));

    return (
        <h3>Friends List</h3>
    )
}

export default FriendsList;