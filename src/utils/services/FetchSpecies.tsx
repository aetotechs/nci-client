import { useEffect, useState } from "react";
import {  GetSpecies } from "@/utils/hooks/api-routes";

export function FetchSpecies() {
  const [species, setSpecies] = useState<string[]>([]); 

  useEffect(() => {
    const fetchspecies = async () => {
      try {
        const response = await fetch(GetSpecies);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const rawString = data[0]; 
            const cleanedSpecies = rawString
              .replace(/[\[\]]/g, "") 
              .split(",") 
              .map((item:any) => item.trim()); 
              setSpecies(cleanedSpecies);
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

    fetchspecies();
  }, []); 

  return species;
}
