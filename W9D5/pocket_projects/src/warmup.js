
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children) {
        let kids = Array.from(htmlElement.children)
        kids.forEach((kid) => htmlElement.removeChild(kid));
    }
    const p = document.createElement("p") 
    p.innerHTML = string
    htmlElement.append(p)

};

htmlGenerator('Party Time.', partyHeader);