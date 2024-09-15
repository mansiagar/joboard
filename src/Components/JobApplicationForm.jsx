import React, { useState, useEffect } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JobApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [FormData, SetFormData] = useState(() => {
    const savedData = localStorage.getItem("FormData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { company_name } = location.state || {};
  useEffect(() => {
    localStorage.setItem("FormData", JSON.stringify(FormData));
  }, [FormData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    } else {
      alert("your application Submitted");
      navigate("/");
    }

    const newEntry = { name, email, resume };
    SetFormData([...FormData, newEntry]);

    // Reset all form fields after submission
    setName("");
    setEmail("");
    setResume("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal">
        <FormHelperText
          sx={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}
        >
          Apply for {company_name}
        </FormHelperText>

        <Input
          required
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          required
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Input
          id="resume"
          type="file"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default JobApplicationForm;
