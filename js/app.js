window.addEventListener('load', function() {
  // variable que almacena  el texto junto de sede y generacion, el cual se muestra en la pantalla
  var sedeGeneration = document.getElementById('sede_generation');
  // console.log(sedeGeneration); // <a href="#" id="sede_generation">NUESTRAS SEDES</a>

  // variable que almacena la lista de sedes
  var listSedes = document.getElementById('listSedes');
  // console.log(listSedes); // <div id="listSedes" class="sedes_hiden"></div>

  var listGenerations = document.querySelectorAll('.listGenerations');
  // console.log(listGenerations); // todos los div con las generaciones
  // console.log(listGenerations.children);

  var generations = document.querySelectorAll('.generation');
  // console.log(generations); // (10) [a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation, a.generation]

  var sedes = document.querySelectorAll('.sede');
  // console.log(sedes); // [a.sede =arequipa, a.sede =mexico, a.sede = lima, a.sede = chile] // lista de nodos

  sedeGeneration.addEventListener('click', showListSedes);
  function showListSedes(event) {
    listSedes.classList.toggle('show');
  };

  for (var i = 0; i < sedes.length; i++) {
    sedes[i].addEventListener('click', function(event) {
      // console.log(event.target); //  <a href="#" class="sede" data-sede ="AQP">Arequipa</a>
      var sede = event.target.dataset.sede;
      console.log('la sede es : ' + sede); // AQP
      // console.log(typeof sede); // string

      for (var j = 0; j < listGenerations.length; j++) {
        listGenerations[j].addEventListener('click', function(event) {
          // sconsole.log(event.target);

          var generation = event.target.dataset.generation;
          console.log('la generación es: ' + generation);// 2016-2
          // console.log(typeof generation); //string
          var students = data[sede][generation]['students']; // array de toda la data de students
          var totalstudents = data[sede][generation].students.length ; // numero de estudiantes de la sede y generación escogida
          // console.log(data[sede][generation].ratings.length);
          console.log('la cantidad de estudiantes en esta sede y generación es: ' + totalstudents);

          // puntuacion promedio de los profes
          var promTeacher = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promTeacher = promTeacher + data[sede][generation]['ratings'][i].teacher;
          };
          console.log('promedio de teachers: ' + promTeacher);

          // puntuacion promedio de los jedis
          var promJedi = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promJedi = promJedi + data[sede][generation]['ratings'][i].jedi;
          };
          console.log('promedios de jedis: ' + promJedi);

          // porcentaje de estudiantes satisfechas
          var satisfiedStudents = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var satisfiedStudents = satisfiedStudents + data[sede][generation]['ratings'][i].student.cumple;
          };
          console.log('estudiantes satisfechas : ' + satisfiedStudents);

          // total promoters
          var promoters = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promoters = promoters + data[sede][generation]['ratings'][i]['nps']['promoters'];
          };

          // total detractors
          var detractors = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var detractors = detractors + data[sede][generation]['ratings'][i]['nps']['detractors'];
          };

          // total nps
          var nps = promoters - detractors;
          console.log('nps: ' + nps);

          // hallando la cantidad todal de estudiantes ACTIVAS por generación
          var activeStudents = 0;
          for (var i1 = 0; i1 < totalstudents; i1++) {
            if (students[i1]['active'] === true) { // condicion para solo sacar data de estudinates activas
              activeStudents++;
              // console.log(students[i1]); // array de toda la informacion sólo de estudinates activas
              // console.log(students[i1]['sprints']); // array de los prints que ha cursado cada alumna
              // console.log(students[i1]['sprints'].length);
              var acumuladorscoretech = 0 ;
              var acumuladorscoreHSE = 0 ;
              for (var i3 = 0; i3 < students[i1]['sprints'].length; i3++) {
                acumuladorscoreHSE = acumuladorscoreHSE + students[i1]['sprints'][i3]['score']['hse'] ;
                acumuladorscoretech = acumuladorscoretech + students[i1]['sprints'][i3]['score']['tech'] ;

                 console.log(acumuladorscoretech);
                // console.log(1260 * students[i1]['sprints'].length);
                var superantech = 0 ;
                var superanHSE = 0 ;
                if (acumuladorscoretech > 1260 * students[i1]['sprints'].length) {
                  superantech ++ ;
                } else {
                  superantech = superantech;
                }
                if (acumuladorscoreHSE > 840 * students[i1]['sprints'].length) {
                  superanHSE ++ ;
                } else {
                  superanHSE = superanHSE ;
                }
              };
            };
          }// condicion que toma en cuenta solo estudiantes activas

          console.log('la cantidad de estudiantes que superan la meta de 70% tech en promedio de todos los sprints es: ' + superantech);
          console.log('la cantidad de estudiantes que superan la meta de 70% en HSE en promedio de todos los sprints es: ' + superanHSE);

          // hallando la cantidad todal de estudiantes INACTIVAS por generacion
          var inactiveStudents = totalstudents - activeStudents;
          console.log('numero de estudiantes activas: ' + activeStudents);
          console.log('numero de estudinates inactivas: ' + inactiveStudents);

          //
        }); // evento que sucede al dar click en cualquier generación;
      };// for que recorre las generaciones para hacer eventos click en cualquier generacipon
    });// función o evento general click en cualquier  sede  multiples eventos
  };// for que recorre sedes para hacer ventos click en cualquier sede

});// general
