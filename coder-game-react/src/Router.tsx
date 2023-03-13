import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import HomeRouter from "./features/home/Router";
import TestRouter from "./features/test/Router";

export default function Main() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={< HomeRouter />} />
                <Route path="/test/*" element={< TestRouter />} />
            </Routes>
        </HashRouter>
    )
}