import React, { useContext, useEffect, useState } from 'react';
import ProposalService from '../../services/proposals';
import { Context } from '../../store';

const MyAccount = (props) => {
    const [state, dispatch] = useContext(Context);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getProposals = async () => {
            const proposals = await ProposalService.getAll(state.selectedLanguage.walsCode, state.user.token);
            setPosts(proposals);
        }
        if(state.user.token){
            getProposals();
        }
    }, [state.user]);
    
    return (
        <div className="container">
            <div className="header clearfix">
                <h3 className="text-center">Requested changes in lemma paradigms {state.user ? state.user.email : ""}</h3>
                <div id="app" >
                    <table className="table table-striped">
                        <thead>
                        <tr className="centered_text">
                            <th>#</th>
                            <th>Language</th>
                            <th>Lemma</th>
                            <th>Wordform</th>
                            <th>Proposed Wordform</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Note</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            posts.map(function(post,index) {
                            return <tr key={index} >
                                        <td>{index+1}</td>
                                        <td><a href={`${post.word.language.walsCode}/lemmas`}>{post.word.language.name}</a></td>
                                        <td><a href={`${post.word.language.walsCode}/lemmas/${post.word.lemma.name}`}>{post.word.lemma.name}</a></td>
                                        <td>{post.word.name}</td>
                                        <td>{post.proposedWord}</td>
                                        <td>{(new Date(post.date)).toLocaleDateString()}</td>
                                        <td>{post.status}</td>
                                        <td>{post.note}</td>
                                    </tr>
                            }.bind(this))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    )
}
export default MyAccount;