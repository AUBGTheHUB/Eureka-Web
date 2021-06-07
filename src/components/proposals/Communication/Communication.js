import React, { useState } from 'react'
import './communication.css'
import SingleComment from './SingleComment'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Button } from 'react-bootstrap';




const Communication = () => {
    const [reply_text, set_reply_text] = useState('')
    const [reply, set_reply] = useState(false)
    const handle_reply = (e) => {
        e.preventDefault()

    }

    const render_my_comment = () => {
        return (
            <div style={{maxWidth:'500px'}} className="mb-3">
                <form onSubmit={handle_reply}>
                <textarea 
                    className="form-control" 
                    onChange={(e)=>set_reply_text(e.target.value)}
                    value={reply_text}
                    type={'text'}
                    placeholder='Write a comment...' 
                    rows="3">
                </textarea>
                <Button style={{marginTop:10,float:'right'}} type="submit" className="">Post</Button>
                </form>
            </div>
        )
    }

    return (
      <div className='communication_div'>

        <p className='communication_header'>Communication <ChatBubbleOutlineIcon/> </p> 
        
        <button 
            style={{background:'none', border:'none', color:'blue', fontSize:14}}
            onClick={(e)=>{e.preventDefault(),set_reply(!reply)}}
        >
            {reply ? 'Hide comment' : 'Write Comment'}
        </button>

        {reply && render_my_comment()}

        <hr/>
        <SingleComment/>
        <hr/>
        <SingleComment/>
        <hr/>
        <SingleComment/>
      </div>
    )
}

export default Communication;