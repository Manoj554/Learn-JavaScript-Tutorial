const pages = {
  'JSHome.html': 0,
  'JSIntroduction.html': 1,
  'JSWhereto.html': 2,
  'JSFunction.html': 3,
  'JSStatement.html': 4,
  'JSComments.html': 5,
  'JSVariable.html': 6,
  'JSOperator.html': 7,
  'JSObject.html': 8,
  'JSEvents.html': 9,
  'JSRandom.html': 10,
  'JSErrors.html': 11,
  'JSStrings.html': 12,
  'JSMath.html': 13,
  'JSDebugging.html': 14,
  'JSRegExp.html': 15,
  'JSNumbers.html':16,
  'JSArrays.html':17,
  'JSDates.html':18,
  'JSForms.html':19,
  'JSConst.html':20,
  'JSLet.html':21,
  'JSThis.html':22,
  'JSLoop.html':23,
  'DomIntro.html':24,
  'DomMethod.html':25,
  'DomDocument.html':26,
  'DomElement.html':27,
  'DomNavigation.html':28,
  'DomNodes.html':29,
  'DomCollection.html':30,
  'DomNodelist.html':31,
  'DomEvents.html':32,
  'DomEventListener.html':33,
  
}

const indexes = {
  0:'JSHome.html',
  1: 'JSIntroduction.html',
  2:'JSWhereto.html',
  3:'JSFunction.html',
  4:'JSStatement.html',
  5:'JSComments.html',
  6:'JSVariable.html',
  7:'JSOperator.html',
  8:'JSObject.html',
  9:'JSEvents.html',
  10:'JSRandom.html',
  11:'JSErrors.html',
  12:'JSStrings.html',
  13:'JSMath.html',
  14:'JSDebugging.html',
  15:'JSRegExp.html',
  16:'JSNumbers.html',
  17:'JSArrays.html',
  18:'JSDates.html',
  19:'JSForms.html',
  20:'JSConst.html',
  21:'JSLet.html',
  22:'JSThis.html',
  23:'JSLoop.html',
  24:'DomIntro.html',
  25:'DomMethod.html',
  26:'DomDocument.html',
  27:'DomElement.html',
  28:'DomNavigation.html',
  29:'DomNodes.html',
  30:'DomCollection.html',
  31:'DomNodelist.html',
  32:'DomEvents.html',
  33:'DomEventListener.html',
}




function Quiz(){
    
  document.querySelector('#main').src='./Quizes/index.html';
}




function Home(){
    
  document.querySelector('#main').src='./main pages/JSHome.html';
}

function Intro(){
    
  document.querySelector('#main').src='./main pages/JSIntroduction.html'

}
function Whereto(){
    
  document.querySelector('#main').src='./main pages/JSWhereto.html'

}
function Func(){
    
  document.querySelector('#main').src='./main pages/JSFunction.html'

}
function Statement(){
    
  document.querySelector('#main').src='./main pages/JSStatement.html'

}
function Comments(){
    
  document.querySelector('#main').src='./main pages/JSComments.html'

}
function Variables(){
    
  document.querySelector('#main').src='./main pages/JSVariable.html'

}
function Operators(){
    
  document.querySelector('#main').src='./main pages/JSOperator.html'

}
function Objects(){
    
  document.querySelector('#main').src='./main pages/JSObjects.html'

}
function Events(){
    
  document.querySelector('#main').src='./main pages/JSEvents.html'

}
function Random(){
    
  document.querySelector('#main').src='./main pages/JSRandom.html'

}
function Errors(){
    
  document.querySelector('#main').src='./main pages/JSErrors.html'

}
function Strings(){
    
  document.querySelector('#main').src='./main pages/JSStrings.html'

}
function Maths(){
    
  document.querySelector('#main').src='./main pages/JSMath.html'

}
function Debug(){
    
  document.querySelector('#main').src='./main pages/JSDebugging.html'

}
function Numbers(){
    
  document.querySelector('#main').src='./main pages/JSNumbers.html'

}
function Regexp(){
    
  document.querySelector('#main').src='./main pages/JSRegExp.html'

}
function Arrays(){
    
  document.querySelector('#main').src='./main pages/JSArrays.html'

}
function Dates(){
    
  document.querySelector('#main').src='./main pages/JSDates.html'

}
function Forms(){
    
  document.querySelector('#main').src='./main pages/JSForms.html'

}
function Loops(){
    
  document.querySelector('#main').src='./main pages/JSLoop.html'

}
function Const(){
    
  document.querySelector('#main').src='./main pages/JSConst.html'

}
function Let(){
    
  document.querySelector('#main').src='./main pages/JSLet.html'

}
function This(){
    
  document.querySelector('#main').src='./main pages/JSThis.html'

}


