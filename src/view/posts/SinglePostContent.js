import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SinglePostContent = (props) => {
    return (
        <Fragment>
            <div className="container">
                <h2 className="single-post text-center">{props.post.title}</h2>
                <p className="text-center"><Link to={`/author/${props.user.id}`}>{props.user.name}</Link></p>
                <p>{props.post.body}</p>
            </div>

        </Fragment>
    )

}

export { SinglePostContent }