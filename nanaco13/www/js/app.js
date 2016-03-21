(() => {
  "use strict";
  // main処理
  const main = ( () => {
    preloadNumbers();

    // ステップ関数
    var accumulator = function(n) {
      var i = n;
      return function() {
        return i++ % 100;
      }
    }
    var acc = accumulator(0);

    // 無名再帰でステップを進める
    var sec = setInterval(function() {
      window.render({
        now: { sec: acc() }
      });
    }, 200);

  } )();

  function preloadNumbers() {
      var images = [];
      for (var i = 0; i < 10; i++) {
          images[i] = new Image();
          images[i].src = `img/num0${i}.png`;
      }
  }
})();