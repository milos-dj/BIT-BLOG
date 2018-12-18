import React from "react";
import { Link } from "react-router-dom";

const CreatePost = () => {
    return (
        <form className="container">
            <h2 className="text-center mt-5">NEW POST</h2>
            <div class="form-group mt-3">
                <label for="exampleInputEmail1">Title</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Post title" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="text-right">
                <Link to="/"><button type="submit" class="btn btn-primary mr-1 ">Cancel</button></Link>
                <Link to="/"><button type="submit" class="btn btn-primary mr-1 ">Save</button></Link>
            </div>
        </form>
    );
}
export { CreatePost }