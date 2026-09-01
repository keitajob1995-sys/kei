// 他のを見て真似して自分なりに考えたやつ（失敗作）
//正解行＝『〇』／不正解行＝『×』

// document.addEventListener("click", (event) => {〇
//   const menuopen = event.target;〇
//   const menubox = document.querySelectorAll(".answer_box");✖
//   function menu_click(events) {✖
//     events.forEach((event) => {✖
//       const menuopen = event.target;✖
//       if (menuopen.classList.contains("question_box")) {〇
//         menubox.classList.toggle("open");〇
//       }
//     });
//   }
// });

// AIを活用して出たやつ（クリックされた次の要素が分からなかった）
// document.addEventListener("click", (event) => {
//   const qustion = event.target;

//   if (qustion.classList.contains("question_box")) {
//     // クリックされた要素の次の要素を取得
//     const answer = qustion.nextElementSibling;

//     // その回答ボックスだけに「open」クラスを切り替える
//     if (answer) {
//       answer.classList.toggle("open");
//     }
//   }
// });

// ネットで出てきたやつ;https://zero-plus.io/media/javascript-faq/
const question = document.querySelectorAll(".question_box");
// question_box要素すべて取得
function acToggle() {
  const answer = this.nextElementSibling;
  answer.classList.toggle("open");
  const question = this;
  question.classList.toggle("open");
}

// 『i < qustion.length』は取得した数分という意味
for (let i = 0; i < question.length; i++) {
  // for文でquestion_boxメニューをループ処理
  question[i].addEventListener("click", acToggle);
}
// 上記は次の要素でなく、もう一つのクラスを指定してあげれば、次の要素じゃなくても出来るらしい。

// 元々のやつ↓ここから
const show = document.querySelectorAll(".slide_animation");

const slide = document.querySelectorAll(".slide_marker");

// 監視領域の設定
const setting = {
  root: null,
  rootMargin: "-20%",
  threshold: 0,
};

// 定義・foreachで複数ある中の1つを見る
const showObserver = new IntersectionObserver(showBox, setting);
show.forEach((showTarget) => {
  showObserver.observe(showTarget);
});

function showBox(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}

const slideObserver = new IntersectionObserver(slideBox, setting);
slide.forEach((slideTarget) => {
  slideObserver.observe(slideTarget);
});

function slideBox(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide");
      // });
    }
  });
}
// ここまで

// 『entries』=複数／『entry』=1つ
// function worriesBox(entries) {
//   entries.forEach((entry) => {
//     const showtitle = entry.target;
//     // もし監視領域に要素が現れたら
//     if (entry.isIntersecting) {
//       // 『title_fade_in』に『show』というクラス名を付ける
//       showtitle.classList.add("show");
//     }
//   });
// }

// ここから試し

// const show = document.querySelectorAll(".slide_animation");

// const slide = document.querySelectorAll(".slide_marker");
// // const show = document.querySelectorAll(".worries_image_box");

// // 監視領域の設定
// const setting = {
//   root: null,
//   rootMargin: "-20%",
//   threshold: 0,
// };

// // 定義・foreachで複数ある中の1つを見る
// const animationObserver = new IntersectionObserver(animationBox, setting);
// show.forEach((showTarget) => {
//   animationObserverObserver.observe(showTarget);
// });

// const slideObserver = new IntersectionObserver(animationBox, setting);
// slide.forEach((slideTarget) => {
//   slideObserver.observe(slideTarget);
// });

// function animationBox(entries) {
//   entries.forEach((entry) => {
//     if (entries.target.classList.contains("slide_animation")) {
//       entry.target.classList.add("show");
//     } else if (entries.target.classList.contains("slide_marker")) {
//       entry.target.classList.add("slide");
//     }
//   });
// }

// もし、画面上に『定義名：show』もしくは『定義名：slide』が入った時、『定義名：show』であれば、『.show』のクラス名を付与。『定義名：slide』であれば、『.slide』を付与。

// 郵便番号検索
// const search_url = "https://zipcloud.ibsnet.co.jp/api/search";

// function search() {
//   let zip = $("#zip_input").val();
//   zip = zip.replace("-", "");

//   let address = "";

//   $.ajax({
//     url: search_url,
//     type: "get",
//     dataType: "json",
//     data: {
//       zipcode: zip,
//     },
//   }).done(function (response) {
//     var results = response.results;
//     if (results == null || results.length == 0) {
//       $("#result_cell").css("color", "red");
//       $("#result_cell").html(response.message);
//     } else {
//       const element = results[0];
//       address = element.address1 + element.address2 + element.address3;
//       kana = element.kana1 + element.kana2 + element.kana3;
//       $("#result_cell").css("color", "black");
//       $("#result_cell").html(address);
//       $("#kana_cell").css("color", "black");
//       $("#kana_cell").html(kana);
//     }
//   });
// }

