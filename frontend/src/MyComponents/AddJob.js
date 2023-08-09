import React, { useState } from "react";
import axios from "axios";

export const AddJob = ({ addJob }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [sal, setSal] = useState("");
  const [time, setTime] = useState("");
  const [loc, setLoc] = useState("");
  const [category, setCategory] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [postedBy, setPostedBy] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!title || !desc || !sal || !time || !loc || !category || !mobileNo || !email || !postedBy) {
      alert("Fields cannot be blank");
    } else {
      const newJobData = {
        title,
        description: desc,
        salary: parseInt(sal),
        time,
        location: loc,
        category,
        mobile_no: mobileNo,
        email,
        posted_by: postedBy,
      };

      try {
        console.log("Job added successfully send data:", newJobData);
        const response = await axios.post("http://localhost:5000/jobs", newJobData);
        console.log("Job added successfully responce:", response.data);
        addJob(response.data); // Update the parent component with the new job data

        // Reset the form fields after successful submission
        setTitle("");
        setDesc("");
        setSal("");
        setTime("");
        setLoc("");
        setCategory("");
        setMobileNo("");
        setEmail("");
        setPostedBy("");
      } catch (error) {
        console.error("Error adding job:", error);
      }
    }
  };

  const customCardStyle = {
    width: "50%",
    borderRadius: "40px",
    left: "50%",
    transform: "translate(-50%, -0%)",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Transparent white background
  };

  const customLabelStyle = {
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: "5px",
  };

  const customInputStyle = {
    width: "100%",
    marginBottom: "15px",
  };

  const customButtonStyle = {
    backgroundColor: "rgb(128, 0, 0)",
    borderRadius: "20px",
    fontWeight: "bold",
    height: "45px",
    width: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };

  return (
    <div className="container my-3">
      <div className="card" style={customCardStyle}>
        <div className="card-body">
          <h3 className="card-title text-center">Add new Domestic Job</h3>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label" style={customLabelStyle}>
                Job Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                style={customInputStyle}
                id="title"
                name="title" 
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label" style={customLabelStyle}>
                Job Description
              </label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-control"
                style={customInputStyle}
                id="desc"
                name="desc"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loc" className="form-label" style={customLabelStyle}>
                Location
              </label>
              <input
                type="text"
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                className="form-control"
                style={customInputStyle}
                id="loc"
                name="loc" 
              />
            </div>

            {/* ROW2 */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="sal" className="form-label" style={customLabelStyle}>
                  Salary/month
                </label>
                <input
                  type="number"
                  value={sal}
                  onChange={(e) => setSal(e.target.value)}
                  className="form-control"
                  style={customInputStyle}
                  id="sal"
                  name="sal" 
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="time" className="form-label" style={customLabelStyle}>
                  Time
                </label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-control"
                  style={customInputStyle}
                  id="time"
                  name="time" 
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="category" className="form-label" style={customLabelStyle}>
                  Category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-control"
                  style={customInputStyle}
                  id="category"
                  name="category" 
                />
              </div>
            </div>

            {/* ROW3 */}
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="postedBy" className="form-label" style={customLabelStyle}>
                  Posted By
                </label>
                <input
                  type="text"
                  value={postedBy}
                  onChange={(e) => setPostedBy(e.target.value)}
                  className="form-control"
                  style={customInputStyle}
                  id="postedBy"
                  name="postedBy" 
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="mobileNo" className="form-label" style={customLabelStyle}>
                  Mobile Number
                </label>
                <input
                  type="number"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="form-control"
                  style={customInputStyle}
                  id="mobileNo"
                  name="mobileNo"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label" style={customLabelStyle}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  style={customInputStyle}
                  id="email"
                  name="email" 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-sm btn-success" style={customButtonStyle}>
              Add Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
