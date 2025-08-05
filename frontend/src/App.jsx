import Login from "./Login/Login.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Calculator from "./Calculator/Calculator.jsx"

function App(){


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Calculator.jsx" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
