import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://192.168.12.208:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://192.168.12.208:8000/blogs/'+ blog.id, {
            method: "DELETE",
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <div className="card">
                    <div className="card-header">
                        {blog.quotes}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{blog.bio}</p>
                        </blockquote>
                        <div className="card-footer">
                            {blog.author}
                        </div>
                    </div>
                </div>
            )}
            <button onClick={handleClick} className="btn btn-danger ">Delete</button>
        </div>
    );
};

export default BlogDetails;
