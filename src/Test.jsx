
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

import React, { useState } from "react";

export const SchoolForm = () => {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [data, setData] = useState([]);

  const handleSubmit = () => {
    const obj = {
      firstName: name,
      mobilenO: mobile,
      emaiL: email,
      Password: password,
    };
    setData([...data, obj]);
  };



  const handleDelete = (index) => {
    const deleteData = data.filter((item, ind) => ind != index);
    setData(deleteData);
  };

  return (
    <div>
      <h1>School Registration</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <TextField label="name" onChange={(e) => setName(e.target.value)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="mobile"
            type={"number"}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="email"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={4}></Grid>

        <Button variant="contained" color="error" onClick={handleSubmit}>
          Submit
        </Button>
        {/* <h1>name: {name}</h1>
        <h1>mobile: {mobile}</h1>
        <h1>email: {email}</h1>
        <h1>password: {password}</h1> */}
      </Grid>

      <Grid container spacing={1}>
        {data.map((item, index) => {
          return (
            <Card item xs={12} md={3}>
              <Card>
                <CardContent>
                  <h3>Name : {item.firstName} </h3>
                  <h3>Mobile no : {item.mobilenO} </h3>
                  <h3>Email : {item.emaiL} </h3>
                  <h3>Password : {item.Password} </h3>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    DELETE
                  </Button>
                </CardContent>
              </Card>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};