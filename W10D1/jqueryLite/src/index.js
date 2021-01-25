window.$1 = function(arg) {
    let nodes = document.querySelectorAll(arg);
    console.log(nodes);
    let nodesArr = Array.from(nodes);
    return nodesArr;
};

