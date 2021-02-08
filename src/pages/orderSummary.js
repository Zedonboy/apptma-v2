import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "gatsby";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Checkbox, ListItemIcon } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";
import Layout from "../components/layout";
import useLocalStorage from "../hooks/uselocalstorage";

export default function OrderSummary() {
  let [orderForm, setorderForm] = useLocalStorage("orderForm", {});
  return (
    <Layout>
      <section className="bg-green-100 w-full flex flex-col p-2 h-screen">
        <div className="bg-white m-2 p-2 shadow rounded">
          <p>Order Summary</p>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={orderForm?.user?.name} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Phone"
                secondary={orderForm?.user?.phone}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Address"
                secondary={orderForm?.user?.address}
              />
            </ListItem>
            <ListItem dense button>
              <ListItemIcon>
                <Checkbox edge="start" />
              </ListItemIcon>
              <ListItemText
                primary="Save User detail"
                secondary="For future reference"
              />
            </ListItem>
          </List>
          <Divider />
          <p className="mt-2 text-xl">Purchased Services</p>
          <List>
            {orderForm?.services?.map((v) => (
              <ListItem>
                <ListItemText primary={v.name} secondary={`Qty ${v.qty}`} />
                <ListItemSecondaryAction>
                  <p className="text-green-400 font-light text-base">
                    {v.unit * v.qty}
                  </p>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="bg-white m-2 p-2 shadow rounded">
          <List>
            <ListItem>
              <ListItemText
                primary="Total"
                secondary={(function () {
                  let total = orderForm?.services?.reduce((a, v) => {
                    return v.qty * v.unit + a;
                  }, 0);
                  return total;
                })()}
              />
              <ListItemSecondaryAction>
                <Link to="/orderConfirmed">
                  <Button variant="outlined" size="small" color="secondary">
                    Pay
                  </Button>
                </Link>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </section>
    </Layout>
  );
}
