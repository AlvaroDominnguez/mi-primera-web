import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Section {
  id: string;
  title: string;
  open: boolean;
  content: string;
  height: number;
}

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente1.html',
  styleUrls: ['./componente1.css']
})
export class Componente1 {

  sections: Section[] = [
    {
      id: 'introduccion',
      title: 'Introducción y justificación del framework',
      open: false,
      height: 0,
      content: `
        <div class='titulo-intro'>Introducción a Angular</div>

        <div class='cuerpo-intro'>

          <p>
            Angular es un framework desarrollado por Google para crear aplicaciones web modernas,
            rápidas, estructuradas y fáciles de mantener. Está construido sobre TypeScript, lo cual
            significa que mezcla la flexibilidad de JavaScript con características avanzadas como el
            tipado estático, clases, interfaces y decoradores.
          </p>

          <div class='banner'>
            <strong>La clave:</strong> Angular no es una simple librería como React. Angular es
            un <strong>framework completo</strong> que te da estructura, herramientas y buenas prácticas
            desde el primer minuto.
          </div>

          <h3>¿Qué tipo de aplicaciones se crean con Angular?</h3>
          <p>
            Aunque Angular puede usarse para casi cualquier tipo de aplicación web, destaca
            especialmente en proyectos medianos y grandes, donde la organización del código y la
            robustez del sistema son fundamentales.
          </p>

          <ul>
            <li>Aplicaciones de gestión y administración.</li>
            <li>Portales empresariales internos (intranets).</li>
            <li>Dashboards con datos dinámicos en tiempo real.</li>
            <li>Aplicaciones SPA con múltiples vistas y rutas.</li>
            <li>Aplicaciones que consumen APIs REST de forma intensiva.</li>
          </ul>

          <div class='nota'>
            💡 Una SPA (Single Page Application) es una aplicación web donde todo sucede en una sola
            página: sin recargar, sin esperar, con transiciones suaves entre vistas.
          </div>

          <h3>¿Por qué usar Angular?</h3>
          <p>
            Angular resuelve muchos problemas típicos del desarrollo web moderno. Cuando una aplicación
            empieza a crecer, aparecen preguntas como:
          </p>

          <ul>
            <li>¿Dónde guardar la lógica de negocio?</li>
            <li>¿Cómo organizar los componentes?</li>
            <li>¿Cómo reutilizar código de manera elegante?</li>
            <li>¿Cómo evitar que los archivos se vuelvan enormes?</li>
            <li>¿Cómo comunicar diferentes partes de la aplicación?</li>
          </ul>

          <p>
            Angular ofrece soluciones a todos estos problemas gracias a su arquitectura basada en:
          </p>

          <ul>
            <li><strong>Componentes</strong> (la interfaz).</li>
            <li><strong>Servicios</strong> (la lógica).</li>
            <li><strong>Inyección de dependencias</strong> (cómo se conectan).</li>
            <li><strong>Módulos o standalone components</strong> (estructura general).</li>
            <li><strong>Routing</strong> (navegación).</li>
          </ul>

          <h3>Comparativa rápida: Angular vs otros frameworks</h3>

          <table class='tabla-comparativa'>
            <tr>
              <th>Framework</th>
              <th>Tipo</th>
              <th>Curva</th>
              <th>Ideal para</th>
            </tr>
            <tr>
              <td>Angular</td>
              <td>Framework completo</td>
              <td>Alta</td>
              <td>Apps grandes y complejas</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Librería UI</td>
              <td>Media</td>
              <td>Interfaces pequeñas y medianas</td>
            </tr>
            <tr>
              <td>Vue</td>
              <td>Framework progresivo</td>
              <td>Baja</td>
              <td>Proyectos pequeños y medianos</td>
            </tr>
          </table>

          <h3>Un pequeño diagrama para visualizar Angular</h3>

          <pre>
Arquitectura Angular simplificada:

  ┌───────────────────────────┐
  │        COMPONENTES        │ ← Vista
  └──────────────┬────────────┘
                 │
                 ▼
        ┌──────────────────┐
        │     SERVICIOS    │ ← Lógica
        └───────┬──────────┘
                │
                ▼
       ┌────────────────────┐
       │   API / SERVIDOR   │ ← Datos
       └────────────────────┘
          </pre>

          <h3>Resumen de la sección--></h3>
          <ul>
            <li>Angular es un framework completo y estructurado.</li>
            <li>Funciona especialmente bien para aplicaciones SPA complejas.</li>
            <li>Usa TypeScript como lenguaje principal.</li>
            <li>Promueve buenas prácticas desde el inicio.</li>
            <li>Es ideal para proyectos profesionales o de gran escala.</li>
          </ul>

        </div>
      `
    },
  {
      id: 'instalacion',
      title: 'Instalación de Angular',
      open: false,
      height: 0,
      content: `
        <div class='titulo-intro'>Instalación de Angular: Guía paso a paso</div>

        <div class='cuerpo-intro'>

          <p>
            Para trabajar con Angular necesitas instalar algunas herramientas previas.
            Aunque el proceso es sencillo, entender por qué se instala cada cosa te ayudará
            mucho a futuro.
          </p>

          <div class='banner'>
            <strong>Herramientas necesarias:</strong> Node.js, npm, Angular CLI y un editor de código.
          </div>

          <h3>1. ¿Qué es Node.js y por qué Angular lo necesita?</h3>
          <p>
            Node.js es un entorno que permite ejecutar JavaScript fuera del navegador.
            Angular lo utiliza para:
          </p>
          <ul>
            <li>Compilar tu proyecto.</li>
            <li>Levantar un servidor local con recarga en vivo.</li>
            <li>Gestionar dependencias con npm.</li>
          </ul>

          <div class='nota'>
            💡 Tip: siempre instala la versión LTS de Node.js, porque es la más estable para Angular.
          </div>

          <h3>2. Comprobar si ya tienes Node.js instalado</h3>
          <p>Abre una terminal (CMD, PowerShell o Terminal en macOS) y escribe:</p>

          <pre><code>node -v
npm -v</code></pre>

          <p>
            Si aparecen números como 18.16.0 o 10.5.2, significa que todo está bien.
            Si no te aparece nada, o te aparece un error, sigue con el siguiente paso.
          </p>

          <h3>3. Instalar Node.js</h3>
          <p>
            Entra a la web oficial:
            <a href='https://nodejs.org' target='_blank' rel='noopener'>https://nodejs.org</a>
            y descarga la versión LTS (Long-Term Support).
          </p>
          <p>
            Instálala con las opciones por defecto. Esto también instalará npm,
            el gestor de paquetes oficial de Node.
          </p>

          <h3>4. ¿Qué es Angular CLI?</h3>
          <p>
            Angular CLI (Command Line Interface) es la herramienta oficial para crear
            proyectos, componentes, servicios, realizar builds, tests y mucho más.
          </p>

          <div class='bloque-concepto'>
            <h4>Funciones principales del CLI</h4>
            <ul>
              <li>Crear proyectos nuevos en segundos.</li>
              <li>Generar componentes, servicios, pipes y más.</li>
              <li>Levantar el servidor de desarrollo.</li>
              <li>Optimizar y empaquetar la app para producción.</li>
            </ul>
          </div>

          <h3>5. Instalar Angular CLI</h3>
          <p>Escribe este comando en la terminal:</p>

          <pre><code>npm install -g @angular/cli</code></pre>

          <p>Para verificar la instalación:</p>

          <pre><code>ng version</code></pre>

          <p>Deberías ver información sobre la versión instalada.</p>

          <h3>6. Crear un nuevo proyecto Angular</h3>

          <pre><code>ng new mi-primera-app</code></pre>

          <p>El CLI te hará algunas preguntas:</p>
          <ul>
            <li>¿Quieres habilitar routing? (di que sí)</li>
            <li>¿Qué formato de estilos quieres usar? (CSS o SCSS)</li>
          </ul>

          <p>Una vez generado el proyecto:</p>

          <pre><code>cd mi-primera-app</code></pre>

          <h3>7. Ejecutar la aplicación</h3>

          <pre><code>ng serve --open</code></pre>

          <p>
            Esto abrirá la aplicación en tu navegador en la dirección:
            <strong>http://localhost:4200</strong>.
          </p>

          <div class='caso-practico'>
            <h4>Caso práctico</h4>
            <p>
              Un alumno instaló Angular pero al usar ng version le salía un error: comando no encontrado.
              Esto pasó porque había instalado Node.js correctamente,
              pero tenía PowerShell en modo restricción de scripts.
              Solución: ejecutar PowerShell como administrador y permitir scripts.
            </p>
          </div>

          <h3>8. Problemas comunes y soluciones rápidas</h3>

          <div class='bloque-problema'>
            <strong>Error: ng no se reconoce como un comando externo</strong>
            <p>Causa: PATH de npm no está configurado.</p>
            <p>Solución: reinstalar Node.js o reiniciar el equipo.</p>
          </div>

          <div class='bloque-problema'>
            <strong>Error: permisos insuficientes al usar npm install -g</strong>
            <p>En Windows: Ejecuta la terminal como administrador.</p>
            <p>En macOS/Linux: usar sudo (con precaución).</p>
          </div>

          <div class='bloque-problema'>
            <strong>Error: versión de Node incompatible</strong>
            <p>Angular requiere versiones específicas. Usa la LTS recomendada.</p>
          </div>

          <h3>9. Mini-diagrama del proceso de instalación</h3>

          <pre>
Instalar Angular:

   ┌────────────────┐
   │ Instalar Node  │
   └───────┬────────┘
           │
   ┌───────▼────────┐
   │ Instalar CLI    │
   └───────┬────────┘
           │
   ┌───────▼────────┐
   │ Crear proyecto  │
   └───────┬────────┘
           │
   ┌───────▼────────┐
   │ ng serve        │
   └─────────────────┘
          </pre>

          <h3>10. Resumen de la sección</h3>
          <ul>
            <li>Angular depende de Node.js para funcionar.</li>
            <li>npm instala las herramientas necesarias.</li>
            <li>Angular CLI es la forma oficial de trabajar con Angular.</li>
            <li>ng new crea proyectos completos en segundos.</li>
            <li>ng serve inicia el servidor de desarrollo.</li>
          </ul>


        </div>
      `
    },
    {
      id: 'primeros-pasos',
      title: 'Primeros pasos con Angular',
      open: false,
      height: 0,
     content:`
  <div class='titulo-intro'>Instalación de Angular y requisitos técnicos</div>

  <div class='cuerpo-intro'>

    <p>
      Antes de poder crear aplicaciones con Angular es necesario preparar el entorno de trabajo.
      En esta sección veremos si realmente hace falta instalar algo, qué pasos seguir y qué
      versiones conviene usar.
    </p>

    <h3>¿Se precisa instalación?</h3>
    <p>
      Sí. Para trabajar con Angular no basta con abrir un archivo HTML en el navegador.
      Es necesario disponer de:
    </p>
    <ul>
      <li><strong>Node.js</strong> (entorno de ejecución de JavaScript).</li>
      <li><strong>npm</strong> (gestor de paquetes que viene con Node.js).</li>
      <li><strong>Angular CLI</strong> (la herramienta de línea de comandos de Angular).</li>
    </ul>

    <div class='nota'>
      Sin Node.js no podremos ejecutar los comandos <strong>ng</strong> ni compilar la aplicación.
    </div>

    <h3>Pasos para realizar la instalación</h3>

    <h4>1. Instalar Node.js</h4>
    <p>
      Se recomienda descargar la versión LTS (soporte a largo plazo) desde la página oficial:
      <a href='https://nodejs.org' target='_blank' rel='noopener'>https://nodejs.org</a>.
      Una vez descargado el instalador, basta con seguir los pasos por defecto.
    </p>

    <p>Tras la instalación, podemos comprobar en la terminal:</p>
    <pre><code>node -v
npm -v</code></pre>

    <h4>2. Instalar Angular CLI</h4>
    <p>
      La CLI de Angular nos permite generar proyectos, componentes y ejecutar el servidor de desarrollo.
      Para instalarla de forma global:
    </p>
    <pre><code>npm install -g @angular/cli</code></pre>

    <p>Y para comprobar que todo está correcto:</p>
    <pre><code>ng version</code></pre>

    <h3>¿Qué versiones son necesarias?</h3>
    <p>
      Las versiones concretas pueden variar con el tiempo, pero como norma general:
    </p>
    <ul>
      <li>Usar la versión LTS de Node.js recomendada en la web de Angular.</li>
      <li>Usar la versión estable de Angular CLI (se instala por defecto con npm).</li>
      <li>Mantener las dependencias actualizadas con cierta frecuencia.</li>
    </ul>

    <div class='bloque-concepto'>
      <h4>¿Por qué es importante la versión?</h4>
      <p>
        Algunas funcionalidades nuevas de Angular solo funcionan a partir de determinadas versiones
        de Node.js o del propio framework. Trabajar con versiones muy antiguas puede provocar errores
        difíciles de diagnosticar.
      </p>
    </div>

    <h3>¿Qué rutas hay que tener en cuenta?</h3>
    <p>
      Aunque el usuario normalmente no tiene que tocar rutas del sistema, sí es útil entender
      la estructura básica del proyecto Angular:
    </p>
    <ul>
      <li><code>src/app/</code>: carpeta donde se encuentran los componentes y servicios.</li>
      <li><code>src/assets/</code>: recursos estáticos (imágenes, vídeos, PDF).</li>
      <li><code>src/styles.css</code>: hoja de estilos global.</li>
      <li><code>angular.json</code>: archivo de configuración del proyecto.</li>
    </ul>

    <h3>Variables de entorno</h3>
    <p>
      Para empezar no es obligatorio definir variables de entorno específicas. Sin embargo, en proyectos
      reales es habitual usarlas para:
    </p>
    <ul>
      <li>Guardar URLs de APIs externas.</li>
      <li>Configurar claves de servicios externos.</li>
      <li>Diferenciar entre entorno de desarrollo y producción.</li>
    </ul>

    <p>
      En Angular esto se suele gestionar con archivos de entorno (<code>environment.ts</code>
      y <code>environment.prod.ts</code>) más que con variables del sistema.
    </p>

    <h3>¿Necesita base de datos?</h3>
    <p>
      Angular, como framework frontend, <strong>no incluye base de datos propia</strong>.
      Lo habitual es que la base de datos esté en el servidor (por ejemplo, MySQL, PostgreSQL,
      MongoDB, etc.) y que Angular simplemente consuma una API que exponga esos datos.
    </p>
    <img src="assets/fotos/what-angularsjs.jpg" alt="Imagen" class="img-contenido">

    <div class='caso-practico'>
      <h4>Ejemplo práctico</h4>
      <p>
        Supongamos que desarrollamos una aplicación para gestionar alumnos. La base de datos
        podría estar en un servidor con una API REST. Angular se encargaría únicamente de
        mostrar la información en la interfaz y de enviar al servidor las acciones del usuario.
      </p>
    </div>

    <h3>Resumen de la instalación</h3>
    <ul>
      <li>Sí, es necesaria una instalación previa (Node.js, npm, Angular CLI).</li>
      <li>La instalación es relativamente sencilla si se siguen los pasos.</li>
      <li>Angular no incorpora base de datos, sino que se conecta a servicios externos.</li>
      <li>Las rutas más importantes están dentro de la carpeta <code>src</code>.</li>
    </ul>

  </div>
`

    },

    {
      id: 'utilizacion',
      title: 'Utilización del framework',
      open: false,
      height: 0,
      content:`
  <div class='titulo-intro'>Utilización del framework en una aplicación base</div>

  <div class='cuerpo-intro'>

    <p>
      Una vez que sabemos crear y ejecutar un proyecto sencillo, el siguiente paso es aprender
      a utilizar Angular para construir una aplicación base un poco más completa: con componentes,
      servicios y navegación.
    </p>

    <h3>¿Cómo empezar a crear una aplicación base?</h3>
    <p>
      A partir de un proyecto recién creado, solemos seguir estos pasos:
    </p>
    <ol>
      <li>Definir qué pantallas o secciones va a tener la aplicación.</li>
      <li>Crear un componente por cada parte importante de la interfaz.</li>
      <li>Añadir servicios para centralizar la lógica o el acceso a datos.</li>
      <li>Configurar el enrutado si hay varias páginas o vistas.</li>
    </ol>

    <h3>Creación de componentes</h3>
    <p>
      Un componente representa una parte visual de la aplicación. Para crear uno nuevo podemos usar:
    </p>
    <pre><code>ng generate component components/cabecera
ng generate component components/lista-elementos</code></pre>

    <p>
      Cada componente tendrá su propio HTML, CSS y TypeScript. Se utiliza el selector del componente
      para insertarlo en otros templates, por ejemplo:
    </p>
    <pre><code>&lt;app-cabecera&gt;&lt;/app-cabecera&gt;
&lt;app-lista-elementos&gt;&lt;/app-lista-elementos&gt;</code></pre>

    <h3>Servicios para la lógica de negocio</h3>
    <p>
      Los servicios permiten encapsular operaciones comunes (acceso a datos, llamadas HTTP,
      gestión de estado básico, etc.). Se crean con:
    </p>
    <pre><code>ng generate service services/datos</code></pre>

    <p>
      Después se inyectan en los componentes que los necesiten, a través del constructor.
    </p>

    <h3>¿Cómo visualizar los resultados de la ejecución?</h3>
    <p>
      Para ver los cambios realizados en nuestra aplicación siempre utilizaremos el comando:
    </p>
    <pre><code>ng serve</code></pre>
    <p>
      Si añadimos la opción <code>--open</code>, se abrirá automáticamente el navegador.
      Mientras el servidor esté en marcha, cada cambio guardado se reflejará casi al instante
      en la interfaz.
    </p>

    <div class='nota'>
      Es muy útil tener la terminal y el navegador abiertos a la vez: así vemos los
      errores de compilación o de TypeScript de forma rápida.
    </div>

    <h3>Pequeño ejemplo de aplicación base</h3>
    <p>
      Imaginemos una aplicación muy simple de lista de tareas. Podríamos tener:
    </p>
    <ul>
      <li>Un componente para la cabecera.</li>
      <li>Un componente con un formulario para añadir tareas.</li>
      <li>Un componente que muestre la lista de tareas.</li>
      <li>Un servicio que gestione el array de tareas (añadir, borrar, marcar completadas).</li>
    </ul>

    <p>
      Con esta estructura ya estaríamos aprovechando las principales ideas de Angular:
      dividir en componentes y centralizar la lógica en servicios.
    </p>

  </div>
`

    },    {
      id: 'funcionamiento',
      title: 'Funcionamiento interno de Angular',
      open: false,
      height: 0,
      content: `
  <div class='titulo-intro'>Explicación del funcionamiento del framework Angular</div>

  <div class='cuerpo-intro'>

    <p>
      En esta sección explicamos cómo actúa Angular sobre la aplicación, sobre qué elementos
      trabaja y cómo se modifican los ficheros que forman parte del proyecto.
    </p>

    <h3>¿Actúa sobre páginas, ficheros o secciones?</h3>
    <p>
      Angular trabaja principalmente con <strong>componentes</strong>, que podemos entender
      como pequeñas secciones de la interfaz de usuario. En lugar de pensar en "páginas" sueltas,
      en Angular pensamos en:
    </p>
    <ul>
      <li>Un componente raíz que se carga al inicio.</li>
      <li>Otros componentes que se van insertando dentro del principal.</li>
      <li>Distintas vistas asociadas a rutas (enrutado) que también cargan componentes.</li>
    </ul>

    <p>
      Cada componente tiene:
    </p>
    <ul>
      <li>Un archivo de plantilla HTML (vista).</li>
      <li>Un archivo TypeScript con la lógica.</li>
      <li>Un archivo de estilos CSS específico.</li>
    </ul>
      <img src="assets/fotos/pasted-image-0.png" alt="Imagen" class="img-contenido">

    <h3>¿Cómo se editan o modifican los ficheros?</h3>
    <p>
      Para editar la interfaz se modifican principalmente los archivos HTML y CSS de cada componente.
      Para cambiar el comportamiento, se edita el archivo TypeScript asociado.
    </p>

    <p>Ejemplo típico:</p>
    <ul>
      <li><code>mi-componente.component.html</code>: estructura visual.</li>
      <li><code>mi-componente.component.ts</code>: propiedades, métodos y lógica.</li>
      <li><code>mi-componente.component.css</code>: estilos específicos.</li>
    </ul>

    <h3>¿Cómo se referencian los ficheros creados desde otras partes?</h3>
    <p>
      Un componente se utiliza mediante su <strong>selector</strong>, que se declara en el
      decorador del componente. Por ejemplo, si el selector es <code>app-cabecera</code>,
      podremos usarlo en otro HTML así:
    </p>
    <pre><code>&lt;app-cabecera&gt;&lt;/app-cabecera&gt;</code></pre>

    <p>
      Los servicios, por su parte, se referencian inyectándolos en el constructor de los
      componentes que los necesiten.
    </p>

    <h3>Resumen del funcionamiento general</h3>
    <ul>
      <li>Angular actúa principalmente sobre componentes y sus plantillas.</li>
      <li>La lógica se escribe en TypeScript y se enlaza con el HTML mediante binding.</li>
      <li>Los componentes se comunican a través de inputs, outputs y servicios compartidos.</li>
      <li>El enrutado decide qué componente se muestra según la URL.</li>
    </ul>

  </div>
`

    }, {
      id: 'conclusiones',
      title: 'Conclusiones, siguientes pasos y recursos',
      open: false,
      height: 0,
      content: `
  <div class='titulo-intro'>Conclusiones del tutorial y objetivos alcanzados</div>

  <div class='cuerpo-intro'>

    <p>
      A lo largo de este tutorial hemos realizado un recorrido por los aspectos básicos
      de Angular como framework de desarrollo frontend moderno. El objetivo principal
      era adquirir una visión global que permita al lector seguir aprendiendo y empezar
      a construir sus propias aplicaciones.
    </p>

    <h3>Alcance del tutorial</h3>
    <p>En este documento se ha cubierto:</p>
    <ul>
      <li>La justificación de Angular y los problemas que ayuda a resolver.</li>
      <li>El proceso de instalación y configuración inicial del entorno.</li>
      <li>La creación de un primer proyecto y un ejemplo de Hola Mundo.</li>
      <li>La utilización básica del framework con componentes y servicios.</li>
      <li>Una explicación general de su funcionamiento interno.</li>
    </ul>

    <h3>Objetivos conseguidos</h3>
    <p>Al finalizar el tutorial, el lector debería ser capaz de:</p>
    <ul>
      <li>Entender para qué sirve Angular y en qué tipo de aplicaciones se utiliza.</li>
      <li>Instalar el entorno necesario y crear un nuevo proyecto con Angular CLI.</li>
      <li>Modificar la vista principal para mostrar contenido propio.</li>
      <li>Crear componentes básicos y comprender su relación con los servicios.</li>
      <li>Tener una primera idea de cómo Angular organiza y actualiza la interfaz.</li>
    </ul>

    <h3>Siguientes pasos recomendados</h3>
    <ul>
      <li>Profundizar en data binding y comunicación entre componentes.</li>
      <li>Aprender a trabajar con formularios y validaciones.</li>
      <li>Conectar la aplicación a una API real y gestionar errores.</li>
      <li>Explorar el sistema de enrutado en más detalle.</li>
      <li>Investigar sobre optimización y buenas prácticas en Angular.</li>
    </ul>

    <div class='nota'>
      Este tutorial debe entenderse como un punto de partida. Angular es un framework muy amplio,
      y dominarlo por completo requiere práctica y proyectos reales. Sin embargo, con los conocimientos
      adquiridos aquí ya es posible comenzar a desarrollar aplicaciones funcionales.
    </div>

  </div>
`
    }
  ];

  // Referencias a los elementos panel-body para medir altura
  @ViewChildren('panelBody') panelBodies!: QueryList<ElementRef<HTMLElement>>;

  // Toggle con cálculo de altura para animación suave
  toggle(i: number) {
    // Si la sección ya estaba abierta -> la cerramos y ponemos altura a 0
    if (this.sections[i].open) {
      this.sections[i].open = false;
      this.sections[i].height = 0;
      return;
    }

    // Abrimos la seleccionada
    this.sections[i].open = true;

    // Esperar a que Angular renderice el DOM del panel y medir su altura
    setTimeout(() => {
      const bodies = this.panelBodies.toArray();
      const el = bodies[i]?.nativeElement;
      if (el) {
        const realHeight = el.scrollHeight;
        this.sections[i].height = realHeight;
      }
    }, 0);
  }

} // <-- fin de la clase Componente1
