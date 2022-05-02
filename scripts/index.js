// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar, sidebar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let side = document.getElementById("sidebar");
side.innerHTML = sidebar();
let value=sidebar();
console.log(value);

// body.innerHTML=sidebar();

let navbar1 = navbar();
console.log(navbar1);

let searchinnews = async () => {
    

    try {
      let res3 = await fetch(`https://masai-mock-api.herokuapp.com/news?q=twitter`);
      let data3 = await res3.json();
      let newdata3 = data3.articles;
      appendnews(newdata3);
      
     
    } catch (err) {
      console.log(err);
    }
  };

searchinnews()







let query = document.getElementById("search_input");
let searchnews = async () => {
  let q = query.value;
  console.log(q);
  try {
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${q}`);
    let data = await res.json();
    let newdata = data.articles;
    appendnews(newdata);
    localStorage.setItem("news",JSON.stringify(newdata));
    window.open("search.html")
  } catch (err) {
    console.log(err);
  }
};



let search = document.getElementById("search");
search.addEventListener("click", searchnews);


let result=document.getElementById("result");

function appendnews(data) {
    if(data===null){
        return false;
    }
  data.forEach((el) => {
    let div = document.createElement("div");
    div.className="news"

    let smalldiv = document.createElement("div");


    let title1 = document.createElement("h3");
    title1.innerHTML=el.title;

    let desc=document.createElement("p");
    desc.innerText=el.description;
    smalldiv.append(title1,desc);

    let image=document.createElement("img");
    image.src=el.urlToImage;

    div.append(image,smalldiv);
result.append(div);

  });
}



let searchcountrynews = async () => {
    let q = query.value;
    console.log(q);
    try {
      let res1 = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`);
      let data1 = await res1.json();
      let newdata1 = data1.articles;
      appendnews(newdata1);
      localStorage.setItem("news",JSON.stringify(newdata1));
    } catch (err) {
      console.log(err);
    }
  };

// query.addEventListener("keypress",searchnews);
