
import {useState,useEffect} from 'react';
import axios  from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
export function PostList(){
    const [posts,setPosts] = useState({});
    // const inc = ()=>{}
    useEffect(()=>{
        const getPosts = async ()=>{
            const {data}= await axios.get("http://localhost:4002/posts");
            setPosts(data)
        }
        getPosts();
    },[]);

    const renderPosts= Object.values(posts).map((post)=>{
        return (
            <div  
            className="card p-2"
            style={{width:"40%",margin:"20px"}}
            key={post.id}
            >
                <h3>{post.title}</h3>

                <CommentList comments={post.comments} />

                <CommentCreate postId={post.id} />
            </div>
        )
    })

    return(<div className="d-flex flex-row flex-wrap justify-content-between ">
        {renderPosts}
    </div>);
}