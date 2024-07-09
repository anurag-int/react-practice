
import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {id: "heading"}, React.createElement("h1", {id: "heading"}, 
    [React.createElement("h1", {id: "heading"}, "Hello I am 1st" ),
        React.createElement("h1", {id: "heading"}, "Hello I am 2nd" )
    ]
 ) );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);