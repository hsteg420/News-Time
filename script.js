function myFunction() {
  var x = document.lastModified;
  document.getElementById("time").innerHTML = "Last Updated: " + x;
}
function fetchNews(country) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(
    `https://newsapi-topheadlines.herokuapp.com/api/news/top-headlines?country=${country}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      createNewsCard(result);
      if (response) {
        hideSpinner();
      }
    })
    .catch((error) => console.log("error", error));
}

function createNewsCard(result) {
  var news = document.getElementsByClassName("news-card")[0];
  var articles = result.articles;
  let output = "";
  for (var i = 0; i < articles.length; i++) {
    output += `<div class="card" style="width: 18rem;">
        <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${articles[i].title}</h5>
            <p class="card-text text-truncate">${articles[i].description}</p>
            <a href="${articles[i].url}" class="btn btn-primary">Read More.</a>
        </div>
        </div>`;
  }
  news.innerHTML = output;
}

function searchNews() {
  let country = document.getElementById("input-country").value.toUpperCase();
  document.getElementById("top").innerHTML = "Top News of " + country;
  console.log("Button Clicked");

  fetchNews(country);
}

function fetchNewsEntertainment(country) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  //just to implement: used top news api
  fetch(`https://newsapi-topheadlines.herokuapp.com/api/news/top-headlines?country=fr`,requestOptions)
    .then((response) => response.json())
    .then((result) => createNewsCard(result))
    .catch((error) => console.log("error", error));
}
function hideSpinner() {
  document.getElementById("spinner").style.display = "none";
}
