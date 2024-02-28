import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { jsonData } from "../data/data";

export default function JobDescription({ job }) {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Thankyou for submitting");
    navigate("/jobs");
  };
  let { id } = useParams();
  let data = jsonData.find((job) => job.id == id);
  return (
    <div className="min-h-[80vh] bg-white rounded-lg shadow-lg p-10">
      <Link to="/jobs">
        <button className="absolute top-0 left-0 mt-4 ml-4 bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md">
          Back
        </button>
      </Link>
      <div className="flex items-center mb-4 mt-8">
        <img src={data.logo} className="w-12 h-12 mr-4" alt="Company Logo" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            {data.position}
          </h1>
          <p className="text-[#787878]">{data.company}</p>
        </div>
      </div>
      <div className="flex items-center">
        {data.new && (
          <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
            NEW
          </span>
        )}
        {data.featured && (
          <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
            FEATURED
          </span>
        )}
      </div>
      <hr className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Job Description</h2>
          <p className="text-[#787878]">{data.description}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Requirements</h2>
          <div className="flex flex-wrap">
            <span className="bg-[#0f1e32] text-white py-1 px-2 rounded-full mr-2 mb-2">
              {data.level}
            </span>
            {data.languages.map((language, index) => (
              <span className="bg-[#eac77d] text-white py-1 px-2 rounded-full mr-2 mb-2">
                {language}
              </span>
            ))}
            {data.tools.map((language, index) => (
              <span className="bg-[#b47b44] text-white py-1 px-2 rounded-full mr-2 mb-2">
                {data.tools}
              </span>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex items-center text-gray-600">
        <p className="mr-4">{data.postedAt}</p>
        <p className="mr-4">{data.contract}</p>
        <p>{data.location}</p>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md"
          onClick={handleClick}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
