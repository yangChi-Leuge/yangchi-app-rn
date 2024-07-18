import { useState } from "react";
import Config from "../config/server.json"
import axios from "axios";
import { store } from "../state/store.ts";

export const useGetUser = () => {
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        setIsLoading(true);
        await axios.get(`${Config.server}profile`, { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QiLCJpYXQiOjE3MjEyMzA4NTQsImV4cCI6MTcyMTMxNzI1NH0.vv_Vy6jYGBaGiEvgU2jyqked2A4kLvszXEOZbnDt5PI"} }).then((res) => {
            console.log(JSON.parse(res.request.response).data);
            store.setState({currentUser: JSON.parse(res.request.response).data})
        }).catch((err) => {
            console.log(err.response);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return [isLoading, fetchUser] as const;
}
