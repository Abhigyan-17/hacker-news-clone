import { useState,useEffect } from "react";
import axios from 'axios';
const useGetData = ({sort_by,tag,query, currentPage}) => {
   
    const [data, setData] = useState([]);
   
    const [isLoading,setIsLoading]=useState(0);
    const [totalPages,setTotalPages]=useState(0);
    const filters = {
        date: '_by_date',
        popularity: '',
    }
   
    const url = `https://hn.algolia.com/api/v1/search${filters[sort_by]}?query=${query}&tags=${tag}`;
 
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try{
                const {data}=await axios.get(url,
                {
                    params:{page:currentPage},
                }
                );
                const {hits,nbPages}=data;
                setData(hits);
                setTotalPages(nbPages);
            }
            catch(err){
                console.log(err);
            }
            finally{
                setIsLoading(false);
            }
        };
      fetchData()
    }, [currentPage,url])
 
    return {
        isLoading,
        data,
        totalPages
    }
}

export default useGetData;