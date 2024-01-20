import React, {useState} from 'react'

export default function Info() {

    const [infoStyle, setinfoStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        }
    )

    const [btnText, setbtnTxt] = useState("Enable dark mode")

    const darkLightHandler = () => {
        {
            if (infoStyle.backgroundColor === 'white') {
                setinfoStyle({
                    color: 'white',
                    backgroundColor: 'black'
                })
                setbtnTxt("Enable light mode")
            } else {
                setinfoStyle({
                    color: 'black',
                    backgroundColor: 'white'
                })
                setbtnTxt("Enable dark mode")
            }
        }
    }

    return (
        <>
            <div style={infoStyle} className='info'>
                <p>info</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at excepturi, quaerat neque aspernatur blanditiis. Quidem hic exercitationem obcaecati deleniti non cum, quasi modi labore eligendi natus mollitia ipsum at?</p>
            </div>
            <button onClick={darkLightHandler}>{btnText}</button>
        </>
    )
}
