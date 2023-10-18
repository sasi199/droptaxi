import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "emailjs-com";

const BookingForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    mobile: "",
    from: "",
    to: "",
    dateTime: null,
  };

  const [formData, setFormData] = useState(() => {
    // Retrieve form data from local storage or use initialFormData if not present
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    return storedFormData || initialFormData;
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Save form data to local storage whenever it changes
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateTimeChange = (dateTime) => {
    setFormData((prevData) => ({ ...prevData, dateTime }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile,
      from_location: formData.from,
      to_location: formData.to,
      date_time: formData.dateTime
        ? formData.dateTime.format("YYYY-MM-DD HH:mm:ss")
        : "",
    };

    try {
      const response = await emailjs.send(
        "service_b9ukk2i",
        "template_q45lqcf",
        emailParams,
        "n50L2fRrrahr6c-HI"
      );

      setFormData(initialFormData);
alert('Thank you for your booking! Succesfully')
      // Show a success toast message
      toast.success("Thank you for your booking!", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
      });
    } catch (error) {
      // Show an error toast message
      toast.error("Failed to submit the form. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <Container component="main" maxWidth="md" id="book">
      <div className="bg-white drop-shadow-md rounded-lg px-6 py-6 border border-primary mx-auto max-w-md">
        <Typography variant="h5" align="center" className="text-primary pb-6">
          Booking a Ride
        </Typography>

        <form onSubmit={handleSubmit} id="book">
          <Grid container spacing={2}>
            {/* First row: Name, Email */}
            <Grid item xs={12} md={6}>
              <TextField
                sx={{
                  backgroundColor: "#F5F5F5",
                  color: "#a99f16",
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#a99f16",
                  },
                  "& .MuiInputBase-root": {
                    height: 45,
                    fontSize: "14px",
                  },
                  "&:hover": {
                    backgroundColor: "#EEEDED",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&:hover fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1.34px solid #a99f16",
                    },
                  },
                }}
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                sx={{
                  backgroundColor: "#F5F5F5",
                  color: "#a99f16",
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#a99f16",
                  },
                  "& .MuiInputBase-root": {
                    height: 45,
                    fontSize: "14px",
                  },
                  "&:hover": {
                    backgroundColor: "#EEEDED",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&:hover fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1.34px solid #a99f16",
                    },
                  },
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            {/* Second row: From, To */}
            <Grid item xs={12} md={6}>
              <TextField
                sx={{
                  backgroundColor: "#F5F5F5",
                  color: "#a99f16",
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#a99f16",
                  },
                  "& .MuiInputBase-root": {
                    height: 45,
                    fontSize: "14px",
                  },
                  "&:hover": {
                    backgroundColor: "#EEEDED",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&:hover fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1.34px solid #a99f16",
                    },
                  },
                }}
                variant="outlined"
                required
                fullWidth
                id="from"
                label="Travel From"
                name="from"
                value={formData.from}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                sx={{
                  backgroundColor: "#F5F5F5",
                  color: "#a99f16",
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#a99f16",
                  },
                  "& .MuiInputBase-root": {
                    height: 45,
                    fontSize: "14px",
                  },
                  "&:hover": {
                    backgroundColor: "#EEEDED",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&:hover fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1.34px solid #a99f16",
                    },
                  },
                }}
                variant="outlined"
                required
                fullWidth
                id="to"
                label="Travel To"
                name="to"
                value={formData.to}
                onChange={handleChange}
              />
            </Grid>

            {/* Third row: Mobile, Date & Time */}
            <Grid item xs={12} md={6}>
              <TextField
                sx={{
                  backgroundColor: "#F5F5F5",
                  color: "#a99f16",
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#a99f16",
                  },
                  "& .MuiInputBase-root": {
                    height: 45,
                    fontSize: "14px",
                  },
                  "&:hover": {
                    backgroundColor: "#EEEDED",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&:hover fieldset": {
                      border: "1.3px solid #a99f16",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1.34px solid #a99f16",
                    },
                  },
                }}
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>
{/* 
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#a99f16",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#a99f16",
                    },
                    "& .MuiInputBase-root": {
                      height: 45,
                      fontSize: "14px",
                    },
                    "&:hover": {
                      backgroundColor: "#EEEDED",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "1.3px solid #a99f16",
                      },
                      "&:hover fieldset": {
                        border: "1.3px solid #a99f16",
                      },
                      "&.Mui-focused fieldset": {
                        border: "1.34px solid #a99f16",
                      },
                    },
                  }}
                  value={formData.dateTime}
                  onChange={handleDateTimeChange}
                  renderInput={(params) => (
                    <TextField
                      sx={{
                        backgroundColor: "#F5F5F5",
                        color: "#a99f16",
                        "& .MuiFormLabel-root.Mui-focused": {
                          color: "#a99f16",
                        },
                        "& .MuiInputBase-root": {
                          height: 45,
                          fontSize: "14px",
                        },
                        "&:hover": {
                          backgroundColor: "#EEEDED",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "1.3px solid #a99f16",
                          },
                          "&:hover fieldset": {
                            border: "1.3px solid #a99f16",
                          },
                          "&.Mui-focused fieldset": {
                            border: "1.34px solid #a99f16",
                          },
                        },
                      }}
                      {...params}
                      variant="outlined"
                      fullWidth
                      required
                      id="dateTime"
                      label="Pick Up Date & Time"
                      style={{ backgroundColor: "#a99f16" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid> */}
          </Grid>

          <div className="mt-6 flex justify-center items-center ">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              style={{ backgroundColor: "#a99f16" }}
            >
              Book Now
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default BookingForm;



