import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"

const Home = () => {

  const mainContentData = [
    {
      name: "genre",
      label: "What genre of books do you usually read?",
      options: [
        { name: 'Thriller' },
        { name: 'Science Fiction' },
        { name: 'Self Help' }
      ]
    },
    {
      name: "pace",
      label: "What pace of reading do you prefer?",
      options: [
        { name: 'Slow' },
        { name: 'Medium' },
        { name: 'Fast' }
      ]
    },
    {
      name: "complexity",
      label: "What difficulty level of books do you enjoy?",
      options: [
        { name: 'Easy' },
        { name: 'Medium' },
        { name: 'Hard' }
      ]
    }
  ]

  return (
    <main>
      <Navbar />
      <MainContent data={mainContentData}  />
    </main>
  )
}

export default Home
