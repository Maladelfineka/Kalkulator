function dodajZnak(napis, znak){
    var ostatni = napis[napis.length-1];
    if(ostatni == '+'|| ostatni == '*'|| ostatni == '-'|| ostatni == '/'){
        napis = napis.slice(0,-1)
        napis += znak;
    }else{
        napis += znak;
    }
    return napis;
}
// ||napis.indexOf("-")||napis.indexOf("*")||napis.indexOf("/")
function wyniki(napis){
    var liczba ='';
    var znak = '';
    var liczba2 = ''
    if (napis.indexOf("+") == 1) {
        znak = napis.indexOf("+");
        liczba = napis.slice(0, znak);
        liczba2 = napis.slice(znak + 1, napis.length);
        console.log(liczba)
        console.log(liczba2)
        console.log(znak)
        msg.innerHTML = parseInt(liczba) + parseInt(liczba2);

    }else if(napis.indexOf("-") == 1) {
        znak = napis.indexOf("-");
        liczba = napis.slice(0, znak);
        liczba2 = napis.slice(znak + 1, napis.length);
        console.log(liczba)
        console.log(liczba2)
        console.log(znak)
        msg.innerHTML = parseInt(liczba) - parseInt(liczba2);

    }else if(napis.indexOf("/") == 1) {
        znak = napis.indexOf("/");
        liczba = napis.slice(0, znak);
        liczba2 = napis.slice(znak + 1, napis.length);
        console.log(liczba)
        console.log(liczba2)
        console.log(znak)
        msg.innerHTML = parseInt(liczba) / parseInt(liczba2);
    }else if(napis.indexOf("*") == 1) {
        znak = napis.indexOf("*");
        liczba = napis.slice(0, znak);
        liczba2 = napis.slice(znak + 1, napis.length);
        console.log(liczba)
        console.log(liczba2)
        console.log(znak)
        msg.innerHTML = parseInt(liczba) * parseInt(liczba2);
    }    
}

var msg = document.querySelector('.msg');
console.log(msg)
msg.innerHTML = '';
var zero = document.querySelector('.zero')
console.log(zero)
zero.onclick = function(){
    //msg.innerHTML = msg.innerHTML + 0; 
    msg.innerHTML += 0;
}
var jeden = document.querySelector('.jeden')
console.log(jeden);
jeden.onclick = function(){
    msg.innerHTML += 1;
}
var dwa = document.querySelector('.dwa')
console.log(dwa);
dwa.onclick = function(){
    msg.innerHTML += 2;
}
var trzy = document.querySelector('.trzy')
console.log(trzy);
trzy.onclick = function(){
    msg.innerHTML += 3;
}
var cztery = document.querySelector('.cztery')
console.log(cztery);
cztery.onclick = function(){
    msg.innerHTML += 4;
}
var piec = document.querySelector('.piec')
console.log(piec);
piec.onclick = function(){
    msg.innerHTML += 5;
}
var szesc = document.querySelector('.szesc')
console.log(szesc);
szesc.onclick = function(){
    msg.innerHTML += 6;
}
var siedem = document.querySelector('.siedem')
console.log(siedem);
siedem.onclick = function(){
    msg.innerHTML += 7;
}
var osiem = document.querySelector('.osiem')
console.log(osiem);
osiem.onclick = function(){
    msg.innerHTML += 8;
}
var dziewiec = document.querySelector('.dziewiec')
console.log(dziewiec);
dziewiec.onclick = function(){
    msg.innerHTML += 9;
}
var usun = document.querySelector('.usun')
console.log(usun);
usun.onclick = function(){
    msg.innerHTML = '';
}
var usun2 = document.querySelector('.usun2')
console.log(usun2);
usun2.onclick = function(){
    msg.innerHTML = msg.innerHTML.slice(0,-1);
}
var plus = document.querySelector('.plus')
console.log(plus);
plus.onclick = function(){
    msg.innerHTML = dodajZnak(msg.innerHTML.toString(), '+')
}
var minus = document.querySelector('.minus')
console.log(minus);
minus.onclick = function(){
    msg.innerHTML = dodajZnak(msg.innerHTML.toString(), '-');
}
var mnozenia = document.querySelector('.mnozenia')
console.log(mnozenia);
mnozenia.onclick = function(){
    msg.innerHTML = dodajZnak(msg.innerHTML.toString(), '*');
}
var dzielenie = document.querySelector('.dzielenie')
console.log(dzielenie);
dzielenie.onclick = function(){
    msg.innerHTML = dodajZnak(msg.innerHTML.toString(), '/')
}
var wynik = document.querySelector('.wynik');
console.log(wynik);
wynik.onclick = function(){
    wyniki(msg.innerHTML);
}
