//crearea unor matrici care contin valori numerice
const A = [
    [1, 2, 3],
    [8, 9, 10],
    [15, 16, 17]
];
const B = [
    [5, 6, 7],
    [12, 13, 14],
    [19, 20, 21],
];

//const rezultat: o variabila goala ce va contine suma a celor doua matrici
const rezultat = [];

function setup() {
    createCanvas(800, 600);
    rezultat = sumaMatrici(A, B);//aduna matricea A si B din paranteze, dupa care vor fii salvate in variabila rezultat

    background(200);

    //afisarea matricilor & suma acestora
    afiseazaMatrici(A, 50, 80, "Matricea A");
    afiseazaMatrici(B, 250, 80, "Matricea *");
    afiseazaMatrici(rezultat, 450, 80, "A + B");
}

function sumaMatrici(m1, m2){
    const rezultat = [];
    for(let i=0; i< m1.length; i++){
        let r = [];
        for(let j=0; j< m1[i].length; j++){
            r.push(m1[i][j] + m2[i][j]);
        }
        rezultat.push(r);
    }
    return rezultat;
}

function afiseazaMatrici(mat, startX, startY, titlu){
    textSize(16);
    text(titlu, startX, startY);

    const marimeCelula = 50;

    for(let i=0; i< mat.length; i++){
        for(let j=0; j< mat[i].length; j++){
            fill(random(100, 200), random(100, 200), random(100, 200));
            rect(startX + j * marimeCelula, startY + i * marimeCelula, marimeCelula, marimeCelula);
            stroke(0);
            fill(0);
            noStroke();
            textAlign(CENTER, CENTER);
            text(mat[i][j], startX + j * marimeCelula + marimeCelula / 2, startY + i * marimeCelula + marimeCelula / 2);
        }
    }
}

