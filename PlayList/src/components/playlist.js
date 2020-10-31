function PlayList() {
	this.songs = [];
	this.currentIndex = 0;
}

PlayList.prototype.add = function(song) {
	this.songs.push(song);
}

PlayList.prototype.play = function() {
	const currentSong = this.songs[this.currentIndex];
	currentSong.play();
}

PlayList.prototype.stop = function() {
	const currentSong = this.songs[this.currentIndex];
	currentSong.stop();
}

PlayList.prototype.next = function() {
	this.stop();
	this.currentIndex++;
	if (this.currentIndex === this.songs.length) {
		this.currentIndex = 0;
	} 
	this.play();
}

PlayList.prototype.render = function(list) {
	list.innerHTML = "";
	return this.songs.forEach(song => {
		list.innerHTML += song.toHtml();
	});
}

export default PlayList;