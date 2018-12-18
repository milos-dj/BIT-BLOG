import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";
import { SinglePostContent } from "./SinglePostContent";
import { PostsOfAuthor } from "./PostsOfAuthor";
import { fetchPosts } from "../../service/postService";
import { fetchUsers } from "../../service/userService";

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {},
            user: {},
            userPosts: []
        }
    }


    static getDerivedStateFromProps(props, state) {

    }

    componentDidMount() {
        fetchPosts(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
            .then((post) => {
                this.setState({
                    post: post
                });
                console.log(this.state.post);

                fetchUsers(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
                    .then((user) => {
                        this.setState({
                            user: user
                        });
                        console.log(this.state.user);
                    })

                fetchPosts(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.post.userId}`)
                    .then((userPost) => {
                        this.setState({
                            userPosts: userPost
                        });
                    })
            })
    }


    render() {
        return (
            <Fragment>
                <SinglePostContent post={this.state.post} user={this.state.user} />
                <PostsOfAuthor userPosts={this.state.userPosts} />
            </Fragment>
        );
    }

}

export { SinglePost }