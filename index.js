
  let noteList = [];
  let oL = document.getElementById("notes-list");     
  let newLI = document.createElement("li");

  const showNote = () => {   
    let oL = document.getElementById("notes-list");
      for (let i = 0; i <= localStorage.length + 1; i++) {
        let newLI = document.createElement("li");
        newLI.textContent = localStorage.getItem(localStorage.key(i));        
        oL.appendChild(newLI);          
      }  
       
}

    //counter to get around the localStorage replacing each note
    let count = 1;

  const saveNote = () => {     
    let textElement = document.getElementById("note");
    let newNote = textElement.value;     
    if (newNote === "") {
      alert("Please Enter a Valid Note");
    } else {
      localStorage.setItem("Note: " + count, newNote); 
      count++;                                         
      alert("Note Saved!");
    }       
  };

  
