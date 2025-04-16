import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import TopRated from "./components/TopRated"
import Products from "./pages/Products"

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <TopRated/>
      <Products/>
    </>
  )
}

export default App