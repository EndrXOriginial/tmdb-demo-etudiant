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
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].title);
            }
        }
    }

