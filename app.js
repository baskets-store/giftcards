//bookmarklet version

var script = document.createElement("script");
script.src =
   "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

let btn = document.querySelector('[data-testid="table-pager-next"]');
let table = document.querySelector("tbody");
let giftcards = [];
let exportData = [];

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const fileName = `export-cadeaubonnen-${day}-${month}-${year}`;

const config = {
   childList: true
};


let observer = new MutationObserver(() => getGiftcards());
document.observer.observe(table, config);

async function getGiftcards() {
   if (table.querySelector('a')) {
      giftcards.push(table);
      if (btn.disabled == false) {
         nextPage();
      } else {
         exportToCvc()
      };
   } else {
      console.log("skip the skeleton");
   };
};

getGiftcards();


async function nextPage() {
   await giftcards.forEach((tbody) => {
      tbody.children.forEach(row => exportData.push({
         "Cadeauboncode": `'${row.children[0].innerText}`,
         "Activeringsdatum": row.children[1].innerText,
         "Status": row.children[2].innerText,
         "Order-ID": row.children[3].innerText,
         "Saldo": row.children[4].innerText
      }));
   });
   btn.click();
};


async function exportToCvc() {
   await objectExporter({
      exportable: exportData,
      type: "xls",
      fileName: fileName,
      headers: [
         "Cadeauboncode",
         "Activeringsdatum",
         "Status",
         "Order-ID",
         "Saldo"
      ]
   });
};
