import { runSupabase } from "../../service/initializeSuapbase";
import { DAOTypes } from "../types";

export const getProductList = async (
  successEvent?: (() => any) | undefined, 
  failEvent?: (() => any) | undefined, 
  finallyEvent?: (() => any) | undefined
) => {
 try {
   const user = runSupabase.auth.user();
   const { data, error, status } = await runSupabase
     .from('productList')
     .select(`*`);
   if (error && status !== 406) throw error;
   if (data) {
    successEvent && successEvent();
    console.log('data', data);
    console.log('user', user);
   }
 } catch (error) {
   failEvent && failEvent();
   console.log(error);
 } finally {
  finallyEvent && finallyEvent();
 }
};