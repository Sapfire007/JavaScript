const result = document.querySelector('.result');

async function renderData() {
    try{
        const response = await fetch('data.json');
        if(!response.ok) throw Error(response.statusText);
        const data = await response.json();
        console.log(data);
        // result.textContent = data.name;
        // result.textContent = data.age;
        result.innerHTML = `${data.name}<br>${data.age}`;
    } catch (error){
        console.error(error);
    }
}

renderData();