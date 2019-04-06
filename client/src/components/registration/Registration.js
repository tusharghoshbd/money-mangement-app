import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Type from '../../stores/actions/Type'
import { registrationAction } from '../../stores/actions/authActions'

class Registration extends Component {

    constructor(props) {

        super(props);
        console.log(Type);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        let {name, email, password, confirmPassword} = this.state;
        this.props.registrationHandle( {name, email, password, confirmPassword});
    }





    render() {
        let { name, email, password, confirmPassword, errors } = this.state;
        return (
            <div>               
                {
                    this.props.message && 
                    <div className="alert alert-success" role="alert">
                        {this.props.message }
                    </div>
                }
                <form className="needs-validation" onSubmit={this.submitHandler}>
                    <div className="form-group is-invalid">
                        <label >Name</label>
                        <input
                            type="text"
                            className={this.props.errors.name  == undefined || this.props.errors.name === '' ? 'form-control' : 'form-control  is-invalid' }
                            name="name"
                            value={name}
                            onChange={this.changeHandler}
                            placeholder="Enter Full Name" />
                        <div className="invalid-feedback">
                            { this.props.errors.name}
                        </div>

                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input
                            type="email"
                            className={ this.props.errors.email  == undefined || this.props.errors.email === ''  ? 'form-control' : 'form-control  is-invalid' }
                            name='email'
                            value={email}
                            onChange={this.changeHandler}
                            placeholder="Enter email" />
                        <div className="invalid-feedback">
                            { this.props.errors.email}
                        </div>

                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input
                            type="password"
                            className={ this.props.errors.password  == undefined || this.props.errors.password === '' ? 'form-control' : 'form-control  is-invalid' }
                            name='password'
                            value={password}
                            onChange={this.changeHandler}
                            placeholder="Password" />
                        <div className="invalid-feedback">
                            { this.props.errors.password}
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Confirm Password</label>
                        <input
                            type="password"
                            className={this.props.errors.confirmPassword  == undefined || this.props.errors.confirmPassword === '' ? 'form-control' : 'form-control  is-invalid' }
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.changeHandler}
                            placeholder="Confirm Password" />
                        <div className="invalid-feedback">
                            { this.props.errors.confirmPassword}
                        </div>
                    </div>
                    <div className="form-group form-check">
                        {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"> */}
                        <Link to="/" className="form-check-label" > If you have account, please login</Link>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mappingDispatchToProps = (dispatch) => {
    return {
        registrationHandle: (user) => {
            dispatch( registrationAction(user));
        }
    }
}

//  { type: Type.USER_REGISTRATION }

const mappingStateToProps = (state) => {

    console.log(state.auth.errors);
    return {
        errors: state.auth.errors,
        message: state.auth.message
    }
}

export default connect(mappingStateToProps, mappingDispatchToProps)(Registration);
