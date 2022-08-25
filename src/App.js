import About from "./components/About"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Image from "./components/Image"
import './index.css'


function App(){
    return(
    <div>
      <Image />
      <div className="cont">
        <Info />
        <About />
      </div>
      
      <Footer />
    </div>)
}

export default App