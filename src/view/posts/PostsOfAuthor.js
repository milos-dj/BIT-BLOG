import React, { Fragment } from "react";
import { Link } from "react-router-dom"

const PostsOfAuthor = (props) => {
    if (!props.userPosts.length) {
        return null
    }
    console.log(props.userPosts);
    return (
        <Fragment>
            <div className="container">
                <hr />
                <h3 className="single-post">3 more posts from same author</h3>

                <ul class="list-group">
                    <li class="list-group-item"><Link to={`/singlePost/${props.userPosts[0].id}`}>{props.userPosts[0].title}</Link></li>
                    <li class="list-group-item"><Link to={`/singlePost/${props.userPosts[1].id}`}>{props.userPosts[1].title}</Link></li>
                    <li class="list-group-item"><Link to={`/singlePost/${props.userPosts[2].id}`}>{props.userPosts[2].title}</Link></li>
                </ul>
            </div>

        </Fragment>
    )

}

export { PostsOfAuthor }