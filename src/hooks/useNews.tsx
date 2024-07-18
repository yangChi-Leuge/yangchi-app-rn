import { useEffect, useState } from "react";
import axios from "axios";
import Config from "../config/server.json";
import { newsType } from "../type/itemType.ts";

export const useGetNews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [newsList, setNewsList] = useState<newsType[]>([])

    const fetchNews = async () => {
        setIsLoading(true);
        await axios.get(`${Config.server}news`).then((res) => {
            setNewsList(res.data.data)
        }).finally(()=>{setIsLoading(false)})
    }

    return [isLoading, newsList, fetchNews] as const;
}
