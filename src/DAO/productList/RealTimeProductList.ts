import { RealtimeSubscription, SupabaseRealtimePayload } from "@supabase/supabase-js";
import { runSupabase } from "../../service/initializeSuapbase";

export class RealTimeProductList {
 private static instance: RealTimeProductList;
 private tableName: string = 'productList';
 private productListSubscription: RealtimeSubscription | undefined;
 private static getInstance() {
  if(!RealTimeProductList.instance) {
   RealTimeProductList.instance = new RealTimeProductList();
  }
  return RealTimeProductList.instance;
 }
 public initProductListSubscription(
  insertCallBack: (payload: SupabaseRealtimePayload<any>) => void,
  updateCallBack: (payload: SupabaseRealtimePayload<any>) => void,
  deleteCallBack: (payload: SupabaseRealtimePayload<any>) => void,
 ) {
  RealTimeProductList.getInstance();
  RealTimeProductList.instance.productListSubscription = 
   runSupabase.from(this.tableName)
    .on('INSERT', insertCallBack)
    .on('UPDATE', updateCallBack)
    .on('DELETE', deleteCallBack)
    .subscribe();
 }
 public disableProductListSubscription() {
  if (RealTimeProductList.instance.productListSubscription){
   RealTimeProductList.getInstance();
   runSupabase.removeSubscription(RealTimeProductList.instance.productListSubscription);
  }
 }
}