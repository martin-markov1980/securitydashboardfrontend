import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const ProjectsList = ({ data, title }) => {

  // Last time the backend has updated the projects info  
  let lastUpdateTime = data[0][0];
  lastUpdateTime = lastUpdateTime.split('/')
  let day = Number(lastUpdateTime[1]) < 10 ? `0${lastUpdateTime[1]}/` : `${lastUpdateTime[1]}/`;
  let month = Number(lastUpdateTime[0]) < 10 ? `0${lastUpdateTime[0]}/`: `${lastUpdateTime[0]}/`;
  lastUpdateTime[0] = day;
  lastUpdateTime[1] = month;

  // Initializing React key for every time looping through an array as React required this
  let projectNumber = 1;

  // Getting the projects
  let projects = data[1];

  return (
    <div>
      <div className={'d-flex d-flex justify-content-between mb-4'}>
        <div>
          <h1>{title}</h1>
          <span>Last update on:</span> <span>{lastUpdateTime}</span>
        </div>
        <div className={'d-flex align-items-center'}>
          <span className={'bg-danger p-2 text-white rounded'}>Security updates</span>
          <span className={'bg-success ms-1 p-2 text-white rounded'}>No security updates</span>
        </div>
      </div>
      {/* Creating table to display the projects list */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project name</th>
            <th scope="col">Core version</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {

            let securityModulesCount = project[3][0];
            let projectName = project[0];
            let projectCoreVersion = project[1];

            return (
              <tr key={projectNumber} className={securityModulesCount > 0 ? 'bg-danger' : 'bg-success'}>
                <td>{projectNumber++}</td>
                <td>{projectName}</td>
                <td>{projectCoreVersion}</td>
                <td><Link to={`/securitydashboardfrontend/projects/${projectName}`}><button type="button" className="btn btn-dark">view</button></Link></td>
              </tr>
            );

          })}
        </tbody>
      </table>
      <ScrollToTop smooth />
    </div>
  );

}

export default ProjectsList;