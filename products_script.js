
let http = new XMLHttpRequest();


http.open("GET", "products.json", true);

http.send();

http.onload = function () {

    let data = JSON.parse(this.responseText);
    let output = `<div id="slider">
        <h2>Products</h2>
        <figure>
            <img src="./images/Property 1=Default.png" alt="">
            <img src="./images/Property 1=Variant14.png" alt="">
            <img src="./images/Property 1=Variant11.png" alt="">
            <img src="./images/Property 1=Variant8.png" alt="">
            <img src="./images/Property 1=Default.png" alt="">
        </figure>
    </div>
    <div class="container">`


    for (let item of data) {
        output += `
            <div class="blog-post">
            <div class="blog-post_img">
                <img src="${item.image}" alt=""> 
            </div>
            <div class="blog-post_info">
                <h1 class="blog-post_title title reveal-from-right">${item.title}</h1>
                <p class="blog-post_text text  reveal-from-left">${item.description}</p>
                <a href="${item.readmore}" class="blog-post_cta  reveal-from-left">Read More</a>
                <a href="${item.downloadpdf}" class="blog-post_cta  reveal-from-right">Download</a>
            </div>
        </div>`;
    }

    output += `</div>`
    console.log(output)

    document.querySelector(".products").innerHTML = output;


}

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', reveal_absolute);
window.addEventListener('scroll', reveal_right);
window.addEventListener('scroll', reveal_left);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var  i=0; i<reveals.length; i++){
        var windowheight= window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');

        }
        else{
            reveals[i].classList.remove('active');
        }

    }
}
function reveal_absolute(){
    var reveals1 = document.querySelectorAll('.reveal_absolute');

    for (var  i=0; i<reveals1.length; i++){
        var windowheight1= window.innerHeight;
        var revealtop1 = reveals1[i].getBoundingClientRect().top;
        var revealpoint1 = 25;

        if(revealtop1 < windowheight1 - revealpoint1){
            reveals1[i].classList.add('active_absolute_div');

        }
        else{
            reveals1[i].classList.remove('active_absolute_div');
        }

    }
}
function reveal_right(){
    var reveals2 = document.querySelectorAll('.reveal-from-right');

    for (var  i=0; i<reveals2.length; i++){
        var windowheight2= window.innerHeight;
        var revealtop2 = reveals2[i].getBoundingClientRect().top;
        var revealpoint2 = 10;

        if(revealtop2 < windowheight2 - revealpoint2){
            reveals2[i].classList.add('active-right');

        }
        else{
            reveals2[i].classList.remove('active-right');
        }

    }
}
function reveal_left(){
    var reveals3 = document.querySelectorAll('.reveal-from-left');

    for (var  i=0; i<reveals3.length; i++){
        var windowheight3= window.innerHeight;
        var revealtop3 = reveals3[i].getBoundingClientRect().top;
        var revealpoint3 = 10;

        if(revealtop3 < windowheight3 - revealpoint3){
            reveals3[i].classList.add('active-left');

        }
        else{
            reveals3[i].classList.remove('active-left');
        }

    }
}

