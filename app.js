const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");

const addNewJokes = async () =>{
    const jokeText = await getdadjokes();
    const newLi = document.createElement("li");
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getdadjokes = async()=>{
try {
    const config = {headers: {Accept: "application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    return res.data.joke
} 
catch (err){
  return "Sorry no jokes available"
}}

btn.addEventListener("click", addNewJokes)