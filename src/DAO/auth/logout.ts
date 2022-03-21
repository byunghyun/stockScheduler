import { runSupabase } from "../../service/initializeSuapbase";

export const logout = async () => {
  const { error } = await runSupabase.auth.signOut()
}