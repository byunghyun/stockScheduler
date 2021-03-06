import { PostgrestResponse, RealtimeSubscription } from "@supabase/supabase-js";
import { ProductListType } from "../../entries";
import { runSupabase } from "../../service/initializeSuapbase";
import { toastify } from "../../util/AlertToast";
import { DAOTypes } from "../types";

export const addProductObject = async (
  newData?: Partial<ProductListType>,
  successEvent?: (() => void) | undefined, 
  failEvent?: (() => void) | undefined, 
  finallyEvent?: (() => void) | undefined
) => {
 try {
   const user = runSupabase.auth.user();
   const { data, error, status }: PostgrestResponse<any> = await runSupabase
   .from('productList')
   .insert([newData]);
   if (error && status !== 406) throw error;
   if (data) {
    toastify.success('상품 등록이 완료되었습니다.');
    successEvent && successEvent();
   }
 } catch (error) {
  toastify.error('상품 등록이 실패하였습니다.');
   failEvent && failEvent();
   console.log(error);
 } finally {
  finallyEvent && finallyEvent();
 }
};
