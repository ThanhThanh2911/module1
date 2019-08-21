
function isFirstLetterUpperCase(){
    var str = document.getElementById("Upper").value;
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        alert("Chữ đầu tiên của chuỗi là chữ viết hoa");
    }else{
        alert("Chữ đầu tiên của chuỗi là không viết hoa");
    }
}