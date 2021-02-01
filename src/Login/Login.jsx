import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder="Login" name={"login"} component={"input"}/>
    </div>
    <div>
      <Field placeholder="Email" type="email" name={"email"} component={"input"}/>
    </div>
    <div> <Field placeholder="Password" name={"password"} component={"input"}/></div>
    <div>
      <Field type="checkbox" component={"input"} name={"rememberMe"}/> Remember me
    </div>
    <div>
      <button>Log In</button>
    </div>
  </form>
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)



const Login = () =>{
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div> 
      <div><h1>Hey lets login on the social network</h1></div>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login;