// function initialize() {
//   $("#search_button").click(search);
// }

// $(window).ready(initialize);

// function search() {
//   let zip = $("#zip_input").val();
//   zip = zip.replace("-", "");

//   let address = "";

//   $.ajax({
//     url: search_url,
//     type: "get",
//     dataType: "json",
//     data: {
//       zipcode: zip,
//     },
//   }).done(function (response) {
//     var results = response.results;
//     if (results == null || results.length == 0) {
//       $("#result_cell").css("color", "red");
//       $("#result_cell").html(response.message);
//     } else {
//       const element = results[0];
//       address = element.address1 + element.address2 + element.address3;
//       kana = element.kana1 + element.kana2 + element.kana3;
//       $("#result_cell").css("color", "black");
//       $("#result_cell").html(address);
//       $("#kana_cell").css("color", "black");
//       $("#kana_cell").html(kana);
//     }
//   });
// }

// <table>
//   <tr>
//     <th>郵便番号</th>
//     <td><input id="zip_input" type="text" /></td>
//     <td><button id="search_button">検索</button></td>
//   </tr>
// </table>
// <div id="result_cell"></div>
// <div id="kana_cell"></div>

const inputScreen = document.getElementById("input-screen");
const confirmScreen = document.getElementById("confirm-screen");

const confirmbtn = document.querySelector("#confirm_btn");
const backBtn = document.querySelector("#back_btn");

const website = document.getElementById("website");
const order = document.getElementById("order");

if (order) {
  confirmbtn.addEventListener("click", () => {
    const order = document.getElementById("order_form");

    if (!order.checkValidity()) {
      order.reportValidity();
      return;
    }

    document.getElementById("confirm_menu_select").textContent = "：" + document.getElementById("menu_select").value + "食セット";
    document.getElementById("confirm_deliver_frequency_select").textContent = "：" + document.getElementById("deliver_frequency_select").value + "/1回";
    document.getElementById("confirm_quantity_select").textContent = "：" + document.getElementById("quantity_select").value + "個";
    document.getElementById("confirm_post_code").textContent = "：" + document.getElementById("post_code").value;
    document.getElementById("confirm_prefectures").textContent = "：" + document.getElementById("prefectures").value;
    document.getElementById("confirm_address").textContent = "：" + document.getElementById("address").value;
    document.getElementById("confirm_last_name").textContent = "：" + document.getElementById("last_name").value;
    document.getElementById("confirm_first_name").textContent = "：" + document.getElementById("first_name").value;
    document.getElementById("confirm_furigana_last_name").textContent = "：" + document.getElementById("furigana_last_name").value;
    document.getElementById("confirm_furigana_first_name").textContent = "：" + document.getElementById("furigana_first_name").value;
    document.getElementById("confirm_mail").textContent = "：" + document.getElementById("mail").value;
    document.getElementById("confirm_tel").textContent = "：" + document.getElementById("tel").value;

    inputScreen.classList.add("hidden");
    confirmScreen.classList.remove("hidden");
  });
}

if (order) {
  backBtn.addEventListener("click", () => {
    confirmScreen.classList.add("hidden");
    inputScreen.classList.remove("hidden");
  });
}

// のり弁当
const noriCountDisplay = document.getElementById("nori_luntchbox_count");

const noriPlusBtn = document.getElementById("nori_lunchbox_plus");
const noriMinusBtn = document.getElementById("nori_lunchbox_minus");

// のり弁当の数量表示
let noriCount = 0;

if (order) {
  noriPlusBtn.addEventListener("click", () => {
    noriCount += 1;

    noriCountDisplay.textContent = noriCount;
  });
}

if (order) {
  noriMinusBtn.addEventListener("click", () => {
    noriCount -= 1;

    noriCountDisplay.textContent = noriCount;

    if (noriCount < 0) {
      noriCount = 0;
    }
    noriCountDisplay.textContent = noriCount;
  });
}

// ハンバーグ弁当

const humburgCountDisplay = document.getElementById("humburg_luntchbox_count");

const humburgPlusBtn = document.getElementById("humburg_lunchbox_plus");
const humburgMinusBtn = document.getElementById("humburg_lunchbox_minus");

// ハンバーグ弁当の数量表示
let humburgCount = 0;

if (order) {
  humburgPlusBtn.addEventListener("click", () => {
    humburgCount += 1;

    humburgCountDisplay.textContent = humburgCount;
  });
}

if (order) {
  humburgMinusBtn.addEventListener("click", () => {
    humburgCount -= 1;

    humburgCountDisplay.textContent = humburgCount;

    if (humburgCount < 0) {
      humburgCount = 0;
    }
    humburgCountDisplay.textContent = humburgCount;
  });
}
// 鶏ももの炭火焼き弁当

const chickenThighCountDisplay = document.getElementById("chicken_thigh_luntchbox_count");

