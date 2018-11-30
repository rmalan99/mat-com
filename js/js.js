function pro_ari(){
   var a_1,a_2,a_n,d,total,p;
    a_1=document.getElementById("a1").value;
    a_2=document.getElementById("a2").value;
    a_n=document.getElementById("ai").value;
    d=a_2-a_1;
    p=((a_n-1)*d);
    total=suma(a_1,p);
    document.getElementById("pan").innerHTML="la diferecia es";
    document.getElementById("queso").innerHTML=d;
    document.getElementById("lechuga").innerHTML="valor en la posicion";
    document.getElementById("cebolla").innerHTML=a_n;
    document.getElementById("carne").innerHTML="es";
    document.getElementById("pepino").innerHTML=total;
    document.getElementById("pepino").style="color:red;";  }

function pro_geo(){
    /*
        r=a2/a1;
    an=(a1*(r**(n-1)));
    */
    var an,a1,a2,r,total;
    a1=document.getElementById("g_a1").value;
    a2=document.getElementById("g_a2").value;
    an=document.getElementById("g_an").value;
    r=a2/a1;
    total=(parseInt(a1)*(parseInt(r)**(parseInt(an)-1)));
    document.getElementById("pan").innerHTML="la razon es";
    document.getElementById("queso").innerHTML=r;
    document.getElementById("lechuga").innerHTML="valor en la posicion";
    document.getElementById("cebolla").innerHTML=an;
    document.getElementById("carne").innerHTML="es";
    document.getElementById("pepino").innerHTML=total;
    document.getElementById("pepino").style="color:red;";
}

function int_simp(){
    var va,n,i,total,y;
    va=document.getElementById("va").value;
    n=document.getElementById("n").value;
    i=document.getElementById("i").value;
    y=parseInt(i)/100;
    total=parseInt(va)*parseInt(n)*parseFloat(y);
    document.getElementById("pan").innerHTML="el interes simple es de ";
    document.getElementById("queso").innerHTML=total;
    document.getElementById("queso").style="color:red;";
}
function int_comp(){
   var va,n,i,total,y;
   va=document.getElementById("va").value;
   n=document.getElementById("n").value; 
   i=document.getElementById("i").value;
   y=parseInt(i)/100;
   total=parseInt(va)*((1+parseFloat(y))**n);
   document.getElementById("pan").innerHTML="el interes compuesto generado es";
   document.getElementById("queso").innerHTML=total;
   document.getElementById("queso").style="color:red;";
}
 
function ecua_cuadratica(){
    var y,z,co;
    var a,b,c,x_1,x_2,bloque_1,bloque_2,bloque_3,bloque_3_5,bloque_4,bloque_5,li=[];
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=document.getElementById("c").value;
    if (b<0 && c<0){
        y=chicle(a,b,c,"","");
    };
    if (b>0 && c>0){
        y=chicle(a,b,c,"+","+");
    };
    if (b<0 && c>0){
        y=chicle(a,b,c,"","+");
    };
    if (b>0 && c<0){
        y=chicle(a,b,c,"+","");
    };
    document.getElementById("pan").innerHTML=y;
    document.getElementById("pan").style="color:red";
    bloque_1=pot(b,2);
    bloque_2=(4*a)*c;
    bloque_3=bloque_1-bloque_2;
    if (bloque_3<0){
        document.getElementById("queso").innerHTML="b^2";
        document.getElementById("lechuga").innerHTML=bloque_1;
        document.getElementById("tomate").innerHTML="(4*a)*c";
        document.getElementById("cebolla").innerHTML=bloque_2;
        document.getElementById("carne").innerHTML="(b^2)-(4*a)*c";
        document.getElementById("pepino").innerHTML=bloque_3;
        document.getElementById("mayonesa").innerHTML="raiz";
        document.getElementById("ketchup").innerHTML=bloque_3;
        document.getElementById("ketchup").style="color:red;";
        document.getElementById("error").innerHTML="valor sin raiz real";
        document.getElementById("error").style="color:red;";
    };
    if (bloque_3>=0){
        bloque_3_5=raiz(2,bloque_3);
        bloque_4=-1*b;
        bloque_5=2*a;
        x_1=((bloque_4+bloque_3_5)/bloque_5)/-1;
        x_2=((bloque_4-bloque_3_5)/bloque_5)/-1;
        document.getElementById("queso").innerHTML="b^2";
        document.getElementById("lechuga").innerHTML=bloque_1;
        document.getElementById("tomate").innerHTML="(4*a)*c";
        document.getElementById("cebolla").innerHTML=bloque_2;
        document.getElementById("carne").innerHTML="(b^2)-(4*a)*c";
        document.getElementById("pepino").innerHTML=bloque_3;
        document.getElementById("mayonesa").innerHTML="raiz";
        document.getElementById("ketchup").innerHTML=bloque_3_5;
        document.getElementById("1").innerHTML="-1*b+|-raiz/2*a";
        document.getElementById("2").innerHTML="x_1";
        document.getElementById("3").innerHTML=x_1;
        document.getElementById("4").innerHTML="x_2";
        document.getElementById("5").innerHTML=x_2;
        document.getElementById("3").style="color:red;";
        document.getElementById("5").style="color:red;";}
}
function pot(x,n){
    var P;
    P=parseFloat(x)**parseFloat(n);
    return P;
}
function raiz(raiz,x) {
    /* a/|_b^c==(b^(c/a));*/
    var resultado,cal;
    cal=parseInt(1)/parseFloat(raiz);
    resultado=pot(x,cal);
    return resultado;
}
function chicle(A,B,C,s1,s2){
    var A,B,C,a,b,c,s1,s2,y;
    a=String(A);
    b=String(B);
    c=String(C);
    y=String(a+"x^2"+s1+b+"x"+s2+c+"=0");
    return y;
}
/*
function variaciones(){
    var m,n,x;
    m=document.getElementById("m").value;
    n=document.getElementById("n").value;
    for (x=0;x<n;x++){

    }
}*/

function suma(x,y){
    var a,b,c;
    a=x;
    b=y;
    c=parseInt(a)+parseInt(b);
    return c;
}