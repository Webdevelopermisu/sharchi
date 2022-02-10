
var i = 0;
var images = [];
var time = 5000;

images[0] = 'image/01.jpg';
images[1] ='image/02.jpg';
images[2] ='image/03.jpg';
images[3] ='image/04.jpg';


function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()",time);
}

window.onload = changeImg;

/* .nav-bar{
    position: absolute;
    top: 50%;
    left: 0;
}
.nav-bar nav ul{
    width: 450px;
	text-align: left;
    padding: 0 4rem;
    transition: 1s ease;
}
.nav-bar nav ul li{
	list-style: none;
	margin: 0px 10px;
    padding: 20px 10px;
    transition: 1s ease;
}
.nav-bar nav ul li a{
	text-decoration: none;
    font-size: 30px;
    font-weight: 400;
	color: rgb(250, 242, 242);
    transition: .3s ease;
    padding-left: 10px;
}
.nav-bar ul li:hover::before{
	content: '';
	width: 10px;
	height: 10px;
	background: #36eef4;
    display: inline-block;
    border-radius: 50%;
    margin-bottom: 5px;
    transition: 1s ease;
}
.main-1.nav-bar nav ul li:hover{
    color: aqua;
    font-weight: 400;
} */