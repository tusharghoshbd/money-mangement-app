import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Type from '../../stores/actions/Type'
import { loginAction } from '../../stores/actions/authActions'

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        let { email, password} = this.state;
        this.props.loginHandle( { email, password}, this.props.history);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label >Email </label>
                        <input 
                            type="email" 
                            name="email"
                            className="form-control"  
                            value={this.state.email}
                            onChange={this.changeHandler}
                            placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password"
                            onChange={this.changeHandler}
                            value={this.state.password}
                            className="form-control"  
                            placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"> */}
                        <Link  to="/registration" className="form-check-label" >Don't have account, please registraion</Link>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mappingDispatchToProps = (dispatch) => {
    return {
        loginHandle: (user, history) => {
            console.log(user);
            dispatch( loginAction(user, history));
        }
    }
}

const mappingStateToProps = (state) => {

    console.log(state.auth.errors);
    return {
        errors: state.auth.errors,
        message: state.auth.message
    }
}

export default connect(mappingStateToProps, mappingDispatchToProps)(Login);
