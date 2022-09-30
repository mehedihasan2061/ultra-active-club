import React from 'react';


const Activity = ({ activity, addToList }) => {
  
  const { body, time, picture, age, title } = activity;
  return (
    <div>
      <img className="p-3px" src={picture} alt="" />
      <h5 className="p-5px text-primary">{title}</h5>
      <p>{body}</p>
      <h6 className="p-5px">
        For Age: <span className="text-danger">{age}</span>
      </h6>
      <h6>
        Time required:{" "}
        <span className="border border-3 border-danger px-3 text-danger fs-6 text rounded-pill">
          {time}
        </span>
      </h6>
      <button onClick={() => addToList(time)} className="w-100 p-5px">
        Add To List
      </button>
    </div>
  );
};

export default Activity;