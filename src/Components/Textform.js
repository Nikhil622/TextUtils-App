import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    function changeText(e)
     {
         setText(e.target.value);
     }
    function handleUpperCase()
    {
        setText(text.toUpperCase());
    }
    function handleLowerCase()
    {
        setText(text.toLowerCase());
    }
    function removeExtraSpace()
     {   let str='';
         let prev='.';
         let len=text.length,i=0;
         while(i<len)
         {  if((text[i]===' ' && prev!==' ') || text[i]!==' ')
              {  str+=text[i];
                 prev=text[i];
              }
            ++i;
        }
        setText(str);
     }
     function words()
     {  let len=text.length;
        let i=0,res=0;
        while(i<len)
        {  if(text[i]!==' ')
             {   ++res;
                while(text[i]!==' ' && i<len)
                   ++i;
             }
            else
               ++i;
        }
        return res;
     }
    function clearText(){setText('')};
    function copyText(){navigator.clipboard.writeText(text)};
  return (
    <>
        <div class="mb-3 container">
            <label for="exampleFormControlTextarea1" class="form-label" style={{color:'white'}}>Enter text to analyze</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={changeText} style={{backgroundColor:props.mode==='Dark'?'white':'#00004d',color:props.mode==='Dark'?'black':'white'}}></textarea>
            <button className="btn btn-primary mx-1 my-2" onClick={handleUpperCase}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleLowerCase}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-2" onClick={copyText}>Copy Text</button>
        </div>
        <div className="container" style={{color:props.mode==='Dark'?'black':'white'}}>
            <h4>Text Summary</h4>
            <p>Words {words()} Characters {text.length}</p>
            <h4>Previes</h4>
            <p>{text.length>0?text:'Enter text above'}</p>
        </div>
    </>
  )
}