const chickenThighPlusBtn = document.getElementById("chicken_thigh_lunchbox_plus");
const chickenThighMinusBtn = document.getElementById("chicken_thigh_lunchbox_minus");

// 鶏ももの炭火焼き弁当の数量表示
let chickenThighCount = 0;

if (order) {
  chickenThighPlusBtn.addEventListener("click", () => {
    chickenThighCount += 1;

    chickenThighCountDisplay.textContent = chickenThighCount;
  });
}

if (order) {
  chickenThighMinusBtn.addEventListener("click", () => {
    chickenThighCount -= 1;

    chickenThighCountDisplay.textContent = chickenThighCount;

    if (chickenThighCount < 0) {
      chickenThighCount = 0;
    }
    chickenThighCountDisplay.textContent = chickenThighCount;
  });
}

// 銀鮭弁当

const salmonCountDisplay = document.getElementById("salmon_luntchbox_count");
const salmonPlusBtn = document.getElementById("salmon_lunchbox_plus");
const salmonMinusBtn = document.getElementById("salmon_lunchbox_minus");

// 銀鮭弁当の数量表示
let salmonCount = 0;

if (order) {
  salmonPlusBtn.addEventListener("click", () => {
    salmonCount += 1;

    salmonCountDisplay.textContent = salmonCount;
  });
}

if (order) {
  salmonMinusBtn.addEventListener("click", () => {
    salmonCount -= 1;

    salmonCountDisplay.textContent = salmonCount;

    if (salmonCount < 0) {
      salmonCount = 0;
    }
    salmonCountDisplay.textContent = salmonCount;
  });
}

//
const selectScreen = document.getElementById("select-screen");

const orderBtn = document.getElementById("order_btn");
const cartDisplay = document.getElementById("cart_count");
const menuSelect = document.getElementById("menu_select");
const countBtn = document.querySelectorAll(".count_btn");
//
let cartCount = 0;

const countBtnPlus = document.querySelectorAll(".count_btn_plus");
const countBtnMinus = document.querySelectorAll(".count_btn_minus");
// const menuSelect14 = document.getElementById("menu_select_14");
// const menuSelect6 = document.getElementById("menu_select_6");

if (order) {
  orderBtn.addEventListener("click", () => {
    document.getElementById("cart_count").textContent = document.getElementById("menu_select").value;
    const countNumber = document.getElementById("cart_count").textContent;

    // confirmScreen.classList.add("hidden");
    // selectScreen.classList.remove("hidden");
  });
  countBtnPlus.forEach((btnPlus) => {
    btnPlus.addEventListener("click", () => {
      cartDisplay.textContent = menuSelect;
      cartCount = menuSelect.value - (noriCount + humburgCount + chickenThighCount + salmonCount);
      cartDisplay.textContent = cartCount;
    });
  });
  countBtnMinus.forEach((btnMinus) => {
    btnMinus.addEventListener("click", () => {
      if (noriCountDisplay.textContent > -1 && humburgCountDisplay.textContent > -1 && chickenThighCountDisplay.textContent > -1 && salmonCountDisplay.textContent > -1 && cartDisplay.textContent < 14) {
        cartDisplay.textContent++;
      }
    });
  });
}

// ここから
const url = new URL(location.href);
const params = url.searchParams;

document.getElementById("select").textContent = params.get("select");

// ここまで

// if (order) {
//   orderBtn.addEventListener("click", () => {
//     document.getElementById("cart_count").textContent = document.getElementById("menu_select").value;
//     const countNumber = document.getElementById("cart_count").textContent;

//     // confirmScreen.classList.add("hidden");
//     // selectScreen.classList.remove("hidden");
//   });
//   countBtnPlus.forEach((btnPlus) => {
//     btnPlus.addEventListener("click", () => {
//       cartDisplay.textContent = menuSelect14;
//       cartCount = menuSelect14.textContent - (humburgCount + noriCount);
//       cartDisplay.textContent = cartCount;
//     });
//   });
//   countBtnMinus.forEach((btnMinus) => {
//     btnMinus.addEventListener("click", () => {
//       if (noriCountDisplay.textContent > -1 && humburgCountDisplay.textContent > -1 && cartDisplay.textContent < 14) {
//         cartDisplay.textContent++;
//       }
//     });
//   });
// }
// ここからが違う。カートカウントに反映させられない

// countBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {});
//   cartCount = menuSelect.value - (humburgCount + noriCount);

//   cartDisplay.textContent = cartCount;
// });

// if (order) {
//   orderBtn.addEventListener("click", () => {

//   });
// }

// function updateDisplay() {
//   cartcout = menuSelect - (humburgCount + noriCount);
// }

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log("複数のボタンの内、どれか1つが押されました！");

//     // 応用：実際に押されたボタン自体を操作したい場合は「this」や「button」を使います
//     // button.classList.add('active');
//   });
// });
