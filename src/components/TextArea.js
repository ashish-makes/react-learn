import React, {useState} from 'react'

export default function TextArea() {
    const [text, setText] = useState("Enter your text here...")

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const uppercaseHandler = () => {
        setText(text.toUpperCase())
    }

    return (
        <>
            <label htmlFor='userInput'>Enter text below to change</label><br></br>
            <textarea id='userInput' value={text} onChange={onChangeHandler}></textarea><br/>
            <button onClick={uppercaseHandler}>Convert to uppercase</button>
        </>
    )
}
