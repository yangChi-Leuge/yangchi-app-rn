import { useEffect, useState } from "react";
import axios from "axios";
import Config from "../config/server.json";

export const useGetNews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [newsList, setNewsList] = useState()
    
    const fetchNews = async () => {
        setIsLoading(true);
        await axios.get(`${Config.server}news`).then((res) => {console.log(JSON.parse(res.data))})
    }

    return [isLoading, newsList, fetchNews] as const;
}
