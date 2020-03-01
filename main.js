
// Calling Custom Comic

function callXkcdCustomComic() {
    let crystal = document.getElementById('comicInput').value;
    console.log(crystal);

    if(crystal > 2274){
        alert('The number you entered is too high. There is not a comic made for that number yet. Please enter a lower number.');
        return;
    }

    if(crystal <= 0){
        alert('Sorry, 0 is not a value of a XKCD Comic. Please enter a whole number greater than or equal to 1.');
    }


    let url2 = `https://xkcd.now.sh/?comic=${crystal}/`;

    let xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = apiReturnHandler2;
    
    xhttp2.open('GET', url2, true);
    xhttp2.send();
}

function apiReturnHandler2() {
    if(this.readyState == 4 && this.status == 200){
        const xkcdCustomComic = JSON.parse(this.responseText);

        let crystal = document.getElementById('comicInput').value;

        console.log(xkcdCustomComic);

        const myInnerHtml2 = `<h1><a id='comicLink' target='_blank' href='https://xkcd.com/${crystal}/'>${xkcdCustomComic.title}</a></h1>
        <img src='${xkcdCustomComic.img}' alt='${xkcdCustomComic.alt}'/>
        <p>Date Published: ${xkcdCustomComic.month}/${xkcdCustomComic.day}/${xkcdCustomComic.year}</p>`;

        document.getElementById('comic').innerHTML = myInnerHtml2;
    }
}

// Calling Current Comic

function apiReturnHandler(){
    if(this.readyState == 4 && this.status == 200){
        const xkcdComic = JSON.parse(this.responseText);

        console.log(xkcdComic);

        const myInnerHtml = `<h1><a id='comicLink' target='_blank' href='https://xkcd.com/'>${xkcdComic.title}</a></h1>
            <img src='${xkcdComic.img}' alt='${xkcdComic.alt}'/>
            <p>Date Published: ${xkcdComic.month}/${xkcdComic.day}/${xkcdComic.year}</p>`;

        document.getElementById('comic').innerHTML = myInnerHtml;
    }
}

function callXkcdCurrentComic(){
    
    let url = 'https://xkcd.now.sh/?comic=latest';

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = apiReturnHandler;

    xhttp.open('GET', url, true);
    xhttp.send();
}

callXkcdCurrentComic();

