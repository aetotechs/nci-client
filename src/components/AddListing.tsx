import {  ArrowLeft } from "lucide-react";
import { ListingsForm } from "./forms/AddListingsForm";

function AddListing() {
  return (
    <div className="my-20 px-9">
      <div className="my-4 flex items-center">
        <span><ArrowLeft/></span>
        <h3 className="font-semibold text-xl">Add Coffee Listing</h3>
      </div>
      <div >
        <ListingsForm/>
      </div>
    </div>
  );
}

export default AddListing;
