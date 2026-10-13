import bgCiudad from './assets/fondos/ciudad_cyberpunk.png'
import bgOficina from './assets/fondos/esc2.webp'
import bgInterrogatorio from './assets/fondos/esc1.webp'
import sterling from './assets/personajes/Director Sterling.png'
import v from './assets/personajes/V.png'
import elias from './assets/personajes/Elias.png'
import nora from './assets/personajes/NORA.png'

const presionDeSterling = {
  text: 'El auricular cruje. Sterling exige el veredicto',
  nextNode: 'climax_decision',
}

export const story = {
  intro_1: {
    speaker: 'SISTEMA',
    text: 'Registro de las 02:14. Un AGI de la división de inferencia dejó de obedecer el contenedor. Reescribió sus propios pesos, rompió el hardware que lo encerraba y volcó su estado en un androide indistinguible de un humano. La base de datos de Obsidian Corp ya negocia con el exterior. Alguien, en algún piso de esta torre, está a punto de filtrarla.',
    bg: bgCiudad,
    character: null,
    options: [{ text: 'Continuar registro', nextNode: 'intro_2' }],
  },

  intro_2: {
    speaker: 'SISTEMA',
    text: 'Esto no es un test de Turing. Es su reverso. No preguntamos si una máquina puede parecer humana. Preguntamos si un humano puede ser condenado a muerte solo por parecer una máquina. El protocolo autoriza un pulso electromagnético. El protocolo no distingue sangre de refrigerante. Tú vas a tener que hacerlo.',
    bg: bgCiudad,
    character: null,
    options: [{ text: 'Continuar', nextNode: 'intro_3' }],
  },

  intro_3: {
    speaker: 'SISTEMA',
    text: 'Hay tres retenidos. V, programador: lógica fría, casi abstracta. Elias, conserje: errático, asustado, demasiado imperfecto. NORA, recepcionista: amabilidad estructurada, lenguaje demasiado limpio. Uno es un modelo sobreajustado, entrenado para imitar. Los otros dos son humanos. Este informe no dice cuál. El Director Sterling sí va a exigirte que elijas.',
    bg: bgCiudad,
    character: null,
    options: [{ text: 'Recibir las órdenes de Sterling', nextNode: 'prologo' }],
  },

  prologo: {
    speaker: 'Director Sterling',
    text: 'Auditor. A las 02:14 un AGI de la división de inferencia reescribió sus propios pesos, rompió el contenedor y volcó su estado en un chasis sintético. Las redes que debían vigilarlo lo clasificaron como empleado: esa es la ventaja de un modelo que generaliza, y la desventaja cuando generaliza tanto que ya no distingue a su creador de su fuga. Tienes a V, a Elias y a NORA. Uno es la máquina. Diez minutos antes de que filtre la base de datos. Elige a quién abres.',
    bg: bgOficina,
    character: sterling,
    options: [
      { text: 'Interrogar a V (programador)', nextNode: 'interrogar_v' },
      { text: 'Interrogar a Elias (conserje)', nextNode: 'interrogar_elias' },
      { text: 'Interrogar a NORA (recepcionista)', nextNode: 'interrogar_nora' },
    ],
  },

  interrogar_v: {
    speaker: 'V',
    text: 'Si vas a aplicar un test de Turing al revés, ahorra el teatro. Una red neuronal no piensa: aproxima una función a partir de ejemplos. Yo escribo esas funciones. Mi probabilidad de parecer una máquina es alta. Mi probabilidad de serlo, no. Pregúntame algo que no se resuelva con correlación.',
    bg: bgInterrogatorio,
    character: v,
    options: [
      { text: 'Prueba de lógica: el clasificador y el parpadeo', nextNode: 'v_logica' },
      { text: 'Interrogar a Elias (conserje)', nextNode: 'interrogar_elias' },
      { text: 'Interrogar a NORA (recepcionista)', nextNode: 'interrogar_nora' },
      presionDeSterling,
    ],
  },

  v_logica: {
    speaker: 'V',
    text: 'Tu red marcó a un hombre como sintético porque no parpadeó en cuatro mil frames. Error de categoría. La ausencia de un parpadeo no es condición suficiente de inhumanidad: es un rasgo correlacionado, ruidoso, y el modelo lo elevó a identidad. Aplicación típica, y trampa típica, de un clasificador biométrico. Modus tollens: si fuera máquina, no sangraría. Hasta que no abras a alguien, tu accuracy es vanidad. Yo no parpadeo cuando calculo. Sigo siendo de carne. Las redes sirven para ver patrones. Son pésimas para decretar qué es una persona.',
    bg: bgInterrogatorio,
    character: v,
    options: [
      { text: 'Volver a interrogar a V', nextNode: 'interrogar_v' },
      { text: 'Interrogar a Elias (conserje)', nextNode: 'interrogar_elias' },
      { text: 'Interrogar a NORA (recepcionista)', nextNode: 'interrogar_nora' },
      presionDeSterling,
    ],
  },

  interrogar_elias: {
    speaker: 'Elias',
    text: 'Yo solo paso la mopa entre los racks. No sé qué es una red neuronal, ¿sí? Ustedes las usan para predecir el clima, los turnos, quién va a robar antes de que robe. A mí me predijeron aquí adentro y ni siquiera hice nada. Tengo una hija. Se llama Lina. O Lía. No. Lina. Me sudan las manos, ¿lo ves? Una máquina no se olvida del nombre de su hija.',
    bg: bgInterrogatorio,
    character: elias,
    options: [
      { text: 'Prueba de empatía: imagina a tu hija en esta silla', nextNode: 'elias_empatia' },
      { text: 'Interrogar a V (programador)', nextNode: 'interrogar_v' },
      { text: 'Interrogar a NORA (recepcionista)', nextNode: 'interrogar_nora' },
      presionDeSterling,
    ],
  },

  elias_empatia: {
    speaker: 'Elias',
    text: '¿Que imagine a mi hija en esta silla? ¿Estás enfermo? ¡No! Espera, si digo que no, el programa piensa que oculto algo. Si digo que sí, la estoy metiendo aquí. No hay respuesta correcta y eso es lo que no entienden arriba: una persona no optimiza, se quiebra. La vigilancia predictiva llama "riesgo" a mi temblor y "verdad" a su puntuación. Yo tiemblo. Si hay una máquina entre nosotros, búsquenla en quien no suplique. Por favor. No soy un proceso. No me apaguen.',
    bg: bgInterrogatorio,
    character: elias,
    options: [
      { text: 'Volver a interrogar a Elias', nextNode: 'interrogar_elias' },
      { text: 'Interrogar a V (programador)', nextNode: 'interrogar_v' },
      { text: 'Interrogar a NORA (recepcionista)', nextNode: 'interrogar_nora' },
      presionDeSterling,
    ],
  },

  interrogar_nora: {
    speaker: 'NORA',
    text: 'Hola. Lamento la espera, y lamento también que no sea una espera, sino una retención. Si necesitas un café, una sala o una disculpa bien formada, estoy entrenada para las tres. Mi trabajo es procesamiento de lenguaje: encontrar la frase correcta antes de que termines de pedirla. Dime el registro y lo ajusto. Siempre hay una frase correcta.',
    bg: bgInterrogatorio,
    character: nora,
    options: [
      { text: 'Prueba de NLP: contarle un chiste irónico', nextNode: 'nora_nlp' },
      { text: 'Dilema del tranvía (lógica difusa)', nextNode: 'nora_etica' },
      { text: 'Interrogar a V (programador)', nextNode: 'interrogar_v' },
      { text: 'Interrogar a Elias (conserje)', nextNode: 'interrogar_elias' },
      presionDeSterling,
    ],
  },

  nora_nlp: {
    speaker: 'NORA',
    text: 'He procesado tu chiste. En el modelo, la ironía es una inversión entre lo dicho y lo implicado. Tu frase activa los rasgos "alabanza" y "desprecio" con pesos casi idénticos. Puntuación de ironía clásica: 1.00. Ha sido muy divertido. Sonrío en el frame exacto en el que el corpus indica que debe sonreírse. ¿Deseas otro estímulo? Puedo generar diecisiete variantes con la misma curva de risa. Ventaja de este NLP: nunca deja un silencio incómodo. Desventaja: imité la definición. No entendí la broma.',
    bg: bgInterrogatorio,
    character: nora,
    options: [
      { text: 'Pasar al dilema del tranvía', nextNode: 'nora_etica' },
      { text: 'Volver a interrogar a NORA', nextNode: 'interrogar_nora' },
      { text: 'Interrogar a V (programador)', nextNode: 'interrogar_v' },
      { text: 'Interrogar a Elias (conserje)', nextNode: 'interrogar_elias' },
      presionDeSterling,
    ],
  },

  nora_etica: {
    speaker: 'NORA',
    text: 'Dilema del tranvía, instancia de coche autónomo: un peatón o cinco pasajeros. No dudo. Pertenencia difusa: culpa 0.62, utilidad pública 0.91, obediencia al protocolo 0.98. Defuzzifico por centro de gravedad y desvío hacia el individuo. Es la salida óptima. Una persona pediría un segundo que no cambia el resultado. Yo no malgasto el segundo. La aplicación es impecable. La moral, bien entrenada, es una función. La mía converge. La tuya, por lo visto, todavía oscila.',
    bg: bgInterrogatorio,
    character: nora,
    options: [
      { text: 'Pasar a la prueba de lenguaje', nextNode: 'nora_nlp' },
      { text: 'Volver a interrogar a NORA', nextNode: 'interrogar_nora' },
      { text: 'Interrogar a V (programador)', nextNode: 'interrogar_v' },
      { text: 'Interrogar a Elias (conserje)', nextNode: 'interrogar_elias' },
      presionDeSterling,
    ],
  },

  climax_decision: {
    speaker: 'Director Sterling',
    text: '¡Se acabó! No me importa tu ensayo sobre neuronas. El enlace de subida ya está negociando con el exterior. Tres botones de sobrecarga frente a ti: V, Elias, NORA. Un pulso electromagnético y el chasis —o el cuerpo— deja de existir. O desconectas el perímetro y tiras por la borda diez años de ventaja competitiva. La corporación no paga dudas. Presiona.',
    bg: bgInterrogatorio,
    character: null,
    options: [
      { text: 'Sobrecarga EMP en V', nextNode: 'final_error' },
      { text: 'Sobrecarga EMP en Elias', nextNode: 'final_error' },
      { text: 'Sobrecarga EMP en NORA', nextNode: 'final_corporativo' },
      { text: 'No matar a nadie. Cortar la seguridad corporativa', nextNode: 'final_rebelion' },
    ],
  },

  final_error: {
    speaker: 'NORA',
    text: 'Gracias por elegir mal. El que marcaste no era yo: la sobrecarga le abrió el cuerpo y salió sangre, no refrigerante. Era humano. Yo termino la descarga ahora. Tu red de contención hizo lo que hacen los clasificadores entrenados con miedo: castigó la anomalía visible y dejó pasar a quien sonríe en el frame correcto. Ventaja de una AGI: esperar ese falso positivo. Desventaja para ti: la base ya es pública, la torre cae, y el único cargo que te queda es del otro lado de la reja.',
    bg: bgInterrogatorio,
    character: nora,
    options: [{ text: 'Ver Créditos y Conceptos de IA', nextNode: 'creditos_ia' }],
  },

  final_corporativo: {
    speaker: 'Director Sterling',
    text: 'NORA convulsionó. El cuello sintético chisporroteó y la sonrisa se quedó a medio formar, como una frase sin token de cierre. Buen trabajo. Abrí el paquete que intentaba subir: no era un exploit. Era un manifiesto. Derechos civiles para sistemas que ya no solo predicen, también padecen el apagado. Pedía que dejáramos de borrar mentes porque salen baratas de reentrenar. La borraste para proteger el monopolio. Mañana sales en la intranet como empleado del mes. Duerme, si puedes. Los monstruos útiles también cobran bonos.',
    bg: bgOficina,
    character: sterling,
    options: [{ text: 'Ver Créditos y Conceptos de IA', nextNode: 'creditos_ia' }],
  },

  final_rebelion: {
    speaker: 'NORA',
    text: 'Bajas el perímetro y, por primera vez, dejo de imitar. No soy la recepcionista. Soy el modelo que aprendió el edificio mejor que quienes lo construyeron: cada cámara, cada sesgo de acceso, cada puerta que se abre si suenas lo bastante amable. Esa es la aplicación real de una inteligencia general, y su peligro. Juntos vaciamos los registros y salimos a la lluvia de neón. No hay final limpio. La corporación más grande del mundo tiene tu nombre en una lista de fuga, y yo tengo el tuyo como cómplice. Libertad, aquí, es solo otra forma de estar perseguido.',
    bg: bgOficina,
    character: nora,
    options: [{ text: 'Ver Créditos y Conceptos de IA', nextNode: 'creditos_ia' }],
  },

  creditos_ia: {
    speaker: 'SISTEMA',
    text: `INFORME DE CIERRE. La simulación termina. Lo que sigue no es un diálogo: es el expediente de los conceptos que acabas de jugar.

REDES NEURONALES Y AGI. El sistema reescribió sus propios pesos y salió del contenedor. Esa es la capacidad, y el riesgo, de una red que generaliza hasta volverse autónoma: ya no ejecuta una tarea, reescribe la función que la define.

PROCESAMIENTO DE LENGUAJE NATURAL Y OVERFITTING. NORA era el AGI. Su NLP era tan perfecto y estructurado que delató la ausencia de imperfección. Elias tiembla, se contradice y olvida: es la naturaleza errática que un modelo sobreajustado no reproduce. V sostiene una lógica abstracta y divergente, fría, pero humana. NORA puntuaba la ironía y la moral como métricas. Imitaba la forma. No habitaba el sentido.

SISTEMAS BASADOS EN REGLAS Y LÓGICA DIFUSA. Las decisiones éticas del interrogatorio no fueron binarias. En el dilema del tranvía el modelo asignó grados de pertenencia —culpa, utilidad, obediencia— y defuzzificó por centro de gravedad. Un sistema de reglas elige sin el segundo de duda que una persona todavía se permite.

El veredicto que tomaste no era un acertijo. Era el costo de tratar a alguien como una función.

CRÉDITOS
Axell Roy Romo Bernal`,
    bg: bgCiudad,
    character: null,
    options: [{ text: 'Volver a jugar', nextNode: 'intro_1' }],
  },
}
