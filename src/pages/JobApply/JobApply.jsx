import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const JobApply = () => {
  const {id} = useParams();
  const {user} = useAuth();
  // console.log(id,user);

  const submitJobApplication = e => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // console.log(linkedIn,github,resume);

    const jobApplication = {
      job_id: id,
      application_email: user.email,
      linkedIn,
      github,
      resume
    }

    fetch('http://localhost:5000/jobs/job-application',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(jobApplication)

    })

    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  return (
    <div>
      
      <div className="hero bg-base-200 min-h-screen">
      
  
    
    <div className="card bg-base-100 w-full  shadow-2xl">
    <h2 className="text-5xl font-bold text-center">
      Apply Job Form
    </h2>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linked In URL</span>
          </label>
          <input type="url" name="linkedIn" placeholder="Linked In URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> GitHub URL</span>
          </label>
          <input type="url" name="github" placeholder=" GitHub URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Resume URL</span>
          </label>
          <input type="url" name="resume" placeholder="  Resume URL" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  
</div>
    </div>
  );
};

export default JobApply;