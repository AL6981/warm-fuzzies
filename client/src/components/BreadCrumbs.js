import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = () => (
  <>
    <div>
      <Link className="text-gray-lightest p-2" to="/home">
        Home
      </Link>
    </div>
    <hr />
  </>
);

export default BreadCrumbs;
