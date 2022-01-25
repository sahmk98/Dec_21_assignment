var data = 0;

var show_counting = document.getElementById("counting");
show_counting.innerText = data;

function increment() {
    data = data +1;
    show_counting.innerText = data; 
}

function decrement() {
    data = data -1;
    show_counting.innerText = data; 
}