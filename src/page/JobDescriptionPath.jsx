import React from 'react'
import JobDescription from "./components/JobDescription";
import Header from "./components/Header";


export default function JobDescriptionPath() {
  return (
    <div className="min-h-[80vh] relative">
        <Header />
        <JobDescription />
      </div>
  )
}
