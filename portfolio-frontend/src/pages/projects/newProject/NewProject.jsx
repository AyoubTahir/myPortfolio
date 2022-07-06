import MainTitle from '../../../components/mainTitle/MainTitle';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axios";
import './newProject.scss';

const NewProject = () => {

    const [ values, setValues ] = useState({ title: '', link: '', date: '', img: null, });
    const [ submited, setSubmited ] = useState(false);
    const navigate = useNavigate();

    const handleImage = (e) => {

        const selectedImage = e.target.files[0];
        //setValues({ ...values, img: URL.createObjectURL(selectedImage)});
        setValues({ ...values, img: selectedImage });

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSubmited(true);

        if(!values.title || !values.link || !values.date || !values.img) return

        const formData = new FormData();

        formData.append("title", values.title);
        formData.append("img", values.img);
        formData.append("link", values.link);
        formData.append("date", values.date);


        try
        { 
            const response = await axiosInstance.post('/project', formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            console.log(response.data)

            navigate('/admin/projects');

        }
        catch (err)
        {
            console.log(err)
        }
    }
  return (
    <>
      <MainTitle title="New Project" />
      <div className="table-data">
        <div className="order">
            <div className="head">
            <h3>Add New Project</h3>
            <i className='bx bx-search' ></i>
            <i className='bx bx-filter' ></i>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label htmlFor='project-title' >Title: </label>
                              <input className='fd' type="text" id='project-title' value={values.title} onChange={(e) => { setValues({ ...values, title: e.target.value}) }} />
                        { submited && !values.title && <span style={{ color: "red", display: "block", marginLeft: "75px", fontSize: "12px" }}>Title is required</span> }
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='project-link' >Link: </label>
                        <input className='fd' type="url" id='project-link' value={values.link} onChange={(e) => { setValues({ ...values, link: e.target.value }) }} />
                        { submited && !values.link && <span style={{ color: "red", display: "block", marginLeft: "75px", fontSize: "12px" }}>Link is required</span> } 
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='project-date' >Date: </label>
                        <input className='fd' type="date" id='project-date' value={values.date} onChange={(e) => { setValues({ ...values, date: e.target.value }) }} />
                        { submited && !values.date && <span style={{ color: "red", display: "block", marginLeft: "75px", fontSize: "12px" }}>Date is required</span> }
                    </div>
                    <div className="form-inputs">
                        <label htmlFor='project-image' >Image: </label>
                        <input type="file" id='project-image' onChange={handleImage} />
                        { submited && !values.img && <span style={{ color: "red", display: "block", marginLeft: "75px", fontSize: "12px" }}>Image is required</span> }
                    </div> 
                    <div className='form-inputs' >
                        <button type="submit" className="btn-download">
                            <span className="text">Submit</span>
                        </button>
                    </div>
                </form>  
            </div>
        </div>
      </div>
    </>
  )
}

export default NewProject