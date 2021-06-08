import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import proposalService from '../../services/proposals'
import UserService from '../../services/user'
import { Context } from '../../store';
import Communication from './Communication/Communication';
import './proposal.css'

const styles = {
    leftTable:{
        textAlign:'left',
        width:'60%',
        color:'#445566',
        fontWeight:500,
        fontSize:16,
        padding:'10px'
    },
    rightTable:{
        textAlign:'right',
        color:'#445566',
    },
    approve_btn:{
        border:'none',
        marginRight:10,
        width:100,
        padding:5,
        borderRadius:5,
        backgroundColor:'green',
        color:'white'
    },
    decline_btn:{
        border:'none',
        width:100,
        padding:5,
        borderRadius:5,
        backgroundColor:'red',
        color:'white'

    }
}

const ProposalDetail = () => {
    const id = useParams().id
    const [proposal, set_proposal] = useState(null)

    const [state, dispatch] = useContext(Context);
    const [user, set_user] = useState(null)

    const get_proposal = async () => {
        console.log(id, state.user.token);
        const data = await proposalService.getProposalDetail(id,state.user.token)
        set_proposal(data)
    }

    useEffect(()=>{
        if(id && state.user.token){
            get_proposal()
            UserService.getUser(state.user.token)
            .then(u => set_user(u.data))
            .catch(e => console.log('error user'))
        }
    },[id, state.user])

    const handle_approve = async (e) => {
        e.preventDefault()
        try { 
            await proposalService.approve_proposal(id, state.user.token)
            get_proposal()

        }catch(err){
            console.log('Error Approving proposal!');
        }
    }

    const handle_decline = async (e) => {
        e.preventDefault()
        try { 
            await proposalService.decline_proposal(id, state.user.token)
            get_proposal()

        }catch(err){
            console.log('Error Declining proposal!');
        }
    }

    if(!proposal)return 'Loading...'

    return (
        <>
        <div className='single_proposal__div'>   
            <p style={{textAlign:'center', fontWeight:800}}> Proposal from {proposal.author.email}</p>
            <p style={{fontSize:12, textAlign:'center'}}>{new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(Date.parse(proposal.date))}</p>
            <table style={{width:'100%'}}>
            
            <tbody >                
            
                <tr>
                    <td style={styles.leftTable}>Original Word</td>
                    <td style={styles.rightTable}>{proposal.word.name}</td>
                </tr>
              
                <tr>
                    <td style={styles.leftTable}>Proposed Word</td>
                    <td style={styles.rightTable}>{proposal.proposedWord}</td>
                </tr>
    
                <tr>
                    <td style={styles.leftTable}>Lemma</td>
                    <td style={styles.rightTable}>{proposal.word.lemma.name}</td>
                </tr>
    
                <tr>
                    <td style={styles.leftTable}>Language</td>
                    <td style={styles.rightTable}>{proposal.word.lemma.language.name}</td>
                </tr>
    
                <tr>
                    <td style={styles.leftTable}>Status</td>
                    <td style={{...styles.rightTable, color:proposal.status==='Approved' ? 'green': 'black'}}>{proposal.status}</td>
                </tr>

                <tr>
                    <td style={styles.leftTable}>Note</td>
                    <td style={styles.rightTable}>{proposal.note} </td>
                </tr>
    
            </tbody>
            </table>   

            
            <div style={{textAlign:'center', display: user.is_linguist && proposal.status==='Pending' ? 'block' : 'none' }}>
                <button onClick={handle_approve} style={styles.approve_btn}>Approve</button>
                <button onClick={handle_decline} style={styles.decline_btn}>Decline</button>
            </div>

        </div>
        <Communication/>
        </>

    )
}

export default ProposalDetail;