
// when you want to play random song in the shuffle list
const songList = ['a', 'b', 'c', 'd'];
const getShuffle = () => {
  for(let i = songList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random()* songList.length);
    [songList[i], songList[j]] = [songList[j], songList[i]];
  }
  console.log(songList);
}
getShuffle();
