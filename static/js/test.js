// console.log("Sheet Loaded!");

// res = [
//     ["1", "2", "3"],
//     ["4", "5", "6"],
//     ["7", "8", "9"],
//     ["10", "11", "12"],
//     ["13", "14", "15"],
//     ["16", "17", "18"],
// ]

// populateSheet(res);


// function populateSheet(result) {
//     let array_rows = result.length;
//     // array_cols = result.values[0].length;
//     var par_table = document.getElementById("parent_table");
  
//     var table = document.createElement("TABLE");
//     table.setAttribute("id", "data_table");
  
//     // var table_head = document.createElement("THEAD");
//     var tableBody = document.createElement("TBODY");
//     table.appendChild(tableBody);
//     // table.appendChild(table_head);
  
//     for(var row=0; row<array_rows; row++) {
//       var tr = document.createElement("TR");
//       tableBody.appendChild(tr);
  
//       result[row].forEach(el => {
//         var td = document.createElement("TD");
//         var val = document.createElement("INPUT");
//         val.setAttribute("type", "text");
//         val.setAttribute("class", "inp");
//         val.setAttribute("value", el);
//         td.appendChild(val);
//         tr.appendChild(td);
//       });
//     }
//     par_table.appendChild(table);
//     // console.log(par_table);
//   }
  

// var input = document.getElementsByClassName("inp");
// for (let i = 0; i < input.length; i++) {
//   input[i].addEventListener("change", function() {
//     console.log(this.value);
//   });
// }

// console.log("Sliced: ", res.slice(2));
// console.log("Sliced: ", res.slice(4, 4));
// console.log("Sliced: ", res.slice(3, 20));
// console.log("Sliced: ", res.slice(10, 20));

let names = [
  "OR 02 BH 7644",
  "OR 02 BJ 0744",
  "OR 02 BG 4344",
  "OD 02 S 3044",
  "OD 02 E 7044",
  "OD 02 G 9144",
  "OR 02 BZ 5744",
  "OR 02 AC 0242",
  "OR 02 BP 7944",
  "OR 02 AZ 0644",
  "OD 02 G 9044",
  "OR 02 BP 8144",
  "OR 02 BZ 4244",
  "OR 02 BZ 5044",
  "OR 02 AN 1119",
  "OD 02 E 5844",
  "OD 02 J 0244",
  "OD 02 E 6044",
  "OD 02 Q 2844",
  "OD 02 J 0344",
  "OD 33 C 7344",
  "OR 02 AJ 2834",
  "OR 02 BU 6144",
  "OD 02 AZ 8644",
  "OR 02 BH 7244",
  "OR 02 AD 8628",
  "OR 02 AD 9818",
  "OR 05 AG 0007",
  "OR 02 BA 8444",
  "OR 02 Q 7007",
  "OD 02 T 1344",
  "OD 02 N 6677",
  "OD 02 BS 0573",
  "OD 02 BR 9180",
  "OR 02 BQ 8944",
  "OR 02 T 7007",
  "OD 33 J 0306",
  "OR 02 BG 4383",
  "OR 02 S 0042",
  "OD 33 D 4544",
  "OD 33 D 4744",
  "OD 02 R 0744",
  "OR 02 AM 0306",
  "OR 02 AH 6624",
  "OR 02 AL 9042",
  "OR 02 AZ 1044",
  "OD 02 BE 3644",
  "OD 02 BE 4044",
  "OD 02 BE 4144",
  "OR 02 BR 3244",
  "OR 02 AZ 0144",
  "OD02 BH 9944",
  "OD 05 T 8011",
  "OD 02 Q 6544",
  "OR 04  H 7007",
  "OD 02 AE 7007",
  "OD 02 BE 7007",
  "OD 02 H 5644",
  "OD 02 AB 2844",
  "OD 02 AZ 7007",
  "OD 02 AQ 7007",
  "OD 02 AT 7007",
  "OD 02 AY 7007",
  "OD 33 C 5184",
  "OD 02 C 7733",
  "OD 02 L 8944",
  "OD 02 N 4929",
  "OD 02 AA 7990",
  "OD 02 AT 4095",
  "OD 02 E 1744",
  "OR 02 BV 6144",
  "OD 02 F 7644",
  "OD 33 D 4144",
  "OR 02 BG 1844",
  "OD 33 D 4644",
  "OD 33 D 5644",
  "OR 02 AT 6844",
  "OR 02 AH 6625",
  "OD 02 BE 3544",
  "OD 02 BE 3744",
  "OR 02 AT 8544",
  "OR 02 BR 3144",
  "OR 02 AZ 2644",
  "OR 02 AZ 2744",
  "OR 02 BZ 7044",
  "OR 02 BZ 7144",
  "OR 02 BZ 7244",
  "OD 02 AB 2344",
  "OR 02 BG 1744",
  "OR 02 BZ 8459",
  "OR 02 BP 8044",
  "OR 02 AT 5344",
  "OD 02 S 9344",
  "OD 02 S 9644",
  "OD 02 T 1244",
  "OD 02 N 9544",
  "OR 02 AP 2266",
  "OD 02 U 1544",
  "OR 02 BX 6944",
  "OD 02 AB 2944",
  "OD 02 AB 3044",
  "OD 02 E 6844",
  "OD 02 F 7444",
  "OD 02 R 0944",
  "OR 02 BZ 5844",
  "OR 02 AZ 0544",
  "OR 02 AZ 0844",
  "OR 02 BZ 0944",
  "OD 02 E 5944",
  "OD 33 J 6544",
  "OD 33 AC 1948",
  "OD 02 BM 7975",
  "OD 02 BM 7954",
  "OD 02 BJ 9593",
  "OD 02 BJ 9598",
  "OD 33 AC 9029",
  "OD02 BS 0781",
  "OD 02 BL 8244",
  "OD02 BL 8144",
  "OR 02 BX 2974",
  "OD 02 H 7244",
  "OD 02 B 9644",
  "OD 02 BA 0944",
  "OD02 BJ 2044",
  "OD 02 BH 8044",
  "OD 02 BJ 9597",
  "OD 02BJ9592",
  "OD 02 BJ 9599",
  "OD 02 BJ 9596",
  "OR 02 AS 2585",
  "OD 02 V 3002",
  "OD 02 BN 7007",
  "OD 02 BP 7007",
  "OD 33 AE 3619"
];
//Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");

//Execute function on keyup
input.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string

    if (
      // i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      i.toLowerCase().includes(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substring(0, input.value.length) + "</b>";
      word += i.substring(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
      document.querySelector(".list").style.maxHeight = "400px";
      document.querySelector(".list").style.overflowY = "scroll";
    }
  }
});
function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}