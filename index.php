<!DOCTYPE html>
<html>
<head>
    <title>Some interesting title</title>
    <link class="jsbin" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />
<script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.0/jquery-ui.min.js"></script>

<style>
    body,html{
        padding: 0;
        margin:0;
    }
    #content{
        text-align: center;
        position: absolute;
        top: 50%;
        margin-top: -150px;
        width: 100vw;
    }
    #image{
        height: 200px;
        width: 200px;
        border: 1px solid black;
        display: inline-block;
    }
</style>
</head>
<body>
    <div id="content">
        <div id="blah" src="#"></div><br><br>
        <input type='file' onchange="readURL(this);" />
        <input type="text" placeholder="Name"/>
    </div>
<script>
function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(200);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
</script>
</body>
</html>