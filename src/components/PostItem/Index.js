import React from "react";
import './style.css'
function PostHeader({author, date}) {
  return (
    <div className="post-header">
      <div>
        <img className="avatar" src={author.avatar} alt=""/>
      </div>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

function PostComment({comment}) {
  const { author, content } = comment;
  return(
    <div className="post-comment">
      <div className="divider"/>
      <div className="comment">
        <img src={author.avatar} className="avatar"/>
        <p><strong>{author.name}: </strong> {content}</p>
      </div>
    </div>
  )
}

function PostItem({author,content, date, comments}){
  return (
    <>
      <PostHeader author={author} date={date}/>
        <p>{content}</p>
        {
          comments.map(comment => {
            return <PostComment key={comment.id} comment={comment}/>
          })
        }
    </>
  )
}

export default PostItem;