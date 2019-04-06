import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Type from '../../stores/actions/Type'
import { logout } from '../../stores/actions/authActions'



class Home extends Component{

        // constructor(props){
        //         super(props)

        // }
        //
        render (){
                return (
                        <div>
                                <h1>I am home</h1>
                                { this.props.auth.isAuthenticate == true ?
                                        <button 
                                                className="'btn btn-danger"
                                                onClick={ ()=>this.props.logout(this.props.history)}
                                                >Logout</button> 
                                        : <Link to="/login">  <button className="'btn btn-success">Login</button></Link>
                                }

                                
                        </div>
                )
        }
}


const mappingStateToProps = (state) => {

        return {
                auth : state.auth
        }
}
const mappingDispatchToProps ={
        logout
}

    
export default connect(mappingStateToProps, mappingDispatchToProps)(Home);

