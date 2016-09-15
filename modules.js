var dataHandler = {
    getData: function(callback) {
        var data = [{
            name: 'foo',
            year: 12,
            value: 1500,
            color: 'red'
        }, {
            name: 'foo',
            year: 12,
            value: 1500,
            color: 'red'
        }, {
            name: 'foo',
            year: 12,
            value: 1500,
            color: 'red'
        }];
        callback(data);
    }
};

var cmpHandler = {
    createTable: function(ele, data) {
        var i, ln = data.length;
        var row, cell, d;
        var frag = document.createDocumentFragment();

        // loop through the data and gen the html string
        for (i = 0; i < ln; i++) {
            d = data[i];
            row = document.createElement('tr');
            for (var j in d) {
                cell = document.createElement('td');
                cell.innerHTML = d[j];
                row.appendChild(cell);
            }
            frag.appendChild(row);
        }

        table.appendChild(frag);
    }
};
