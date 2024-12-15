import Lottie from "lottie-react";
import sigin from "../../../assets/img/sin.json"
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";


const SignIn = () => {
  const {singInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('in singin page',location)
  const from = location.state || '/';
  const handleSigin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    singInUser(email,password)
    .then((result) => {
      console.log('sing in',result.user);
      navigate(from);
    })
    .catch(error =>{
      console.log(error);
    })
    
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left w-96">
      <Lottie animationData={sigin} loop={true} />

      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSigin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default SignIn;