import React from "react";
import Input from "./Input";

const Login = () => {
    return (
        <>
        <h1>Login</h1>
        <form className="form">
            <Input 
                type="text"
                placeholder="Username"
                id="1"
            />
            <Input 
                type="password"
                placeholder="Password"
                id="2"
            />
            <button type="submit">Login</button>
        </form>
        </>
      );
};

export default Login;