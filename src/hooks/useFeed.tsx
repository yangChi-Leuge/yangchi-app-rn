import { useState } from "react";
import { feedType } from "../type/itemType.ts";
import axios from "axios";
import Config from "../config/server.json"

export const useGetFeed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [resList, setResList] = useState<feedType[]>([]);

    const fetchGetGeed = async () => {
        setIsLoading(true);
        await axios.get(`${Config.server}post/all`, { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QiLCJpYXQiOjE3MjEyMTgxNzYsImV4cCI6MTcyMTMwNDU3Nn0.l7-MY7Rlgk6iJU3_c1Syt9NyabGzmFfnMNNOlpuVGnM" } }).then((res) => {
            console.log(JSON.parse(res.request.response).data);
            setResList(JSON.parse(res.request.response).data);
        }).catch((err) => {
            console.log(err.response);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return [isLoading, resList, fetchGetGeed] as const;
}
