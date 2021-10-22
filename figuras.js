// Código del cuadrado
// console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
// console.groupEnd();


// Código del triángulo
// console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

// console.groupEnd();

// Código del círculo
// console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");


// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);


// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// console.groupEnd();

// Aquí interactuamos con el HTML

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triángulo

function calcularPerimetroTriangulo() {
    const ladoA = document.getElementById("InputA");
    const ladoB = document.getElementById("InputB");
    const ladoBase = document.getElementById("InputBase");

    const iA = Number(ladoA.value);
    const iB = Number(ladoB.value);
    const iBase = Number(ladoBase.value);

    const perimetro = perimetroTriangulo(iA, iB, iBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const basesita = document.getElementById("InputBase2");
    const alturita = document.getElementById("InputAltura");

    const iB = Number(basesita.value);
    const iAlturita = Number(alturita.value);

    const area = areaTriangulo(iB, iAlturita);
    alert(area);
}


// Círculo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}