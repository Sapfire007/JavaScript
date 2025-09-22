console.log(fetch("text.txt"));

// text method returns promise
// if resolved will return text representation of body
fetch("./text.txt")
    .then(res => res.text())
    .then(data => console.log(data))
    .catch((err)=>console.error(err));


// Fetch API promise only rejects when we have network error (not in other cases).
fetch("text2fail.txt")
    .then((res) => {
        if(!res.ok) throw Error(res.statusText);
        return res.text();
        
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));