const NoAvailableModules = ({ projects, name }) => {

  // Initializing React key for every time looping through an array as React required this
  let projectNumber = 1;

  return (
    projects.map((project) => {

      let projectName = project[0];
      let modulesCount = project[3][4];
      let modules = project[3][5];

      return (
        projectName === name ?

          modulesCount > 0 ?

            modules.map((module) => {

              let name = module[0];
              let securityVersion = module[1];
              let recomendetVersion = module[2];
              let link = module[3];

              return (
                <tr key={projectNumber++} className={'bg-secondary'}>
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

export default NoAvailableModules;