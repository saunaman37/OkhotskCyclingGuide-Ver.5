/*ローディング画面から画面遷移
================================*/
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreagreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  //ローディング中(グレースクリーン)
  loadingAreaGrey.animate (
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill:'forwards',
    }
  );

//ローディング中(薄緑スクリーン)
loadingAreagreen.animate (
{
  translate: ['0 100vh','0 0','0 -100vh']
},
{
  duration: 2000,
  delay:800,
  easing: 'ease',
  fill: 'forwards',
}
);

//ローディング中テキスト
loadingText.animate (
  {
    opacity : [1, 0],
  },
  {
    duration: 1200,
    easing: 'ease',
    fill: 'forwards',
  }
);
});

//fast画面のローディング設定
const loadingAreaGrey1 = document.querySelector('#loading1');
const loadingAreagreen1 = document.querySelector('#loading-screen1');
const loadingText1 = document.querySelector('#loading1 p');

window.addEventListener('load', () => {
  //fast画面ローディング中
  loadingAreaGrey1.animate (
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 3200,
      delay: 2000,
      easing: 'ease',
      fill:'forwards',
    }
  );

// ローディング中（青色スクリーン）
// loadingAreagreen1.animate (
//   {
//     translate: ['100vh 0','0 0','-100vh 0']
//   },
//   {
//     duration: 4000,
//     delay:2000,
//     easing: 'ease',
//     fill: 'forwards',
//   }
//   );

  //ローディング中テキスト
loadingText1.animate (
  {
    opacity : [0, 1],
  },
  {
    duration: 2400,
    easing: 'ease',
    fill: 'forwards',
  }
);
});




// スライドメニュー
// ================================================ 
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 800,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 200 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});


//newsタイトルの設定
const subttl = document.querySelector('#sub_ttl');
const keyframes1 = {
  color: ['red','yellow','white']
};
const options1 = {
  duration: 2000,
  direction: 'alternate',
  iterations: Infinity,
};
subttl.animate(keyframes1,options1);



// サイクリングボタン
function move(){
const list = ["Enjoy Cycling!!","GO OKHOTSK!!","Have a Nice Day!!"] ;
let a = list [Math.floor(Math.random()*list.length)];
const target = document.getElementById('button');

target.addEventListener("mouseover",()=>{ //マウスがカーソルを合わせた時
  document.getElementById("button").textContent = a; //先述のリストの中の文字列をランダムで表示
},false);

target.addEventListener("mouseleave", () => {
  document.getElementById("button").textContent = "CHECK　➡";
}, false);
}

//ホーム画面タイトル
const heading = document.querySelector('#heading');

const keyframes = {
  opacity:[0,1],
  translate: ['0 -50px', 0],
};
const options = {
  duration: 8000,
  easing: 'ease',
};

heading.animate(keyframes,options);