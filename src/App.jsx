import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'

function App() {

  return (
    <>
          <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
        />
        {/* Same as */}
        <ToastContainer />
      <Navbar />
      <Manager />
      <Footer />
    </>
  )
}

export default App
