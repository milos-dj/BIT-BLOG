import React, { Fragment } from "react";
import "./AuthorName.css"

const AuthorName = (props) => {
    return (
        <Fragment>
            <div className="container clearFix author-div">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className="author-name-img" />

                <div className="author-name-text ">
                    <h2>{props.author.name}</h2>
                    <p>Username: {props.author.username}</p>
                    <p>Email: {props.author.email}</p>
                    <p>Phone: {props.author.phone}</p>
                </div>

            </div>
        </Fragment>
    );
}
export { AuthorName }