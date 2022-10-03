var numVentas,venta,suma=0;
numVentas=prompt("Introduce número de ventas");
numVentas=parseInt(numVentas);

for (var i = 1; i <= numVentas; i++) {
    venta=prompt("Introduce venta "+i);
    suma+=parseFloat(venta);
}
console.log("Total "+suma);
