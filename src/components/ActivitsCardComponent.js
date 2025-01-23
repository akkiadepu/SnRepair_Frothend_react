
import "./ActivitsCardStyle.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ActivitsCardComponent() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching project activities:', error);
      });
  }, []);


  const fetchImage = async (fileName) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${fileName}`, {
        responseType: 'blob',
      });
      const imageURL = URL.createObjectURL(response.data);
      return imageURL;
    } catch (error) {
      console.error('Error fetching image:', error);
      return 'path/to/fallback/image.jpg'; 
    }
  };

  return (
<>
<div className="project-container">
      {activities.map((activity, index) => (
        <div key={index} className="project1">
          <h2>{activity.projectTitle}</h2>
          <div className="image-wrapper1">
            <div className="image-item">
              <AsyncImage fileName={activity.beforeImageName} fetchImage={fetchImage} />
              <span className="label">before</span>
            </div>
            <div className="image-item">
              <AsyncImage fileName={activity.afterImageName} fetchImage={fetchImage} />
              <span className="label">after</span>
            </div>
          </div>
          <p>{activity.description}</p>
          <hr />
        </div>
      ))}
    </div>
</>
  );

  function AsyncImage({ fileName, fetchImage }) {
    const [imageSrc, setImageSrc] = useState(null);
  
    useEffect(() => {
      const loadImage = async () => {
        const imageURL = await fetchImage(fileName);
        setImageSrc(imageURL);
      };
  
      loadImage();
    }, [fileName, fetchImage]);
  
    return imageSrc ? <img src={imageSrc} alt="Project Image" /> : <p>Loading...</p>;
  }
}

export default ActivitsCardComponent;
