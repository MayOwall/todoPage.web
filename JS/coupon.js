const stampBox = document.querySelector("#stamp-box");
const stamp = document.querySelectorAll('#stamp-box .stamp');
//querySelectorAll은 nodeList니까, for문, 혹은 for each 적용!


function stampClickHandler(event) {
  const clickedButton = event.target;
  if(clickedButton !== stampBox) {
    if(localStorage.getItem('stamp-count') === null) {
      localStorage.setItem('stamp-count', 1)
    } else if(Number(localStorage.getItem('stamp-count')) === 14) {
      const couponEmpty = confirm('쿠폰을 다 채우셨네요, 축하드려요!! 쿠폰을 비우시겠어요?');
      if(couponEmpty) {
        localStorage.setItem('stamp-count', 0);
        location.reload();
      };
    } else if(clickedButton.classList.contains('stamp-background') === false){
      console.log(clickedButton.classList.contains('stamp-background'));
      //local storage의 stamp-count 추가하기
      let stampCount = Number(localStorage.getItem('stamp-count'));
      stampCount += 1;
      localStorage.setItem('stamp-count', stampCount);
    };
    clickedButton.classList.add('stamp-background');
  };

};

function stampPainter() {
  const stampNum = Number(localStorage.getItem('stamp-count'));
  for(let i = 0; i < stampNum; i++) {
    stampBox.children[i].classList.add('stamp-background');
  };
};

// stamp.forEach(item => {item.addEventListener('click', stampClickHandler)});

stampBox.addEventListener('click', stampClickHandler);
stampPainter();