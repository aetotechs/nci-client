import { useEffect, useState } from "react";
import {   GetBagTypes } from "@/utils/hooks/api-routes";

export function FetchBagTypes() {
  const [bagTypes, setBagTypes] = useState<string[]>([]); 

  useEffect(() => {
    const fetchbagtypes = async () => {
      try {
        const response = await fetch(GetBagTypes);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const rawString = data[0]; 
            const cleanedBags = rawString
              .replace(/[\[\]]/g, "") 
              .split(",") 
              .map((item:any) => item.trim()); 
              setBagTypes(cleanedBags);
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

    fetchbagtypes();
  }, []); 

  return bagTypes;
}
