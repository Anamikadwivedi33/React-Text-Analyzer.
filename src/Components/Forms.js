import React, {useState} from 'react'




export default function Forms(props) {

const handleOnChange= (event)=>{

  //console.log("on change");
  setText(event.target.value)
}


const handleUpClicke= ()=>{

 // console.log("upper case was clicked" + text)
  let newText =text.toUpperCase();
  setText(newText)
}

 



const handleClearClicke= ()=>{

 // console.log("upper case was clicked" + text)
  let newText =" ";
  setText(newText)
}


const handleLoClicke= ()=>{

 // console.log("upper case was clicked" + text)
  let newText =text.toLowerCase();
  setText(newText)
}




  const [text, setText] = useState('enter text here');
  
  return (
    <>
    <div className='container'>
      


    <h1>{props.heading}</h1>  
  
<div className="mb-3" >
   
  <textarea className="form-control"  value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>


<button type="button" className="btn btn-primary btn-lg mx-2" onClick={handleUpClicke}   >convert into Uppercase</button>
<button type="button" className="btn btn-primary btn-lg mx-1" onClick={handleLoClicke}   >convert into Lowercase</button>

<button type="button" className="btn btn-primary btn-lg mx-2" onClick={handleClearClicke}   >Clear Text</button>
    </div>


 <div className="container" m-6>



<h1>your text summary</h1>
<p>{text.split(" ").length} words and {text.length} Chracters</p>


 </div>
    </>

  )
}
