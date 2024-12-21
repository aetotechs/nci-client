import { ErrorToast } from "@/components/common/ui/Toasts";
import { api_urls } from "../commons/api-urls";
import { getUserToken } from "../cookies/UserCookieManager";
const token = getUserToken();

export async function fetchCalculatedTotalCartCost(cartId: any) {
    try {
      const response = await fetch(api_urls.carts.calculate_cart_cost(cartId), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const res = await response.json();
        return res;
      } else {
        ErrorToast(await response.text());
        return 0;
      }
    } catch (error: any) {
      ErrorToast('Error occurred during price calculation, ' + error.toString());
      return 0;
    }
  }