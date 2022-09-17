let add=document.querySelector("#addbtn")
shownotes()
add.addEventListener("click",function(){
    let text=document.querySelector(".textarea")
   
   
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesarr=[]
    }
    else{
        notesarr=JSON.parse(notes)
    }

    notesarr.push(text.value)
    localStorage.setItem("notes",JSON.stringify(notesarr))
    text.value=""

    console.log(notesarr)

    shownotes()


})


function shownotes(){
    let notes=localStorage.getItem("notes")
    if(notes==null){
        notesarr=[];
    }
    else{
        notesarr=JSON.parse(notes)
    }

    let html=""

  notesarr.forEach(function(element,index){
      html+=`
      
      <div class="card" style="width: 18rem;">
        
      <div class="card-body">
        <h5 class="card-title">Note ${index+1}</h5>
        <div class="form-floating">
          <textarea class="textarea" placeholder="Type here" id="floatingTextarea"> ${element}</textarea>
          <label for="floatingTextarea"></label>
        </div>
        <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete note</button>
      </div>
    </div>
    `;
      
  });

  let noteselem=document.getElementById('notes')
  if(notesarr.length!=0){
      noteselem.innerHTML=html;

  }
  else{
      noteselem.innerHTML="Quiet around here...."
  }
}


function deletenote(index){

    let notes=localStorage.getItem("notes")
    if(notes==null){
        notesarr=[];
    }
    else{
        notesarr=JSON.parse(notes)
    }


    notesarr.splice(index,1)  //want to remove one element
    

    localStorage.setItem("notes",JSON.stringify(notesarr))   //update the localstorage
   


    shownotes()

}

let search=document.querySelector("#search")
search.addEventListener("input",function(){
   let inp=search.value
   
   let box=document.querySelector(".card")
   
   Array.from(box).forEach(function(element){
       let inner=element.getElementsByTagName("textarea")
        console.log(inner)
       if(inner.includes(inp)){
           thing.style.display="block"
       }
       else{
        thing.style.display="none"
       }

   })

})