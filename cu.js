var i=0;
var time=3000;
var images=[];

images[0]="university.jpg";
images[1]="university2.jpg";
images[2]="myschool.jpeg";

function ChangeImg()
{
    document.slide.src=images[i];

    if(i<images.length - 1){
       i++;
    }
    else{
        i=0;
    }
    setTimeout("ChangeImg()",time);
}
window.onload=ChangeImg;