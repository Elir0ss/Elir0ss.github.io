
const key = "070a55d0916cf26f8f0568af56cb6df5"


function dadosTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)  +"°C";
    document.querySelector(".txt-prev").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade : " + dados.main.humidity + "%";
    document.querySelector(".img").src = `https;//openweathermap.org/img/wn/${dados.weather[0].icon}.png`
   console.log(dados);


}

 async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    dadosTela(dados)
}


function clickButtom (){
    const cidade = document.querySelector(".input-cidade").value
   buscarCidade(cidade)
}
document.addEventListener("keydown", function(Enter){

    if(Enter.keyCode === 13){
        clickButtom()
    }
})