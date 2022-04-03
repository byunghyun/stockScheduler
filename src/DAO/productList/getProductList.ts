import { PostgrestResponse, RealtimeSubscription } from "@supabase/supabase-js";
import { ProductListType } from "../../entries";
import { runSupabase } from "../../service/initializeSuapbase";
import { DAOTypes } from "../types";

export const getProductList = async (
  successEvent?: ((data: Array<ProductListType>) => any) | undefined, 
  failEvent?: (() => any) | undefined, 
  finallyEvent?: (() => any) | undefined
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

// export const activeRealTimeProductList = async (
//   callback?: ((data: Array<any>) => any) | undefined,
// ) => {
//   console.log('init');
//   const mySubscription: RealtimeSubscription = runSupabase
//   .from('productList')
//   .on('*', payload => {
//     // callback && callback(payload);
//     console.log('Change received!', payload)
//   })
//   .subscribe();
//   return mySubscription;
// }

// export const disableRealTimeProductList = async () => {
//   const subscriptions = runSupabase.getSubscriptions();
//   console.log('subscriptions', subscriptions);
// }