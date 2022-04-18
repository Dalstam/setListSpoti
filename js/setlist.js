

 const getSetlist =()=>{
    fetch("https://api.setlist.fm/rest/1.0/search/setlists?date=17-04-2022&p=1", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-Api-Key": "FlzdPDKdzDQkaPtA4yQgLXxq4Jdj_n5QypEd"
        }
      })
  .then(response => response.json())
  .then(console.log(respone));

 }

 export default getSetlist;
