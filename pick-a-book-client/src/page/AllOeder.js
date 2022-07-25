import axios from "axios";
import React, { useEffect, useState } from "react";
import AllOrderForm from "../component/AllOrder.js/AllOrderForm";
import SubNav from "../component/SubNav/SubNav";
import UseAuth from "../Hook/UseAuth";
import { LayoutContiner } from "../style/MetariulUiStyle";


const AllOeder = () => {
  const [Orders, setOrders] = useState([]);

  const { user } = UseAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:7000/adminAllOrder`)
      .then((response) => {
        // handle success
        setOrders(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [user]);


console.log(Orders);

  return (
    <LayoutContiner>
      <SubNav project={"ALL ORDER"} />
      <AllOrderForm Orders={Orders} />
    </LayoutContiner>
  );
};

export default AllOeder;
