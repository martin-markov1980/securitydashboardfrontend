import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import RecommendedModules from "./RecommendedModules";
import SecurityModules from "./SecurityModules";
import NoAvailableModules from "./NoAvailableModules"


const SingleProject = ({ data }) => {

  // Getting the project name from the url
  const { name } = useParams();

  //Capitalizing the first letter of the project name
  let projectName = name.charAt(0).toUpperCase() + name.slice(1);

  // Getting the projects
  let projects = data[1];

  return (
    <div>
      <div className={'d-flex d-flex justify-content-between mb-4'}>
        <h1>{projectName}</h1>
        <div className={'d-flex align-items-center'}>
          <span className={'bg-danger p-2 text-white rounded'}>Security updates</span>
          <span className={'bg-warning ms-1 p-2 text-white rounded'}>Recommended updates</span>
          <span className={'bg-secondary ms-1 p-2 text-white rounded'}>No available releases found</span>
        </div>
      </div>
      {/* Creating table to display single project details */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Module name</th>
            <th scope="col">Current version</th>
            <th scope="col">Recommended version</th>
            <th scope="col">Link to the module</th>
          </tr>
        </thead>
        <tbody>
          <SecurityModules projects={projects} name={name} />
          <RecommendedModules projects={projects} name={name} />
          <NoAvailableModules projects={projects} name={name} />
        </tbody>
      </table>
      <ScrollToTop smooth />
    </div>
  );

}

export default SingleProject;



