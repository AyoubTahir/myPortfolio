import MainTitle from '../../../components/mainTitle/MainTitle';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance, { BASE_URL } from "../../../apis/axios";
import { loader } from '../../../assets';
import './editProject.scss';

const EditProject = () => {

    const { id } = useParams();
    const [ values, setValues ] = useState({ title: '', link: '', date: '', img: null, });
    const [submited, setSubmited] = useState(false);
    const [error, setError] = useState('');
    const [imgChanged, setImgChanged] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleImage = (e) => {

        const selectedImage = e.target.files[0];

        setImgChanged(URL.createObjectURL(selectedImage));
        
        setValues({ ...values, img: selectedImage });

    }

    useEffect(() => {

        const getProject = async () => {

            setLoading(true);
    
            try
            {
                const response = await axiosInstance.get(`/project/${id}`);

                console.log(response.data);
                
                setValues(response.data.project);

                setError('');

            }
            catch (err)
            {
                console.log(err);

                setError(err.message);
            }
            finally
            {
                setLoading(false);
            }
    
        }
    
        getProject();
    
      }, [id]);

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
            const response = await axiosInstance.post(`/project/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
              });

            console.log(response.data);

            setError('');

            navigate('/admin/projects');
        }
        catch (err)
        {
            console.log(err);

            //setError(err.message);
        }
        
    }

    if (error)
        
        return (
            <>
                <MainTitle title="New Project" />
                <div className="table-data">
                    <div className="order">
                        <div className="head" style={{ justifyContent: "center", marginBottom: "0" }}>
                        <h3 style={{ marginRight: "0", color: "red"}}>Project Not Found</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    
    return (
        <>
        <MainTitle title="New Project" />
        <div className="table-data">
            <div className="order">
                <div className="head">
                    <h3>Add New Project</h3>
                </div>
                {loading && <img className="loader" src={loader} alt="loading..."/>}
                {!loading && !error && (<div className='form-container'>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" >
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
                        <div className="form-inputs" style={{display: "flex", alignItems: "center"}}>
                            <label htmlFor='project-image' >Image: </label>
                            <img src={ imgChanged ? imgChanged : (!values?.img ? '#' : `${BASE_URL}/${values.img}`)} alt="" width="100px" height="100px" style={{ marginLeft: "20px" }} />    
                            <input type="file" id='project-image' onChange={handleImage} />
                            { submited && !values.img && <span style={{ color: "red", display: "block", marginLeft: "75px", fontSize: "12px" }}>Image is required</span> }
                        </div> 
                        <div className='form-inputs' >
                            <button type="submit" className="btn-download">
                                <span className="text">Submit</span>
                            </button>
                        </div>
                    </form>  
                </div>)}
            </div>
        </div>
        </>
    )
}

export default EditProject