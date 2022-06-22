const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
addBtn.addEventListener('click',function(){
   addNote()
})

const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea");
    const data =[];
    notes.forEach((note)=>{
        data.push(note.value)
    }
    )
    localStorage.setItem("notes",JSON.stringify(data))
}


// <!-- <div class="note">
// <div class="tool">
//     <i class="far fa-save"></i>
//     <i class="fas fa-trash"></i>
// </div>
// <textarea>

// </textarea>
// </div>

const addNote = (text="")=>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">
         <i class="save far fa-save"></i>
         <i class="trash fas fa-trash"></i>
     </div>
     <textarea>${text}
    
     </textarea>`;

     //trash button
     note.querySelector(".trash").addEventListener('click', function(){
         note.remove()
         saveNotes()
     })
     //save button
     note.querySelector(".save").addEventListener('click',function(){
         saveNotes()
     })
     main.appendChild(note);
    saveNotes()
     
}
(function(){

    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    lsNotes.forEach((lsNote)=>{
        addNote(lsNote)
    })
   
})()
