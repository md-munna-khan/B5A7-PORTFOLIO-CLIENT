import { getServerSession } from "next-auth";
import { authOptions } from "./authOption";


export const getUserSession = async ()=> await getServerSession(authOptions)