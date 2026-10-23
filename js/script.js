//document.documentElement.classList.toggle("light");
function toggleMode(){
    const html= document.documentElement

    html.classList.contains("light");//verifica se tem light, e o css faz o resto
    const img= document.querySelector("#profile img");
    if(html.classList.toggle("light")){
        img.setAttribute('src', '../pictures/sun.png');//substitui por isso
    }
    else{
        img.setAttribute('src', '../pictures/moon.png');
    }

}