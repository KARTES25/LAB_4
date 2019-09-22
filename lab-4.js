let images = new Array();
let i = 0;
let j = 1000;
 
images[0] = './s1.gif';
images[1] = './s2.gif';
images[2] = './s3.gif';
images[3] = './s4.gif';
images[4] = './s5.gif';
images[5] = './s6.gif';
images[6] = './s7.gif';
images[7] = './s8.gif';
images[8] = './s9.gif';
images[9] = './s10.gif';
images[10] = './s11.gif';
images[11] = './s12.gif';
 
    function viewImages() {
    document.getElementById('img_main').src = images[i]; 
    i++;
    if (i == images.length) {
        i = 0;
    }
    let timerId = setTimeout("viewImages()",j);
    };
    
    function bis(){j=j-300;}
    function med(){j=j+300;}
    function stop(){clearTimeout(timerId);}
   

