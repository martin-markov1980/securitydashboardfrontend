import ProjectsList from "./ProjectsList";

  const Home = ({data, isLoading, errorMessage}) => {
  console.log(data);
  return (
    <div>
      { errorMessage && <div>{ errorMessage }</div> }
      { isLoading === true && 'Loading...' }
      { data && <ProjectsList data={data} title={'Projects'} /> }
    </div>
   );
   
}
 
export default Home;