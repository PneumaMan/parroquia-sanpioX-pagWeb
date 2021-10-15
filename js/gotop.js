window.onscroll= function(){
    console.log(document.documentElement.scrolltop)
    if(document.documentElement.scrolltop > 100){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show')
    }
}

document.querySelector('.go-top-container').addEventListener('click', ()=> {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

let caja=document.getElementById("subir__arriba");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 0) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})