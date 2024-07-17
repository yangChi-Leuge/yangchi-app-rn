import { useState } from "react";
import axios from "axios";
import { store } from "../state/store.ts";
import Config from "../config/server.json"

export const useSignIn = () => {
    const [isLoading, setIsLoading] = useState(true);
    const fetchSignIn = async (id : string, password: string) => {
        setIsLoading(true);
        await axios.post(`${Config.server}auth/login`,
            {},{
                headers: {
                    id,
                    password
                }
            }
        ).then((res) => {
            console.log(res.data);
            store.setState({auth: res.data});
        }).catch((err) => {
            console.log(err);
            console.log(err.config);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return[isLoading, fetchSignIn] as const;
}

export const useSignUp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>("");
    const fetchSignIn = async (id : string, name: string, password: string) => {
        setError("");
        setIsLoading(true);
        await axios.post(`${Config.server}auth/signup`,
            {},{
                headers: {
                    id,
                    name,
                    password,
                }
            }
        ).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
            console.log(err.config);
            setError(err);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return[isLoading, error, fetchSignIn] as const;
}
