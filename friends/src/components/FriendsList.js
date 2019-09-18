import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get("http://localhost:5000/friends")
            .then(res => {
                this.setState(res.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3>Friends List</h3>
                <div className="friends-list">
                    {this.state.friends.map(friend => {
                            return {
                                <div>{friend}</div>
                            }
                    })}
                </div>
            </div>
        )
    }
}

export default FriendsList;