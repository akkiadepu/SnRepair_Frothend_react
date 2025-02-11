
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomeActivitsComponent() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/latest-activities`);
        setActivities(response.data.slice(0, 4)); // Display only the latest 4 activities
      } catch (error) {
        console.error('Error fetching project activities:', error);
      }
    };

    fetchActivities();

    // Set interval to refetch data every 10 seconds
    const interval = setInterval(() => {
      fetchActivities();
    }, 10000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
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
   
<section id="activities" className="activities py-5">
    <div className="container">
        <h2 className="text-center mb-4">Latest Activities</h2>
        <h3 
            className="text-center mb-5" 
            style={{ 
                fontSize: '1em',
                lineHeight: '1', 
                overflowWrap: 'break-word', 
                wordBreak: 'break-word',
            }}
        >
           Our activities are comprehensive diagnostics, system upgrades, maintenance, repairs, and restoration services.
        </h3>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
            {activities.map((activity, index) => (
                <div className="col" key={index}>
                    <div className="card custom-card-lg1">
                        <div className="ratio ratio-1x1">
                            <AsyncImage 
                                fileName={activity.afterImageName} 
                                fetchImage={fetchImage} 
                                className="card-img-top" 
                                style={{ height: '10rem', objectFit: 'cover' }} 
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{activity.projectTitle}</h5>
                            <p className="card-text" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: '1.5',
                maxHeight: '3rem'
            }}>{activity.description}</p>
                            <Link to="/activits" className="btn btn-danger btn-sm" style={{padding:"10px"}}>Click Here</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>







    
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

    return imageSrc ? <img src={imageSrc} alt="Project After Image" /> : <p>Loading...</p>;
  }
}

export default HomeActivitsComponent;


