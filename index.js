'use strict'

window.addEventListener('load',function(){
    const divPrincipiante = this.document.querySelector("#divPrincipiante");

    divPrincipiante.addEventListener('click',function(){
        alert('click');
    });
});