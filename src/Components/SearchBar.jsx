import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import {
  FormControl,
  Input,
  Button,
  // FormHelperText,
  Typography,
} from "@mui/material";
import JobItem from "./JobItem"; // Import JobItem for displaying job results
import "./SearchBar.css";

const SearchBar = ({
  FullTime = "Full Time",
  PartTime = "Part Time",
  Internship = "Internship",
  Contract = "Contract",
  Freelance = "Freelance",
}) => {
  const [SearchItem, setSearchItem] = useState("");
  const [JobList, setJobList] = useState([]);
  const [FilteredJobs, setFilteredJobs] = useState([]);
  const [searchClicked, setsearchClicked] = useState(false);
  const [menuItem, setMenuItem] = useState("");
  const [Loading, setLoading] = useState(true);
  const handleSelect = (type) => {
    setMenuItem(type);
  };

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setJobList(data.jobs);
        setFilteredJobs(data.jobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setsearchClicked(true);

    const filtered = JobList.filter((job) => {
      // Normalize job types to match the menuItem format
      const normalizeJobType = (type) => {
        switch (type) {
          case "full_time":
            return "Full Time";
          case "part_time":
            return "Part Time";
          case "contract":
            return "Contract";
          case "freelance":
            return "Freelance";
          case "internship":
            return "Internship";
          default:
            return type;
        }
      };

      // Check if properties exist before calling toLowerCase()
      const companyName = job.company_name
        ? job.company_name.toLowerCase()
        : "";
      const title = job.title ? job.title.toLowerCase() : "";
      const jobType = normalizeJobType(
        job.job_type ? job.job_type.toLowerCase() : ""
      );

      // Perform the filtering with non-nullable values
      const matchesSearch =
        companyName.includes(SearchItem.toLowerCase()) ||
        title.includes(SearchItem.toLowerCase());

      // Check if the jobType matches the selected menuItem
      const matchesType = !menuItem || jobType === menuItem;

      // Return true only if both conditions are met
      return matchesSearch && matchesType;
    });
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <div className="Container2">
        <Card sx={{ maxWidth: 360, marginTop: "100px", height: "auto" }}>
          <form>
            <FormControl>
              <Input
                type="text"
                value={SearchItem}
                onChange={handleSearchChange}
                placeholder="Search company name..."
              />
            </FormControl>
            <FormControl>
              <Button onClick={handleSearchClick}>Search</Button>
            </FormControl>
            <br />
          </form>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  {menuItem ? `${menuItem} ` : "type"}
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      handleSelect(FullTime);
                      popupState.close();
                    }}
                  >
                    Full Time
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleSelect(PartTime);
                      popupState.close();
                    }}
                  >
                    Part Time
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleSelect(Internship);
                      popupState.close();
                    }}
                  >
                    Internships
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleSelect(Contract);
                      popupState.close();
                    }}
                  >
                    Contract
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleSelect(Freelance);
                      popupState.close();
                    }}
                  >
                    Freelance
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Card>
      </div>
      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {searchClicked && (
            <div className="FilteredResults">
              {FilteredJobs.length > 0 ? (
                FilteredJobs.map((job) => (
                  <JobItem
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    company_name={job.company_name}
                    candidate_required_location={
                      job.candidate_required_location
                    }
                    job_type={job.job_type}
                    salary={job.salary}
                    onApply={() => {}}
                  />
                ))
              ) : (
                <Typography>No results found</Typography>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
