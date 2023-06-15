next.addEventListener('click',function(){
    if(i == slides.length -1){
        i = 0;
        ActiveSlide(i);

    }
    else
    {
        i++;
        ActiveSlide(i)
    }
})
prev.addEventListener('click',function(){
    if(i == 0){
         i = slides.length -1;
        ActiveSlide(i);

    }
    else
    {
        i--;
        ActiveSlide(i);
    }
})