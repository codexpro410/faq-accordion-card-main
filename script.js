let classa = document.getElementsByClassName('a')
    let classh = document.getElementsByClassName('h')
    let classp = document.getElementsByClassName('p')
    for (let i = 0; i < classa.length; i++) {
      classa[i].addEventListener('click',()=>{
        classa[i].classList.toggle('arrow');
        classh[i].classList.toggle('red');
        classp[i].style.display === 'block'?
        classp[i].style.display = 'none':
        classp[i].style.display = 'block';
      })   
    }