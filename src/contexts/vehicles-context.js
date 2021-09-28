import { createContext, useState } from 'react';
import axios from 'axios'

const VehiclesContext = createContext();

const VehiclesProvider = ({children}) => {

  const [vehicles, setVehicles] = useState([]);

  const refreshVehicles = async () => {
    const { data } = await axios.get("http://www.mocky.io/v2/5eb553df31000060006994a8");

    setVehicles(data);
  }
  return (
    <VehiclesContext.Provider
      value={{
        vehicles,
        refreshVehicles
      }}
    >
      {children}
    </VehiclesContext.Provider>
  )
}

export { VehiclesContext, VehiclesProvider}