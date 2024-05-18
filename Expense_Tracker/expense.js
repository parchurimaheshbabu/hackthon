let arr1 = [];

// Function to add form data to the array
let counter=0
const addexpenses = () => {
  // Create a new subarray
  let subarr = [];

  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const dat = document.getElementById("date").value;
  counter=counter+1
  subarr.push(counter ,amount, category, dat);

  arr1.push(subarr);

  console.log(arr1);
};

const viewall=()=>{


let datalist = document.getElementById("data");

arr1.forEach((subarr, index)=>{
  //    let listItem = document.createElement("tr");
  //    let listItem1 = document.createElement("td");
  //    listItem1.textContent = ` ${subarr[0]}`;
  // //    Category: ${subarr[1]},
  //     // Date: ${subarr[2]}`;
  //    listItem.appendChild(listItem1);
  //     let listItem2 = document.createElement("td");
  //     listItem1.textContent = ` ${subarr[1]}`;
  //     //    Category: ${subarr[1]},
  //     // Date: ${subarr[2]}`;
  //     listItem.appendChild(listItem1);
  //      let listItem3 = document.createElement("td");
  //      listItem1.textContent = ` ${subarr[2]}`;
  //      //    Category: ${subarr[1]},
  //      // Date: ${subarr[2]}`;
  //      listItem.appendChild(listItem1);
  //      datalist.appendChild(listItem)

  datalist.innerHTML += `
<tr>
<td> ${subarr[0]}</td>
<td> ${subarr[1]}</td>
<td> ${subarr[2]}</td>
<td> ${subarr[3]}</td>

</tr>`;
});
}

function delete1(id){
    console.log(id)
arr1.forEach((subarr, index) => {
if (index==id-1){
    subarr.splice(index,-id)
}
    console.log(subarr);
    console.log(index)
})

}