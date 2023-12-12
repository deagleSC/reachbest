import Image from "next/image"
import React from "react"

const Card = ({data}: {data: any}) => {
    return ( 
        <div className="bg-gray rounded-lg p-3 mx-3 text-left transition hover:scale-105">
            <Image 
            className="w-full h-80 rounded-lg mb-3"
            src={data.book.image} alt={""} width={"300"} height={"300"}/>
            <div className="font-medium">{data.book.title}</div>
            <div className="font-thin">{data.book.author}</div>
        </div>
    )
}

export default Card