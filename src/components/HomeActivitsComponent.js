


import React, { useEffect, useState } from 'react';
// import './HomeActivitsComponentsStyle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomeActivitsComponent() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch the latest activities from the backend
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
      return 'path/to/fallback/image.jpg'; // Fallback image on error
    }
  };

  return (
   
//     <section id="activities" className="activities">
//     <div className="container5">
//         <h2>Latest Activities</h2>
//         <h3 className="line"> the lorems fsfd sfbadfbsdf lkojnoilknoilk asdkjnklsdflksmksndkjvandlansdvksndvlaknkldbn oajrlkgnlksn</h3>
//         <div className="activity-list">
//             {activities.map((activity, index) => (
//                 <div className="activity-item" key={index}>
//                     <AsyncImage fileName={activity.afterImageName} fetchImage={fetchImage} />
//                     <h3>{activity.projectTitle}</h3>
//                     <p>{activity.description}</p>
//                     <Link to="/activits" className="activity-link">Click Here</Link>
//                 </div>
//             ))}
//         </div>
//     </div>
// </section>


<section id="activities" className="activities py-5">
    <div className="container">
        <h2 className="text-center mb-4">Latest Activities</h2>
        <h3 
            className="text-center mb-5" 
            style={{ 
                fontSize: '1em', // Default font size for large screens
                lineHeight: '1', 
                overflowWrap: 'break-word', 
                wordBreak: 'break-word',
            }}
        >
            The lorems fsfd sfbadfbsdf lkojnoilknoilk asdkjnklsdflksmksndkjvandlansdvksndvlaknkldbn oajrlkgnlksn
        </h3>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {activities.map((activity, index) => (
                <div className="col" key={index}>
                    <div className="card h-100" style={{ width: '18rem'}}> {/* Larger width and height for bigger screens */}
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
                            <p className="card-text">{activity.description}</p>
                            <Link to="/activities" className="btn btn-danger btn-sm" style={{padding:"10px"}}>Click Here</Link>
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


