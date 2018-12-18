import React, { Component, Fragment } from "react";
import { PostItem } from "./PostItem";
import "./PostList.css"
import { fetchPosts } from '../../service/postService';
import { POST_API } from "./../../constants/constants";

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],

        }
    }

    componentDidMount() {
        fetchPosts(POST_API)
            .then((listOfPosts) => {
                this.setState({
                    posts: listOfPosts
                });
            });


    }
    render() {
        const postItems = this.state.posts.map((post) => {
            return <PostItem key={post.id} post={post} />
        });

        return (
            <Fragment>
                <div className="container main">
                    <h2 className="text-center postList">POSTS</h2>
                    {postItems}
                </div>
            </Fragment >
        );
    }

}

export { PostList }