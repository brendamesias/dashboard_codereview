window.addEventListener('load', function() {
<<<<<<< HEAD
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
          var students = data[sede][generation].students;
          var totalstudents = data[sede][generation].students.length ;
          // console.log(data[sede][generation].ratings.length);
          console.log('la cantidad de estudiantes en esta sede y generación es: ' + totalstudents);
          document.getElementById('n.students').innerHTML = totalstudents;
          // puntuacion promedio de los profes
          var promTeacher = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promTeacher = promTeacher + data[sede][generation]['ratings'][i].teacher;
          };
          console.log('promedio de teachers: ' + promTeacher);
          document.getElementById('teacher').innerHTML = promTeacher;
          // puntuacion promedio de los jedis
          var promJedi = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promJedi = promJedi + data[sede][generation]['ratings'][i].jedi;
          };
          console.log('promedios de jedis: ' + promJedi);
          document.getElementById('jedis').innerHTML = promJedi;
          // porcentaje de estudiantes satisfechas
          var satisfiedStudents = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var satisfiedStudents = satisfiedStudents + data[sede][generation]['ratings'][i].student.cumple;
          };
          console.log('estudiantes satisfechas : ' + satisfiedStudents);
          document.getElementById('satisfaction').innerHTML = satisfiedStudents;
          // total promoters
          var promoters = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var promoters = promoters + data[sede][generation]['ratings'][i]['nps']['promoters'];
          };
          /* document.getElementById('promot').innerHTML = promoters;*/

          // passive
          var passive = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var passive = passive + data[sede][generation]['ratings'][i]['nps']['passive'];
          };
          /* document.getElementById('passi').innerHTML = passive;*/

          // total detractors
          var detractors = 0;
          for (i = 0; i < data[sede][generation]['ratings'].length; i++) {
            var detractors = detractors + data[sede][generation]['ratings'][i]['nps']['detractors'];
          };
          /* document.getElementById('detract').innerHTML = detractors;*/

          // total nps
          var nps = promoters - detractors;
          console.log('nps: ' + nps);
          document.getElementById('n.nps').innerHTML = nps;

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos 70% en promedio por todos los sprints sprint
          var studentsSuperan = 0;
          for (i = 0; i < totalstudents; i++) {
            for (j = 0; j < data[sede][generation]['students'][i]['sprints'].length; j++) {
              if (data[sede][generation]['students'][i]['sprints'][j]['score']['tech'] > 1260) {
                studentsSuperan ++;
              } else {
                studentsSuperan = studentsSuperan;
              }
            };// for que recorre cada srpint de todas las esrudianyes de la sede y generacion escogida
          };// for que recorre la longitud de todas las estudiates de la sede y genracion escogida
          console.log('cantidad de estudiantes que superan la meta puntos tecnicos de todos los sprint: ' + studentsSuperan);

          console.log(data[sede][generation]['students'][0]['name']);

          for (i = 0; i < totalstudents; i++) {
            var name = data[sede][generation]['students']['name']['i'];
            console.log(name);
          }

          // espacio puesto a proposito para separar.
        }); // evento que sucede al dar click en cualquier generación;
      };// for que recorre las generaciones para hacer eventos click en cualquier generacipon
    });// función o evento general click en cualquier  sede  multiples eventos
  };// for que recorre sedes para hacer ventos click en cualquier sede
});// general


          //  ingresando a cada sprint
           /*var score = students[i1].sprints;
           // # de estudiantes que pasaron el 70% en Tech y Hse0
           var scoreHse = '';
           for (var i2 = 0; i2 < score.length; i1++) {
             if (score[i2].hse > 840 && score[i2].tech > 1260) {
               var studentsHighScore = score[i2].hse.length;
               console.log(studentsHighScore);
             };
           };
         };*/

          /*var studentsSuperanTech = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            console.log(data[sede][generation]['students'][i]['sprints']);
            for (j = 0; j < data[sede][generation]['students'][i]['sprints'].length; j++){
              if(data[sede][generation]['students'][i]['sprints'][j]['score']['tech'].length !== 0 && data[sede][generation]['students'][i]['sprints'][j]['score']['tech'].length > 1260) {
               studentsSuperanTech ++;
               }
              }
          };*/

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint de tech

           //if (data[sede][generation]['students'][i]['sprints'][0]['score']['tech'] > 1260 &&  ) {
            //  studentsSuperanTech ++;
          //} else {
            //  studentsSuperanTech = studentsSuperanTech;
            //}

          //console.log('cantidad de estudiantes que superan la meta de puntos tecnicos en promedio y en el primer sprint : ' + studentsSuperanTech);



          /*console.log('cantidad de  estudiantes que superan la meta de puntos tecnicos en promedio y e el segundo sprint: ' + studentsSuperanTech);

          var studentsSuperanTech = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][2]['score']['tech'] > 1260) {
              studentsSuperanTech ++;
            } else {
              studentsSuperanTech = studentsSuperanTech;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos tecnicos en promedio y en el tercer sprint: ' + studentsSuperanTech);

          var studentsSuperanTech = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][3]['score']['tech'] > 1260) {
              studentsSuperanTech ++;
            } else {
              studentsSuperanTech = studentsSuperanTech;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos tecnicos en promedio y en el cuarto sprint: ' + studentsSuperanTech);
          */

          // cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos en promedio y por sprint de hse
          /*var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][0]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el primer sprint: ' + studentsSuperanHse);

          var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][1]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el segundo sprint: ' + studentsSuperanHse);

          var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][2]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el tercer sprint: ' + studentsSuperanHse);

          var studentsSuperanHse = 0;
          for (i = 0; i < data[sede][generation]['students'].length; i++) {
            if (data[sede][generation]['students'][i]['sprints'][3]['score']['hse'] > 840) {
              studentsSuperanHse ++;
            } else {
              studentsSuperanHse = studentsSuperanHse;
            }
          };
          console.log('cantidad de estudiantes que superan la meta de puntos HSE en promedio y en el cuarto sprint: ' + studentsSuperanHse);

          // hallando la cantidad todal de estudiantes ACTIVAS por generación
          console.log(students[0]['active']);
        /*  console.log(totalstudents[1]);*/
        /*
          var activeStudents = 0;
          for (var i1 = 0; i1 < students.length; i1++) {
            if (students[i1]['active']) {
               activeStudents++;
             };*/
             //console.log(activeStudents);

            // hallando la cantidad todal de estudiantes INACTIVAS por generacion
           /*var inactiveStudents = totalstudents - activeStudents;
           console.log('activas: ' + activeStudents);
            console.log('inactivas: ' + inactiveStudents);
            //var scoreHse = students[i1].sprints;
          };*/






          // creando div que almacenará el # de estudiates
          /*var studentsDiv = document.createElement('div');
          studentsDiv.textContent = totalstudents;
          console.log(studentsDiv);

          // creando div que almacenará el # de estudiates INACTIVAS
          var inactiveStudentsDiv = document.createElement('div');
          inactiveStudents.textContent = inactiveStudents;
          console.log(inactiveStudentsDiv);
          */


