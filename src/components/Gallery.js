import React from "react";
import './Gallery.css';

class Gallery extends React.Component{
    render(){
        const ideas= [
            "fun", "sad"
        ];

        function randonaut(){
            const indexPicker = Math.floor(Math.random()*2);
            document.getElementById('Sandbox').innerText = ideas[indexPicker];
        }

        return(
            <div>
                <h3><em>Sandbox</em></h3>
                <p>test random</p>
                <button onClick={randonaut}>click me</button>
                <br/>
                <textarea id="Sandbox" ></textarea>
            </div>
        );
    }
};

export default Gallery;