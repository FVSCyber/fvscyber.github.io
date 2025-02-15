var homes = document.getElementById("home")

var aboutmes = document.getElementById("aboutme")

var projects = document.getElementById("project")

var contacts = document.getElementById("contact")

var page_state = 1

var x = document.getElementById("navbars");

var transition = document.getElementById('transition');

var alertpg = document.getElementById('alert-s');

var checkBox = document.getElementById("chseck");

var themeid = document.getElementById('theme');

var bgindex = document.querySelector(':root');

var sv = document.cookie;

function darkmodesys() {

    var checkBox = document.getElementById("chseck");

    var text = document.getElementById("theme");

    if (checkBox.checked == true){

        document.cookie = "light";

        text.innerHTML = "Light";

        bgindex.style = "--color-bg: rgb(255, 255, 255); --color-text: rgb(27, 27, 27); --color-bg-line: rgb(212, 212, 212);  --color-text-box: rgb(233, 233, 233);"

    } else {

        document.cookie = "dark";

        text.innerHTML = "Dark";

        bgindex.style = "--color-bg: rgb(27, 27, 27); --color-text: rgb(255, 255, 255); --color-text-box: rgb(44, 44, 44); --color-bg-line: rgb(41, 41, 41);"

    }

  }

function sendMessage() {

    if((window.navigator.onLine ? 'on' : 'off') == "off"){

        alertS("Internet Not Connect", "Not Responsible to contact")

        // ;;

    }

    // e.preventDefault(); 

    var x = document.getElementById("contact-form");

    var space = "                                                                                                                 ";

    var text = "";

    text += "Nama Pengirim : " + x.querySelector('input[id="name"]').value + space;

    text += "Email Pengirim : " + x.querySelector('input[id="email"]').value + space;

    text += "Pesan Pengirim : " + space +x.querySelector('[id="pesan"]').value;

    var url = 'https://api.telegram.org/bot7826784007:AAE_yQtFPJWbp_U2e4DvAB1Ux56G7FWF2oI/sendMessage?chat_id=6043023960&text=' + text;

    var oReq = new XMLHttpRequest();

    oReq.open("GET", url, true);

    oReq.send();

    oReq.onload = function() {

        if (oReq.status === 200) {

            alertS("Thank You For Contact","The contact will be i read on my telegram bot for receiver");

        } else {

            alertS("Failed to send message", oReq.responseText);

        }

    };

    console.log(url);

    homes.style.display = "none"

        aboutmes.style.display = "none"

        projects.style.display = "none"

        contacts.style.display = ""

} 

function alertS(alertHeaderText, alertSubText){

    alertpg.className = "alert-berhasil"

    alertpg.querySelector('h1').innerHTML = alertHeaderText;

    alertpg.querySelector('h2').innerHTML = alertSubText;

}

function closeAlert(){

    alertpg.className = "alert-berhasil up"

}

function loaddt(){

    if(document.cookie == "light"){

        checkBox.setAttribute("checked", "");

    }

    if(document.cookie == "dark"){

        checkBox.removeAttribute("checked");

    }

}

// https://api.telegram.org/bot7826784007:AAE_yQtFPJWbp_U2e4DvAB1Ux56G7FWF2oI/sendMessage?chat_id=6043023960&text=https://github.com/

function navb() {

    if (x.className === "nav-action") {

      x.className += " active"

    } else {

      x.className = "nav-action"

    }

}

function sideup(){

    transition.className = "transition up";

}

function side(){

    // if(transition.className === "transition up"){

    //     transition.className = "transition down";

    // }else if(transition.className === "transition down"){

    //     transition.className = "transition up";

    // }

    

    transition.className = "transition";

    setTimeout(function(){

        transition.className = "transition up";

    },800)

}

function home() {

    side()

    setTimeout(function(){

        x.className = "nav-action"

        homes.style.display = ""

        aboutmes.style.display = "none"

        projects.style.display = "none"

        contacts.style.display = "none"

    }, 500)

    // sidedown()

}

function aboutme() {

    x.className = "nav-action"

    side()

    setTimeout(function(){

        homes.style.display = "none"

        aboutmes.style.display = ""

        projects.style.display = "none"

        contacts.style.display = "none"

    }, 500)

}

function project()  {

    x.className = "nav-action"

    side()

    setTimeout(function(){

        homes.style.display = "none"

        aboutmes.style.display = "none"

        projects.style.display = ""

        contacts.style.display = "none"



    }, 500)

}

function contact()  {

    x.className = "nav-action"

    side()

    setTimeout(function(){

        homes.style.display = "none"

        aboutmes.style.display = "none"

        projects.style.display = "none"

        contacts.style.display = ""



    }, 500)

}

var TxtType = function(el, toRotate, period) {

    this.toRotate = toRotate;

    this.el = el;

    this.loopNum = 0;

    this.period = parseInt(period, 10) || 2000;

    this.txt = '';

    this.tick();

    this.isDeleting = false;

};



