import { useMemo } from "react";

/* ── deterministic pseudo-random ────────────────────── */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

interface Node {
  x: number;
  y: number;
  r: number;
  glow: boolean;
  delay: number;
}

interface Edge {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

const EDGE_THRESHOLD = 160;

function generateMesh(count: number, seed: number) {
  const rand = seededRandom(seed);
  const nodes: Node[] = [];

  for (let i = 0; i < count; i++) {
    nodes.push({
      x: rand() * 900 + 50,
      y: rand() * 500 + 50,
      r: rand() * 1.5 + 1.5,
      glow: rand() > 0.75,
      delay: rand() * 6,
    });
  }

  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < EDGE_THRESHOLD) {
        edges.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          delay: (nodes[i].delay + nodes[j].delay) / 2,
        });
      }
    }
  }

  return { nodes, edges };
}

export function DataMesh() {
  const desktop = useMemo(() => generateMesh(42, 7), []);
  const mobile = useMemo(() => generateMesh(24, 7), []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* SVG glow filter definition */}
      <svg className="absolute" width="0" height="0">
        <defs>
          <filter id="mesh-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Desktop mesh */}
      <svg
        viewBox="0 0 1000 600"
        className="absolute inset-0 w-full h-full hidden md:block"
        preserveAspectRatio="xMidYMid slice"
      >
        <MeshContent {...desktop} />
      </svg>

      {/* Mobile mesh */}
      <svg
        viewBox="0 0 1000 600"
        className="absolute inset-0 w-full h-full md:hidden"
        preserveAspectRatio="xMidYMid slice"
      >
        <MeshContent {...mobile} />
      </svg>
    </div>
  );
}

function MeshContent({ nodes, edges }: { nodes: Node[]; edges: Edge[] }) {
  return (
    <>
      {/* Edges */}
      {edges.map((e, i) => (
        <line
          key={`e-${i}`}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="oklch(0.750 0.180 195)"
          strokeWidth="0.5"
          opacity={0.08}
          className="mesh-edge"
          style={{ animationDelay: `${e.delay}s` }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <circle
          key={`n-${i}`}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={
            n.glow
              ? "oklch(0.750 0.180 195)"
              : "oklch(0.620 0.150 280)"
          }
          opacity={0.45}
          className={`mesh-node ${n.glow ? "mesh-glow" : ""}`}
          style={{ animationDelay: `${n.delay}s` }}
        />
      ))}
    </>
  );
}
