import { Post } from "./../entities/Post";
import { POST_API } from "./../constants/constants";

const fetchPosts = (POST_API) => {

    return fetch(POST_API)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            if (!response.length) {
                return new Post(response.userId, response.id, response.title, response.body);
            }
            return response.map((post) => {
                return new Post(post.userId, post.id, post.title, post.body);
            })
        })
}

export {
    fetchPosts
}