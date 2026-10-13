import { useEffect, useState } from 'react'
import { story } from './storyData'

const CLOCK = {
  prologo: '00:10:00',
  interrogar_v: '00:08:20',
  v_logica: '00:07:02',
  interrogar_elias: '00:06:05',
  elias_empatia: '00:04:18',
  interrogar_nora: '00:05:40',
  nora_nlp: '00:03:11',
  nora_etica: '00:02:04',
  climax_decision: '00:00:00',
  final_error: '00:00:00',
  final_corporativo: '00:00:00',
  final_rebelion: '00:00:00',
}

function sceneLabel(nodeId) {
  if (nodeId === 'climax_decision') return 'VEREDICTO'
  if (nodeId.startsWith('final_')) return 'CIERRE DE SESIÓN'
  if (nodeId === 'prologo') return 'OFICINA EJECUTIVA'
  return 'SALA DE INTERROGATORIO'
}

function Hud({ nodeId }) {
  const clock = CLOCK[nodeId] ?? '00:10:00'
  const expired = clock === '00:00:00'

  return (
    <header className="relative z-20 flex shrink-0 flex-col gap-2 border-b border-green-500/40 bg-black/80 px-4 py-3 sm:flex-row sm:items-start sm:justify-between md:px-8">
      <div className="min-w-0">
        <p className="text-[10px] tracking-[0.18em] text-cyan-400 sm:tracking-[0.32em] md:text-xs">
          OBSIDIAN CORP // DIVISIÓN DE CONTENCIÓN
        </p>
        <h1 className="mt-1 text-sm tracking-[0.12em] text-green-500 sm:tracking-[0.22em] md:text-base">
          TEST DE TURING REVERSO
        </h1>
      </div>
      <div className="flex shrink-0 items-end justify-between gap-4 sm:block sm:text-right">
        <p className="text-[10px] tracking-[0.18em] text-green-500/70 sm:tracking-[0.28em]">{sceneLabel(nodeId)}</p>
        <p className="text-[10px] tracking-[0.18em] text-cyan-400/80 sm:tracking-[0.28em]">ACCESO OMEGA-4</p>
        <p className={`mt-1 text-sm tabular-nums md:text-base ${expired ? 'animate-pulse text-red-500' : 'text-cyan-400'}`}>
          T-{clock}
        </p>
      </div>
    </header>
  )
}

function Stage({ node, spriteFailed, onSpriteError }) {
  return (
    <div className="relative z-10 flex min-h-0 flex-1 items-end justify-center overflow-hidden px-4 pb-4 md:justify-end md:px-10">
      {node.character && !spriteFailed ? (
        <figure
          key={node.character}
          className="node-in relative flex h-full max-h-full w-[min(72vw,320px)] flex-col border border-cyan-400/50 bg-black shadow-[0_0_28px_rgba(34,211,238,0.28),0_0_48px_rgba(232,121,249,0.12)]"
        >
          <figcaption className="absolute inset-x-0 top-0 z-10 flex justify-between bg-black/70 px-2 py-1 text-[10px] tracking-[0.28em] text-cyan-400">
            <span>FEED // SUJETO</span>
            <span>EN VIVO</span>
          </figcaption>
          <img
            src={node.character}
            alt={node.speaker}
            onError={onSpriteError}
            className="min-h-0 w-full flex-1 object-contain object-bottom"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.18)_50%)] bg-[length:100%_4px] opacity-50" />
        </figure>
      ) : (
        <div
          key="voice"
          className="node-in mb-4 border border-cyan-400/50 bg-black/80 px-6 py-5 text-center shadow-[0_0_28px_rgba(34,211,238,0.25)]"
        >
          <p className="text-[10px] tracking-[0.35em] text-cyan-400">CANAL DE VOZ // SIN VIDEO</p>
          <p className="mt-2 text-sm tracking-[0.2em] text-green-500">AURICULAR SEGURO</p>
        </div>
      )}
    </div>
  )
}

function DialoguePanel({ node, nodeId, onChoose }) {
  return (
    <section className="relative z-20 max-h-[58vh] overflow-y-auto border-t border-green-500/40 bg-black/85 px-4 py-3 terminal-scroll md:px-10">
      <div className="relative mx-auto max-w-5xl border border-green-500/30 bg-black/60 p-4 md:p-5">
        <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-cyan-400" />
        <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-cyan-400" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400" />

        <h2 className="text-base tracking-[0.28em] text-cyan-400 uppercase md:text-xl">
          [{node.speaker}]
        </h2>
        <p
          key={nodeId}
          className="node-in mt-2 text-sm leading-relaxed text-green-400 select-text md:text-base"
        >
          {node.text}
        </p>
        <div className="mt-3 flex flex-col gap-1.5">
          {node.options.map((option) => (
            <button
              key={option.text}
              type="button"
              onClick={() => onChoose(option.nextNode)}
              className="cursor-pointer border border-green-800 bg-black/70 px-3 py-2 text-left text-sm text-green-500 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-100 hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            >
              {'>'} {option.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function CrtOverlay() {
  return (
    <>
      <div className="vignette" />
      <div className="scanlines" />
    </>
  )
}

export default function App() {
  const [currentNode, setCurrentNode] = useState('prologo')
  const [spriteFailed, setSpriteFailed] = useState(false)
  const node = story[currentNode]

  useEffect(() => {
    if (!story[currentNode]) setCurrentNode('prologo')
  }, [currentNode])

  useEffect(() => {
    setSpriteFailed(false)
  }, [currentNode])

  if (!node) return null

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-black font-mono text-green-500 select-none">
      <div
        key={node.bg}
        className="node-in absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${node.bg})` }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/25 to-black/80" />

      <Hud nodeId={currentNode} />
      <Stage node={node} spriteFailed={spriteFailed} onSpriteError={() => setSpriteFailed(true)} />
      <DialoguePanel node={node} nodeId={currentNode} onChoose={setCurrentNode} />
      <CrtOverlay />
    </div>
  )
}
