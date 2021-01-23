
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const dogLinks = [];

  let dogNames = Object.keys(dogs);
  // let dogLinks = dogs.values();
  dogNames.forEach((dog) => {
    const a = document.createElement('a');
    a.innerHTML = dog;
    a.href = dogs[dog];

    const li = document.createElement("li")
    li.classList = "dog-link"
    li.append(a);
    dogLinks.push(li);
  })
  console.log(dogLinks);
  return dogLinks;

}

const attachDogLinks = function() {
  const dogLinks2 = dogLinkCreator();
  const list = document.querySelector(".drop-down-dog-list");
  dogLinks2.forEach(el => list.appendChild(el))
}

attachDogLinks();

const showDropDown = (e) => {
  let ele = e.target
  ele.classList.toggle()
}

function handleEnter() {
  const dogDropDown = document.querySelector(".drop-down-dog-nav")

  dogDropDown.addEventListener("mouseenter", showDropDown)

}

