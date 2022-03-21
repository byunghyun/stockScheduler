import { runSupabase } from "../../service/initializeSuapbase";

export const login = async () => {
  try {
   const { user, error } = await runSupabase.auth.signIn({
    email: 'example@email.com',
  })
    if (error) throw error;
    console.log('user', user);
    console.log('auth completed');
  } catch (error) {
   console.log(error);
   console.log('auth error');
  } finally {
    console.log('auth finally');
  }
}