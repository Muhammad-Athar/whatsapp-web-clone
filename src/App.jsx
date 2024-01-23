import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Homepage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
