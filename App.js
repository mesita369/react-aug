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
    let [rating, setRating] = useState(restData);
    const isCheckedORNot = (redata) => {
      let ischeck =  document.getElementById("rescheck").checked;
      console.log(ischeck);  
      if(ischeck){
      console.log("checked");
            let filteredData = redata.filter((data) => {
            return data.info.avgRating > 4;
        });
        setRating(filteredData);
    }else{
        console.log("unchecked");
        setRating(redata);
    }
}
 
    const getTopRated = (rdata) => {
        let filteredData = rdata.filter((data) => {
            return data.info.avgRating > 4;
        });
        setRating(filteredData);
    }
    
    return (<div>
        <Header />
        <div style={{ display: "flex" }}>
            <input></input>
            <button>Search</button>
            &nbsp;
            <label>
                <input id="rescheck" type="checkbox" onChange={()=>{isCheckedORNot(restData)}}/> Top Rated
            </label>
            &nbsp;
            &nbsp;
            <button id ="rating" onClick={()=>{getTopRated(restData)}}>Top Rated</button>
        </div>
        <div className="rest-container">
            {rating.map((data) => {
                return <RestCard cardData={data} />
            })}
        </div>
    </div>)
}


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);





