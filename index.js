function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
openNav();
closeNav();
const speakerList = [
  {
    name: 'Solomon Gebreslassie',
    image: 'assets/solomon.png',
    title: 'substation construction expert',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus',
  },
  {
    name: 'Haftamu Desta',
    image: 'assets/haftamu.jpg',
    title: 'substation construction expert',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus',
  },
  {
    name: 'Haftamu mekonen',
    image: 'assets/haftamu-m.png',
    title: 'substation construction expert',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus',
  },
  {
    name: 'Berihu Tesfay',
    image: 'assets/berihu.png',
    title: 'substation construction expert',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus',
  },
  {
    name: 'Kinfe G.Gergis',
    image: 'assets/kinf.png',
    title: 'substation construction expert',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus',
  },
  {
    name: 'Tsegay Kidu',
    image: 'assets/tsegay.png',
    title: 'substation construction expert',
    resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus',
  },
];

const section = document.querySelector('.feature-speaker');

window.onload = () => {
  speakerList.map(speaker => {
    const classDetail = document.createElement('div');
    classDetail.classList.add('detail');
    classDetail.insertAdjacentHTML('beforeend', `
      <div class="profesionalist">
        <div class="right">
          <img src=${speaker.image} alt="picture of haftamu">
        </div>
        <div class="left">
          <h2>${speaker.name}</h2>
          <p class="title">${speaker.title}</p>
          <p class="resume">${speaker.resume}</p>
        </div>
      </div>
    `);
    section.appendChild(classDetail);
  });
};
