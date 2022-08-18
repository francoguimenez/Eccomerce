const url = 'https://japceibal.github.io/emercado-api/cats_products/101.json';


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then(function(result){
        if (result.status === "ok"){
            productsArray = result.data.products
            showProducts();
        }
    });
});

// document.addEventListener("DOMContentLoaded", function(e){
//     getJSONData(CATEGORIES_URL).then(function(resultObj){
//         if (resultObj.status === "ok"){
//             currentCategoriesArray = resultObj.data
//             showCategoriesList()
            
//         }
//     });
// });

function showProducts(){
    const prodCont = document.getElementById('prod-container')
    for (let product of productsArray){
          
        // for(let i=0; 1 < productsArray.length; i++){
        //     let product = productsArray[i];
        
        prodCont.innerHTML += `
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                        <small class="text-muted">${product.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${product.description}</p>
                </div>
            </div>
        </div>
        `
    
    }

}


// let carsArray = [];


// function showCars(array){
//     let htmlContentToAppend = "";

//     for(let i = 0; i < array.length; i++){ 
//         let products = array[i];
//         htmlContentToAppend += `
//         <div class="list-group-item list-group-item-action">
//             <div class="row">
//                 <div class="col-3">
//                     <img src="` + products.image + `" alt="product image" class="img-thumbnail">
//                 </div>
//                 <div class="col">
//                     <div class="d-flex w-100 justify-content-between">
//                         <div class="mb-1">
//                         <h4>`+ products.name +`</h4> 
//                         <p> `+ products.description +`</p> 
//                         </div>
//                         <small class="text-muted">` + products.soldCount + ` artículos</small> 
//                     </div>

//                 </div>
//             </div>
//         </div>
//         `
//         document.getElementsByClassName('alert-heading').innerHTML = htmlContentToAppend; 
//     }
// }

