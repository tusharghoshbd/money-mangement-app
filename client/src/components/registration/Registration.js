import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Registration extends Component{

    render(){
        return (
            <div>
                <form>
                <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" id="name"  placeholder="Enter Full Name" />
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name='email'  placeholder="Enter email" />
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name='password' placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" className="form-control" name='confirmPassword' placeholder="Confirm Password" />
                    </div>
                    <div className="form-group form-check">
                        {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"> */}
                        <Link  to="/" className="form-check-label" for="exampleCheck1" > If you have account, please login</Link>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Registration;
