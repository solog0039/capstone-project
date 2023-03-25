function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
openNav();
closeNav();
const section2 = {
  images: ['assets/solomon.png', 'assets/haftamu.jpg', 'assets/tsegay.png', 'assets/kinf.png', 'assets/berihu.png', 'assets/haftamu-m.png'],
  trainers: ['Solomon Gebereslassie', 'Haftamu Desta', 'Tseegay Kidu', 'Kinfe Gbrekirstos', 'Berihu Tesfay', 'Haftamu Mokenen'],
  title: ['substation construction expert', 'Test and commissioning expert', 'Railway Engineer', 'Transmmission construction expert', 'Substation design expert', 'Transmmission substation director'],
  resume: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore beatae officia nobis, dolores accusamus atque labore quas in consequuntur nostrum eum sint vel a fugit repellat minus doloremque temporibus'],
};
const detailtrainers = `<div class="center">
<p class="under-line">Feature Speakers</p>
<hr class = "line-speaker"
</div>
<div class="trainers">
    
    <div class="right-side">
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[0]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[0]}</h2>
        <p class="title">${section2.title[0]}</p>
        <p class="resume">${section2.resume[0]}</p>
        </div>        
        </div>
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[1]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[1]}</h2>
        <p class="title">${section2.title[1]}</p>
        <p class="resume">${section2.resume[1]}</p>
        </div> 
        </div>
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[2]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[2]}</h2>
        <p class="title">${section2.title[2]}</p>
        <p class="resume">${section2.resume[2]}</p>
        </div>   
        </div>
    </div>
    <div class="left-side">
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[3]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[3]}</h2>
        <p class="title">${section2.title[3]}</p>
        <p class="resume">${section2.resume[3]}</p>
        </div>   
        </div>
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[4]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[4]}</h2>
        <p class="title">${section2.title[4]}</p>
        <p class="resume">${section2.resume[4]}</p>
        </div>   
        </div>
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[5]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[5]}</h2>
        <p class="title">${section2.title[5]}</p>
        <p class="resume">${section2.resume[5]}</p>
        </div>   
        </div>
    </div>
</div>
`;
const section = document.querySelector('.feature-speaker');
const classDetail = document.createElement('div');
classDetail.classList.add('detail');
classDetail.insertAdjacentHTML('beforeend', detailtrainers);
section.appendChild(classDetail);
