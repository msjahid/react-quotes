import React from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://jsonkeeper.com/b/6RBI');
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
    );
};

export default Home;
