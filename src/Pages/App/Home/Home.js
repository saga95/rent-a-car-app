import { API } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { listVehicles } from "../../../graphql/queries";
import listVehiclesAction from "../Actions/Vehicles/listVehicles.action";

export default function Home() {
  // const [vehicles, setVehicles] = useState();
  
  const vehicles = listVehiclesAction()
  useEffect(() => {
  });
  console.log('vehicles: ',vehicles);
  return (
    <div>
      <div className="carousel">
        <h2>Looking for a reat a car ?</h2>
        <h4>You are in the right place!</h4>
      </div>
      <div>List rent cars</div>
    </div>
  );
}
