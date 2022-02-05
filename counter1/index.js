let counter = 0;
let setInterval_id=null;
let display_counting = document.getElementById('display');



let timer_callback1 = function(){
    counter = counter+1;
    display_counting .innerText = counter;
}

let increase_timer_btn = document.getElementById('increase_btn');
increase_timer_btn.addEventListener('click',function(){
    setInterval_id=setInterval(timer_callback1,1000);
    
});

let timer_callback2 = function(){
    counter = counter-1;
    display_counting .innerText = counter;
}

let decrease_timer_btn = document.getElementById('decrease_btn');
decrease_timer_btn.addEventListener('click',function(){
    setInterval_id=setInterval(timer_callback2,1000);
    
});




let pause_counter_btn = document.getElementById('pause_counter');
pause_counter_btn.addEventListener('click',function(){
 clearInterval(setInterval_id);
});