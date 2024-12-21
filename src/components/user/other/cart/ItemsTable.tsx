import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/ui/table";
import { Checkbox } from "@/components/common/ui/checkbox";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/common/ui/scroll-area";
import Counter from "./Counter";
import { api_urls } from "@/utils/commons/api-urls";
import { getUserToken } from "@/utils/cookies/UserCookieManager";
import { ErrorToast, SuccessToast } from "@/components/common/ui/Toasts";
import { useLoading } from "@/utils/context/LoaderContext";

export function ItemsTable({ cartItems, reloadCart }: any) {
  const token = getUserToken();
  const { dispatchLoader } = useLoading();
  const [productDetails, setProductDetails] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const details: Record<string, any> = {};
      for (const item of cartItems) {
        try {
          const response = await fetch(api_urls.items.get_product_by_id(item.productId), {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const product = await response.json();
            details[item.productId] = product;
          } else {
            ErrorToast(await response.text());
          }
        } catch (error) {
          ErrorToast("Error fetching product details: " + error.toString());
        }
      }
      setProductDetails(details);
    };

    fetchProductDetails();
  }, [cartItems, token]);

  const selectCartItem = async (cartItemId: string, selected: boolean) => {
    dispatchLoader(true);
    try {
      const response = await fetch(
        selected
          ? api_urls.carts.cart_items.select(cartItemId)
          : api_urls.carts.cart_items.unselect(cartItemId),
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseMessage = await response.text();
      if (response.ok) {
        SuccessToast(responseMessage);
        await reloadCart();
      } else {
        ErrorToast(responseMessage);
      }
    } catch (error: any) {
      ErrorToast("An error occurred: " + error.toString());
    } finally {
      dispatchLoader(false);
    }
  };

  const updateProductQuantity = async (cartItemId: string, newQuantity: number) => {
    dispatchLoader(true);
    try {
      const response = await fetch(
        api_urls.carts.cart_items.set_quantity(cartItemId, newQuantity),
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        await reloadCart();
      } else {
        ErrorToast(await response.text());
      }
    } catch (error: any) {
      ErrorToast("An error occurred: " + error.toString());
    } finally {
      dispatchLoader(false);
    }
  };

  const removeProductFromCart = async (cartItemId: string) => {
    dispatchLoader(true);
    try {
      const response = await fetch(api_urls.carts.cart_items.remove_item(cartItemId), {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseMessage = await response.text();
      if (response.ok) {
        SuccessToast(responseMessage);
        await reloadCart();
      } else {
        ErrorToast(responseMessage);
      }
    } catch (error: any) {
      ErrorToast("An error occurred: " + error.toString());
    } finally {
      dispatchLoader(false);
    }
  };

  return (
    <ScrollArea className="p-4">
      <Table>
        <TableHeader className="hidden md:flex">
          <TableRow className="grid grid-cols-6 text-center text-[12px] font-medium pt-3 px-4 border-none w-full ">
            <TableHead className="col-span-3 flex items-center px-2">Item</TableHead>
            <TableHead className="col-span-1 flex justify-center items-center">Quantity</TableHead>
            <TableHead className="col-span-1 flex justify-center items-center">SubTotal</TableHead>
            <TableHead>
              <span className="flex md:hidden col-span-1">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems?.map((item: any, index: any) => {
            const product = productDetails[item.productId];

            return (
              <div key={index} className="flex items-center gap-2">
                <Checkbox
                  onCheckedChange={() => selectCartItem(item.cartItemId, !item.confirmed)}
                  checked={item.confirmed}
                />
                <div className="border lg:h-[100px] h-44 py-2 mb-3 rounded-[8px] grow">
                  <TableRow className="flex flex-col md:grid md:grid-cols-6 md:gap-4">
                    <TableCell className="font-medium col-span-3">
                      <div>
                        <div className="flex items-center justify-between md:hidden">
                          <h3 className="font-medium text-[14px]">{product?.name || "Loading..."}</h3>
                          <Trash2
                            className="w-4 h-4 flex md:hidden text-[#8b8d98] pointer"
                            onClick={() => removeProductFromCart(item.cartItemId)}
                          />
                        </div>
                        <h3 className="font-medium text-[13px] hidden md:flex">
                          {product?.name || "Loading..."}
                        </h3>
                        <div className="md:mt-2 font-normal text-[13px] md:text-[12px]">
                          <p className="overflow-hidden truncate">
                            <span className="text-[#616161]">Lot Number:</span>
                            <span>{` ${product?.lotNumber || "Loading..."}`}</span>
                          </p>
                          <p className="overflow-hidden truncate">
                            <span className="text-[#616161]">Warehouse:</span>
                            <span>{` ${product?.wareHouse || "Loading..."}`}</span>
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="col-span-1 items-center -ml-5 hidden md:flex">
                      <Counter
                        quantity={item?.quantity}
                        onValueChange={(newQuantity) =>
                          updateProductQuantity(item.cartItemId, newQuantity)
                        }
                      />
                    </TableCell>
                    <TableCell className="col-span-1 flex items-center justify-center font-semibold text-[13px]">
                      <span className="hidden md:flex">${product?.unitPrice * item.quantity || 0}</span>
                    </TableCell>
                    <TableCell className="col-span-1 hidden md:flex items-center justify-end">
                      <Trash2
                        className="w-4 h-4 text-[#8b8d98] cursor-pointer"
                        onClick={() => removeProductFromCart(item.cartItemId)}
                      />
                    </TableCell>
                  </TableRow>
                </div>
              </div>
            );
          })}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
