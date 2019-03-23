import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component{

    render(){
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"> */}
                        <Link  to="/registration" className="form-check-label" for="exampleCheck1" >Don't have account, please registraion</Link>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;