function DIntro(){
  document.querySelector('#main').src='./DOM/DomIntro.html'
}
function DMethod(){
  document.querySelector('#main').src='./DOM/DomMethod.html'
}
function DDocument(){
  document.querySelector('#main').src='./DOM/DomDocument.html'
}
function DElement(){
  document.querySelector('#main').src='./DOM/DomElement.html'
}
function DNav(){
  document.querySelector('#main').src='./DOM/DomNavigation.html'
}
function DNode(){
  document.querySelector('#main').src='./DOM/DomNodes.html'
}
function DCollection(){
  document.querySelector('#main').src='./DOM/DomCollection.html'
}
function DNodeList(){
  document.querySelector('#main').src='./DOM/DomNodelist.html'
}
function DEvent(){
  document.querySelector('#main').src='./DOM/DomEvents.html'
}
function DEventListen(){
  document.querySelector('#main').src='./DOM/DomEventListener.html'
}





function goback()
{
    
    var x = document.getElementById("main").src.split('/'); 
    console.log(x);
    console.log(x.length);
    // console.log(x.length);
    var ind = pages[x[x.length-1]];
    if(ind == 0)
        alert("Cannot Go Back Since it's the Introduction Page");
        // alert("Cannot Go Forward Since Next Page is Quiz page which will open in the New Tab");
    else if(ind>=25){
      document.getElementById("main").src = './DOM/'+indexes[ind-1];
      var btns = document.getElementsByClassName("stay");
      var current = document.getElementsByClassName("active");
      if (current.length > 0){ 
            current[0].className = current[0].className.replace(" active", "");
        }
         btns[ind-1].className+=" active";

    }
    else
    {
        document.getElementById("main").src = './main pages/'+indexes[ind-1];
        var btns = document.getElementsByClassName("stay");
        var current = document.getElementsByClassName("active");
        if (current.length > 0){ 
              current[0].className = current[0].className.replace(" active", "");
          }
           btns[ind-1].className+=" active";
    }
}
function goforward(){
  var x = document.getElementById("main").src.split('/'); 
    
    var ind = pages[x[x.length-1]];
    if(ind == 33)
        alert("Cannot Go Forward Since it is the last page in this course");
    else if(ind>=23){
      document.getElementById("main").src = './DOM/'+indexes[ind+1];
      var btns = document.getElementsByClassName("stay");
      var current = document.getElementsByClassName("active");
      if (current.length > 0){ 
            current[0].className = current[0].className.replace(" active", "");
        }
         btns[ind+1].className+=" active";

    }
    else
    {
        document.getElementById("main").src = './main pages/'+indexes[ind+1];
        var btns = document.getElementsByClassName("stay");
        var current = document.getElementsByClassName("active");
        if (current.length > 0){ 
              current[0].className = current[0].className.replace(" active", "");
          }
           btns[ind+1].className+=" active";
    }
}


function Top() {
  var x = document.getElementById("main").src.split('/');    
  var ind = pages[x[x.length-1]];
  if(ind>23){
    document.getElementById("main").src = './DOM/'+indexes[ind];
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }else{
    document.getElementById("main").src = './main pages/'+indexes[ind];
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }
}

function load(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



var btns = document.getElementsByClassName("stay");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
