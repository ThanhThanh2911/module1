let MyDate = function(day,month,year){
    this.day= day;
    this.month= month;
    this.year= year;

     this.Date = function(){
         console.log(this.day + "/" + this.month + "/" + this.year);
    }

    this.getDay = function(){
        return this.day;
    }

    this.getMonth = function(){
        return this.month;
    }

    this.getYear = function(){
        return this.year;
    }

    this.setDay = function(day){
        this.day = day;
    }

    this.setMonth = function(month){
        this.month = month;
    }

    this.setYear = function(year){
        this.year = year;
    }

    this.setDate = function(day, month, year){
        //console.log(this.setDay +"/"+ this.setMonth +"/"+ this.setYear);
        this.day = day;
        this.month = month;
        this.year = year;

    }

    this.toString = function(){
        console.log(this.day + "/" + this.month + "/" + this.year);
    }
}
let myDate1 = new MyDate (20,12,2019);
//myDate1.Date();
let day = myDate1.getDay();
let month = myDate1.getMonth();
let year = myDate1.getYear();
console.log(day + "/" + month + "/" + year);
myDate1.setDay(10);
myDate1.setMonth(10);
myDate1.setYear(2019);

day = myDate1.getDay();
month = myDate1.getMonth();
year = myDate1.getYear();
console.log(day + "/" + month + "/" + year);
myDate1.setDate(02,02,2018);
myDate1.toString();