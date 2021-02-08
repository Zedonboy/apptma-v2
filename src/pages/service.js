import React, { useState } from "react";
import ServiceItem from "../components/service";
import { Button } from "@material-ui/core";
import useLocalStorage from "../hooks/uselocalstorage";
import {Link} from "gatsby";
import Layout from "../components/layout";

const services = ["Laundry", "Cooking", "Home Cleaning"];
const serviceIcon = ["fa-tshirt", "fa-utensils", "fa-broom"];
export default function Service() {
  let [selected, setSelected] = useState([]);
  let activehandler = (value) => {
    if (selected.includes(value)) return;
    selected.push(value);
    setSelected([...selected]);
  };

  let deactiveHandler = (value) => {
    let idx = selected.findIndex((v) => v.toLowerCase() == value);
    if (idx != -1) selected.splice(idx, 1);
    setSelected([...selected]);
  };

  return (
    <Layout>
      <section className="bg-green-100 w-full flex flex-col h-screen">
        <section className="flex flex-col h-full justify-center items-center p-2">
          <p>Choose your service</p>
          <div className="w-full flex mb-4 flex-wrap p-2 border border-green-200">
            {services.map((v, i) => (
              <div className="w-2/4 md:w-1/4">
                <ServiceItem
                  onActive={activehandler}
                  onDeactive={deactiveHandler}
                  value={services[i].toLowerCase()}
                  serviceName={v}
                  iconName={serviceIcon[i]}
                />
              </div>
            ))}
          </div>
          <Link to="/fillDetails">
            <Button
              onClick={(e) => {
                window.localStorage.setItem(
                  "chosen_service",
                  JSON.stringify(selected)
                );
              }}
              disabled={selected.length == 0}
              variant="contained"
              color="secondary"
            >
              Next
            </Button>
          </Link>
        </section>
      </section>
    </Layout>
  );
}
