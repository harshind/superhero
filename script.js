
function renderSuperHero() {
    const superheroObj = JSON.parse(localStorage.getItem('superhero'));
    console.log(superheroObj)
    const allSuperHero = document.querySelector("#favourite");
    allSuperHero.innerHTML = `<div id="favourite" class="w-100">My Favourite</div>`
    if (superheroObj != undefined) {
        Object.keys(superheroObj).forEach((item, idx) => {
            //item["number"] = idx + 1;
            allSuperHero.innerHTML = allSuperHero.innerHTML + `<div class="playlists">${item}</div>`
        })
    }

}
var time_stamp = + new Date();
var publicKey = '96dedff1ddd55d0255ac5563aaa738f1';
var privateKey = '8efaa8bc030bd9f142e482e9e46901677678647b';
var hash_val = md5(ts + publicKey + privateKey)
// pagination
//https://gateway.marvel.com:443/v1/public/characters?ts=time_stamp&apikey=<public-key>&hash=<md5(ts+privateKey+publicKey)>
url = 'https://gateway.marvel.com:443/v1/public/characters?apikey=96dedff1ddd55d0255ac5563aaa738f1&hash=hash_val'
// fetch Api
// local storage
// card design

function addtoPlaylist() {
    const playlistObj = JSON.parse(localStorage.getItem('playlist'));
    const id = document.querySelector(".addtoplaylist").id;
    let song = songs.filter((item) => {
        if (item.id == id) {
            return item;
        }
    })
    if (currentPlaylist == undefined) {
        alert("please select the playlist");
    } else {
        playlistObj[currentPlaylist].push(song);
        console.log(playlistObj)
        localStorage.setItem('playlist', JSON.stringify(playlistObj))
    }
    renderPlaylistSong();
}

renderSuperHero();