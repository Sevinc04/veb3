import { Route, Routes } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import WorkExample from "./WorkExample"

function MainSection() {
    return(
       <main>
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/workexample" element={<WorkExample />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
       </main>
    )
}

export default MainSection