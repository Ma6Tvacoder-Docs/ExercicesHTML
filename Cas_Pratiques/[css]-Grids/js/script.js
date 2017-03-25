
// Les données et methodes
var data = {
  "colonnes" : document.getElementById('content').children,

  "structure" : [document.getElementById('content')],

  "innerHTML" : ["col-xs-","col-sm-","col-md-","col-lg-"],

  "changeClass" : function ( dataList, newClass ){
    var i = 0;
    while( i < dataList.length ){
      dataList[i].className = newClass;
      i++;
    }
  },

  "changeHTML" : function (dataList, newContent, value){
    var i = 0;
    while ( i < dataList.length){
      dataList[i].innerHTML = "<div>" + newContent + value + "</div>";
      console.log(dataList[i])
      i++;
    }
  }
}

// Les boutons fonctionnel
function grid(){
  data.changeClass( data.structure, "container" );
  data.changeClass( data.colonnes, "col-xs-1 grid" );
  data.changeHTML(data.colonnes, data.innerHTML[0], "1");
}

function grid_fluid(){
  data.changeClass( data.structure, "container-fluid" );
  data.changeClass( data.colonnes, "col-xs-1 grid" );
  data.changeHTML(data.colonnes, data.innerHTML[0], "1")
}

function squarre(){
  data.changeClass( data.structure, "container" );
  data.changeClass( data.colonnes, "col-xs-6 grid squarre" );

  var i = 0;
  while ( i < data.colonnes.length ){
    data.changeHTML([data.colonnes[i]], data.innerHTML[0], "6")
    i++;
  }
}

function squarre_double(){
  data.changeClass( data.structure, "container" );
  var i = 0;
  while ( i < data.colonnes.length ){
    data.changeClass( [data.colonnes[i]], "col-xs-offest-"+i+" col-md-offest-"+i+" col-lg-offest-"+i+" col-md-"+(12-i)+" grid squarre" );
    data.changeHTML([data.colonnes[i]], data.innerHTML[0], 12-i)
    i++;
  }
}
