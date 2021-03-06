import { PostgrestResponse, RealtimeSubscription } from "@supabase/supabase-js";
import { ProductListType } from "../../entries";
import { runSupabase } from "../../service/initializeSuapbase";
import { DAOTypes } from "../types";

export const getProductList = async (
  successEvent?: ((data: Array<ProductListType>) => void) | undefined, 
  failEvent?: (() => void) | undefined, 
  finallyEvent?: (() => void) | undefined
) => {
 try {
   const user = runSupabase.auth.user();
   const { data, error, status }: PostgrestResponse<any> = await runSupabase
     .from('productList')
     .select(`*`);
   if (error && status !== 406) throw error;
   if (data) {
    successEvent && successEvent(data);
    console.log('data!', data);
    // console.log('user', user);
    return data;
   }
 } catch (error) {
   failEvent && failEvent();
   console.log(error);
 } finally {
  finallyEvent && finallyEvent();
 }
};
