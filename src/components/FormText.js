import React, {useState} from 'react'

export default function FormText(props) {

    const [txt, setTxt] = useState("");

    const handleUpperCaseClick = ()=>{
        // console.log("UpperCase was clicked" + txt);
        let newTxt = txt.toUpperCase();
        setTxt(newTxt);;
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLowerCaseClick = ()=>{
        // console.log("UpperCase was clicked" + txt);
        let newTxt = txt.toLowerCase();
        setTxt(newTxt);
        props.showAlert("Converted to LowerCase", "success");

    }

    const handleClearClick = ()=>{
        let newTxt = "";
        setTxt(newTxt);
        props.showAlert("Text Cleared", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setTxt(event.target.value);
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(txt);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboaed", "success")

    }

    return (
        <>
        <div className="container mb-3 my-3"> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Enter your text here" value={txt} onChange={handleOnChange} id="myBox" rows="8"   style={{backgroundColor: props.mode === "light"?"white":"rgb(128 51 51)", color: props.mode === "dark"?"white":"black" }}></textarea>
            </div>
            <button disabled={txt.length===0} className="btn btn-danger mx-1 my-2" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
            <button disabled={txt.length===0} className="btn btn-danger mx-1 my-2" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
            <button disabled={txt.length===0} className="btn btn-danger mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={txt.length===0} className="btn btn-danger mx-1 my-2" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{txt.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {txt.length} characters</p>
            <p>You can read the above text in {0.008 * txt.split(" ").filter((element)=>{return element.length !== 0}).length} minutes</p>
            <h2>Preview</h2>
            <p>{txt.length>0?txt:"Nothing to preview here"}</p>
        </div>
        </>
    )
}
