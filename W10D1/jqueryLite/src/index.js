const DOMNodeCollection = require("./dom_node_collection");

window.$1 = function(arg) {
    if (arg instanceof HTMLElement) {
        const nodes = new DOMNodeCollection([arg])
        return nodes;
    } else {
        let nodes = document.querySelectorAll(arg);
        console.log(nodes);
        let nodesArr = Array.from(nodes);
        return nodesArr;
    }
};

