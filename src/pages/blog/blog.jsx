// import React, {useEffect} from 'react';
// import BlogEnter from "./BlogContent/blogEnter";
// import LatestVideo from "../home/latestVideo";
// import FitnessArea from "../home/fitnessArea";
// import {bindActionCreators} from "redux";
// import {allPosts} from "../../redux/actions/shortPostApi";
// import {connect} from "react-redux";
// import {postsApi} from "../../redux/service/postsApi";
//
// const Blog = (props) => {
//     useEffect(() => {
//         props.allPosts();
//     }, [])
//     return (
//         <div>
//             <div className={"blog-clm2-fitness"}>
//                 <FitnessArea/>
//             </div>
//             <BlogEnter/>
//             <LatestVideo/>
//         </div>
//     );
// };
// const mdtp = (dispatch) => (bindActionCreators({allPosts}, dispatch))
// export default connect(null, mdtp)(Blog);