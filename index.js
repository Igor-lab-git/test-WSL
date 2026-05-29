// const j = document.querySelector("#h1");

// const text = j.textContent

// for(let i = 0; i < text.length; i++) {
//     console.log(text[i]);
// };

// console.log(j);
// console.log(text);
// return fetch("https://jsonplaceholder.typicode.com/todos")

const get = async () => {
    return new Promise(res => setTimeout(() => {
         res("JENNA")
    }, 2000))
};

const somthing = await get();

console.log(somthing);



