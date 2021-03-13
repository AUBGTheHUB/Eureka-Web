import React, { useState } from 'react';


const MyAccount = (props) => {
    const [posts, setPosts] = useState([]);
    return (
        <div class="container">
            <div class="header clearfix">
                <h3 class="text-center">Requested changes in lemma paradigms {props.user ? props.user.email : ""}</h3>
                <div id="app" >
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Lemma</th>
                            <th>POS</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            posts.map(function(post,index) {
                            return <tr key={index} >
                                        <td>{index+1}</td>
                                        <td>{post.lemma}</td>
                                        <td>{post.date}</td>
                                        <td>
                                        <span className="glyphicon glyphicon-pencil"></span>
                                        </td>
                                        <td>
                                        <span className="glyphicon glyphicon-remove"></span>
                                        </td>
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