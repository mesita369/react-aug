import ReactDOM from "react-dom/client";
import React from "react";
import Search from "./src/componets/Search";
import RestCard from "./src/componets/RestCard";
import "./style.css"
import restData from "./src/utilities/restData";
import { useState } from "react";
//Functional Component


const Header = () => {
    return (<div className="header-content">
        <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
        <ul className="menu-items">
            <li>Offers</li>
            <li>Help</li>
            <li>Sign in</li>
        </ul>
    </div>)
}



const Body = () => {
    let [sum, setSum] = useState(10);
    const addToSum = () => {
        setSum(sum + 10);
    }
    return (<div>
        <Header />
        <div style={{ display: "flex" }}>
            <input></input>
            <button>Search</button>
            <button id="btn" onClick={addToSum}>Add</button>
            <p>Sum is : {sum}</p>
        </div>
        <div className="rest-container">

            {restData.map((data) => {
                return <RestCard cardData={data} />
            })}
        </div>
    </div>)
}


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);





