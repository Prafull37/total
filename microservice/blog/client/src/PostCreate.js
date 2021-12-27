  import React , {useState} from 'react';
  import axios from 'axios';

  export default function PostCreate(){
      const [title,setTitle] = useState('');
      const onTitleChange=(e)=>{
        setTitle(e.target.value);
      }

      const onFormSubmit = async (e)=>{
          e.preventDefault();
          await axios.post('http://localhost:4000/posts',{title});
          setTitle('');
      }

      return (
          <div>
              <form  onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="post" >Title</label>
                    <input type="text" onChange={onTitleChange} value={title} className="form-control" />
                </div>
              <button className="btn btn-primary" >Share</button>
              </form>
          </div>
      )
  }