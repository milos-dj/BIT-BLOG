import React from "react";
import { Link } from "react-router-dom";

const PostItem = (props) => {
    if (!props.post) {
        return null;
    }
    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/singlePost/${props.post.id}`}><h5 className="card-title">{props.post.title}</h5></Link>
                <p className="card-text">{props.post.body}</p>
            </div>
        </div>
    );
}
export { PostItem }