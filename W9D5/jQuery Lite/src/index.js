const DOMNodeCollection = require('./dom_node_collection');

window.$l = function (ele) {  //Core fucntion
    // return nodeArray;
    if (ele instanceof HTMLElement) {
        return new DOMNodeCollection([ele]);
    } else {
        const nodeList = document.querySelectorAll(ele);
        const nodeArray = Array.from(nodeList);
        return DOMNodeCollection(nodeArray);
    }
}

// getNodes = selector => {
//     const nodeList = document.querySelectorAll(selector);
//     const nodeArray = Array.from(nodeList);
//     return DOMNodeCollection(nodeArray);
// };