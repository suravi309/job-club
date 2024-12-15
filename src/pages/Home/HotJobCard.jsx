import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {_id,title, company, company_logo, requirements, description, location,salayRange} = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <div className="flex gap-2">
      <figure>
        <img
        className="w-10"
          src={company_logo}
          alt="Shoes" />

      </figure>
      <div>
        <h4 className="text-2xl">{company}</h4>
        <p className="flex gap-2 items-center"><FaMapMarkerAlt />{location}</p>
      </div>
    </div>
  <div className="card-body">
    <h2 className="card-title">{title}
    <div className="badge bg-violet-700 text-white px-4 py-2">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="flex gap-2 flex-wrap">
      {
        requirements.map((skill, index) => <p key={index} className="border border-primary  rounded-md text-center px-2 hover:text-white hover:bg-violet-950">{skill}</p>)

      }
    </div>
    <div className="card-actions justify-end items-center">
      {/* <p className="flex items-center">Salary: <FaDollarSign></FaDollarSign> {salayRange.min}-{salayRange.max} {salayRange.currency}</p> */}
      <Link to={`/jobs/${_id}`}>
      <button className="btn btn-primary">Apply</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default HotJobCard;