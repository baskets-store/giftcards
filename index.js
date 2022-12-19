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
  table.children.forEach((child) => exportData.push({ child}));
});

exportData.forEach(child => console.log(child.child.textContent))


// await objectExporter({
//   exportable: exportData,
//   type: "xls",
//   fileName: "test",
//   headers: ["Cadeauboncode", "Activeringsdatum", "Status", "Order-ID", "	Saldo"],
// });

//zolang de button niet disabled is wel je de table data pushen naar array
//mutatioon observer checkt of er iets (children) veranderen op de pagina, als een child verandert wil je deze pushen naar array
//observer.disconnect();

// exportData.forEach(child => console.log(child.child.textContent))

        function tableToCSV() {
 
            // Variable to store the final csv data
            // var csv_data = [];
 
            // Get each row data
            var rows = document.getElementsByTagName('tr');
            for (var i = 0; i < rows.length; i++) {
 
                // Get each column data
                var cols = rows[i].querySelectorAll('td,th');
 
                // Stores each csv row data
                var csvrow = [];
                for (var j = 0; j < cols.length; j++) {
 
                    // Get the text data of each cell
                    // of a row and push it to csvrow
                    csvrow.push(cols[j].innerHTML);
                }
 
                // Combine each column value with comma
                exportData.push(csvrow.join(","));
            }
 
            // Combine each row data with new line character
            exportData = exportData.join('\n');
 
            // Call this function to download csv file 
            downloadCSVFile(exportData);
 
        }
 
        function downloadCSVFile(exportData) {
 
            // Create CSV file object and feed
            // our csv_data into it
            CSVFile = new Blob([exportData], {
                type: "text/csv"
            });
 
            // Create to temporary link to initiate
            // download process
            var temp_link = document.createElement('a');
 
            // Download csv file
            temp_link.download = "GfG.csv";
            var url = window.URL.createObjectURL(CSVFile);
            temp_link.href = url;
 
            // This link should not be displayed
            temp_link.style.display = "none";
            document.body.appendChild(temp_link);
 
            // Automatically click the link to
            // trigger download
            temp_link.click();
            document.body.removeChild(temp_link);
        }


