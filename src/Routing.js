import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './app'

const Routings=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/Form" element={<Form/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Routings