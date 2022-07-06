import { useState, useEffect } from 'react';
import axiosInstance from '../../../apis/axios';
import { loader } from '../../../assets'
import { BASE_URL } from '../../../apis/axios';
import './work.scss'

const Work = () => {

	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getProjects = async () => {

			setLoading(true);

			try
			{
				const { data } = await axiosInstance.get('/projects');

				setProjects(data.projects);
			}
			catch (error)
			{
				console.log(error);
			}
			finally
			{
				setLoading(false);
			}

		}
		
		getProjects();

	}, []);

  return (
    <section className="portfolio" id="portfolio">
		<div className="heading">
			<h3>Portfolio</h3>
			<h2>My Amazing Work</h2>
			<p>Most common methods for designing websites that work well on desktop is <br /> responsive and adaptive design</p>
		</div>

		  <div className="portfolio-content">
			  
			{
				loading ? <img className="loader" src={loader} alt="loading..."/> : projects.map((project, index) => {
					return (
						<div className="col" key={index}>
							<img src={`${BASE_URL}/${project.img}`} alt='' />
							<div className="layer">
								<h3>{project.title}</h3>
								<h5><a href={project.link} rel="noreferrer" target="_blank" style={{color: "white"}}>Vist Site</a></h5>
								<h5 className='git'><a href={project.link} rel="noreferrer" target="_blank" style={{color: "white"}}>Github</a></h5>
							</div>
						</div>
					)
				})
			}

		</div>
	</section>
  )
}

export default Work