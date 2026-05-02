import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import routesData from "./routesData";

const Links = () => {
  return (
    <Fragment>
      <ul>
        {routesData.map((router, index) => {
          return (
            <li key={index}>
              <Link to={router.path}>{router.title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Links;
