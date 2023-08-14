import "./App.css";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import { Route, Routes } from "react-router";
import Search from "./pages/Search";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<CharactersList />} />
                <Route path="/search" element={<Search />} />
                <Route path="/:id" element={<Character />} />
            </Routes>
        </>
    );
}

export default App;
