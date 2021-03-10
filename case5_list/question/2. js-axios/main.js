const ul = document.querySelector('ul');
const API = 'https://jsonplaceholder.typicode.com/posts';

// Axios : https://github.com/axios/axios
// q2-1. Javascript - axios 라이브러리를 사용하여 해당 기능을 구현하세요.
// Do something here!

// axios
//     .get(API) //
//     .then((res) => {
//         const { data } = res;
//         data.forEach((item) => {
//             const li = `<li>
//                             <h2>${item.title}</h2>
//                             <p>${item.body}</p>
//                         </li>`;
//             ul.insertAdjacentHTML('beforeend', li);
//         });
//     });

//q2-2. Axios Refactoring
//템플릿
const printPosts = (res) => {
    const { data } = res;
    data.forEach((item) => {
        const li = `<li>
                        <h2>${item.title}</h2>
                        <p>${item.body}</p>
                    </li>`;
        ul.insertAdjacentHTML('beforeend', li);
    });
};

// HTTP 통신
const fetchPosts = (url) => {
    // Do something here!
    return axios.get(url);
};

fetchPosts(API) //
    .then(printPosts)
    .catch((e) => console.log(e));
//Do something here!
