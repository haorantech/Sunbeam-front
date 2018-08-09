<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <style>
        	html,
			body {
			    margin: 0;
			    padding: 0;
			}

			.tools {
			    height: 130px;
			    border: 1px solid #d4d4d4;
			}

			.table {
			    border: 1px solid #d4d4d4;
			    position: absolute;
			    top: 160px;
			    left: 0;
			    right: 0;
			    bottom: 0;
			}
        </style>
    </head>
    <body>
        <input type="hidden" id="auth_key" value="38b4053d-c84f-481f-8753-03469448ac78">
        <div class="app"></div>
       <script src="./sunbeam.js"></script>
        <script>
            Sunbeam('.app');
        </script>
    </body>
</html>