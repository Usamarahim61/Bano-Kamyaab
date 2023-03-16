import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/Login.css"
import Navbar from "./Navbar";

function Login() {
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");

	const navigate = useNavigate();

	const LoginUser = async (e)=>{
		e.preventDefault();
		const res=await fetch('/Login', {
			method: "POST",
			headers:{
				"Content-Type" : "application/json"
			},
			body: JSON.stringify({
				email,password
			})
		});
		const data =res.json();

		if(res.status === 400 || !data){
			window.alert("Invalid Credential")
		
		}
		else{
			window.alert("Login Successfully")
			navigate ("/User");
		}
	}
  return (
    <>
	<Navbar/>
    <div className="body1">
          <div className="d-flex mt-5">
        <div className="col-6 text-center pt-5">
            <img src={require('./images/Logo-01.png')} alt="img" className="img_size"/>
        </div>
        <div className="col-6">
     <div className="container1">
	<div className="screen">
		<div className="screen__content">
			<form className="login" method ="POST">
				<div className="login__field">
					<i className="login__icon bi bi-people-fill text-secondary"></i>
					<input type="text" className="login__input" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" required/>
				</div>
				<div className="login__field">
					<i className="login__icon bi bi-key-fill text-secondary"></i>
					<input type="password" className="login__input" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Password" required/>
				</div>
                <div>
				<Link  className="text-center button login__submit text-decoration-none" onClick={LoginUser}>
					Log In
				</Link>
                </div>
                <div className="mt-3">
                    <Link className="text-decoration-none text-dark fw-bold" to="/ForgotPassword">Forgot Password?</Link>
                </div>	
                
                <Link to="/Register"  className="text-center button login__submit text-decoration-none" type= "submit">
					Sign Up
				</Link>
                		
			</form>
			{/* <div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="/" className="social-login__icon fab fa-instagram"></a>
					<a href="/" className="social-login__icon fab fa-facebook"></a>
					<a href="/" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
</div>
</div>
    </>
  );
}

export default Login;