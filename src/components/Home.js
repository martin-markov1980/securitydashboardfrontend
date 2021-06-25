import ProjectsList from "./ProjectsList";

const Home = ({ data, isLoading, errorMessage }) => {

  return (
    <div>
      { errorMessage && <div>{errorMessage}</div>}
      { isLoading && 'Loading...'}
      { data && <ProjectsList data={data} title={'Projects'} />}
    </div>
  );

}

export default Home;