import {useState} from 'react';
import axios from 'axios';


export default function CommentCreate({postId}){
    const [comment,setComment] = useState('');
    const submitForm =async (e)=>{
        e.preventDefault();
         await axios.post(`http://localhost:4001/post/${postId}/comments`,{content:comment});
         setComment('');
    }
    return (
        <div>
            <form onSubmit={submitForm} >
            <div className="form-group">
                <label >Comment:</label>
                <input className="form-control" onChange={(e)=>setComment(e.target.value)} value={comment}/>
                <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}