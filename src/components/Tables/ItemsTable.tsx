import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {  Trash2 } from "lucide-react"
  
  const items = [
    {
      name: "Uganda RFA- Sironko Washing Station",
      subtotal: "Paid",
    
      bags: "Credit Card",
      lotNumber:"P37890-1",
      warehouse:"Alameda, CA",
      quantity:"20"
    },
    {
        name: "Uganda RFA- Sironko Washing Station",
      subtotal: "Pending",
    
      bags: "PayPal",
      lotNumber:"P37890-1",
      warehouse:"Alameda, CA",
      quantity:"20"
    },
 
   
  ]
  
  export function ItemsTable() {
    return (
      <Table className="w-[600px] overflow-hidden">
       
        <TableHeader >
          <TableRow className="grid grid-cols-6 text-center pt-3 px-4 border-none w-full ">
            <TableHead className="col-span-3 ">Item</TableHead>
            <TableHead className="col-span-1">Bags</TableHead>
            <TableHead className="col-span-1">SubTotal</TableHead>
            <TableHead className="col-span-1"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item,index) => (
          <div className="flex justify-between items-center gap-2">
            <div><Checkbox/></div>
            <div className="border mb-3 rounded-[8px]">
              <TableRow key={index} className="   w-[607px] grid grid-cols-6 h-[140px]">
              <TableCell className="font-medium col-span-3 px-10"><div>
                <h3 className="font-medium text-[17px]">{item.name}</h3>
                <div className="mt-2">
                    <p className="font-normal text-[15px]">{`Lot Number:${item.lotNumber}`}</p>
                    <p>{`Ware House:${item.warehouse}`}</p>
                    <p>{`Quantity:${item.quantity}`}</p>
                
                </div>
                </div></TableCell>
              <TableCell className="col-span-1 flex items-center">{item.subtotal}</TableCell>
              <TableCell className="col-span-1 flex items-center">{item.bags}</TableCell>
              <TableCell className="col-span-1 flex items-center"><Trash2 className="w-4 h-4"/></TableCell>
            </TableRow>
          </div>
          </div>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  