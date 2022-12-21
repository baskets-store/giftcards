//script for export tool
var script = document.createElement("script");
script.src =
   "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

let btn = document.querySelector('[data-testid="table-pager-next"]');
let table = document.querySelector("tbody");
let giftcards = [];
let exportData =[];

const config = {
   childList: true,
};

let observer = new MutationObserver(() => getGiftcards());

observer.observe(table, config)

function getGiftcards() {
   if (table.querySelector('a')) {
      giftcards.push(table)
      if (btn.disabled == false) {
         nextPage();
      } else {
         exportToCvc()
      }
   } else {
      console.log("skeleton, a isnt here")
   }

}

getGiftcards();


function nextPage() {
   btn.click();
}


async function exportToCvc() {
   await giftcards.forEach((giftcard) => {
      giftcard.children.forEach((child) => exportData.push(child.innerText));
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
         "Saldo",
      ],
   })
}

// elke column van een rij moet in een object komen
// exportData.forEach(data => newArray.push(data.child.innerText))


