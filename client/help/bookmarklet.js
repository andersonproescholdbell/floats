//always use https://javascript-minifier.com/

(function() {
  function scmScript() {
    var floatsList = localStorage.getItem('floatsList');
    var onlyFloatsList = localStorage.getItem('onlyFloatsList');
    if (floatsList == null || floatsList == 'null') {
      floatsList = [];
      onlyFloatsList = [];
    }else {
      floatsList = floatsList.split(',');
      onlyFloatsList = onlyFloatsList.split(',');
    }
    var btnSpots = document.getElementsByClassName('market_listing_item_name_block');
    for (var i = 0; i < btnSpots.length; i++) {
      var p = document.createElement('p');
      p.style.borderRadius = '2px';
      p.style.border = 'none';
      p.style.padding = '1px';
      p.style.display = 'inline-block';
      p.style.cursor = 'pointer';
      p.style.textDecoration = 'none !important';
      p.style.color = '#cccccc !important';
      p.style.backgroundColor = '#416bad';
      p.innerHTML = 'Add Float (check console)';
      p.addEventListener('click', function() {
        var itemFloat = this.parentNode.querySelectorAll('.itemfloat')[0].innerHTML.split(': ')[1];
        if (itemFloat.startsWith('<span')) {
          itemFloat = Number(itemFloat.replace(/[^0-9.,]/g, ""));
        }
        if (itemFloat != 'undefined' && onlyFloatsList.indexOf(itemFloat) == -1) {
          try {
            floatsList.filter(function(obj) { return obj });
            onlyFloatsList.filter(function(obj) { return obj });
          }catch(error) {
            //nothing
          }
          try {
            var itemPrice = this.parentNode.parentNode.querySelectorAll('.market_listing_right_cell.market_listing_their_price')[0].querySelectorAll('.market_listing_price.market_listing_price_with_fee')[0].innerHTML.replace(/\s+/g, '');
            var itemPrice2;
            if ( (itemPrice.includes('.') || itemPrice.includes(',')) && itemPrice.substring(itemPrice.length-1) != '.' && itemPrice.substring(itemPrice.length-1) != ',') {
              itemPrice2 = itemPrice.match(/\d+/g)[0] + '.' + itemPrice.match(/\d+/g)[1];
            }else {
              itemPrice2 = itemPrice.replace(/[^0-9]/, '').replace(/\D/g,'');
            }
            var itemName;
            try {
              itemName = this.parentNode.querySelectorAll('.market_listing_item_name.economy_item_hoverable')[0].innerHTML.split(' (')[0];
            }catch(error) {
              itemName = document.getElementById('largeiteminfo_item_name').innerText.replace(/\s+/g, '');
            }
            floatsList.push(itemFloat + '++' + itemName + '++' + itemPrice2);
            onlyFloatsList.push(itemFloat);
            console.log(floatsList.join('\n'));
            console.log('---------------------------------------');
            localStorage.setItem('floatsList', floatsList);
            localStorage.setItem('onlyFloatsList', onlyFloatsList);
          }catch(error) {
            console.log('Skin already sold or other error.');
          }
        }else {
          console.log('Float already added! Or you have not loaded the float or other error');
        }
      });
      btnSpots[i].appendChild(p);
      if (i == 0) {
        var p1 = document.createElement('p');
        p1.style.borderRadius = '2px';
        p1.style.border = 'none';
        p1.style.padding = '1px';
        p1.style.display = 'inline-block';
        p1.style.cursor = 'pointer';
        p1.style.textDecoration = 'none !important';
        p.style.color = '#cccccc !important';
        p1.style.backgroundColor = '#770f29';
        p1.innerHTML = 'Reset List of Floats';
        p1.addEventListener('click', function() {
          localStorage.setItem('floatsList', null);
          localStorage.setItem('onlyFloatsList', null);
          floatsList = [];
          onlyFloatsList = [];
          console.log('Floats cleared.');
        });
        btnSpots[i].appendChild(p1);
      }
    }
  }
  function bitskinsScript() {
    var floatsList = localStorage.getItem('floatsList');
    var usedFloatsList = localStorage.getItem('onlyFloatsList');
    if (floatsList == null || usedFloatsList == null || floatsList == 'null' || usedFloatsList == 'null') {
      floatsList = [];
      usedFloatsList = [];
    }else {
      floatsList = floatsList.split(',');
      usedFloatsList = usedFloatsList.split(',');
    }
    var btnSpots = document.getElementsByClassName('item-icon lazy');
    var btnSpots2 = [];
    for (var i = 0; i < btnSpots.length; i++) {
  	   btnSpots2.push(btnSpots[i].querySelectorAll('.text-center')[2]);
    }

    for (var i = 0; i < btnSpots.length; i++) {
      var p = document.createElement('p');
      p.id = 'fcBtn' + i;
      p.style.borderRadius = '0px';
      p.style.padding = '1px 5px';
      p.style.fontSize = '13px';
      p.style.lineHeight = '1.5';
      p.style.color = 'rgb(204, 204, 204)';
      p.style.backgroundColor = 'rgb(65, 107, 173)';
      p.classList.add('btn');
      p.classList.add('addToCartButton');
      p.innerHTML = 'Add Float (check console)';
      p.addEventListener('click', function() {
        if (itemFloat != 'undefined' && usedFloatsList.indexOf(itemFloat) == -1) {
          try {
            var itemFloat = this.parentNode.parentNode.querySelectorAll('.text-center')[2].querySelectorAll('.btn.btn-xs.btn-default')[1].href;
            var itemName = this.parentNode.parentNode.parentNode.querySelectorAll('.panel-heading.item-title')[0].innerText;
            var itemPrice = this.parentNode.parentNode.querySelectorAll('.text-center')[0].querySelectorAll('.item-price-display')[0].innerHTML.replace(/\s+/g, '');
            var itemPrice2;
            if ( (itemPrice.includes('.') || itemPrice.includes(',')) && itemPrice.substring(itemPrice.length-1) != '.' && itemPrice.substring(itemPrice.length-1) != ',') {
              itemPrice2 = itemPrice.match(/\d+/g)[0] + '.' + itemPrice.match(/\d+/g)[1];
            }else {
              itemPrice2 = itemPrice.replace(/[^0-9]/, '').replace(/\D/g,'');
            }
            floatsList.push(itemFloat + '++' + itemName + '++' + itemPrice2);
            usedFloatsList.push(itemFloat);
            console.log(floatsList.join('\n'));
            console.log('---------------------------------------');
            localStorage.setItem('floatsList', floatsList);
            localStorage.setItem('onlyFloatsList', usedFloatsList);
          }catch(error) {
            console.log('Some kind of error? ' + error);
          }
        }else {
          console.log('Float already added! Or other error');
        }
      });
      btnSpots2[i].appendChild(p);
      if (i == 0) {
        var p1 = document.createElement('p');
        p1.style.borderRadius = '0px';
        p1.style.padding = '1px 5px';
        p1.style.fontSize = '13px';
        p1.style.lineHeight = '1.5';
        p1.style.color = 'rgb(204, 204, 204)';
        p1.style.backgroundColor = 'rgb(119, 15, 41)';
        p1.classList.add('btn');
        p1.classList.add('addToCartButton');
        p1.innerHTML = 'Reset List of Floats';
        p1.addEventListener('click', function() {
          localStorage.setItem('floatsList', null);
          localStorage.setItem('onlyFloatsList', null);
          floatsList = [];
          onlyFloatsList = [];
          console.log('Floats cleared.');
        });
        btnSpots2[i].appendChild(p1);
      }
    }
  }
  var page = window.location.href;
  if (page.includes('steamcommunity')) {
    scmScript();
  }else if (page.includes('bitskins')) {
    bitskinsScript();
  }else {
    alert('Make sure you are on SCM or Bitskins!');
  }
})();
