       < script type = "text/javascript" >
           var corr = ['b', 'c'];
       var niv = {
           0: 'Bajo',
           1: 'Medio',
           2: 'Avanzado'
       }

       function fnc() {
           var aciertos = 0;
           var radio_checked = -1;
           for (var j = 0, rad = document.getElementsByTagName('input'); j < rad.length - 1; j++) {
               if (rad[j].checked) {
                   radio_checked++;
                   if (rad[j].value == corr[radio_checked]) {
                       document.getElementById(rad[j].parentNode.id).style.backgroundColor = '#9BFFA0';
                       aciertos++;
                   } else {
                       document.getElementById(rad[j].parentNode.id).style.backgroundColor = '#FF8C8C';
                   }
               }
           }
           document.getElementById('nivel').innerHTML = 'Nivel: ' + niv[aciertos];
       } < /script>
</br>
