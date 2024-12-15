
import Lottie from "lottie-react";
import register from '../../assets/img/login.json'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
// import { Link } from "react-router-dom";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;

    // const name = form.get("name")
    const email = form.email.value;
    // const photo = form.get("photo")
    const password = form.password.value;
    console.log({email, password})

    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
    <Lottie animationData={register} loop={true} />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
      {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="enter your name" className="input input-bordered" required />
        </div> */}

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="photo-url" className="input input-bordered" required />
        </div> */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />

        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>

        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>

        {/* <p className="text-center font-semibold">
      Allready Have An Account ? <Link className="text-red-500" to="/login">

      Login
      </Link>
      </p> */}
      </form>
    </div>
  </div>
</div>
  );
};

export default Register;