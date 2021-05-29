// import { createContext, useState, useEffect } from "react";
// import { listVehicles } from "../../graphql/queries";
// import { API } from "aws-amplify";

// const VehicleContext = createContext();

// const VehicleProvider = ({ children }) => {
//   const [vehicles, setVehicles] = useState();
//   console.log("vehicles: ", vehicles);
//   useEffect(() => {
//     fetchVehicles();
//     console.log("vehcileProviders");
//   }, []);
//   const fetchVehicles = async () => {
//     console.log("fetchVehicleMethod");
//     try {
//       const { data } = await API.graphql({
//         query: listVehicles,
//         authMode: "API_KEY",
//       });
//       const vehicles = data.listVehicles.items;
//       console.log("vehicles: ", vehicles);
//       setVehicles(vehicles);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <VehicleContext.Provider value={{ vehicles }}>
//       {children}
//     </VehicleContext.Provider>
//   );
// };

// export { VehicleContext, VehicleProvider };
