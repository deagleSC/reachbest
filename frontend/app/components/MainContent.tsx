"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Select from "./Select";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";

const MainContent = ({data}: {data: Array<any>}) => {

  const [inputState, setInputState] = useState(
    {
      genre: "Thriller",
      pace: "Slow",
      complexity: "Easy"
    }
  )

  const [books, setBooks] = useState<Array<any>>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [showSpinner, setShowSpinner] = useState<boolean>(false)

  const handleUpdate = (key: string, value: string) => {
    setInputState({
      ...inputState,
      [key]: value
    })
  }

  const getData = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL 
    const requestURL = `${baseURL}/book/recommend`

    setLoading(true)
    setShowSpinner(true)

    const response = await axios.post(requestURL, {
      ...inputState
    })

    setBooks(response.data.slice(0, 4))
    setLoading(false)
    setShowSpinner(false)
  }

  return (
    <div className="px-5 mt-20">
    <div className="flex flex-col sm:flex-row items-center justify-evenly">
    <div className="w-full p-5 sm:p-0 m-5">
    <Image src={"/books.jpg"} alt={"books"} width={"200"} height={"200"} className="rounded-lg w-full"/>
    </div>

    <div className="flex flex-col w-full m-5 sm:m-0 w-full">
    {data.map((item: any) => ( 
      <Select key={item.name} name={item.name} label={item.label} options = {item.options} value={item.options[0]} onChange={handleUpdate}/>
    ))}

    <button 
    onClick={getData}
    className="bg-primary w-28 text-sm rounded-md p-1 m-5 transition hover:bg-primaryHover" type="button">Go</button>
    </div>

    </div>

    {loading && showSpinner && <div className="w-full text-center"><LoadingSpinner /></div>}

    <div className="text-center mb-5">
      <h1 className="text-xl my-3">Books for you</h1>
      {loading && <div className="font-thin">Click on the Go button to get your recommendations.</div>}
      {!loading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 ">

        {books.map((book, index) => ( 
          <div key={index}>
            <Card data={book}/>
          </div>
        ))}
      </div>}
    </div>
    </div>
  );
};

export default MainContent;
