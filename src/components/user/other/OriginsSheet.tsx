import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const fetchCountries = async () => {
  return [
    { id: 1, name: 'Brazil' },
    { id: 2, name: 'Colombia' },
    { id: 3, name: 'Bolivia' },
    { id: 4, name: 'Mexico' },
    { id: 5, name: 'Peru' },
    { id: 6, name: 'India' },
    { id: 7, name: 'Sumatra' },
    { id: 8, name: 'Papua' },
    { id: 9, name: 'Sulawesi' },
    { id: 10, name: 'Java' },
    { id: 11, name: 'Burundi' },
    { id: 12, name: 'Kenya' },
    { id: 13, name: 'Tanzania' },
    { id: 14, name: 'Uganda' },
    { id: 15, name: 'Ethiopia' }
  ];
};

export function RegionsSheet() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    async function loadCountries() {
      const data = await fetchCountries();
      setCountries(data);
    }
    loadCountries();
  }, []);

  const HandleClick = (name: string) => {
    navigate(`/region/${name}`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <p>Regions</p>
      </PopoverTrigger>
      <PopoverContent className="md:w-[90vw] md:mx-14 md:mt-9 p-0 overflow-auto max-h-[80vh]">
        <div className="flex flex-col gap-2 md:grid md:grid-cols-4 mt-5 mb-10 md:mx-[10%]">
          {countries.map((country) => (
            <div key={country.id} className="text-textcolor flex flex-col gap-1">
              <p className="cursor-pointer" onClick={() => HandleClick(country.name)}>
                {country.name}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="py-1 fixed bottom-0 bg-muted w-[80vw] rounded-bl-md rounded-br-md text-center text-textcolor">
          <span className="font-semibold">C-Market: $2.43 USD </span>
          <span className="font-normal">as of 03/05/2024</span>
        </div> */}
      </PopoverContent>
    </Popover>
  );
}
