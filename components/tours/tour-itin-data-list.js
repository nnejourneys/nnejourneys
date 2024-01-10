import React from "react";
import { Icon } from "@iconify/react";
export default function TourdataList({ datalist }) {
  return (
    <>
      <ul className="pl-0 mb-10 mt-4 tour-highlight">
        {datalist.map((item, index) => (
          <li className="liststyle mt-2" key={index}>
            <p className="mb-0 py-1 text-color"><Icon className="me-2 mb-1" icon="bi:patch-check-fill"/>{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
