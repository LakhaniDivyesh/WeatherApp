
const Curday = document.getElementById("day");

        const day = ()=>{
        var dayarray=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let curTime = new Date();
        let daytx = dayarray[curTime.getDay()];
        return daytx;
        };
        Curday.innerHTML = day();

const Curdate = document.getElementById("date");
        
        const datetime = ()=>{
        let curTime = new Date();
        let date= curTime.getDate();
        var montharray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        let month=montharray[curTime.getMonth()];
        let year=curTime.getFullYear();
        return `${date} ${month} ${year}`;
        //console.log(`${day}, ${date} ${month} ${year}`);
        };
        Curdate.innerHTML = datetime();

//temperature part

const city_input =document.getElementById("city_input");
const add_btn =document.getElementById("add_btn");
const temp =document.getElementById("temp");
const city =document.getElementById("city");
const error =document.getElementById("error");
// const top_bar =document.getElementById("top-bar");
// const bottom_bar =document.getElementById("bottom-bar");

const submit =async()=>{
    //event.preventDefault();
    let city_inputVal=city_input.value;
    if(city_inputVal ===""){
       error.innerHTML ="<div class='error2'>enter location!</div>";
    }else{
        try{
          let api=`https://api.openweathermap.org/data/2.5/weather?q=${city_inputVal}&units=metric&appid=9fa9291207d4722b382db6141ad29581`;
          const res = await fetch(api);
          let objdata = await res.json();
          let dataarray=[objdata];

          temp.innerHTML=`${dataarray[0].main.temp}℃`;
          city.innerHTML=`${dataarray[0].name},${dataarray[0].sys.country}`
        }catch{
          error.innerHTML ="<div class='error2'>Data not found!</div>";
        }
    }
};

add_btn.addEventListener("click",submit);