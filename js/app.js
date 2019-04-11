const cards = [
  {
      "name": "LinkedIn",
      "link": "https://www.linkedin.com/in/adam-duquette/",
      "image": "./assests/logos/linkedIn.png"
  },
  {
      "name": "GitHub",
      "link": "https://github.com/dukeofetiquette",
      "image": "./assests/logos/GitHub-Mark-Light-120px-plus.png"
  },
  {
      "name": "Twitter",
      "link": "https://twitter.com/dukeofetiquette",
      "image": "./assests/logos/twitter.png"
  },
  {
      "name": "Email",
      "link": "mailto:adam@devcascadia.com",
      "image": "./assests/logos/gmail.png"
  },
//   {
//       "name": "CodePen",
//       "link": "https://codepen.io/DevCascadia/",
//       "image": "./assests/logos/Codepen-White-Large.png"
//   },
];

const fragment = document.getElementById('template');

cards.forEach(card => {
  const instance = document.importNode(fragment.content, true);
  let altv = card.name.replace(/\s/g, '-').toLowerCase();
  instance.querySelector('[data-name]').innerHTML = card.name;
  instance.querySelector('[data-link]').href = card.link;
  instance.querySelector('[data-image]').src = card.image;
  instance.querySelector('[data-image]').alt = altv;
  document.getElementById('main').appendChild(instance);
});