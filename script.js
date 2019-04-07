let Content;
function one(sp) {
    let getId = document.querySelector('#para') ;
     Content = document.querySelector('#para').textContent;
    localStorage.setItem('note',Content);
 getContentFromLocal = localStorage.getItem('note');
    Content.textL=getContentFromLocal;
   
    console.log(Content);
    console.log(getContentFromLocal);
    // let getId = document.querySelector("#para");
    if (getId.contentEditable  === "false") {
      getId.contentEditable  = "true";
     
      sp.innerHTML = `<i class="fab fa-500px"></i>`;
     
    } else {
      getId.contentEditable  = "false";
     
      sp.innerHTML = `<i class="fas fa-check"></i>`;
      
    }
  }
function del(){
    let parentElement=document.querySelector('body');
    let nodeToRemove = parentElement.childNodes[3];
    parentElement.removeChild(nodeToRemove);
    
}
function add()
{
    let parentElement = document.querySelector('body');
    parentElement.innerHTML+=`<div class="parent">
    <header>
    
        <span onclick="one(this)">
            <i class="fas fa-check"></i>
        </span>
        <span onclick="del ()">
            <i class="far fa-trash-alt"></i>
        </span>
    </header>

    <section>
        <p id="para" contentEditable="true" >jkdsjf</p>
    </section>

</div>
`
}
