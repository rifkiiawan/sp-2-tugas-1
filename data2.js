for(var y = 1; y < 10; y++){
    for (var x = 1; x < 10; x++){
       if( y == x || x==9 - (y - 1 ) || y == 8 || y == 2 || x == 2 || x == 8) {
           document.write("*")
       }else{
           document.write("_")
       }
    }
    document.write("<br/>")
}