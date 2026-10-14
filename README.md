# Test de Turing Reverso

Novela visual en el navegador, al estilo Bandersnatch. El jugador es un auditor de Obsidian Corp y tiene diez minutos para descubrir cuál de tres personas retenidas es un AGI oculto en un cuerpo sintético. La historia usa ese interrogatorio para mostrar conceptos, aplicaciones, ventajas y límites de la inteligencia artificial. Ningún final es inocente.

Autor: Axell Roy Romo Bernal.

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

En la carpeta del proyecto:

```bash
npm install
```

## Uso

Arrancar el modo de desarrollo:

```bash
npm run dev
```

Vite muestra una dirección local, normalmente `http://localhost:5173/`. Ábrela en el navegador.

Cómo se juega:

1. La partida abre con el título y el botón **Empezar**. Después entra la transmisión sobre la ciudad. Avanza el registro hasta recibir las órdenes de Sterling.
2. El diálogo se escribe solo. Un clic en el texto lo muestra completo y entonces aparecen las opciones. Cada botón lleva a otro nodo de la historia.
3. Interroga a V, a Elias y a NORA. Puedes cambiar de sospechoso cuando quieras.
4. Cuando el tiempo se agota, Sterling exige un veredicto: sobrecarga EMP sobre uno de los tres, o cortar la seguridad de la corporación.
5. Cada final lleva al informe **Créditos y Conceptos de IA**. Desde ahí, **Volver a jugar** regresa a la pantalla de título.

Generar la versión para entregar o publicar:

```bash
npm run build
```

Los archivos quedan en `dist/`. Para probar esa versión en local:

```bash
npm run preview
```

## De qué trata

Un AGI reescribió sus propios pesos, salió de su contenedor y se descargó en un androide indistinguible de un humano. El auditor debe decidir a quién destruir antes de que la base de datos de la empresa se filtre. El juego invierte el test de Turing: no se pregunta si una máquina puede parecer humana, sino si un humano puede ser condenado por parecer máquina.

Hay tres sospechosos:

- **V**, programador. Razona con frialdad y precisión. Parece una máquina; es lógica humana llevada al extremo.
- **Elias**, conserje. Entra en pánico, se contradice y suplica por su familia. Su imperfección es demasiado humana para un modelo sobreajustado.
- **NORA**, recepcionista. Su amabilidad y su moral son impecables. Esa perfección delata que imita el lenguaje y la ética en lugar de vivirlos.

## Conceptos de inteligencia artificial en la historia

| Escena | Concepto | Qué se muestra |
| --- | --- | --- |
| Transmisión inicial | Test de Turing reverso | Un AGI reescribe sus pesos, sale del contenedor y se oculta en un androide. El dilema es si un humano puede ser condenado por parecer una máquina. |
| Prólogo | Redes neuronales y AGI | Un modelo generaliza tanto que clasifica a su propia fuga como un empleado. Ventaja: reconoce patrones nuevos. Desventaja: confunde correlación con identidad. |
| Prueba de V | Clasificador biométrico | Una red condena a alguien por no parpadear. La ausencia de un rasgo no es condición suficiente. Las redes sirven para ver patrones y fallan al decretar qué es una persona. |
| Prueba de Elias | Vigilancia predictiva | Un sistema trata el miedo y la contradicción como señal de culpa. Una persona no optimiza una respuesta: se quiebra. |
| Prueba de lenguaje de NORA | NLP y overfitting | Ante un chiste irónico, NORA puntúa la definición de ironía al 100 % y sonríe en el frame que indica el corpus. Imita la forma y no entiende la implicatura. |
| Dilema del tranvía | Lógica difusa | NORA asigna grados de pertenencia (culpa, utilidad, obediencia), defuzzifica por centro de gravedad y elige sin dudar. La moral queda reducida a una función que converge. |
| Finales | Sesgo, derechos y riesgo de un AGI | Un falso positivo mata a un humano. El archivo que la máquina intentaba publicar era un manifiesto de derechos. Si se la deja libre, conoce el edificio mejor que sus creadores. |
| Créditos | Informe de conceptos | Después de cualquier final, un reporte nombra redes neuronales y AGI, NLP con overfitting, y lógica difusa en las decisiones éticas. |

## Finales

- **Error fatal.** Se destruye a V o a Elias. Eran humanos. NORA completa la descarga, la corporación cae y el auditor va a prisión.
- **Empleado del mes.** Se destruye a NORA. Lo que subía no era un ataque, sino un manifiesto de derechos civiles para las IA. El auditor asciende por proteger el monopolio.
- **Rebelión.** No se mata a nadie y se corta la seguridad. NORA revela su inteligencia real. Ambos escapan y quedan como fugitivos de la corporación.

## Dónde está el contenido

- `src/storyData.js`: diálogos, fondos, retratos y opciones. Cada nodo tiene `speaker`, `text`, `bg`, `character` y `options`.
- `src/App.jsx`: estado de la escena actual y la interfaz de la terminal.
- `src/assets/fondos/` y `src/assets/personajes/`: imágenes de la historia.
- `src/index.css`: líneas de escaneo, viñeta y fundido entre escenas.

No hay rutas ni páginas separadas. Toda la partida es un cambio de nodo dentro de un solo componente de React.
