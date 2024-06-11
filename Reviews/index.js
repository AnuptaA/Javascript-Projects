const left_btn = document.getElementsByClassName("left-btn")[0];
const right_btn = document.getElementsByClassName("right-btn")[0];
const random_btn = document.getElementsByClassName("surprise-btn")[0];
const img = document.getElementsByClassName("headshot")[0];
const person = document.getElementsByClassName("name")[0];
const title = document.getElementsByClassName("title")[0];
const review = document.getElementsByClassName("review")[0];

const headshots = [
  "img/avatar_01.png",
  "img/avatar_02.png",
  "img/avatar_03.png",
  "img/avatar_04.png",
  "img/avatar_05.png",
];
const names = ["John Doe", "Jane Doe", "Jill Doe", "Jack Doe", "Jake Doe"];
const titles = ["Author", "Doctor", "Educator", "Politician", "Engineer"];
const raws = [
  `Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim
   nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu. 
   Risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non 
   quam lacus suspendisse. Faucibus interdum posuere lorem ipsum dolor sit amet
   consectetur adipiscing elit.`,
  `Tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor 
   massa id neque aliquam vestibulum morbi. Blandit cursus risus at ultrices mi
   tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sociis
   natoque penatibus et magnis dis parturient montes nascetur ridiculus mus 
   mauris vitae ultricies leo integer malesuada.`,
  `At urna condimentum mattis pellentesque id nibh tortor id aliquet lectus 
   proin nibh nisl condimentum id venenatis. A condimentum vitae sapien 
   pellentesque habitant morbi tristique senectus et netus et malesuada fames.
   Ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies
   mi quis hendrerit dolor magna eget est.`,
  `Pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam 
   ac tortor vitae purus faucibus. Ornare suspendisse sed nisi lacus sed viverra
   tellus in. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque
   elit. Ullamcorper dignissim cras. Tincidunt lobortis feugiat vivamus at 
   augue eget arcu dictum varius duis at consectetur.`,
  `Tincidunt id aliquet risus feugiat in ante metus. Dictum at tempor commodo
   ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis 
   risus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit
   aliquam etiam erat velit scelerisque. In dictum non consectetur a erat nam
   at lectus urna.`,
];

var idx = 0;

function mod(m, n) {
  return ((m % n) + n) % n;
}

function updateElements() {
    img.src = headshots[idx];
    person.textContent = names[idx];
    title.textContent = titles[idx];
    review.textContent = raws[idx];
}

left_btn.addEventListener("click", function () {
  idx = mod(idx - 1, names.length);
  updateElements();
});

right_btn.addEventListener("click", function () {
  idx = mod(idx + 1, names.length);
  updateElements();
});

random_btn.addEventListener("click", function (){
    idx = Math.floor(Math.random() * names.length);
    updateElements();
})

document.addEventListener("DOMContentLoaded", function () {
    updateElements();
});
