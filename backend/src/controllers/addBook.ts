import Book from "../models/Book"
import  { Request, Response } from "express" 

export const addBook = async (req: Request, res: Response) => {
    try {
        const { title, author, genre, pace, complexity } = req.body 
        const book = new Book({title, author, genre, pace, complexity})
        await book.save()

        res.status(200).json({ message: 'Book added successfully' })

    } catch (error: any) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    } 
}