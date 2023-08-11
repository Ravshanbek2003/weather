

const KEY='96b947a45d33d7dc1c49af3203966408'


const getData =async (city)=>{
    const result= document.querySelector(".result")
    result.classList.remove('dis') 
    result.innerHTML=`
    <style>
    .loader {
        width: 48px;
        height: 48px;
        border: 3px solid #FFF;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }
      .loader::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid;
        border-color: #FF3D00 transparent;
      }
      
      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      } 
      
    </style>
    <span class="loader"></span>
    <span class="loader"></span>
    <span class="loader"></span>
    <span class="loader"></span>
    <span class="loader"></span>
    
    `
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query=`?q=${city}&units=metric&appid=${KEY}`
    const request= await fetch(base+query)
    const data = await request.json()
    return data
}
// getData().then((data)=>console.log(data))