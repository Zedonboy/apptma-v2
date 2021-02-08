import React, { useState } from "react";

export default function ServiceItem({ iconName, serviceName, value, onActive, onDeactive }) {
  const [active, setActive] = useState(false);
  return (
    <>
    
      <section className="p-2">
        <a
        href="#"
          onClick={(e) => {
            if(active){
              setActive(false)
              onDeactive(value)
            } else {
              setActive(true)
              onActive(value)
            } 
          }}
          className={`p-4 bg-white flex border-2 ${
            active ? "border-green-400" : "border-transparent"
          } rounded hover:shadow flex-col justify-center items-center ${
            active ? "text-green-400" : "text-gray-400"
          }`}
        >
          <i className={`fas ${iconName} fa-2x`}></i>
          <p>{serviceName}</p>
        </a>
      </section>
    </>
  );
}
