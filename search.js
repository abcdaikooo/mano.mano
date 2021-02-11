window.onload = function() {

 

  // エリアの選択肢

 

  country = document.getElementById("country");

 

  // ジャンルの選択肢が変更された際の動作

 

  area = document.getElementById("area");

 

  area.onchange = changeArea;

 

  country.onchange = changeCountry;

 

}

 

// ジャンルの選択肢が変更された際の動作

 

function changeArea() {

 

  // 変更後のカテゴリを取得

 

  var changedArea= area.value;

 

  if (changedArea == "0") {

 

    // エリアに北米が選択された場合

 

    setUSNorth();

 

  } else if (changedArea == "1") {

 

    // エリアにアジアが選択された場合

 

    setAsia();

 

  } else {

 

    // エリアにヨーロッパが選択された場合

 

    setEurope();

 

  }

 

}

 

// 国名の選択肢が変更された際の動作

 

function changeCountry() {

 

  // 変更後のカテゴリを取得

 

  var changedCountry = country.value;

 

  if (changedCountry == "0") {

 

    // 国名にアメリカが選択された場合

 

    setNUS();

 

  } else if (changedCountry == "1") {

 

    // 国名にカナダが選択された場合

 

    setCanada();

 

  } else if (changedCountry == "2") {

 

    // 国名にハワイが選択された場合

 

    setHawaii();

 

  } else if (changedCountry == "3") {

 

    // 国名にインドネシアが選択された場合

 

    setIndnesia();

 

  } else if (changedCountry == "4") {

 

    // 国名にヴェトナムが選択された場合

 

    setVietnum();

 

  } else if (changedCountry == "5") {

 

    // 国名にインドが選択された場合

 

    setIndia();

 

  } else if (changedCountry == "6") {

 

    // 国名にイタリアが選択された場合

 

    setItary();

 

  } else if (changedCountry == "7") {

 

    // 国名にフランスが選択された場合

 

    setFrance();

 

  } else {

 

    // 国名に東ヨーロッパが選択された場合

 

    setEastEurope();

 

  }

 

}

 

// 北米の選択肢を設定する

 

function setUSNorth() {

 

  // 北米の国名の選択肢を空にする

 

  country.textContent = null;

 

  // 国名の選択肢

 

  var USNorth = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"0", label:"アメリカ"},

 

    {cd:"1", label:"カナダ"},

 

    {cd:"2", label:"ハワイ"}

 

  ];

 

  USNorth.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    country.appendChild(op);

 

  });

 

}

 

// アジアの選択肢を設定する

 

function setAsia() {

 

  // 国名の選択肢を空にする

 

  country.textContent = null;

 

  // アジアの選択肢

 

  var asianCountry = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"3", label:"インドネシア"},

 

    {cd:"4", label:"ベトナム"},

 

    {cd:"5", label:"インド"}

 

  ];

 

  asianCountry.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    country.appendChild(op);

 

  });

 

}

 

// ヨーロッパの選択肢を設定する

 

function setEurope() {

 

  // 国名の選択肢を空にする

 

  country.textContent = null;

 

  // ヨーロッパの選択肢

 

  var europeCountry = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"6", label:"イタリア"},

 

    {cd:"7", label:"フランス"},

 

    {cd:"8", label:"東欧"}

 

  ];

 

  europeCountry.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    country.appendChild(op);

 

  });

 

}

 

// アメリカの選択肢を設定する

 

function setNUS() {

 

  // アメリカ都市の選択肢を空にする

 

  city.textContent = null;

 

  // アメリカ都市の選択肢

 

  var NUSCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"00", label:"ニューヨーク"},

 

    {cd:"01", label:"ラスヴェガス"},

 

    {cd:"02", label:"ロサンゼルス"}

 

  ];

 

  NUSCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}

 

// カナダの選択肢を設定する

 

function setCanada() {

 

  // カナダ都市の選択肢を空にする

 

  city.textContent = null;

 

  // カナダ都市の選択肢

 

  var CanadaCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"10", label:"モントリオール"},

 

    {cd:"11", label:"ヴァンクーバー"},

 

    {cd:"12", label:"オタワ"}

 

  ];

 

  CanadaCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}

 

// ハワイの選択肢を設定する

 

function setHawaii() {

 

  // ハワイ都市の選択肢を空にする

 

  city.textContent = null;

 

  // ハワイ都市の選択肢

 

  var HawaiiCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"20", label:"ホノルル"},

 

    {cd:"21", label:"カパア"},

 

    {cd:"22", label:"カフルイ"}

 

  ];

 

  HawaiiCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}

 

// インドネシアの選択肢を設定する

 

function setIndnesia() {

 

  // インドネシア都市の選択肢を空にする

 

  city.textContent = null;

 

  // インドネシア都市の選択肢

 

  var IndnesiaCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"30", label:"ジャカルタ"},

 

    {cd:"31", label:"マカッサル"},

 

    {cd:"32", label:"デンパサール"}

 

  ];

 

  IndnesiaCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}

 

// ベトナムの選択肢を設定する

 

function setVietnum() {

 

  // ベトナム都市の選択肢を空にする

 

  city.textContent = null;

 

  // ベトナム都市の選択肢

 

  var VietnumCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"40", label:"ホーチミン"},

 

    {cd:"41", label:"ハノイ"},

 

    {cd:"42", label:"フエ"}

 

  ];

 

  VietnumCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}

 

// インドの選択肢を設定する

 

function setIndia() {

 

  // インド都市の選択肢を空にする

 

  city.textContent = null;

 

  // インド都市の選択肢

 

  var IndiaCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"50", label:"コルカタ"},

 

    {cd:"51", label:"ムンバイ"},

 

    {cd:"52", label:"バンガロール"}

 

  ];

 

  IndiaCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}

 

function setItary() {

 

  // イタリア都市の選択肢を空にする

 

  city.textContent = null;

 

  // イタリア都市の選択肢

 

  var ItaryCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"60", label:"ローマ"},

 

    {cd:"61", label:"フィレンツェ"},

 

    {cd:"62", label:"ナポリ"}

 

  ];

 

  ItaryCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}

 

function setFrance() {

 

  // フランス都市の選択肢を空にする

 

  city.textContent = null;

 

  // フランス都市の選択肢

 

  var FranceCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"70", label:"パリ"},

 

    {cd:"71", label:"マルセイユ"},

 

    {cd:"72", label:"ストラスブール"}

 

  ];

 

  FranceCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}

 

function setEastEurope() {

 

  // 東欧都市の選択肢を空にする

 

  city.textContent = null;

 

  // 東欧都市の選択肢

 

  var EastEuroCity = [

 

    {cd:"", label:"選択してください"},

 

    {cd:"80", label:"プラハ"},

 

    {cd:"81", label:"ブダペスト"},

 

    {cd:"82", label:"ウィーン"}

 

  ];

 

  EastEuroCity.forEach(function(value) {

 

    var op = document.createElement("option");

 

    op.value = value.cd;

 

    op.text = value.label;

 

    city.appendChild(op);

 

  });

 

}