const SecurityModules = ({ projects, name }) => {

  // Initializing React key for every time looping through an array as React required this
  let projectNumber = 1;

  return (
    projects.map((project) => {

      let projectName = project[0];
      let modulesCount = project[3][0];
      let modules = project[3][1];

      return (
        projectName === name ?

          modulesCount > 0 ?

            modules.map((module) => {

              let name = module[0];
              let securityVersion = module[1];
              let recomendetVersion = module[2];
              let link = module[3];

              return (
                <tr key={projectNumber++} className={'bg-danger'}>
                  <td>{name}</td>
                  <td>{securityVersion}</td>
                  <td>{recomendetVersion}</td>
                  <td><a href={link} target="_blank" rel="noreferrer" className="btn btn-dark">Module</a></td>
                </tr>
              )

            })

            : false

          : false
      )

    })
  )
}

export default SecurityModules;