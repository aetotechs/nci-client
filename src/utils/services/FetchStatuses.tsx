import { useEffect, useState } from "react";
import {   GetStatuses } from "@/utils/hooks/api-routes";

export function FetchStatuses() {
  const [statuses, setStatuses] = useState<string[]>([]); 

  useEffect(() => {
    const fetchstatuses = async () => {
      try {
        const response = await fetch(GetStatuses);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const rawString = data[0]; 
            const cleanedStatuses = rawString
              .replace(/[\[\]]/g, "") 
              .split(",") 
              .map((item:any) => item.trim()); 
              setStatuses(cleanedStatuses);
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

    fetchstatuses();
  }, []); 

  return statuses;
}
