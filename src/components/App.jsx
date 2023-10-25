import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function CreateCard(emojipedia){
    return <Card
        key = {emojipedia.id}
        emoji = {emojipedia.emoji}
        name = {emojipedia.name}
        meaning = {emojipedia.meaning}
    /> 
}

function App() {
    return (
        <div>
            <h1>
                <span>Emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(CreateCard)}
            </dl>
        </div>
        );
}

export default App;
