

export default function CommentList({comments}){

    const renderComments = comments?.map((comment)=>{
        const content = comment.status==='approved' ? comment.content : comment.status ==="pending" ? <span style={{color:"yellow"}}>Comment is pending for approval</span>:<span style={{color:"red"}}>Comment is rejected (x)</span>;
        return <li key={comment.id} className="m-2">{content}</li>
    })
   
    return (
        <div>
            <div>{comments?.length || 0} comments</div>
            <ul>
                {renderComments}
            </ul>
        </div>
    )
}