// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();


let news=JSON.parse(localStorage.getItem("news"));

let result=document.getElementById("results");

function appendnews() {
    if(news===null){
        return false;
    }
  news.forEach((el) => {
    let div = document.createElement("div");
    div.className="news"

    let smalldiv = document.createElement("div");


    let title1 = document.createElement("p");
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
appendnews();