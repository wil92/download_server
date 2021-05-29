export const indexPage = `
<!DOCTYPE html>
<html>
<head>
    <title>Download web</title>
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
