import { useState, useEffect } from "react";
import axios from "axios";
import { apiHost } from "../config";

const useGet = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const fetchdata=async (url,{ params = {}, query = {}, headers = {} }={})=>{
   try {
        const token = sessionStorage.getItem("authToken");
        
        const response = await axios.get(`${apiHost}/${url}`, {
          params: { ...params, ...query },
          headers: {
            Authorization: `Bearer ${token}`, 
            ...headers, 
          },
        });        
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
}
  return { data, loading, error ,fetchdata };
};

export default useGet;
