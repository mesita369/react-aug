import ReactDOM from "react-dom/client";
import React from "react";
import Search from "./src/componets/Search";
import { test } from "./src/componets/Search";

//Functional Component
const Header = () => {
    return (<div>
        <Title title="WebLA" />
        <Search />
    </div>)
}


const Title = (prop) => {
    return (<div>
        <h1>{prop.title}</h1>
    </div>)
}

const Banner = () => {
    return (<div>
        <h1>Banner</h1>
    </div>)
}


const Body = () => {
    return (<div>
        <Header />
        <Banner />
    </div>)
}


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);








