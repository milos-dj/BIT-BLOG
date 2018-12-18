import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Authors.css";
import { fetchUsers } from "../../service/userService";
import { fetchPosts } from "../../service/postService";
import { USER_API } from "./../../constants/constants"

class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            postNumber: []
        }
    }
    componentDidMount() {
        fetchUsers(USER_API)
            .then((listOfUsers) => {
                this.setState({
                    users: listOfUsers
                });
                console.log(listOfUsers);

            })
    }


    render() {
        const authorItems = this.state.users.map((user) => {
            return <li className="list-group-item authors"><Link to={`/author/${user.id}`}>{user.name}</Link></li>
        });
        const authorNumber = this.state.users.length;
        return (
            <Fragment>
                <h2 className="authors-h2 container">AUTHORS ({authorNumber})</h2>
                <ul className="list-group container ">
                    {authorItems}
                </ul>
            </Fragment>
        );
    }
}

export { Authors }