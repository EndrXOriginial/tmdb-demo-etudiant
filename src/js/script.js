document.addEventListener("DOMContentLoaded", function () {
    let connexion = new MovieDb();
    connexion.requeteDerniersFilms();
});

    class MovieDb {
        constructor() {
            console.log('new MovieDb()');
            this.apikey = "668a513c2ff4a5025db949fa2946db97";
            this.lang = "fr-CA";
            this.baseUrl = "https://api.themoviedb.org/3/";
            this.imgPath = "https://image.tmdb.org/t/p/";
            this.totalFilm = 8;
        }

        requeteDerniersFilms() {
            let requete = new XMLHttpRequest();
            requete.addEventListener('loadend', this.retourRequeteDerniersFilms.bind(this))
            requete.open('GET', this.baseUrl + "movie/now_playing?api_key=" + this.apikey + "&language=" + this.lang + "&page=1");
            requete.send();
        }

        retourRequeteDerniersFilms(e) {
            console.log("ca marche");
            let target = e.currentTarget;
            let data = JSON.parse(target.responseText).results;
            console.log(data);

            this.afficheDerniersFilms(data);
        }

        afficheDerniersFilms(data) {
            let section = document.querySelector(".liste-films");

            for (let i = 0; i < this.totalFilm; i++) {
                let article = document.querySelector(".template .film").cloneNode(true);
                section.appendChild(article);

                article.querySelector("h2").innerHTML = data[i].title;

                // if (data[i].overview != "") {
                // article.querySelector(".description").innerHTML = data[i].overview;
                // } else {
                //     article.querySelector(".description"). innerHTML = "Aucune description disponible";
                // }
                article.querySelector(".description").innerHTML = data[i].overview || "Aucune description disponible";
            }
        }
    }

