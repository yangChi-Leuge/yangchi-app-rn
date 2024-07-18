import { useEffect, useState } from "react";
import axios from "axios";
import { newsType } from "../type/itemType.ts";
import { useTimeout } from "react-native-toast-message/lib/src/hooks";
import { store } from "../state/store.ts";

export const useTranslate = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [resText, setResText] = useState('')

    const fetchTranslate = async (text: string, language: string) => {
        setIsLoading(true)
        await axios.post('http://localhost:8000/translate',
            {
                language,
                text
            }).then(res => {
                console.log(res)
                setResText(res.data.translated_text);
            }).catch(err => {
                console.log(err)
            }).finally(() => setIsLoading(false))
    }
    return [isLoading, resText, fetchTranslate] as const;
}

export const useTranslateNewsTitle = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [resList, setList] = useState<newsType[]>([])

    const fetchTranslate = async (list : newsType[]) => {
        setList([])
        setIsLoading(true)
        const prom = list.map(async (item) => {
            await axios.post(`http://localhost:8000/translate`, {
                language : store.getState().currentLang,
                text: item.title
            }).then((res) => {
                console.log(res.data.translated_text)
                item.title = res.data.translated_text
            }).catch((err) => {console.log(err)}).finally(() => {})
        })

        await Promise.all(prom)

        if (list.length > 1) {
            setList(list);
        }
    }

    useEffect(() => {
        if (resList.length > 1) {
            setIsLoading(false)
        }
    }, [resList])

    return [isLoading, resList, fetchTranslate] as const;
}

export const useTransTextList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [resList, setList] = useState<string[]>([])

    const fetchTranslate = async (list : string[]) => {
        setIsLoading(true)
        let lis : string[] = []
        const prom = list.map(async (item) => {
            await axios.post(`http://localhost:8000/translate`, {
                language : store.getState().currentLang,
                text: item
            }).then((res) => {
                lis.push(res.data.translated_text)
            }).catch((err) => {console.log(err)}).finally(() => {})
        })

        await Promise.all(prom)

        if (lis.length > 1) {
            setList(lis)
        }
    }

    useEffect(() => {
        if (resList.length > 1) {
            setIsLoading(false)
        }
    }, [resList])
    return [isLoading, resList, fetchTranslate] as const;
}
