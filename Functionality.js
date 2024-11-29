let addbtn=document.getElementById('add-btn')
let parentli=document.getElementById('parentOfLi')
addbtn.addEventListener('click',Add)

function Add(e){
    if (parentli.children[0].classList.contains("emptyMessage")) {
        parentli.children[0].remove();
    }
    
let currentBtn=e.currentTarget
let currentInput=currentBtn.previousElementSibling
let currentChapterName =currentInput.value

let newLi=document.createElement('li')
newLi.className="list-group-item d-flex justify-content-between"
newLi.innerHTML=` <h3 class="flex-grow-1 ">${currentChapterName}</h3>
                    <button class="btn btn-warning mx-2" onclick="editName(this)">Edit</button> 
                    <button class="btn btn-danger" onclick="chapterRemove(this)">Remove</button> `
// newLi.classList.add('list-group-item')
// newLi.textContent=currentInput.value

parentli.appendChild(newLi)
}
function chapterRemove(currentelemnet){
    currentelemnet.parentElement.remove();
    if(parentli.children.length<=0){
        let newEmptyMessage=document.createElement('h3')
       
          newEmptyMessage.className="text-danger-emphasis text-center emptyMessage"
        newEmptyMessage.textContent="Nothing Here...Add New Chapters!!"
      
        
        parentli.appendChild(newEmptyMessage)
        
    }
}
function editName(currentLoc){
    if(currentLoc.textContent=="Done"){
          currentLoc.textContent="Edit"
          let currentchapterName=currentLoc.previousElementSibling.value//value of that place
          let heading=document.createElement('h3')
          heading.className="flex-grow-1"
          heading.textContent=currentchapterName;
          currentLoc.parentElement.replaceChild(heading,currentLoc.previousElementSibling)
    }
    else{
           currentLoc.textContent="Done"
        let currentchapterName= currentLoc.previousElementSibling.textContent//text content place
        let editInput=document.createElement('input')
        editInput.type="text"
        editInput.placeholder="chapter"
        editInput.className="form-control"
        editInput.value=currentchapterName
        currentLoc.parentElement.replaceChild( editInput, currentLoc.previousElementSibling)
    }
  
}




