let x = 0;
let array = [];

function themgiatri() {
    array[x] = document.getElementById("enter").value;
    console.log("Element" + array[x] + " Added at index" + x);
    x++;
    document.getElementById("enter").value = "";
}
function hienthiramanhinh() {
    let a = "</hr>";
    for (let i = 0; i < array.length; i++) {
        a += "Element " + i + "=" + array[i] + "</br>" ;
    }
    document.getElementById("result").innerHTML = a
}
