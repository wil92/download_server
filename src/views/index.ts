export * from './error';

export const indexPage = `
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
        a,p {
            text-decoration: none;
            color: #dfe6e5;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
        ul {
            padding-inline-start: 0;
        }
        .container {
            max-width: 80%;
            width: 80%;
            padding: 20px;
            
            background-color: #2d2d2d;
            color: #dfe6e5;
        }
        .directory {
            color: #729ca8;
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Files</p>
        <% if (!isRoot) { %>
        <ul><a href="/<%= parentDirectory %>">...</a></ul>
        <% } %>
        <% elements.forEach(function(element){ %>
        <ul>
            <a href="/<%= element.path %>" class="<%= element.type === 'directory' ? 'directory' : '' %>">
                <%= element.name %>
            </a>
        </ul>
        <% }); %>
    </div>
</body>
</html>
`;
