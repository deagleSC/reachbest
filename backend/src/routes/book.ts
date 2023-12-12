import express from "express"
import { addBook } from "../controllers/addBook"
import { getBooksRecommendations } from "../controllers/getBooksRecommendations"

const router = express.Router()

router.post("/add", addBook)
router.post("/recommend", getBooksRecommendations)

export default router