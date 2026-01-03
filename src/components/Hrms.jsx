import React, { useState } from "react";
import axios from "axios";

export const Hrms = () => {
  const [error, setError] = useState("");
  // const [success , setSuccess] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    MiddleName: "",
    LastName: "",
    gender: "",
    skills: [],
    fatherName: "",
    fathermiddleName: "",
    fatherLastName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    degree: "",
    university: "",
    college: "",
    AddressDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({ ...formData, skills: [...formData.skills, value] });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Name) {
      setError("First Name is required");
      return;
    }
    if (!formData.MiddleName) {
      setError("Middle Name is Required");
      return;
    }
    if (!formData.LastName) {
      setError("Last Name is Required");
      return;
    }
    if (!formData.gender) {
      setError("Gender is Required");
      return;
    }
    if (formData.skills.length === 0) {
      setError("Please select at least one Skill");
      return;
    }
    if (!formData.bankName) {
      setError("Bank Name is Required");
      return;
    }
    if (!formData.accountNumber) {
      setError("Account Number is Required");
      return;
    }
    if (!formData.ifscCode) {
      setError("IFSC Code is Required");
      return;
    }
    if (!formData.degree) {
      setError("Degree is Required");
      return;
    }
    if (!formData.university) {
      setError("University Name is Required");
      return;
    }
    if (!formData.AddressDetails) {
      setError("Address is Required");
      return;
    }

    setError("");
    setShowPopup(true);

    await axios.post("http://localhost:5000/api/employees", formData);
    // alert("Employee Data Saved Successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ top: 40, position: "absolute", zIndex: -1 }}
    >
      {error && (
        <div style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}>
          ⚠️ {error}
        </div>
      )}

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "60px",
              borderRadius: "8px",
              textAlign: "center",
              width: "300px",
              height: "300px",
            }}
          >
            <h3 style={{ color: "green" }}>✅ Success</h3>
            <p>Employee data saved successfully</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
      <fieldset>
        <legend style={{ color: "red" }}>Basic Details</legend>

        {/* ROW 1 - Name Inputs */}
        <div className="maincontainer">
          <div>
            <label>First Name*</label>
            <br />
            <input
              name="Name"
              autoComplete="new-password"
              onChange={handleChange}
              id="inputbox"
            />
          </div>

          <div>
            <label>Middle Name*</label>
            <input
              name="MiddleName"
              autoComplete="new-password"
              onChange={handleChange}
              id="inputbox"
            />
          </div>

          <div>
            <label>Last Name*</label>
            <br />
            <input
              name="LastName"
              autoComplete="new-password"
              onChange={handleChange}
              id="inputbox"
            />
          </div>
        </div>

        {/* ROW 2 - Gender + Skills */}
        <div className="row-2">
          <div>
            <label>Gender*</label>
            <select name="gender" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="English"
                onChange={handleCheckbox}
              />
              English
            </label>
            <label>
              <input type="checkbox" value="Hindi" onChange={handleCheckbox} />
              Hindi
            </label>
          </div>
        </div>
      </fieldset>

      {/* //family details */}
      <fieldset>
        <legend style={{ color: "red" }}>Family Details</legend>
        <div className="maincontainer">
          <div>
            <label>Father Name*</label>
            <br />
            <input
              name="fatherName"
              autoComplete="new-password"
              id="inputbox"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Father Middle Name*</label> <br />
            <input
              name="fathermiddleName"
              autoComplete="new-password"
              id="inputbox"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Father Last Name*</label> <br />
            <input
              name="fatherLastName"
              autoComplete="new-password"
              id="inputbox"
              onChange={handleChange}
            />
          </div>
        </div>
      </fieldset>
      <br />

      <fieldset>
        <legend style={{ color: "red" }}>Bank Details</legend>
        <div className="maincontainer">
          <div>
            <label>Bank</label>
            <br />
            <select name="bankName" onChange={handleChange}>
              <option value="">Select Bank</option>
              <option value="SBI">SBI</option>
              <option value="ICICI">ICICI</option>
              <option value="HDFC">HDFC</option>
            </select>
          </div>
          <div>
            <label>Account Number*</label> <br />
            <input
              name="accountNumber"
              autoComplete="new-password"
              id="inputbox"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>IFSC Code*</label> <br />
            <input
              name="ifscCode"
              autoComplete="new-password"
              id="inputbox"
              onChange={handleChange}
            />
          </div>
        </div>
      </fieldset>
      <br />

      <fieldset>
        <legend style={{ color: "red" }}>Education Details</legend>
        <div className="maincontainer">
          <select name="degree" onChange={handleChange}>
            <option value="">Select Degree</option>
            <option value="BCA">BCA</option>
            <option value="BTech">B.Tech</option>
            <option value="MCA">MCA</option>
          </select>
        </div>
        <div>
          <label>University*</label> <br />
          <input
            name="university"
            autoComplete="new-password"
            id="inputbox"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>College*</label> <br />
          <input
            name="college"
            autoComplete="new-password"
            id="inputbox"
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <br />

      <fieldset>
        <legend style={{ color: "red" }}>Address Details*</legend>
        <textarea
          name="AddressDetails"
          rows="4"
          onChange={handleChange}
        ></textarea>
      </fieldset>

      <button type="submit" id="button">
        Submit
      </button>
    </form>
  );
};
