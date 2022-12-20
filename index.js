//script for export tool
var script = document.createElement("script");
script.src =
  "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

const btn = document.querySelector('[data-testid="table-pager-next"]');
const table = document.querySelector("tbody");
const tableArray = [];
const exportData = [];

//settings on what to observe
const config = {
  childList: true,
};

//what to observe
observer.observe(table, config);

//function thats needs to take care of going through all the pages and stop when all the pages data is pushed to an array
async function getGiftcards() {
      //first page table push to array
      await tableArray.push(table);

  if (btn.disabled == false) {    
   //to next page
    await btn.click();

    //anytime a child of the parent element (the table) changes than push the data from the table to an array. After that you want to go to the next page.
    //there needs to change something first
     const observer =  await new MutationObserver(function () {
      console.log("hello observer ");
    });

     //repeat untill the button is disabled
    await getGiftcards();
   } 
   
   else {
    console.log("btn is disabled");
  }

  await tableArray.forEach((table) => {
    table.children.forEach((child) =>
      exportData.push({
        child,
      })
    );
  });

  await objectExporter({
    exportable: exportData,
    type: "xls",
    fileName: "test",
    headers: [
      "Cadeauboncode",
      "Activeringsdatum",
      "Status",
      "Order-ID",
      "	Saldo",
    ],
  });
}

getGiftcards();

// exportData.forEach(child => console.log(child.child.textContent))
