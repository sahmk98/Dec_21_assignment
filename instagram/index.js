var img_arr = [
    'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/4417069/pexels-photo-4417069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

function showImage(){
var container_ref = document.getElementById("post_img");
container_ref.innerText = "";


var img_ref = document.createElement("img");
img_ref.src = img_arr[0];
container_ref.appendChild(img_ref);
}

showImage()

function showImage1(){
    var container_ref = document.getElementById("post_img1");
    container_ref.innerText = "";
    
    
    var img_ref = document.createElement("img");
    img_ref.src = img_arr[1];
    container_ref.appendChild(img_ref);  
}

showImage1()

function showImage2(){
    var container_ref = document.getElementById("post_img2");
    container_ref.innerText = "";
    
    
    var img_ref = document.createElement("img");
    img_ref.src = img_arr[2];
    container_ref.appendChild(img_ref);  
}

showImage2()


function showImage3(){
    var container_ref = document.getElementById("post_img3");
    container_ref.innerText = "";
    
    
    var img_ref = document.createElement("img");
    img_ref.src = img_arr[3];
    container_ref.appendChild(img_ref);  
}

showImage3()