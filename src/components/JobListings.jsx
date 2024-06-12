import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import JobListing from "./JobListing";
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  let content = null;
  if (isLoading) {
    content = (
      <CircleLoader color="#36d7b7" cssOverride={{ margin: "0 auto" }} />
    );
  } else {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobListing job={job} key={job.id} />
        ))}
      </div>
    );
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {content}
      </div>
    </section>
  );
};

export default JobListings;
