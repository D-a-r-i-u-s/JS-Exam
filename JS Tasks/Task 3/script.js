/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users'; 

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      renderData(data);
      console.log(data);
    }
  }
  catch (error) {
    console.log(error);
  }
}

document.querySelector('#btn').addEventListener('click', () => getData(ENDPOINT));
const renderData = (data) => {
  const output = document.querySelector('#output');
  let postData = '';
  data.forEach(post => {
    const name = post.login.charAt(0).toUpperCase() + post.login.slice(1);

    postData += `<div class="user-card">
                      <img class="avatar" src="${post.avatar_url}">
                      <h2 class="user-name">${name}</h2>
                  </div>`
  })
  output.innerHTML = postData;
}
