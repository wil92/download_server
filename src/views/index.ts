export const indexPage = `
<!DOCTYPE html>
<html>
<head>
    <title>Download web</title>
    <style>
        body {
            background-color: #2d2d2d;
            color: #dfe6e5;
        }
    </style>
</head>
<body>
    <h1>Files</h1>
    <% files.forEach(function(file){ %>
    <ul>
    <a href="/<%= file %>">
    <%= file %>
    </a>
    </ul>
    <% }); %>
</body>
</html>
`;
