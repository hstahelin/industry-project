import React, { useState } from "react";

const UserInfoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="user-info-form" onSubmit={handleSubmit}>
      <h1 className="heading">Let's get to know each other little better.</h1>
      <label className="form-group">
        <b>Name</b>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          placeholder="John"
          required
        />
      </label>
      <label className="form-group">
        <b>Age</b>
        <select
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="input--dropdown form-group-select"
          required
        >
          <option value="" disabled>
            Select age range
          </option>
          <option value="Under 18">Under 18</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
          <option value="55-64">55-64</option>
          <option value="65 and older">65 and older</option>
        </select>
      </label>
      <label className="form-group">
        <b>Gender</b>
        <div className="radio-group">
          <label className="radio-subgroup">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label className="radio-subgroup">
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label className="radio-subgroup">
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
            />{" "}
            Other
          </label>
          <label className="radio-subgroup">
            <input
              type="radio"
              name="gender"
              value="Prefer not to say"
              onChange={handleChange}
            />{" "}
            Prefer not to say
          </label>
        </div>
      </label>
      <label className="form-group">
        <b>Occupation</b>
        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="input--dropdown"
          required
        >
          <option value="">Select occupation</option>
          <option value="Student">Student</option>
          <option value="Healthcare Professional">
            Healthcare Professional
          </option>
          <option value="Education & Training">Education & Training</option>
          <option value="Technology">Technology</option>
          <option value="Business & Finance">Business & Finance</option>
          <option value="Retail & Customer Service">
            Retail & Customer Service
          </option>
          <option value="Arts & Entertainment">Arts & Entertainment</option>
          <option value="Engineering & Manufacturing">
            Engineering & Manufacturing
          </option>
          <option value="Legal">Legal</option>
          <option value="Public Service">Public Service</option>
          <option value="Hospitality & Tourism">Hospitality & Tourism</option>
          <option value="Freelancer/Consultant">Freelancer/Consultant</option>
          <option value="Homemaker">Homemaker</option>
          <option value="Retired">Retired</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="form-group">
        <b>Email</b>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
          placeholder="abc@xyz.com"
        />
      </label>
      <label className="form-group">
        <b>Location</b>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="input"
          placeholder="Location"
          required
        />
      </label>
      <button type="submit" className="btn btn--submit">
        Start Quiz
      </button>
    </form>
  );
};

export default UserInfoForm;
