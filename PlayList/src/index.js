import Song from './components/song';
import Movie from './components/movie';
import PlayList from './components/playlist';

const playList = new PlayList();

const song1 = new Song('Song1', 'Artist1', '4:50');
const song2 = new Song('Song2', 'Artist2', '4:51');
const song3 = new Song('Song3', 'Artist3', '4:53');

const movie1 = new Movie("Movie1", 1993, '1:49:43');

playList.add(song1);
playList.add(song2);
playList.add(song3);
playList.add(movie1);

const list = document.getElementById('list');
playList.render(list);

const play = document.getElementById('btn-play')
const stop = document.getElementById('btn-stop')
const next = document.getElementById('btn-next')

play.onclick = function(){
    playList.play();
    playList.render(list)
}
stop.onclick = function(){
    playList.stop();
    playList.render(list)
}
next.onclick = function(){
    playList.next();
    playList.render(list)
}