TxtType.prototype.tick = function() {

    var i = this.loopNum % this.toRotate.length;

    var fullTxt = this.toRotate[i];



    if (this.isDeleting) {

    this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {

    this.txt = fullTxt.substring(0, this.txt.length + 1);

    }



    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';



    var that = this;

    var delta = 200 - Math.random() * 100;



    if (this.isDeleting) { delta /= 2; }



    if (!this.isDeleting && this.txt === fullTxt) {

    delta = this.period;

    this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {

    this.isDeleting = false;

    this.loopNum++;

    delta = 500;

    }



    setTimeout(function() {

    that.tick();

    }, delta);

};



window.onload = function() {

    var elements = document.getElementsByClassName('typewrite');

    for (var i=0; i<elements.length; i++) {

        var toRotate = elements[i].getAttribute('data-type');

        var period = elements[i].getAttribute('data-period');

        if (toRotate) {

          new TxtType(elements[i], JSON.parse(toRotate), period);

        }

    }

    // INJECT CSS

    var css = document.createElement("style");

    css.type = "text/css";

    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";

    document.body.appendChild(css);

    home();

    loaddt();

    darkmodesys();

    // contact()

};



const root = document.querySelector(':root');



function changeCursor(index) {

    cursor.hidden();

    switch (cursorList[index]) {

      case 'arrow-pointer':

        cursor = new ArrowPointer();

        break;

      case 'big-circle':

        cursor = new BigCircle();

        break;

    }

}

class ArrowPointer {

    constructor() {

        this.root = document.body;

        this.cursor = document.querySelector(".curzr-arrow-pointer");

    

        this.position = {

            distanceX: 0, 

            distanceY: 0,

            distance: 0,

            pointerX: 0,

            pointerY: 0,

        },

        this.previousPointerX = 0;

        this.previousPointerY = 0;

        this.angle = 0;

        this.previousAngle = 0;

        this.angleDisplace = 0;

        this.degrees = 57.296;

        this.cursorSize = 20;

    

        this.cursorStyle = {

            boxSizing: 'border-box',

            position: 'fixed',

            top: '50%',

            left: '50%',

            transform: 'translate(-50%, -50%)',

            zIndex: '2147483647',

            width: `${ this.cursorSize }px`,

            height: `${ this.cursorSize }px`,

            transition: '250ms, transform 100ms',

            userSelect: 'none',

            pointerEvents: 'none'

        }  

    

        this.init(this.cursor, this.cursorStyle);

    }

  

    init(el, style) {

      Object.assign(el.style, style);

      setTimeout(() => {

        this.cursor.removeAttribute("hidden")

      }, 500);

      this.cursor.style.opacity = 1;

    }

  

    move(event) {

        this.previousPointerX = this.position.pointerX;

        this.previousPointerY = this.position.pointerY;

        this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x;

        this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y;

        this.position.distanceX = this.previousPointerX - this.position.pointerX;

        this.position.distanceY = this.previousPointerY - this.position.pointerY;

        this.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2);

    

        this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`;

    

        if (this.distance > 1) {

            this.rotate(this.position);

        } else {

            this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`;

        }

    }

  

    rotate(position) {

        let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees;

        let modAngle;

        const style = this.cursor.style;

        this.previousAngle = this.angle;

    

        if (position.distanceX <= 0 && position.distanceY >= 0) {

            this.angle = 90 - unsortedAngle + 0;

        } else if (position.distanceX < 0 && position.distanceY < 0) {

            this.angle = unsortedAngle + 90;

        } else if (position.distanceX >= 0 && position.distanceY <= 0) {

            this.angle = 90 - unsortedAngle + 180;

        } else if (position.distanceX > 0 && position.distanceY > 0) {

            this.angle = unsortedAngle + 270;

        }

    

        if (isNaN(this.angle)) {

            this.angle = this.previousAngle;

        } else {

            if (this.angle - this.previousAngle <= -270) {

                this.angleDisplace += 360 + this.angle - this.previousAngle;

            } else if (this.angle - this.previousAngle >= 270) {

                this.angleDisplace += this.angle - this.previousAngle - 360;

            } else {

                this.angleDisplace += this.angle - this.previousAngle;

            }

        }

        style.left = `${ -this.cursorSize / 2 }px`;

        style.top = `${ 0 }px`;

        style.transform += ` rotate(${this.angleDisplace}deg)`;

    }  

  

    hidden() {

        this.cursor.style.opacity = 0;

        setTimeout(() => {

            this.cursor.setAttribute("hidden", "hidden")

        }, 500);

    }

}  

let cursor = new ArrowPointer()

document.onmousemove = function (event) {

  cursor.move(event)

}

document.ontouchmove = function (event) {

  cursor.move(event.touches[0])

}

document.onclick = function () {

  if (typeof cursor.click === 'function') {

    cursor.click()

  }

}

        
