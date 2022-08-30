const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL1 = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

document.addEventListener("DOMContentLoaded", function (e) {

  //!(window.location.href.endsWith("index.html") si no estoy en el index.html
  //si el usuario no esta logueado, y no esta parado en el login, te redirecciona al Login
  if ((!localStorage.getItem("correo")) && !(window.location.href.endsWith("index.html"))) {
    window.location.href = "index.html"
  }
  else {
    /* Getting the user from the local storage. */
    //Lo convierte al Json y agarra de ahi el dato
    //Guardamos los valores de correo
    let user = JSON.parse(localStorage.getItem("correo"));
    // crea una etiqueta a
    let html = document.createElement("a");

    html.innerHTML += ` <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${user.mail}
        </a>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li><a class="dropdown-item" href="cart.html">Ver mi carrito</a></li>
          <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
          <li> <a class="dropdown-item" id="logout" href="#">Cerrar sesión</a></li>
        </ul>
      </li>
    </ul>
  </div>`

//trae a nav padre en la posicion del final en una variable
    let hola = document.getElementsByTagName("nav")[0];

    /* Adding the html element to the navbar. */
    // agregamos una etiqueta A hija al Nav padre
    // .children devuelve los child elements
    // crea las etiquetas HTML con un menu desplegable, div, ul, li y a
    hola.children[0].appendChild(html);
    html.style.color = 'white';
    /* An event listener that is listening for a click on the logout button. When the button is
    clicked, it removes the user from the local storage and redirects to the index.html page. */
    document.getElementById('logout').addEventListener("click", function(){
      //remueve del local storage "correo"
      localStorage.removeItem("correo");
      // localStorage.setItem("Logueado", false);
      //REDIRIGE AL LOGIN
      window.location.replace("index.html");
    })
  }
});