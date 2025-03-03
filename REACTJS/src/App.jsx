import { useState } from "react";
import "./App.css";
import Button from "./components/common/Button";
import ProductList from "./components/common/ProductList";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
    const [isPosture, setIsPosture] = useState(true);
    return (
        <>
            <Header />
            <Button onclick={() => setIsPosture(!isPosture)}>click me</Button>

            <ProductList isPosture={isPosture} />
            <Footer />
        </>
    );
}

export default App;
