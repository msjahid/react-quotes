import React from 'react';
import {Link} from "react-router-dom";

const BlogList = ({blogs}) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="card" key={blog.id}>
                    <div className="card-header">
                        {blog.author}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{blog.quotes}</p>
                        </blockquote>
                        <Link to={`/blogs/${blog.id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
