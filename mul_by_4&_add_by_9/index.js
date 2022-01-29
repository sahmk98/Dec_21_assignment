function mulBy4(array) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
      var y = array[i] * 4;
      result.push(y);
    }
    return result;
  }
  var x = [2,4,5,8];
  
     var multiply = mulBy4(x);
     var result_show = document.getElementById("result");
     result_show.innerText = "Multiply by 4 is " + multiply;

function add9(array) {
    var result =[];
    for (let i = 0; i<array.length; i++) {
        var y = array[i] + 9;
        result.push(y);
    }
    return result;
}

var x = [2,4,5,8];
var add = add9(x);
var result_show1 = document.getElementById("result1");
result_show1.innerText = "Add by 9 is " + add;