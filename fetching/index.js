var url = "https://api2.binance.com/api/v3/ticker/24hr";

var container = document.getElementById("container");
var table = document.getElementById("table");
var ul = document.getElementById("ul");

var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");
var th4 = document.createElement("th");

th1.innerText = "symbol";
th2.innerText = "priceChange";
th3.innerText = "priceChangePercent";
th4.innerText = "weightedAvgPrice";


table.append (th1, th2, th3, th4);


fetch(url)
.then((something) => something.json())
.then((anything) => {console.log(anything);

for (var i = 0; i<100; i++) {
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");

    td1.innerText = anything[i].symbol;
    td2.innerText = anything[i].priceChange;
    td3.innerText = anything[i].priceChangePercent;
    td4.innerText = anything[i].weightedAvgPrice;
    tr.append(td1, td2, td3, td4);
    table.appendChild(tr);
    
}
});






