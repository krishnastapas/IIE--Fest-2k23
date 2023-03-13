import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePresenter from "./Presenter";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<HomePresenter />} />
        </Routes>
    )
}