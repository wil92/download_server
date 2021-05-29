export const ErrorPage = `
<!DOCTYPE html>
<html>
<head>
    <title>Download web</title>
    <style>
        body {
            font-family: 'Trebuchet MS', sans-serif;
            
            display: flex;
            flex-direction: row;
            height: 100vh;
            width: 100vw;
            align-items: center;
            justify-content: center;

            margin: 0;
        }
        .container {
            max-width: 80%;
            width: 80%;
            padding: 20px;
            
            background-color: #2d2d2d;
            color: #dfe6e5;
        }
    </style>
</head>
<body>
    <div class="container">
        <p><%= error %></p>
    </div>
</body>
</html>
`;
