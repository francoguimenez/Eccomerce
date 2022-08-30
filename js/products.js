const url =  `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`;

// `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`;
// `https://japceibal.github.io/emercado-api/cats_products/101.json`;


const ORDER_ASC_BY_COST = "AZ";
const ORDER_DESC_BY_COST = "ZA";
const ORDER_BY_PROD_COST = "Precio";
// let currentCategoriesArray = [];
let productsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COST){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}
function showProducts(){
    // const prodCont = document.getElementById('prod-container')
    let htmlContentToAppend = "";
    for (let product of productsArray){
        /* Getting the value of the search bar and converting it to lower case. */
        let searchProduct = document.getElementById("searchBar").value.toLowerCase(); 
        // for(let i=0; 1 < productsArray.length; i++){
        //     let product = productsArray[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount)) && 
            (/* Checking if the product name or description includes the searchProduct. */
            (product.name.toLowerCase().includes(searchProduct)) || (product.description.toLowerCase().includes(searchProduct)))){
 
        // prodCont.innerHTML 
        htmlContentToAppend += `
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
            
            document.getElementById("prod-container").innerHTML = htmlContentToAppend;
    }

}
// function sortAndShowCategories(sortCriteria, productosArray){
//     currentSortCriteria = sortCriteria;

//     if(productosArray != undefined){
//         productsArray = productosArray;
//     }

//     productsArray = sortCategories(currentSortCriteria, productsArray);

    
//     showProducts();
// }

function sortAndShowProducts(sortCriteria, productosArray){
    currentSortCriteria = sortCriteria;

    if(productosArray != undefined){
        productsArray = productosArray;
    }

    productsArray = sortCategories(currentSortCriteria, productsArray);


    showProducts();
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then(function(result){
        if (result.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_COST, result.data.products);
        } 
    });// Automáticamente se muestra por orden de menor a mayor

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COST);
    });
});
    //         sortAndShowProducts(ORDER_ASC_BY_COST, result.data.products);
    //     } 
    // });// Automáticamente se muestra por orden de menor a mayor

    // document.getElementById("sortAsc").addEventListener("click", function(){
    //     sortAndShowProducts(ORDER_ASC_BY_COST);
    // });

    // document.getElementById("sortDesc").addEventListener("click", function(){
    //     sortAndShowProducts(ORDER_DESC_BY_COST);
    // });

    // document.getElementById("sortBySoldCount").addEventListener("click", function(){
    //     sortAndShowProducts(ORDER_BY_PROD_COST);
    // });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    showProducts();
});



document.getElementById("rangeFilterCount").addEventListener("click", function(){

    minCount = document.getElementById("rangeFilterCountMin").value;
    maxCount = document.getElementById("rangeFilterCountMax").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }

    showProducts();
});
