import { useCallback, useState } from "react";

interface httpProps {
    userInput: string;
    translateFrom: string;
    translateTo: string;
}

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);

    const request = useCallback(async ({ userInput, translateFrom, translateTo }: httpProps) => {

        setIsLoading(true);

        const URL = `https://api.mymemory.translated.net/get?q=${userInput}&langpair=${translateFrom}|${translateTo}`;
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`Could not fetch ${URL}, status: ${response.status}`);
        }

        const data = await response.json();
        setIsLoading(false);

        return data;
    }, []);

    return { request, isLoading }
}