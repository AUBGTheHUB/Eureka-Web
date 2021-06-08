import React, { useContext, useEffect, useState } from 'react';
import ProposalService from '../../services/proposals';
import UserService from '../../services/user';
import { Context } from '../../store';
import {Link} from 'react-router-dom'

const MyAccount = (props) => {
    const [state, dispatch] = useContext(Context);

    const [posts, setPosts] = useState([]);

    const [user, set_user] = useState(null)

    const getProposals = async () => {
        const proposals = await ProposalService.getAll(state.selectedLanguage.walsCode, state.user.token);
        setPosts(proposals);
    }

    useEffect(() => {
      if(state.user.token){
        UserService.getUser(state.user.token)
            .then(u => set_user(u.data))
            .catch(e => console.log('error user'))
        getProposals();
      }
    }, [state.user]);

    if (!user)return 'Loading...'
    return (
        <div className="container">
            {user.is_linguist ? <p>Role: Linguist</p> : <p> Role: Regular user</p> }
            <Link to='/changepassword'>Change Password</Link>
            <div className="header clearfix">
                {!user.is_linguist ? <h3 className="text-center">Requested changes in lemma paradigms {state.user ? state.user.email : ""}</h3>
                : 
                <h3 className="text-center">All the lemmas requiring your confirmation.</h3>
                }
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
                            <th>Detail</th>
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
                                        <td><Link to={`/proposals/${post.id}`}>Go</Link></td>
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