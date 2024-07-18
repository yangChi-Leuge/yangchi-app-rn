import { useCallback, useState } from "react";
import axios from "axios";
import Config from "../config/server.json"
import { globalDateType } from "../type/itemType.ts";

export const useGetGlobalDay = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resDate, setResDate] = useState<globalDateType>();

    const fetchGetGlobalDay = async (date : string) => {
        setIsLoading(true);
        await axios.get(`${Config.server}globalday?day=${date}`, {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QiLCJpYXQiOjE3MjEyMTgxNzYsImV4cCI6MTcyMTMwNDU3Nn0.l7-MY7Rlgk6iJU3_c1Syt9NyabGzmFfnMNNOlpuVGnM"}}).then((res) => {
            console.log(res.data);
            setResDate(res.data);
        }).catch((err) => {
            console.log(err.response);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return [isLoading, resDate, fetchGetGlobalDay] as const;
}

export const useGetGlobalMonth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resDateList, setResDateList] = useState<globalDateType[]>();

    const fetchGetGlobalMonth = async (date : string) => {
        setIsLoading(true);
        await axios.get(`${Config.server}globalday/month?day=${date}`, {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QiLCJpYXQiOjE3MjEyMTgxNzYsImV4cCI6MTcyMTMwNDU3Nn0.l7-MY7Rlgk6iJU3_c1Syt9NyabGzmFfnMNNOlpuVGnM"}}).then((res) => {
            console.log(res.data.rows);
            setResDateList(res.data.rows);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return [isLoading, resDateList, fetchGetGlobalMonth] as const;
}

export const useGetChallenge = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resDateList, setResDateList] = useState<any[]>();

    const fetchGetChallenge = async (date : string) => {
        setIsLoading(true);
        await axios.get(
            `${Config.server}challenge?date=${date}`
        ).then((res) => {
            console.log(res.data.data);
            setResDateList(res.data.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        })
    }
    return [isLoading, resDateList, fetchGetChallenge] as const;
}
