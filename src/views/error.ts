export const ErrorPage = `
<!DOCTYPE html>
<html>
<head>
    <title>Download web</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <style>
        .container {
            max-width: 50%;
            width: 50%;
        }
        @media screen and (min-width: 1441px) {
            .container {
                width: 30% !important;
                max-width: 30% !important;
            }
        }
        @media screen and (max-width: 768px) and (min-width: 376px) {
            .container {
                width: 80% !important;
                max-width: 80% !important;
            }
        }
        @media screen and (max-width: 375px) {
            .container {
                width: 100% !important;
                max-width: 100% !important;
            }
        }

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
