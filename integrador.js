alert("Bienvenidos al Chifa madam tusan, esta en su cuenta");
var presupuesto=parseInt(prompt("¿Cuanto tiene de presupuesto?"));
var entrada=parseInt(prompt("¿cuanto cuesta la entrada?"));
var principal=parseInt(prompt("¿Cuanto cuesta el plata principal?"));
var postre=parseInt(prompt("¿Cuanto cuesta el postre?"));
var total=entrada+principal+postre;
var igv=(total*18/100);
console.log("Tu vuelto es de:",(presupuesto));
console.log("la entrada cuesta",entrada);
console.log("la principal",principal);
console.log("el postre cuesta",postre);
console.log("la cuenta total cuesta",total);
console.log("el igv sale",igv);
console.log("Madam Tusan agraduce su vista, vuelva pronta")