import { useEffect, useState } from "react";
import {  GetWareHouses } from "@/utils/hooks/api-routes";

export function FetchWareHouses() {
  const [warehouses, setwarehouses] = useState<string[]>([]); 

  useEffect(() => {
    const fetchwarehouses = async () => {
      try {
        const response = await fetch(GetWareHouses);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const rawString = data[0]; 
            const cleanedWareHouses = rawString
              .replace(/[\[\]]/g, "") 
              .split(",") 
              .map((item:any) => item.trim()); 
              setwarehouses(cleanedWareHouses);
          } else {
            console.error("Invalid response format:", data);
          }
        } else {
          console.error("Failed to fetch bag weights:", response.statusText);
        }
      } catch (error) {
        console.error("Error while fetching bag weights:", error);
      }
    };

    fetchwarehouses();
  }, []); 

  return warehouses;
}
