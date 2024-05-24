const app = document.getElementById('typewriter');

// ahora necesitamos hacer el typewriter la definimos como variable

const typewriter = new Typewriter(app,{
  loop:true,
  delay:75 // si le damos menos se tipiara mas rapido y si le damos mas se tipaira mas lento ya q es en milisegundos

});

typewriter
.typeString('La capital del sol')// metodo para imprimir en pantalla
.pauseFor(200)//metodo para pausar en milisgs
.start(); // metodo para q arraque
