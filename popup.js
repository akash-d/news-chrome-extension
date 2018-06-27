var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            let articles = JSON.parse(xmlhttp.responseText).articles;
            generateTemplate(articles);
        } else {
            document.getElementById('error').style.display = "block"
        }
    }
};

// Place your api key which you get from https://newsapi.org/

xmlhttp.open("GET", "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=PLACE_YOUR_API_KEY_HERE", true);
xmlhttp.send();

// Generating only 5 news at a time
function generateTemplate(newsArray) {
    console.log(newsArray);
    let template = '';
    for (let i = 0; i < 5; i++) {
        let current = newsArray[i];
        template += `<div class="news">
                            <h3>${current.title}</h3>
                            <p>${current.description}</p>
                        </div>`
    }
    document.getElementById('newsData').innerHTML = template;
}