import Book from "../models/Book"
import  { Request, Response } from "express" 
import { getBooks } from "../utils/getBooks"

export const getBooksRecommendations = async (req: Request, res: Response) => {
    try {
        const books = await Book.find()
        const bookRecommendations = getBooks(req.body, books)

        res.status(200).json(bookRecommendations)

    } catch (error: any) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    } 
}