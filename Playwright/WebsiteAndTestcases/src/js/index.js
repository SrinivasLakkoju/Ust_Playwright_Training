const featured = {
    title: "Interstellar",
    image: "./images/Interstellar.jpg", // update the image to match the actual location
    description: "The film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind."
};

const container = document.getElementById('featured-content');
container.innerHTML = `
    <h3>${featured.title}</h3>
    <img src="${featured.image}" alt="${featured.title}" style="width:100%; border-radius: var(--border-radius); margin-bottom: 1rem;">
    <p>${featured.description}</p>
`;
