import React from 'react';
import BlogEnter from "./BlogContent/blogEnter";
import LatestVideo from "../home/latestVideo";
import FitnessArea from "../home/fitnessArea";

const Blog = () => {
    return (
        <div>
            <div className={"blog-clm2-fitness"}>
                <FitnessArea/>
            </div>
            <BlogEnter/>
            <LatestVideo/>
        </div>
    );
};

export default Blog;