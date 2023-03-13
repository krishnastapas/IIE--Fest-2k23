import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePresenter from "./Presenter";
import Question1 from "./Question1";

export default function Main() {
    return (
        <Routes>
            <Route path="/q1" element={<Question1 />} />
        </Routes>
    )
}