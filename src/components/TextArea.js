import React, { useState } from 'react'

export default function TextArea() {
    const [text, setText] = useState("")

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const uppercaseHandler = () => {
        setText(text.toUpperCase())
    }

    const lowercaseHandler = () => {
        setText(text.toLowerCase())
    }
    const inversecaseHandler = () => {
        let invertedText = "";
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === char.toLowerCase()) {
                invertedText += char.toUpperCase();
            } else {
                invertedText += char.toLowerCase();
            }
        }
        setText(invertedText);
    };

    return (
        <>
            <label htmlFor='userInput'>Enter text below to change</label><br></br>
            <textarea id='userInput' value={text} onChange={onChangeHandler}></textarea><br />
            <button onClick={uppercaseHandler}>Convert to uppercase</button>
            <button onClick={lowercaseHandler}>Convert to lowercase</button>
            <button onClick={inversecaseHandler}>Convert to inversecase</button>
            <br />
            <p>summary:</p>
            <p>Words: {text.split(" ").length}  Characters: {text.length}</p>
        </>
    )
}
