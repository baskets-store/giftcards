//script for export tool
var script = document.createElement("script");
script.src =
   "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

const btn = document.querySelector('[data-testid="table-pager-next"]');
const table = document.querySelector("tbody");
const giftcards = [];
const exportData =[];

const config = {
   childList: true,
};

const observer = new MutationObserver(() => getGiftcards());

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
      giftcard.children.forEach((child) => exportData.push({child}));
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

// const newArray = []
// exportData.forEach(data => newArray.push(data.child.innerText))


