'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModal= document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',function() {
        console.log("button clicked");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
};

const closeModal = function(){
    modal.classList.add('hidden');
    modal.classList.add('hidden');
}

btnCloseModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown' ,function (e){
    //console.log("A key was pressed");
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        
            closeModal();
     
    }

})