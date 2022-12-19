var script = document.createElement('script');
script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

const btn = document.querySelector('[data-testid="table-pager-next"]')
const table = document.querySelector('tbody')
const tableArray = [];


async function getGiftcards (){

if (btn.disabled == false){
    await console.log("btn is enabled")
    await tableArray.push(table)
    await btn.click();
   await  getGiftcards()
}
else {
   await tableArray.push(table)
   await console.log("btn is disabled")
}

}
getGiftcards()

