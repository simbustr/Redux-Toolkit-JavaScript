import React, { useState } from "react";

const DashboardPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    place: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = (event) =>{
    event.preventDefault(); 
    console.log(formData,"kkkkk")
    setSubmitted(true);
  }

  return (
    <div className="form-wrp">


<div>
       
{submitted && ( // Conditionally render the form data if the form has been submitted
        <div>
          {Object.entries(formData).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      )}
      </div>
     


      <form onSubmit={handelSubmit}>
        <div className="form-control">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handelChange}
          />
        </div>
        <div className="form-control">
          <label>Place</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handelChange}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default DashboardPage;
