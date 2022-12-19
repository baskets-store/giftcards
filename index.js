// var script = document.createElement('script');
// script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";
// document.getElementsByTagName('head')[0].appendChild(script);

const btn = document.querySelector('[data-testid="table-pager-next"]')
const table = document.querySelector('tbody')
const tableArray = []
const config = { childList: true };
const exportData = [];

async function getGiftcards (){


// const callback = (mutationList, observer) => {
//     for (const mutation of mutationList) {
//       if (mutation.type === 'childList') {
//         console.log('A child node has been added or removed.');
//       } 
//       else {
//         observer.disconnect();
//       }
     
//     }
//   };

  if (btn.disabled == false){
    await console.log("btn is enabled")
    // const observer = new MutationObserver(callback);
    // observer.observe(table, config);
    await tableArray.push(table)
    await btn.click();
   await  getGiftcards()
}
else {
   await tableArray.push(table)
   await console.log("btn is disabled")
//    observer.disconnect();
}

tableArray.forEach(table => exportData.push(table.children))
}
getGiftcards()


// observer.disconnect();




