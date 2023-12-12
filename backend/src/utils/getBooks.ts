interface User {
    genre: String,
    pace: String,
    complexity: String
}

interface Book {
    title: String,
    author: String,
    genre: String,
    pace: String,
    complexity: String
}

type CriteriaValues = Record<string, Record<string, number>>;
type vector = number[]

const criteriaValues: CriteriaValues = {
    genre: {
        "Thriller": 1,
        "Science Fiction": 2,
        "Self Help": 3
    },
    pace: {
        "Slow": 1,
        "Medium": 2,
        "Fast": 3
    },
    complexity: {
        "Easy": 1,
        "Medium": 2,
        "Hard": 3
    }
}

const mapToVector = (item: any) => {
    let vector = []
    for (const key in item) {
        if (!Object.keys(criteriaValues).includes(key)) continue
        
        const value = item[key]
        vector.push(criteriaValues[key][value])
    }

    return vector
}

const calculateDifference = (user: User, book: Book) => {
    const userVector = mapToVector(user)
    const bookVector = mapToVector(book)

    // Calculate Euclidean distance
    let differenceScore = 0;
    for (let i = 0; i < userVector.length; i++) {
        differenceScore += Math.pow(userVector[i] - bookVector[i], 2);
    }

    differenceScore = Math.sqrt(differenceScore)
    return differenceScore
}

export const getBooks = (user: User, books: Book[]) => {
    const bookRecommendations = books.map((book) => ({
        book,
        score: calculateDifference(user, book),
    }));

    bookRecommendations.sort((a, b) => a.score - b.score);
    return bookRecommendations
}

