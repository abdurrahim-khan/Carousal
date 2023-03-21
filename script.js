let slides = document.getElementsByClassName("slide");
let current_image = 0;
slider(0);
function slider(page_num)
{
    for(let i =0; i < slides.length; i++)
    {
       
        slides[i].style.display = "none";

    }
    slides[page_num].style.display = "block";
}

document.getElementById("back").addEventListener('click', function(){
    current_image = (current_image - 1 + slides.length)%slides.length;
    slider(current_image);
});
document.getElementById("forth").addEventListener('click', function(){
    current_image =  (current_image + 1)%slides.length;
    slider(current_image);
});
