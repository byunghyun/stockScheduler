import { runSupabase } from "../../service/initializeSuapbase";

export const login = async () => {
  try {
   const { user, error } = await runSupabase.auth.signIn({
    email: 'eer3481@naver.com',
    password: 'test1234',
  })
    if (error) throw error;
    console.log('user', user);
    console.log('auth completed');
    try {
      const { data, error, status } = await runSupabase
      .from('productList')
      .select();
      console.log('status', status);
      console.log('error', error);
      console.log('data', data);
    } catch(error) {
      console.log(error);
    }

  } catch (error) {
   console.log(error);
   console.log('auth error');
  } finally {
    console.log('auth finally');
  }
}