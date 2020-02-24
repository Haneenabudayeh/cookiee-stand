  
'use strict';


var shopSeattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCoookies: 6.3,
  avgcookiesperh: [],
  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));


    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = this.name;

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);

    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < this.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = this.numberOfHours[m] + ' : ' + this.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);
      pEle.textContent = 'Total = ' + this.numberOfCookiesTotal;

     
    }
  }
  
};

shopSeattle.getrandCust();
shopSeattle.render();



var shopTokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCoookies: 1.2,
  numberOfCust: 0,
  avgcookiesperh: [],
  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.numberOfCust = getRandomInt(this.minCust, this.maxCust);
      //console.log(getRandomInt(this.minCust, this.maxCust));
      for (let k = 0; k < 14; k++) {
        this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      }
    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = shopTokyo.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);
    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < shopTokyo.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = shopTokyo.numberOfHours[m] + ' : ' + shopTokyo.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);

      pEle.textContent = 'Total = ' + shopTokyo.numberOfCookiesTotal;
    }





    // this.getrandCust();
    // console.table('at ' + shopTokyo.numberOfHours[m] + ' ' + shopTokyo.numberOfCust + ' Customers and we should bake ' + shopTokyo.avgcookiesperh + ' Cookies');
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);


};

shopTokyo.getrandCust();
shopTokyo.render();







var shopDubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCoookies: 3.7,
  numberOfCust: 0,
  avgcookiesperh: [],
  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.numberOfCust = getRandomInt(this.minCust, this.maxCust);
      //console.log(getRandomInt(this.minCust, this.maxCust));
      for (let k = 0; k < 14; k++) {
        this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      }
    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = shopDubai.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);
    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < shopDubai.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = shopDubai.numberOfHours[m] + ' : ' + shopDubai.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);

      pEle.textContent = 'Total = ' + shopDubai.numberOfCookiesTotal;
    }





    // this.getrandCust();
    // console.table('at ' + shopDubai.numberOfHours[m] + ' ' + shopDubai.numberOfCust + ' Customers and we should bake ' + shopDubai.avgcookiesperh + ' Cookies');
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);


};

shopDubai.getrandCust();
shopDubai.render();





var shopParis = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCoookies: 2.3,
  numberOfCust: 0,
  avgcookiesperh: [],

  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.numberOfCust = getRandomInt(this.minCust, this.maxCust);
      //console.log(getRandomInt(this.minCust, this.maxCust));
      for (let k = 0; k < 14; k++) {
        this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      }
    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = shopParis.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);
    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < shopParis.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = shopParis.numberOfHours[m] + ' : ' + shopParis.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);

      pEle.textContent = 'Total = ' + shopParis.numberOfCookiesTotal;
    }





    // this.getrandCust();
    // console.table('at ' + shopParis.numberOfHours[m] + ' ' + shopParis.numberOfCust + ' Customers and we should bake ' + shopParis.avgcookiesperh + ' Cookies');
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);


};

shopParis.getrandCust();
shopParis.render();




var shopLima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCoookies: 4.6,
  numberOfCust: 0,
  img: 'img/salmon.png',
  avgcookiesperh: [],
  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.numberOfCust = getRandomInt(this.minCust, this.maxCust);
      //console.log(getRandomInt(this.minCust, this.maxCust));
      for (let k = 0; k < 14; k++) {
        this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      }
    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = shopLima.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);
    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < shopLima.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = shopLima.numberOfHours[m] + ' : ' + shopLima.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);

      pEle.textContent = 'Total = ' + shopLima.numberOfCookiesTotal;
    }



    var imgEle1 = document.createElement('img');

    imgEle1.setAttribute('src', this.img);

    articleEle1.appendChild(imgEle1);


    // this.getrandCust();
    // console.table('at ' + shopLima.numberOfHours[m] + ' ' + shopLima.numberOfCust + ' Customers and we should bake ' + shopLima.avgcookiesperh + ' Cookies');
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);


};

shopLima.getrandCust();
shopLima.render();



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



// time1: 6 ,
// time2: 7 ,
// time3: 8 ,
// time4: 9 ,
// time5: 10 'a,
// time6: 11 'am',
// time7: 12 'pm',
// time8: 1 'pm',
// time9: 2 'pm',
// time10: 3 'pm',
// time11: 4 'pm',
// time12: 5 'pm',
// time13: 6 'pm',
// time14: 7 'pm'