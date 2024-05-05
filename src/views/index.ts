export * from './error';

export const indexPage = `
<!DOCTYPE html>
<html>
<head>
    <base href="<%= baseUrl %>">
    <title>Download web</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <style>
        .container {
            max-width: 50%;
            width: 50%;
            display: flex;
            flex-direction: column;
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
            padding: 20px;
            
            background-color: #2d2d2d;
            color: #dfe6e5;
        }
        .directory {
            color: #729ca8;
        }
        .table {
            display: block;
            width: 100%;
            max-width: 100%;
        }
        .table tbody,thead {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 100%;
        }
        .table tr {
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-direction: row;
            
            td, th {
                overflow: hidden;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Files</p>
        <div style="display: flex; flex-direction: column;max-width: 100%">
            <table class="table">
            <thead>
                <tr>
                    <th style="width: 70%"></th>
                    <th style="width: 15%">size</th>
                    <th style="width: 15%">action</th>
                </tr>
            </thead>
            <tbody>
            <% if (!isRoot) { %>
            <tr><td><a href="<%= parentDirectory %>" class="extended-a">...</a></td></tr>
            <% } %>
            <% elements.forEach(function(element){ %>
                <tr>
                    <td style="width: 70%">
                        <a href="<%= element.path %>"
                           title="<%= element.name + (element.type === 'directory' ? '/' : '') %>"
                           style="display: block; text-overflow: ellipsis; white-space: nowrap; overflow: hidden"
                           class="<%= element.type === 'directory' ? 'directory' : '' %> extended-a">
                            <%= element.name + (element.type === 'directory' ? '/' : '') %>
                        </a>
                    </td>
                    <td style="width: 15%;text-align: center;">
                        <%= element.type === 'file' ? element.size + 'B' : '-' %>
                    </td>
                    <% if (allowRemove) { %>
                    <td style="width: 15%;text-align: center;">
                        <button title="delete" onclick="deleteElement('<%= element.path %>')">x</button>
                    </td>
                    <% } %>
                </tr>
            <% }); %>
            </tbody>
            </table>
        </div>
    </div>
    <script type="application/javascript">
        function deleteElement(path) {
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
              if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                switch (this.status) {
                    case 200:
                        // refresh the page
                        location.reload();
                        break;
                    default:
                        // show error
                        break;
                }
              }
            };
            xhttp.open('DELETE', 'delete_element/' + path, true);
            // xhttp.setRequestHeader('Authentication', 'XMLHttpRequest');
            xhttp.send();
        }
    </script>
</body>
</html>
`;
