const formElement=document.querySelector('#form')
const inputElement=document.querySelector('#input')
const result= document.querySelector(".result")
let x=''

function updetUi(data){
    result.classList.remove('dis') 
    console.log(data);
if (data.main.temp>30) {
    x='☀️'
}else if(data.main.temp>18 && data.main.temp<30){
    x='⛅️'
}else if(data.main.temp>18 && data.main.temp>10){
    x='🌨'
}else{
    x='❄️'
}

    result.innerHTML=`
<h3 class="res_tex">${data.name} , ${data.sys.country}</h3>
<h2 class="res_tex2">${data.weather[0].main}</h2>
<p class="smile">${x}</p>
<div class="temp">
  <span>TEMP ,</span>
  <span>${data.main.temp} &deg;C</span>
</div>`

}
const getWeather = async (city)=>{
const data = await getData(city)
return data
}

formElement.addEventListener("submit",(e)=>{
    e.preventDefault()
    const res=formElement.city.value.trim()
    formElement.reset()
console.log(res);
getWeather(res).then((data)=>updetUi(data))
})
