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