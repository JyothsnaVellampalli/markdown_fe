import react, {useEffect, useState} from 'react';
import { marked } from 'marked';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {useDropzone} from 'react-dropzone';
import ReactDOM from "react-dom";
// import FileViewer from 'react-file-viewer';
// import Fileviewer from './Fileviewer';

marked.setOptions({
  breaks : true,
  headerIds : false
})

const renderer = new marked.Renderer();

function Markdown() {
  const [text,setText] = useState("");
  console.log(text);
  let [errormsg,setErrorMsg] = useState("");


  return <>
  <div class="container-markdown">
  <div class="row justify-content-evenly" style={{margin:"20px"}} >
    <div class="col-xs-12 col-md-6" style={{border : '0px solid gray'}}>
      <h4 className="title"><KeyboardIcon/> My Markdown previewer :</h4>
      <textarea name='text' rows="15" value={text} className="textarea"
        onChange={(e)=>{setText(e.target.value)}}></textarea>
    </div>
    <div class="col-xs-12 col-md-6" style={{backgroundColor:"rgb(218, 214, 214)"}}>
      <h3 className="title">Output :</h3>
      <Preview markdown={text}/>
    </div>
  </div>
</div>
  </>

}

function Preview({markdown}) {
  return (
    <div className="markdown"
      dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      >
    </div>
    
  );
}




export default Markdown