/*
var students = data[sede][generation].students ;
          var studentAcount = students.length;

          // hallando la cantidad todal de estudiantes ACTIVAS por generación
          var activeStudents = 0;
          for (var i1 = 0; i1 < totalstudents; i1++) {
            if (students[i1].active === true) {
              var activeStudents = (activeStudents + 1);
=======
  
    // agregando elemtos del student.html al DOM
    var containerStudents = document.getElementById('container_students');
    var perfil = document.getElementById('perfil');
    var photoPerfil = document.getElementById('photo_perfil');
    var basicDataPerfil = document.getElementsByClassName('basic_data_perfil');
    var name = document.getElementById('name');
    var active = document.getElementById('active');
    var skills = document.getElementById('skills');
    var tech = document.getElementsByClassName('tech');
    var notatechtotal = document.getElementById('notatechtotal');
    var life = document.getElementsByClassName('life');
    var notaHSEtotal = document.getElementById('notaHSEtotal');
    var tech1sprint = document.getElementById('tech_1sprint');
    var tech2sprint = document.getElementById('tech_2sprint');
    var tech3sprint = document.getElementById('tech_3sprint');
    var tech4sprint = document.getElementById('tech_4sprint');
    var hse1sprint = document.getElementById('hse_1sprint');
    var hse2sprint = document.getElementById('hse_2sprint');
    var hse3sprint = document.getElementById('hse_3sprint');
    var hse4sprint = document.getElementById('hse_4sprint');
  
  
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
>>>>>>> 4c0c127c7dd23a03603b1b1b922cb49302934d64
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
  
                  // console.log(acumuladorscoretech);
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
              };// condicion que toma en cuenta solo estudiantes activas
            }
            console.log('la cantidad de estudiantes que superan la meta de 70% tech en promedio de todos los sprints es: ' + superantech);
            console.log('la cantidad de estudiantes que superan la meta de 70% en HSE en promedio de todos los sprints es: ' + superanHSE);
            // hallando la cantidad todal de estudiantes INACTIVAS por generacion
            var inactiveStudents = totalstudents - activeStudents;
            console.log('numero de estudiantes activas: ' + activeStudents);
            console.log('numero de estudinates inactivas: ' + inactiveStudents);

            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);
      
            function drawChart() {
      
              var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Activas',     activeStudents],
                ['Inactivas',      inactiveStudents],
               
              ]);
      
              var options = {
                title: 'My Daily Activities'
              };
      
              var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      
              chart.draw(data, options);
            }
  
            // jalando data de estudiantes para agregar a cuadrso de cada estudiante
            for (var i1 = 0; i1 < totalstudents; i1++) {
              var studentName = students[i1]['name'];
              var estadoactive = students[i1]['active'];
              var photo = students[i1]['photo'] ;
              totalTech = 0 ;
              totalHSE = 0 ;
              for (var j = 0; j < students[i1]['sprints'].length; j++) {
                totalTech = totalTech + students[i1]['sprints'][j]['score']['tech'] ;
                totalHSE = totalHSE + students[i1]['sprints'][j]['score']['hse'] ;
              }
              var totaltechXsprint = 1800 * students[i1]['sprints'].length ;
              var promeditech = totalTech / (totaltechXsprint / 100) ;
              var totalHSEXsprint = 1200 * students[i1]['sprints'].length ;
              var promediHSE = totalHSE / (totalHSEXsprint / 100) ;
  
              var informationStudent = perfil.cloneNode(true);
              // console.log(informationStudent.children[3].firstElementChild.children[1].children);
  
              informationStudent.children[0].src = photo;
              informationStudent.children[1].firstElementChild.lastElementChild.textContent = studentName ;
              informationStudent.children[1].lastElementChild.lastElementChild.textContent = estadoactive ;
              informationStudent.children[2].firstElementChild.lastElementChild.textContent = Math.round(promeditech) + '%' ;
              informationStudent.children[2].lastElementChild.lastElementChild.textContent = Math.round(promediHSE) + '%' ;
              for (var i4 = 1; i4 < informationStudent.children[3].firstElementChild.children[1].children.length; i4++) {
                var noteTechXsprint = informationStudent.children[3].firstElementChild.children[1].children[i4];
                 console.log(noteTechXsprint);
                for (var i5 = 0; i5 < students[i1]['sprints'].length; i5++) {
                  var scoreTechXsprint = students[i1]['sprints'][i5]['score']['tech'];
                  // console.log(scoreTechXsprint);
                  // console.log(i5);
                  var porcenTechXsprint = Math.round(scoreTechXsprint / 18) ;
                  console.log(porcenTechXsprint);
                  // noteTechXsprint.textContent = porcenTechXsprin) + '%' ;
                }
              }
  
              containerStudents.appendChild(informationStudent);

              
            }
            //
          }); // evento que sucede al dar click en cualquier generación;
        };// for que recorre las generaciones para hacer eventos click en cualquier generacipon
      });// función o evento general click en cualquier  sede  multiples eventos
    };// for que recorre sedes para hacer ventos click en cualquier sede
  });// general