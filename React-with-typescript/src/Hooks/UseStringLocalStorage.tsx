import { useEffect, useState } from "react";

function useLocalStoarge(key: string, initialValue: string): [string, (value:string) => void] {
    const [value, setValue] = useState<string>(()=> {
        const stored = localStorage.getItem(key);
        return stored ?? initialValue;
    })

    useEffect(()=> {
        localStorage.setItem(key, value);
    }, [key, value])

    return [value, setValue] as const;
}
export default useLocalStoarge;