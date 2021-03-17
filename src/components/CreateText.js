import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateText= (props)=>{

    const[expandContent, setexpandContent]=useState(false);
    const [note, setNote]= useState({
        title: "",
        content:""
    });


    const handleChange=(event)=>{
        const{name, value}= event.target;

        setNote(prevNote=>{
            return{...prevNote, [name]: value};
        });
    }

    const submitNote =(event)=>{
        props.add(note);
        setNote({
            title: "",
            content:""
        })
       event.preventDefault();
    }

    const expand =()=>{
        setexpandContent(true);
    }


    

    return(
        <div>
         <form className="createNote">
         {expandContent  && <input name="title" onChange={handleChange} value={note.title} placeholder="title" />}
       
           
           <textarea name="content"
            onClick={expand} value={note.content} onChange={handleChange} placeholder="content" rows={expandContent ? 3 : 1 } />
            <Zoom in ={expandContent}>
           <Fab onClick={submitNote}><AddIcon /></Fab>
           </Zoom>
         </form>
        </div>
    );

}

export default CreateText;