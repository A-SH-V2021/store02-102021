import React from "react";
import {useParams} from 'react-router-dom'

const Productdetails = () => {
  const {id} = useParams
  console.log(useParams());
  return (
    <div>
      <h2>Details page</h2>
    </div>
  );
};

export default Productdetails;
