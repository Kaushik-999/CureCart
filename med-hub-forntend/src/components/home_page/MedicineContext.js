import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicineData, setMedicineData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
  const fetchMedicineData = async () => {
   
    try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const header = {
          token: token,
        };

        const response = await axios.get(
          "http://127.0.0.1:8000/pharmacy-vendor/get-medicine/",
          {
            headers: header,
          }
        );
        // console.log(response.data.meds)
        
        // console.log(list1);
        // console.log(date);
        
        // console.log(meds)
        setMedicineData(response.data.meds)
      } catch (e) {
        // console.log(e);
        
      } finally {
        setLoading(false);
      }
  };

 
    fetchMedicineData();
  }, []);

  return (
   <>
   {
      loading ? (<div className="vendor-invoices-loading-message">Loading...</div>)
    :(
    
    <MedicineContext.Provider value={ [medicineData, loading] }>
      {children}
    </MedicineContext.Provider>
    )}
    </>
    
    
    
  );

  
 
 
};
// const useGlobalContext =(MedicineContext)=> {
//     return useContext(MedicineContext)
//   }

//   export {MedicineContext,MedicineProvider}