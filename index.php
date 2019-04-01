<!DOCTYPE html>
<html>
<head>
    <title>Some interesting title</title>
    <script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.0/jquery-ui.min.js"></script>

<style>
    body,html{
        padding: 0;
        margin:0;
        background-color: #000098;
        color: yellow;
    }
    #content{
        text-align: center;
        position: absolute;
        top: 40%;
        margin-top: -150px;
        width: 100vw;
    }
    #img{
        height: 300px;
        width: 300px;
        border: 1px solid black;
        display: inline-block;
    }
    marquee{
        font-size:50px;
        font-family: 'Comic Sans MS';
        margin-top: 30px;
    }
    .star{
        height:200px;
        width:200px;
    }
    #stars{
        position:absolute;
        display:inline-block;
        bottom:30px;
        width:100vw;
        height:200px;
        padding:0;
        margin:0;
        text-align:center;
    }
</style>
</head>
<body>
    <div id="stars"></div>
    <marquee behaviour="alternate" scrollamount=50>BABA JI KI JA HO</marquee>
    <form id="content">
    <img id="img" align="middle" src="#" onerror="this.src='http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png'"/><br><br>
    <input id="up" type="file" /><br><br>

        <input type="text" placeholder="Name"/>
        <input type='submit'/>
</form>
<script>
	var up = document.getElementById('up');
	up.onchange = function(){
		var image = up.files[0];
		console.log(image);
		var reader = new FileReader();
		reader.onloadend = function(){
			console.log(reader.result);
			img = document.getElementById('img');
			img.src= reader.result;  //read.result contains the base64 code. Voh seedha src me laga ke bhi chal jata hai.Isko variable me store karva ke send kar de server side
			//var li = document.createElement('li');
			//preview ke liye canvas use kar le,it'll be much more efficient
			//li.appendChild(img);
			//document.getElementById('list').appendChild(li);
		}
		reader.readAsDataURL(image); //this reads the base64 of the image. Iske upar vala block iske baad execute hota hai

	}
    var y=document.getElementById('stars');
    var a= window.innerWidth/200;
    a=parseInt(a);
    var star = '<img class="star" src="https://thumbs.gfycat.com/GlassWellgroomedIndri.webp">';
    
    for(i=0;i<a;i++){
        y.innerHTML+=star;
    }

</script>
</body>
</html>