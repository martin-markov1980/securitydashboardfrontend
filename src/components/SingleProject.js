import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";


const SingleProject = ({ data }) => {
  // Getting the project name from the url
  const { name } = useParams();
  // Getting the projects array
  let projects = data[1];
  // React requires key for every time looping through an array
  let projectNumber = 1;

  return (
    <div>
      <div className={'d-flex d-flex justify-content-between mb-4'}>
        {/* Making the first project name letter is capital */}
        <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
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
          {projects.map((project) => (

            project[0] === name ?
              // Checking for security updates data, and building table for them
              (project[3][0] > 0 ?

                project[3][1].map((i) => (
                  <tr key={projectNumber++} className={'bg-danger'}>
                    <td>{i[0]}</td>
                    <td>{i[1]}</td>
                    <td>{i[2]}</td>
                    <td><a href={i[3]} target="_blank" rel="noreferrer" className="btn btn-dark">Module</a></td>
                  </tr>
                ))

                : false)

              : false

          ))}

          {projects.map((project) => (

            project[0] === name ?
              // Checking for Recommended updates data, and building table for them
              (project[3][2] > 0 ?

                project[3][3].map((i) => (
                  <tr key={projectNumber++} className={'bg-warning'}>
                    <td>{i[0]}</td>
                    <td>{i[1]}</td>
                    <td>{i[2]}</td>
                    <td><a href={i[3]} target="_blank" rel="noreferrer" className="btn btn-dark">Module</a></td>
                  </tr>
                ))

                : false)

              : false

          ))}

          {projects.map((project) => (

            project[0] === name ?
              // Checking for No available releases found data, and building table for them
              (project[3][4] > 0 ?

                project[3][5].map((i) => (
                  <tr key={projectNumber++} className={'bg-secondary'}>
                    <td>{i[0]}</td>
                    <td>{i[1]}</td>
                    <td>{i[2]}</td>
                    <td><a href={i[3]} target="_blank" rel="noreferrer" className="btn btn-dark">Module</a></td>
                  </tr>
                ))

                : false)

              : false

          ))}
        </tbody>
      </table>
      <ScrollToTop smooth />
    </div>
  );
}

export default SingleProject;



