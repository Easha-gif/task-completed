import { useQuery} from '@tanstack/react-query'
import axios from 'axios';

const useAllTask = () => {
    const { data ,refetch } = useQuery({
        queryKey: ['taskData'],
        queryFn: async() =>{
            const {data} = await axios.get(`${import.meta.env.VITE_APIROUTE}/tasks`)
            return data
            
        }
      })
      return [data , refetch]
};

export default useAllTask;