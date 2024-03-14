import BookSearch from "../components/BookSearch"
import BookDetails from '../components/BookDetails';

const Home = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-screen bg-cover bg-center " style={{ backgroundImage: `url(https://i.pinimg.com/originals/79/ce/d9/79ced99430b615f4d931822aba3d8c7e.jpg` }}>
        <BookSearch/>
        </div>
        <BookDetails/>

    </div>
  )
}
export default Home
