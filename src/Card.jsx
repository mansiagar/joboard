import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./Card.css";
export default function MediaCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home");
  };

  return (
    <div className="Container1">
      <Card sx={{ maxWidth: 360, marginTop: "100px" }} className="card1">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "30px",
              fontWeight: "200",
            }}
          >
            WelCome Our Job Board
          </Typography>
        </CardContent>

        <CardMedia
          height="235"
          component="img"
          image="/img1.jpg"
          title="Job Image"
        />

        <CardActions>
          <Button size="small" variant="contained" onClick={handleClick}>
            Search Jobs
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
