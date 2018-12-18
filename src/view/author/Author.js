import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom"
import { AuthorName } from "./AuthorName";
import { AuthorAddress } from "./AuthorAddress";
import { AuthorCompany } from "./AuthorCompany";
import "./Author.css"
import { fetchUsers } from "../../service/userService";
// import { USER_API } from "../../constants/constants";

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {}
        }
    }
    componentDidMount() {
        fetchUsers(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then((user) => {
                this.setState({
                    author: user
                });
                console.log(this.state.author);
            })

    }

    // this.props.params.id
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h2 className="text-center m-3">Single Author</h2>
                    <p><Link to="/authors">All authors</Link></p>
                </div>
                <div className="m-1">
                    <AuthorName author={this.state.author} />
                    <AuthorAddress address={this.state.author.address} />
                    <AuthorCompany company={this.state.author.company} />

                </div>
            </Fragment>
        );
    }
}

export { Author }