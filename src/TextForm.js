import React, { useState } from 'react'

const TextForm = (props) => {


    let changeHandling = (event) => {
        settext(event.target.value);
    }

    let upperChange = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    let lowCase = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    }

   
    let copy=()=>{
        let text=document.getElementById("mybox");
        text.select();
        window.navigator.clipboard.writeText(text.value)
    }


    // newString = string.replace(/\s+/g,'');    string.replace(/\s{2,}/g, ' ').trim()
    let extraSpace = () => {
       
        // let newtext=text.split(/[ ]+/);        
        // settext(newtext.join(" "));
        let newtext=text.replace(/\s+/g," ")
        settext(newtext);
        
    }

    let clear = () => {
        let newtext = "";
        settext(newtext);
    }

    const [text, settext] = useState("Enter the Text");

    return (
        <>

            <div className="container">
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={changeHandling} id="mybox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={upperChange}>
                    Change To upper Case
                </button>
                <button className="btn btn-primary mx-2" onClick={lowCase}>
                    Change To lower Case
                </button>
                <button className="btn btn-primary mx-2" onClick={copy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2" onClick={extraSpace}>
                    Remove Extra Space
                </button>

                <button className="btn btn-primary mx-2" onClick={clear}>
                    Clear the rext
                </button>
                
               
            </div>

            <div className="container">
                <h3>Text  Summary</h3>
                <p> {text.split(" ").length} words,  {text.length}characters</p>
                <p> {0.08 * text.split(" ").length} Minutes required</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>


        </>


    )
}

export default TextForm