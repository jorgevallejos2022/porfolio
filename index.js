/*let mysql= require("mysql");

let conexion=mysql.createConnection({
    host:"localhost",
    database:"form",
    user:"root",
    password:""
});

conexion.connect({
    function(error){
        if(error){
            throw error;
        }else{
            console.log("CONEXION EXITOSA")
        } 
    }
});
conexion.end();


//const app = require("./src/config/server");

//require("./src/app/routes/news")();

//app.listen(app.get("port"),()=>{
//    console.log("server on port ", app.get("port")) ; 
//})

*/
document.getElementById("nav").classList="";
let menuVisible=false;

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
} 

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}
function efectoHabilidades(){
    let skills= document.getElementById("Skills");
    let distancia_skills=window.innerHeight=skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html5ycss3");
        habilidades[2].classList.add("wordpress");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("visualbasic");
        habilidades[6].classList.add("comunicación");
        habilidades[7].classList.add("trabajoenequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyectmanagement");
        habilidades[11].classList.add("autodidacta");
    }  
}

window.onscroll = function(){
    efectoHabilidades();
}

