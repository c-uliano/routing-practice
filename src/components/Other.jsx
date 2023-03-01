import React from 'react';
import { useParams } from "react-router-dom";

const Other = (props) => {
    const { word, number, wordTextCol, wordBgColor, textColor, bgColor } = useParams();

    return (
        <>
            {/* <h1>{isNaN(word) ? word : 'that is a number'}</h1> */}
            {
                word ? <h1>{word}</h1> : null 
            }
            { 
                number ? <h1>{number}</h1> : null 
            }
            {
                textColor ? <h1 style={{color: textColor}}>{wordTextCol}</h1> : null
            }
            {
                bgColor ? <h1 style={{color: textColor, backgroundColor: bgColor}}>{wordBgColor}</h1> : null
            }
        </>
    )
}

export default Other;