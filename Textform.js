import React,{useState} from 'react'
export default function Textform(props) {
    const toupper=()=>{
       
        let n=text.toUpperCase()
        settext(n)   //to update the text
    }
    const tolower=()=>{
        let n=text.toLowerCase()
        settext(n)
    }

    const clear=()=>{
        let n=""
        settext(n)
    }
    
    const color=()=>{
        let a=document.querySelector(".form-control")
        a.style.color="blue"
    }

    const subst=()=>{
        let s=prompt("enter a string")
        if(text.includes(s)){
            alert("The substring found in the text")
        }
        else{
            alert("Substring not in text")
        }
    }
    const[text,settext]=useState("")
  
    //settext("Im bored asf")
    const dummy=(event)=>{
       settext(event.target.value)
    }

   return (
       <>
    <div>
    <div className="form-floating">
    <textarea className="form-control" value={text} onChange={dummy} placeholder="Leave a comment here" id="floatingTextarea"/>    
    <p>{props.heading}</p>
  </div>
 <button className="btn1 mx-2" onClick={toupper}>Uppercase</button>
 <button className="btn2 mx-2" onClick={tolower}>Lowercase</button>
 <button className="btn3 mx-2" onClick={clear}>Clear</button>
 <button className="btn4 mx-2" onClick={color}>Colorise</button>
 <buttpn className="btn5 mx-2" onClick={subst}>Subs</buttpn>
    </div>

    <div className="counter">
    <p>Text data</p>
    <p>{text.split(" ").length} words and {text.length}characters</p>

    <p>Estimated reading time is {(text.split(" ").length)*0.5} seconds</p>
    </div>
    </>
  )
}
