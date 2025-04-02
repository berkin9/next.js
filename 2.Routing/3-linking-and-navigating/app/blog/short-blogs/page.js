'use client'

import { useSearchParams } from 'next/navigation'

export default function SortProducts() {
    const searchParams = useSearchParams();


    function updateSorting(sortOrder) {
        const params = new URLSearchParams(searchParams.toString());//mevcut değeri alır
        params.set("sort", sortOrder);//parametreden gelen değeri atar
        window.history.pushState(null, '', `?${params.toString()}`)
    }

    return (
        <>
            <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
            <button onClick={() => updateSorting('desc')}>Sort Descending</button>
        </>
    )//dizilişi değiştirir
}