const Comidas = function (nombre, cantidad) {
  this.nombre = nombre;
  this.cantidad = cantidad;
};

let salmon = new Comidas("salmon", 15);
let lomo = new Comidas("lomo", 17);
let matambre = new Comidas("matambre", 13);
let risoto = new Comidas("risoto", 9);
let fetuccini = new Comidas("fetuccini", 9);
let wok = new Comidas("wok", 6);
let poke = new Comidas("poke", 6);
let ensalada = new Comidas("ensalada", 10);
let sorrentinos = new Comidas("sorrentinos", 8);

let carta = [
  salmon,
  lomo,
  matambre,
  risoto,
  fetuccini,
  wok,
  poke,
  ensalada,
  sorrentinos,
];

let pedido = [];

function comanda() {
  let plato = prompt("ingrese el plato").toLowerCase().trim();
  let comanda = carta.filter((x) => x.nombre.toLowerCase().includes(plato));

  if (comanda.length > 0) {
    pedido.push(plato);
    console.log(pedido)
  } else {
    alert("El plato " + plato + " no esta disponible");
    let respuesta = confirm("Preguntar al chef?");

    if (respuesta === true) {
      pedirAlChef();
    }
  }
}

function pedirAlChef() {
  let nombre = prompt("ingresa el nombre del plato");
  let cantidad = parseInt(prompt("ingresa la cantidad"));

  if (nombre === "" || nombre === null || isNaN(cantidad)) {
    alert("valores incorrectos, intente nuevamente");
    return;
  } else {
      let nuevo = new Comidas(nombre, cantidad);
    
      pedido.push(nuevo);
      console.table(pedido);
  }

}
console.table(carta)
comanda()