import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./JobItem.css";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
const JobItem = ({
  id,
  company_name,
  title,
  candidate_required_location,
  job_type,
  salary,
  onApply,
}) => {
  return (
    <>
      <div className="Container">
        <Card className="card" sx={{ backgroundColor: "blanchedalmond" }}>
          <CardContent>
            <Typography>{id} </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography>{company_name}</Typography>
            <Typography>{candidate_required_location}</Typography>
            <Typography>{job_type}</Typography>
            <Typography>{salary}</Typography>
          </CardContent>
          <CardActionArea>
            <Button
              sx={{ margin: "10px" }}
              variant="contained"
              onClick={() => onApply(company_name)}
            >
              Apply
            </Button>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default JobItem;
