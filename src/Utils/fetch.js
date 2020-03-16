
export default function(url, setData){
     fetch(url)
          .then(result => result.json())
          .then(json => setData(json))
}