console.log("---Pre entrega 4---")
const stock = ["Monitor Externo 4K", "Teclado Mecánico Ergonómico", "Hub USB-C", "Mouse Mecánico Ergonómico","Monitor 32\" Curvo"];


stock.push("Webcam Full HD")

console.log(stock)
console.log(stock.length)

stock.unshift("SSD Externo 1TB")

console.log(stock) 

let elementoEliminado = stock.pop();

console.log(stock);
console.log(`Se ha eliminado el elemento: ${elementoEliminado}`);

const productoBuscado = prompt("¿Qué producto estás buscando?");

if (stock.includes(productoBuscado)) {
  console.log(`El producto "${productoBuscado}" se encontró en la posición ${stock.indexOf(productoBuscado)}`);
} else {
  console.log(`El producto "${productoBuscado}" no está en el stock`);
}

let indice = 1;
let productoAnterior = stock[indice];      
let productoNuevo = "MacBook 14 Pro";       

stock.splice(indice, 1, productoNuevo);

console.log(stock);
console.log(`Se ha reemplazado el elemento ${productoAnterior} por el producto: ${productoNuevo}`);

function mostrarStock(lista) {
  console.log("\n--- Recorrido con FOR...OF ---");
  for (const producto of lista) {
    console.log(`🏷️ ${producto}`)
  }
}

mostrarStock(stock);