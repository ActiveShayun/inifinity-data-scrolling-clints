
import AxiosPublic from "../hooks/AxiosPublic";

export const fetchUsers = async ({ pageParams = 1 }) => {
    const take = 12
    const skip = (pageParams - 1) * take
    const useAxios = AxiosPublic()

  
    try {
        const res = await useAxios.get(`/allUsers?take=${take}&skip=${skip}`)
        console.log(res);
        return res.data.result;

    } catch (error) {
        console.log(error);
    }



}