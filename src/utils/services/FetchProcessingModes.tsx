import { useEffect, useState } from "react";
import {   GetProcessingModes } from "@/utils/hooks/api-routes";

export function FetchProcessingModes() {
  const [processingmodes, setProcessingModes] = useState<string[]>([]); 

  useEffect(() => {
    const fetchmodes = async () => {
      try {
        const response = await fetch(GetProcessingModes);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const rawString = data[0]; 
            const cleanedModes = rawString
              .replace(/[\[\]]/g, "") 
              .split(",") 
              .map((item:any) => item.trim()); 
              setProcessingModes(cleanedModes);
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

    fetchmodes();
  }, []); 

  return processingmodes;
}
