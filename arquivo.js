function consultarFilmes() {
    let filme = document.querySelector('#filme').value;
    let apiKey = 'daaadaa7';
    let url =  `https://www.omdbapi.com/?t=${filme}&apikey=${apiKey}`;

    fetch(url).then(function(response){
        response.json().then(mostrarFilme)
    });

    function mostrarFilme(dados) {
        console.log(dados)
        let resultado = document.querySelector('#resultado');
        if(dados.erro) {
            resultado.innerHTML = "Não foi possível localizar";
        } else {
            resultado.innerHTML = `<p>Filme: ${dados.Title}</p> 
            <p>Ano: ${dados.Year}</p>
            <p>Foto: </p>
            <img src=${dados.Poster} alt="banner">`
        }
    }

}