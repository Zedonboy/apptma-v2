import React, { useState } from "react";
import useLocalStorage from "../hooks/uselocalstorage";
import { Chip, TextField, Button } from "@material-ui/core";
import {Link} from "gatsby";
import Layout from "../components/layout";

export default function FillDetail() {
  let [selected, setSelected] = useLocalStorage("chosen_service", []);
  let [laundryQty, setLaundryQty] = useState(0);
  let [homeCleanQty, setHomeCleanQty] = useState(0);
  let [cookQty, setCookQty] = useState(0);
  const handleDelete = (value) => {
    let idx = selected.findIndex((v) => v.toLowerCase() == value);
    if (idx != -1) selected.splice(idx, 1);
    setSelected([...selected]);
  };
  
  return (
    <Layout>
      <section className="bg-green-100 w-full flex flex-col p-2 h-screen">
        <form>
          <div className="bg-white m-2 p-2 shadow rounded">
            <p>Your choosen service</p>
            {selected.map((v) => (
              <Chip
                variant="outlined"
                size="small"
                label={v}
                onDelete={() => {
                  handleDelete(v);
                }}
                color="primary"
              />
            ))}
          </div>
          {selected.includes("laundry") ? (
            <div className="bg-white m-2 p-2 shadow rounded">
              <p>Laundry</p>
              <TextField
                label="Number of Clothes"
                required
                helperText="1 cloth is N100"
                type="number"
                id="outlined-size-normal"
                value={laundryQty}
                onChange={(e) => {
                  if (isNaN(parseInt(e.target.value))) {
                    setLaundryQty(laundryQty);
                  } else {
                    setLaundryQty(parseInt(e.target.value));
                  }
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                  },
                }}
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </div>
          ) : null}
          {selected.includes("cooking") ? (
            <div className="bg-white m-2 p-2 shadow rounded">
              <p>Cooking</p>
              <TextField
                label="Number of Food"
                required
                helperText="A meal is N100"
                type="number"
                id="outlined-size-normal"
                value={cookQty}
                onChange={(e) => {
                  if (isNaN(parseInt(e.target.value))) {
                    setCookQty(cookQty);
                  } else {
                    setCookQty(parseInt(e.target.value));
                  }
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                  },
                }}
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </div>
          ) : null}
          {selected.includes("home cleaning") ? (
            <div className="bg-white m-2 p-2 shadow rounded">
              <p>Home Cleaning</p>
              <TextField
                label="Number of Rooms"
                required
                helperText="A room is N500"
                type="number"
                id="outlined-size-normal"
                value={homeCleanQty}
                onChange={(e) => {
                  if (isNaN(parseInt(e.target.value))) {
                    setHomeCleanQty(homeCleanQty);
                  } else {
                    setHomeCleanQty(parseInt(e.target.value));
                  }
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                  },
                }}
                variant="outlined"
                fullWidth
                margin="dense"
              />
            </div>
          ) : null}
        </form>
        <Link to="/userDetails">
          <Button
            onClick={(e) => {
              let orderForm = {
                services: [],
              };
              if (laundryQty > 0)
                orderForm.services.push({
                  name: "laundry",
                  qty: laundryQty,
                  unit: 100,
                });
              if (homeCleanQty > 0)
                orderForm.services.push({
                  name: "home cleaning",
                  qty: homeCleanQty,
                  unit: 200,
                });
              if (cookQty > 0)
                orderForm.services.push({
                  name: "Cook Meal",
                  qty: cookQty,
                  unit: 500,
                });

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
