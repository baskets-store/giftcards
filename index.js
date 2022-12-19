
const btn = document.querySelector('[data-testid="table-pager-next"]')
const table = document.querySelector('tbody')
const tableArray = [];

const observer = new MutationObserver(function(){
   console.log('hello')
   tableArray.push(table)
}); 

const config = { childList: true};



async function getGiftcards (){

if (btn.disabled == false){
   await btn.click();
    await console.log("btn is enabled")
   observer.observe(table, config);
   await  getGiftcards()
}
else {
   await console.log("btn is disabled")
}

}

getGiftcards()






observer.disconnect();



//zolang de button niet disabled is wel je de table data pushen naar array

//mutatioon observer checkt of er iets (children) veranderen op de pagina, als een child verandert wil je deze pushen naar array