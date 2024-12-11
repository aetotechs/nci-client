import { useEffect, useState } from "react";
import { GetBagWeights } from "@/utils/hooks/api-routes";

export function FetchBagWeights() {
  const [bagweights, setBagWeights] = useState<string[]>([]); 

  useEffect(() => {
    const fetchBagWeights = async () => {
      try {
        const response = await fetch(GetBagWeights);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            const rawString = data[0]; 
            const cleanedWeights = rawString
              .replace(/[\[\]]/g, "") 
              .split(",") 
              .map((item:any) => item.trim()); 
            setBagWeights(cleanedWeights);
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

    fetchBagWeights();
  }, []); 

  return bagweights;
}
