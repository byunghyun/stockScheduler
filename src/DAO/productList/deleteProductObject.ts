import { PostgrestResponse, RealtimeSubscription } from "@supabase/supabase-js";
import { ProductListType } from "../../entries";
import { runSupabase } from "../../service/initializeSuapbase";
import { toastify } from "../../util/AlertToast";
import { DAOTypes } from "../types";

export const deleteProductObject = async (
  selectedProductIndex: number,
  successEvent?: (() => void) | undefined, 
  failEvent?: (() => void) | undefined, 
  finallyEvent?: (() => void) | undefined
) => {
 try {
  const { data, error } = await runSupabase
  .from('productList')
  .delete()
  .match({ productIndex: selectedProductIndex });
  if(error) throw error;
} catch (error: any) {
  toastify.error(error.toString());
} finally {
  finallyEvent && finallyEvent();
 }
};
