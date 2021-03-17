import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateText from './CreateText';


const App= ()=>{

    const[colnotes, setcolNotes]= useState([]);

    const addNote=(note)=>{
        setcolNotes((previousNotes)=>{
            return [...previousNotes, note];
        });

    }

    const deleteNote= (id)=>{

        setcolNotes((prev_notes)=>{
            return prev_notes.filter((cur, index)=>{
            return index!==id;
            })
        })
    }
    
    return(
        
        <div>
            <Header />
            <CreateText add= {addNote} />
            {colnotes.map((eachNote, index)=>{
                return <Note 
                key={index}
                id={index}
                title={eachNote.title}
                content={eachNote.content} 
                onDelete={deleteNote}
                />
            })}

      <Footer />
        </div>
        
    )

};

export default App;
