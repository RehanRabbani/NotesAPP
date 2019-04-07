function one(sp){
    let getId = document.querySelector('#para');
    if(getId.contentEditable==='true'){
        getId.contentEditable = 'false';
        sp.innerHTML = `<i class="fab fa-500px"></i>`;
    }
    else{
        getId.contentEditable = 'true';
        sp.innerHTML = `<i class="fas fa-check"></i>`;
    }
}