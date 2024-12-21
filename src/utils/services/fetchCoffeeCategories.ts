import { ErrorToast } from "@/components/common/ui/Toasts";

export const fetchDropDownOptions = async ( url: string | any ) => {
  try{
    const response = await fetch(url);

    if(response.ok){
        return response.json();
    } else {
        const responseMessage = await response.text();
        ErrorToast(responseMessage);
    }
  } catch (error: any) {
    ErrorToast(error.toString());
  }
}
