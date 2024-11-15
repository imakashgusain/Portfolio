// Extend CanvasRenderingContext2D interface to include the `running` property
declare global {
  interface CanvasRenderingContext2D {
    running?: boolean; // Add `running` as an optional property
    frame?: number;
  }
}

interface Config {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(e: Config = {}) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }

  value(): number {
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

interface NodeType {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

class Line {
  spring: number;
  friction: number;
  nodes: NodeType[];

  constructor(e: { spring: number }) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let n = 0; n < E.size; n++) {
      const node: NodeType = { x: pos.x, y: pos.y, vx: 0, vy: 0 };
      this.nodes.push(node);
    }
  }

  update(): void {
    let e = this.spring;
    let t = this.nodes[0];
    t.vx += (pos.x - t.x) * e;
    t.vy += (pos.y - t.y) * e;
    for (let i = 0; i < this.nodes.length; i++) {
      t = this.nodes[i];
      if (i > 0) {
        const n = this.nodes[i - 1];
        t.vx += (n.x - t.x) * e;
        t.vy += (n.y - t.y) * e;
        t.vx += n.vx * E.dampening;
        t.vy += n.vy * E.dampening;
      }
      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      e *= E.tension;
    }
  }

  draw(): void {
    let e, t;
    let n = this.nodes[0].x;
    let i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);
    for (let a = 1; a < this.nodes.length - 2; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    e = this.nodes[this.nodes.length - 2];
    t = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  }
}

interface Position {
  x: number;
  y: number;
}

let ctx: CanvasRenderingContext2D;
let f: Oscillator;
let e = 0;
let pos: Position = { x: 0, y: 0 };
let lines: Line[] = [];

const E = {
  debug: true,
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

class Node {
  x: number = 0;
  y: number = 0;
  vy: number = 0;
  vx: number = 0;
}

function onMousemove(e: MouseEvent | TouchEvent): void {
  function o(): void {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
    }
  }

  function c(e: MouseEvent | TouchEvent): void {
    if ('touches' in e) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  }

  function l(e: TouchEvent): void {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }

  document.removeEventListener('mousemove', onMousemove);
  document.removeEventListener('touchstart', onMousemove);
  document.addEventListener('mousemove', c);
  document.addEventListener('touchmove', c);
  document.addEventListener('touchstart', l);
  c(e);
  o();
  render();
}

function render(): void {
  if (ctx?.running) {  // Check if ctx is valid and running
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',90%,50%,0.25)';
    ctx.lineWidth = 1;
    for (let i = 0; i < E.trails; i++) {
      const line = lines[i];
      line.update();
      line.draw();
    }
    window.requestAnimationFrame(render);
  }
}
function resizeCanvas(event?: UIEvent): void {
  if (ctx) {  // Ensure ctx is initialized before resizing
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }
}

// Initialize ctx globally
export const renderCanvas = function (): void {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
  if (!canvas) {
    console.error('Canvas element not found');
    return; // Exit if the canvas element is not found
  }

  const context = canvas.getContext('2d'); // Try to get the 2D context
  if (!context) {
    console.error('Failed to get 2D context');
    return; // Exit if the context is null
  }

  ctx = context;  
  
  ctx.running = true;  // Add custom property `running`
  ctx.frame = 1;
  f = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  document.addEventListener('mousemove', onMousemove);
  document.addEventListener('touchstart', onMousemove);
  // document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('focus', () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener('blur', () => {
    ctx.running = false;  // Stop when window loses focus
  });
  resizeCanvas();  // Call resizeCanvas to set initial canvas size
};

// Export resizeCanvas, ctx, and custom properties for use outside
export { onMousemove, resizeCanvas };
