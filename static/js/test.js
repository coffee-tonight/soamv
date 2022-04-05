console.log("Sheet Loaded!");

res = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["10", "11", "12"],
    ["13", "14", "15"],
    ["16", "17", "18"],
]

populateSheet(res);


function populateSheet(result) {
    let array_rows = result.length;
    // array_cols = result.values[0].length;
    var par_table = document.getElementById("parent_table");
  
    var table = document.createElement("TABLE");
    table.setAttribute("id", "data_table");
  
    // var table_head = document.createElement("THEAD");
    var tableBody = document.createElement("TBODY");
    table.appendChild(tableBody);
    // table.appendChild(table_head);
  
    for(var row=0; row<array_rows; row++) {
      var tr = document.createElement("TR");
      tableBody.appendChild(tr);
  
      result[row].forEach(el => {
        var td = document.createElement("TD");
        var val = document.createElement("INPUT");
        val.setAttribute("type", "text");
        val.setAttribute("class", "inp");
        val.setAttribute("value", el);
        td.appendChild(val);
        tr.appendChild(td);
      });
    }
    par_table.appendChild(table);
    // console.log(par_table);
  }
  

var input = document.getElementsByClassName("inp");
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("change", function() {
    console.log(this.value);
  });
}

console.log("Sliced: ", res.slice(2));
console.log("Sliced: ", res.slice(4, 4));
console.log("Sliced: ", res.slice(3, 20));
console.log("Sliced: ", res.slice(10, 20));