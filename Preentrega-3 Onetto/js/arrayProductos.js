const productos = [

    { id: 1, nombre: "Café Negro", precio: 300, cantidad: 1, imagen: "cafe.jpg", descripcion: "" },
    { id: 2, nombre: "Café con leche", precio: 200, cantidad: 1, imagen: "cafeconleche.jpg", descripcion: "" },
    { id: 3, nombre: "Café con tostado ", precio: 400, cantidad: 1, imagen: "cafeytostado.webp", descripcion: "" },
    { id: 4, nombre: "Cookie Chocolate", precio: 150, cantidad: 1, imagen: "cookie.jpg", descripcion: "" },
    { id: 5, nombre: "Cookie blanca", precio: 150, cantidad: 1, imagen: "cookieblanca.jpg", descripcion: "" },
    { id: 6, nombre: "Cookie Chips", precio: 150, cantidad: 1, imagen: "cookienegra.jpg", descripcion: "" },
    { id: 7, nombre: "Tarta jamon ", precio: 250, cantidad: 1, imagen: "tartas.jpg", descripcion: "" },
    { id: 8, nombre: "Brownie  ", precio: 170, cantidad: 1, imagen: "brownie.webp", descripcion: "" },
    { id: 9, nombre: "Tarta de Queso", precio: 250, cantidad: 1, imagen: "tartaQueso.jpg", descripcion: "" },
    { id: 10, nombre: "Postre Mouse", precio: 350, cantidad: 1, imagen: "postres.jpg", descripcion: "" },
    { id: 11, nombre: "Helado", precio: 250, cantidad: 1, imagen: "helado.jpg", descripcion: "" },
    { id: 12, nombre: "Licuado", precio: 230, cantidad: 1, imagen: "licuado.webp", descripcion: "" }

]


const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}
