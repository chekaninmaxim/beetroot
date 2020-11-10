import React from "react";
import Message1 from "./components/Message1";
import Message2 from "./components/Message2";
import SignInForm from './components/SignInForm';
import RegisterForm from './components/RegisterForm';

localStorage.user = JSON.stringify({name: 'Bill', status: 'admin'})
localStorage.user = JSON.stringify({name: 'John', status: 'user'})

const App = () => (
    <div className="container">
        <h1>Hello React</h1>
        <Message1 />
        <Message2 />

        <div className="row">
            <div className="col-md-5">
                <h1>Sign in</h1>
                <SignInForm initState={{email: '1', password: '2'}} />
            </div>
            <div className="offset-md-2 col-md-5">
                <h1>Register</h1>
                <RegisterForm initState={{login: '3', email: '4', password: '5', passwordConfirm: 6}} />
            </div>
        </div>
    </div>
);

export default App;
