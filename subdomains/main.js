
const random_quotes_url = 'http://backendless.io/user/ceac10a0309e60457d2567b349fa872bc913dc2958b9b0a86052f8a2c0752e6e/api/a0c33e704e9f976/get_registered_subdomains.php'
var xhr = new XMLHttpRequest();
get_and_update_random_quote();

function get_and_update_random_quote(){
    xhr.open("GET", random_quotes_url, true);
    xhr.onload = function(){
        var response = JSON.parse(xhr.responseText);
        var entries = response.response.result
        
        var table_ready_data = []

        for (i = 0; i < entries.length; i++) {
            table_ready_data.push([i+1, entries[i].subdomain, entries[i].timestamp]);
        }
        createTable(table_ready_data);
    };
    xhr.send();
}

$(document).ready(function() {
    $("#get-quote").click(function(){
        get_and_update_random_quote();
    });     
});

function createTable(tableData) {
    var table = document.getElementById('table');
    table.setAttribute('border', '1')
    table.setAttribute('class', 'table table-striped table-hover ')
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }  