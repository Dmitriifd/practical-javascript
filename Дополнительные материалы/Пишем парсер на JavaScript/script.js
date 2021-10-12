window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];

    function recursy(element) {
        element.childNodes.forEach(node => {
            
            // if (node.nodeName === '#text') {
            //     return;
            // } else {
            //     console.log(node);
            //     recursy(node);
            // }

            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content: node.textContent
                }
                console.log(node);
                // textNodes.push(node.textContent)
                textNodes.push(obj)
            } else {
                recursy(node);
            }
        })
    }

    recursy(body);
    // console.log(textNodes);
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log(json));
       
        

});