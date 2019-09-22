let images = [
'./s1.gif',
'./s2.gif',
'./s3.gif',
'./s4.gif',
'./s5.gif',
'./s6.gif',
'./s7.gif',
'./s8.gif',
'./s9.gif',
'./s10.gif',
'./s11.gif',
'./s12.gif'];
let i = 0;
let j = 1000;
function bis(){
    j=j-300;
}
function med(){
     j=j+300;
}
function stop(){
    j = Infinity;
}
function viewImages() {
    document.getElementById('img_main').src = images[i]; 
    i++;
    if (i == images.length) {
        i = 0;
    }
let timerId = setTimeout("viewImages()",j);
};
    
    
   

