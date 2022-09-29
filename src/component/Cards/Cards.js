import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Cards.css'

const Cards = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setActivities(data))
    },[])
    return (
      <div className="container">
        <div className="card-container">
          {activities.map((activity) => (
            <Activity activity={activity} key="activity.id"></Activity>
          ))}
        </div>
        <div className="info-container">
          <div>
                <img src= "../../mh_rajon-removebg-preview.png" alt="" />
            <p>
              <small>Mehedi Hasan</small>
            </p>
            <p>
              <small>Mymensingh,Bangladesh</small>
            </p>
          </div>
          <div className="personal-info">
            <div>
              <p>60kg</p>
              <h6>Weight</h6>
            </div>
            <div>
              <p>5.8</p>
              <h6>Height</h6>
            </div>
            <div>
              <p>22 Y</p>
              <h6>Age</h6>
            </div>
          </div>
          {/* add a break  */}
          <div>
            <h6 className="p-2 bg-primary text-white shadow-lg rounded my-3">
              Add a Break
            </h6>
            <div className="timer">            
              <p className="time">10m</p>              
              <p className="time">15m</p>
              <p className="time">20m</p>
              <p className="time">30m</p>
            </div>
            <div></div>
          </div>

          <div>
            <h5 className="p-2 bg-primary text-white rounded my-3">
              Exercise Detail
            </h5>
            <small className="time-calc">Exercise time : 0 min</small>
            <br />
            <small className="time-calc">Break time : 0 min</small>
          </div>
          <button className="activity-btn">Activity Complete</button>
        </div>
      </div>
    );
};

export default Cards;