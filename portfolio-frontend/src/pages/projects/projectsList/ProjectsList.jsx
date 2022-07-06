import MainTitle from "../../../components/mainTitle/MainTitle";
import Table from "../../../components/table/Table";
import axiosInstance from "../../../apis/axios";
import { loader } from "../../../assets";
import { useState, useEffect } from "react";
import './projectsList.scss';

const Projects = () => {


  const [ projects, setProjects ] = useState([]);
  const [ error, setError ] = useState('');
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: "img", headerName: "Image", type: "image" },
    { field: "title", headerName: "Title", type: "text", mergedWithImg: true },
    { field: "link", headerName: "Link", type: "link" },
    { field: "date", headerName: "Date", type: "text" },
    { field: "actions", headerName: "Actions", type: "actions" },  
  ];

  useEffect(() => {

    const getProjects = async () => {

      setLoading(true)

      try
      {
        //axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`
        const response = await axiosInstance.get('/projects');

        console.log(response.data);

        setProjects(response.data.projects);

        setError('');

        setLoading(false);

      }
      catch (err)
      {
        console.log(err);

        setError(err.message);

        setProjects([]);

        setLoading(false);
      }

    }

    getProjects();

  }, []);

  const deleteProject = async (id) => {

    if (!window.confirm("Do you realy want to delete this project?")) return;

    setLoading(true);

    try
    {
      const response = await axiosInstance.delete(`/project/${id}`);

      console.log(response.data);

      if (response.data.deleted)
      {
        setProjects(projects.filter((project) => project.id !== id));
      }

      setError('');

      setLoading(false);

    }
    catch (err)
    {
      console.log(err);

      setError(err.message);

      setProjects([]);

      setLoading(false);
    }

  }

  return (
    <>
      <MainTitle title="Projects" link="/admin/projects/new" addNewButton="Add Project" />
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Projects List</h3>
            <i className='bx bx-search' ></i>
            <i className='bx bx-filter' ></i>
          </div>
          {loading && <img className="loader" src={loader} alt="loading..."/>}
          {!loading && error && <p style={{color: "red"}}>{error}</p>}
          {!loading && !error && projects?.length > 0 && <Table tableColumns={columns} tableData={projects} deleteItem={deleteProject} />}
          {!loading && !error && projects?.length <= 0 && <p>No Data Found</p>}
        </div>
      </div>
    </>
  )
}

export default Projects