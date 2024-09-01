const url = "https://api.uomg.com/api/rand.music?sort=热歌榜&format=json";


async function getData(){

  let response = await axios.get(url);
  // console.log(response.data);
  return response.data;

}

document.addEventListener("DOMContentLoaded",async function(){
  let song = await getData();
  console.log(song);
  document.addEventListener("click", async function(){

    console.log(song.data.name);
  })

})

