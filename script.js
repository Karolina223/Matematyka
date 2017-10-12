function calculate(){
  var A = document.getElementById('A').value;
  var B = document.getElementById('B').value;
  var C = document.getElementById('C').value;

  if(isNaN(A) || A == "")
  {
    alert("Nieprawidłowy parametr A!");
    return;
  }
  if(isNaN(B) || B == "")
  {
    alert("Nieprawidłowy parametr B!");
    return;
  }
  if(isNaN(C) || C == "")
  {
    alert("Nieprawidłowy parametr C!");
    return;
  }

  var delta = B*B-4*A*C;

  var str = "<p>Wzór na obliczenie delty: ";
  str += "b<sup>2</sup>-4AC<br />";
  str += B + "<sup>2</sup> - 4*" + A + "*" +C;
  str += "<br /><br />Delta wynosi: "
  str += delta + "</p>";

  if(A == 0)
  {
    str += "To nie jest równanie kwadratowe!";
  }

  if(delta > 0)
      {
        wynik = ( - B + Math.sqrt(delta)) / 2 * A;
        str += "<p>Miejsca zerowe:<br /> x1 = " + Math.round((wynik)*100) /100;
        wynik = ( - B - Math.sqrt(delta)) / 2 * A;
        str += ",<br /> x2 = " + Math.round((wynik)*100) /100 + "</p>";
      }

  if(delta < 0)
  {
    str += "<p>Delta < 0. To równanie nie ma rozwiązania w zbiorze liczb rzeczywistych</p>";
  }

  var wynik = "";

  if(delta == 0)
    {
      wynik += -B/2*A;
      str += "Miejsca zerowe: " + wynik;
    }

    var p = -B / (2*A);
    var q = -delta / (4*A);

    str += "<p>Wzór postaci kanonicznej funkcji: y = a ( x - p )<sup>2</sup> + q</p>"

    var reqp = (p < 0) ? "("+p+")" : "+"+p;
    var reqq = (q < 0) ? "("+q+")" : "+"+q;

    str += "<p>Postać kanoniczna funkcji: <br />"
    str += "y = (x"+reqp+")<sup>2</sup>" +reqq +"<br />"
    str += "p = " +p;
    str += "<br />q = " + q + "</p>";
    str += "<p>Współrzędne wierzchołka paraboli:<br />W = ("+p+","+q+")</p>";

    if(A > 0 )
    {
      str += "<p>A > 0. Ramiona paraboli skierowane są do góry.</p>"
    } else {
      str += "<p>A < 0. Ramiona paraboli skierowane są w dół.</p>"
    }



  var solution = document.getElementById('result');
  solution.innerHTML = str;
}
