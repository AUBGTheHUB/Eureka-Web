import React, { useContext, useEffect, useState } from 'react'
import './communication.css'
import SingleComment from './SingleComment'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Button } from 'react-bootstrap';
import proposalService from '../../../services/proposals'
import { Context } from '../../../store';
import { useParams } from 'react-router';


const Communication = () => {
    const [reply_text, set_reply_text] = useState('')
    const [reply, set_reply] = useState(false)
    const [comments, set_comments] = useState([])
    const [state, dispatch] = useContext(Context);
    const proposal_id = useParams().id

    const fetch_comments = async () => {
        const comments_temp = await proposalService.get_comments(proposal_id, state.user.token)
        set_comments(comments_temp)
    }

    useEffect(()=>{
        if(state.user.token && proposal_id)
            fetch_comments()
    },[proposal_id, state.user])


    const handle_reply = async (e) => {
        e.preventDefault()
        const payload = {
            content: reply_text,
            proposal_id
        }
        console.log(payload);
        try{
            const data = await proposalService.create_comment(payload, state.user.token)
            fetch_comments()
            set_reply_text('')
            set_reply(false)
        }catch(err){
            console.log(err);
            console.log('Problem commenting');
        }
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
        
        {comments.map(comment => {
            return (
                <div key={comment.id}>
                    <br/>
                    <SingleComment comment={comment} />
                    <hr/>
                </div>
            )
        })}

      </div>
    )
}

export default Communication;