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
            <img src="../../mh_rajon-removebg-preview.png" alt="" />
            <p>
              <small>Mehedi Hasan</small>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Cards;