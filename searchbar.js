const search = document.querySelector('.input-search');
const images = document.querySelectorAll('.images .box');
const error = document.querySelector('.error');
let searcherror = document.querySelector('.search-error');
search.addEventListener('keyup' , e=>{
    if(e.key == 'Enter'){
        let searchvalue = search.value,
            value = searchvalue.toLowerCase();
            images.forEach(image =>{
                if(value === image.dataset.name || value === image.dataset.name2){
                    return error.classList.remove('active'), 
                    image.style.display = "block";
                }
                // else if(value != image.dataset.name || value != image.dataset.name2)
                //     {
                //     searcherror.innerHTML = searchvalue;
                //     error.classList.add('active');
                //     }
                
                image.style.display = "none";
            });
    }
});
search.onmouseout = ()=>{
    if(search.value != "") return;
    images.forEach(image =>{
        image.style.display = "block";
    })
}