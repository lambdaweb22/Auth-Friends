import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class AddFriend extends React.Component {
    state = {
        newFriend: {
            id: '',
            name: '',
            age: '',
            email: ''
        }
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.NewFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .get('http://localhost:5000/friends')
            .then(res => {
                this.state.newFriend(this.res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    addFriend = e => {
        axiosWithAuth()
            .post('http://localhost:5000/friends', this.state.friends)
            .then(res => {
                this.state.newFriend(this.res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
            
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}
                    />
                    Age:
                    <input
                        type="text"
                        name="age"
                        value={this.state.newFriend.age}
                        onChange={this.handleChange}
                    />
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;