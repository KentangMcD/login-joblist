import React from "react";
import { jsonData } from "../data/data";
import { useState } from "react";
import JobList from "../components/joblist";

export default function JoblistPath() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const changePage = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };
 
  return (
    <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
      <div className="max-w-5xl m-auto relative top-8 ">
        <div>
          <ul>
            {jsonData
              .slice((currentPage - 1) * 5, currentPage * 5)
              .map((job) => (
                <JobList key={job.id} job={job} />
              ))}
          </ul>
        </div>
        <nav className="mt-4">
          <ul className="flex justify-center">
            {[...Array(Math.ceil(jsonData.length / jobsPerPage)).keys()].map(
              (num) => (
                <li key={num}>
                  <button
                    className={`mx-1 px-6 py-4 rounded shadow ${
                      currentPage === num + 1
                        ? "text-white bg-cyan-dark font-bold"
                        : "text-blue-500 bg-white"
                    }`}
                    onClick={() => changePage(num + 1)}
                  >
                    {num + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </main>
  );
}
