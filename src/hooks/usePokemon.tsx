import { useEffect, useState } from "react";

function usePokemon(url) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => res)
            .then(data => setData(data))
    }, [url])

    return [data]
}

export default usePokemon