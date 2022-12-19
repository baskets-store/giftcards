const btn = document.querySelector('[data-testid="table-pager-next"]');
const table = document.querySelector("tbody");
const tableArray = [];
const exportData = [];

const observer = new MutationObserver(function () {
  console.log("hello");
  tableArray.push(table);
});

const config = { childList: true };

async function getGiftcards() {
  if (btn.disabled == false) {
    await btn.click();
    await console.log("btn is enabled");
    observer.observe(table, config);
    await getGiftcards();
    
  } else {
     console.log("btn is disabled");
  }
}

getGiftcards();


tableArray.forEach((table) => {
  table.children.forEach((child) => exportData.push({ child }));
});

await objectExporter({
  exportable: exportData,
  type: "xls",
  fileName: "test",
  headers: ["Cadeauboncode", "Activeringsdatum", "Status", "Order-ID", "	Saldo"],
});

//zolang de button niet disabled is wel je de table data pushen naar array
//mutatioon observer checkt of er iets (children) veranderen op de pagina, als een child verandert wil je deze pushen naar array
//observer.disconnect();

// exportData.forEach(child => console.log(child.child.textContent))


