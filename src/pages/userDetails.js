import React from "react";
import { TextField, Button } from "@material-ui/core";
import {Link} from "gatsby";
import Layout from "../components/layout";

export default function UserDetails() {
  let name = "";
  let address = "";
  let phone = "";
  return (
    <Layout>
      <section className="bg-green-100 w-full flex flex-col p-2 h-screen">
        <div className="bg-white m-2 p-2 shadow rounded">
          <p>Your details</p>
          <TextField
            label="Name"
            required
            id="outlined-size-normal"
            onChange={(e) => {
              name = e.target.value;
            }}
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            label="Phone"
            required
            type="tel"
            id="outlined-size-normal"
            variant="outlined"
            onChange={(e) => {
              phone = e.target.value;
            }}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Address"
            required
            id="outlined-size-normal"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              address = e.target.value;
            }}
            margin="dense"
          />
        </div>
        <Link to="/orderSummary">
          <Button
            onClick={(e) => {
              let orderFormString = window.localStorage.getItem("orderForm");
              let orderForm = JSON.parse(orderFormString);
              let user = { name, phone, address };
              orderForm.user = user;
              window.localStorage.setItem(
                "orderForm",
                JSON.stringify(orderForm)
              );
            }}
            className="m-2"
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
