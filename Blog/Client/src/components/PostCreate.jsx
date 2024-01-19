import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/api/v1/blog/post", {
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Typography variant="h3">Create Post</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginTop: "24px" }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={16}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Title"
                variant="outlined"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={16}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button sx={{ marginTop: "16px" }} variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default PostCreate;
