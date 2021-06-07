import React from 'react'
import moment from 'moment';

const SingleComment = ({comment}) => {
    if(!comment)return 'loading...'

    const time_posted = () => {
        const time_posted = new Date(comment.date)
        return moment(time_posted).fromNow()
    }

    return (
        <div className='single_comment'>
            <span className='comment_user'>{comment.author.email}</span> 
            <span className='time_posted'> {time_posted()}</span>
            {/* <br/> */}
            <p className='comment_content'>{comment.content}</p>
        </div>
    )
}

export default SingleComment;