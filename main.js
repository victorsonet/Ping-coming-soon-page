const email = document.querySelector('.email');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const error = document.querySelector('.error');
const ty = document.querySelector('.ty');
const logo = document.querySelector('.logo');
var mediaQ = window.matchMedia("(min-width: 1200px)");

function mediaQuery() {

    if(mediaQ.matches) {

        button.addEventListener('click',()=>{
            const inputValue = email.value;
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(regex.test(inputValue)) {
                error.classList.add('hide');
                ty.classList.remove('hide');
            } else if (inputValue == ''){
                ty.classList.add('hide');
                error.classList.remove('hide');
            } 
            else {
                ty.classList.add('hide');
                error.classList.remove('hide');
            } 
        });
        
        document.addEventListener("keyup", function(event) {
            if (event.code === 'Enter') {
                const inputValue = email.value;
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(regex.test(inputValue)) {
                    error.classList.add('hide');
                    ty.classList.remove('hide');
                } else if (inputValue == ''){
                    ty.classList.add('hide');
                    error.classList.remove('hide');
                } 
                else {
                    ty.classList.add('hide');
                    error.classList.remove('hide');
                } 
            }
        });
        
        logo.addEventListener('click',()=>{
            window.location.reload();
        })

    } else {
        button.addEventListener('click',()=>{
            const inputValue = email.value;
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(regex.test(inputValue)) {
                button.classList.add('margin');
                error.classList.add('hide');
                ty.classList.remove('hide');
            } else if (inputValue == ''){
                button.classList.add('margin');
                ty.classList.add('hide');
                error.classList.remove('hide');
            } 
            else {
                button.classList.add('margin');
                ty.classList.add('hide');
                error.classList.remove('hide');
            } 
        });
        
        document.addEventListener("keyup", function(event) {
            if (event.code === 'Enter') {
                const inputValue = email.value;
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(regex.test(inputValue)) {
                    button.classList.add('margin');
                    error.classList.add('hide');
                    ty.classList.remove('hide');
                } else if (inputValue == ''){
                    button.classList.add('margin');
                    ty.classList.add('hide');
                    error.classList.remove('hide');
                } 
                else {
                    button.classList.add('margin');
                    ty.classList.add('hide');
                    error.classList.remove('hide');
                } 
            }
        });
        
        logo.addEventListener('click',()=>{
            window.location.reload();
        })
    }
}

mediaQuery();
