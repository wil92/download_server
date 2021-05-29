export * from './error';

export const indexPage = `
<!DOCTYPE html>
<html>
<head>
    <title>Download web</title>
    <style>
        .container {
            max-width: 50%;
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
        a,p {
            text-decoration: none;
            color: #dfe6e5;
            font-weight: bold;
        }
        .extended-a {
            width: 100%;
            display: inline-flex;
        }
        a:hover {
            text-decoration: underline;
        }
        .container {
            width: 80%;
            padding: 20px;
            
            background-color: #2d2d2d;
            color: #dfe6e5;
        }
        .directory {
            color: #729ca8;
        }
        .table {
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Files</p>
        <table class="table">
        <% if (!isRoot) { %>
        <tr><td><a href="/<%= parentDirectory %>" class="extended-a">...</a></td></tr>
        <% } %>
        <% elements.forEach(function(element){ %>
            <tr>
                <td>
                <a href="/<%= element.path %>"
                   class="<%= element.type === 'directory' ? 'directory' : '' %> extended-a">
                <%= element.name + (element.type === 'directory' ? '/' : '') %>
                </a></td>
                <td><%= element.type === 'file' ? element.size + 'B' : '-' %></td>
            </tr>
        <% }); %>
        </table>
    </div>
</body>
</html>
`;
