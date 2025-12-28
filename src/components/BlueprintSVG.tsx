const BlueprintSVG = () => {
  return (
    <svg viewBox="-300 -450 600 850" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-sm">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" className="fill-muted-foreground"/>
        </marker>
        <marker id="arrow-start" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
          <polygon points="8 0, 0 3, 8 6" className="fill-muted-foreground"/>
        </marker>
      </defs>

      {/* 1. OCTAGON */}
      <polygon 
        points="-82.8,-200 82.8,-200 200,-82.8 200,82.8 82.8,200 -82.8,200 -200,82.8 -200,-82.8" 
        className="octagon-stroke" 
      />

      {/* 2. OUTER EXTENSION */}
      <rect x="-82.8" y="-325" width="165.6" height="125" className="rect-outer" />
      
      {/* 3. INNER NESTED RECTANGLE (3' side x 5' breadth) */}
      <rect x="-37.5" y="-325" width="75" height="125" className="rect-inner" />

      {/* 4. NESTED SQUARES */}
      <rect x="-112.5" y="-112.5" width="225" height="225" className="sq-9" />
      <rect x="-75" y="-75" width="150" height="150" className="sq-6" />
      <rect x="-31.25" y="-31.25" width="62.5" height="62.5" className="sq-2-5" />

      {/* Central Point */}
      <circle cx="0" cy="0" r="8" className="fill-purple/30 stroke-purple stroke-2" />
      <circle cx="0" cy="0" r="3" className="fill-purple" />

      {/* DIMENSIONS */}
      {/* Octagon Width */}
      <line x1="-200" y1="240" x2="200" y2="240" className="dim-line" markerStart="url(#arrow-start)" markerEnd="url(#arrow)" />
      <text x="0" y="260" className="dim-text uppercase font-sans">Overall Width: 16.0 FT</text>

      {/* Entrance Width */}
      <line x1="-82.8" y1="-345" x2="82.8" y2="-345" className="dim-line" markerStart="url(#arrow-start)" markerEnd="url(#arrow)" />
      <text x="0" y="-360" className="dim-text uppercase font-sans fill-primary">Entrance Width: 6.63 FT</text>

      {/* Inner Sanctum Gate */}
      <line x1="-37.5" y1="-280" x2="37.5" y2="-280" className="dim-line" style={{ stroke: 'hsl(0 72% 45%)' }} markerStart="url(#arrow-start)" markerEnd="url(#arrow)" />
      <text x="0" y="-292" className="dim-text font-sans" style={{ fill: 'hsl(0 72% 45%)' }}>Inner Gate: 3.0 FT</text>

      {/* Square Dimensions */}
      <text x="0" y="-100" className="dim-text font-sans" style={{ fill: 'hsl(160 84% 18%)' }}>9.0 FT PLATFORM</text>
      <text x="0" y="-60" className="dim-text font-sans" style={{ fill: 'hsl(221 83% 40%)' }}>6.0 FT TIER</text>
      <text x="0" y="-20" className="dim-text font-sans" style={{ fill: 'hsl(270 70% 45%)' }}>2.5 FT CORE (Garbagriha)</text>

      {/* Clearance Label */}
      <line x1="112.5" y1="0" x2="200" y2="0" className="dim-line" style={{ strokeDasharray: '2 2' }} markerStart="url(#arrow-start)" markerEnd="url(#arrow)" />
      <text x="156" y="-10" className="font-sans" style={{ fontSize: '8px', fill: 'hsl(var(--muted-foreground))', textAnchor: 'middle' }}>3.5' CLEARANCE</text>

      {/* Height indicator on side */}
      <line x1="-230" y1="-200" x2="-230" y2="200" className="dim-line" markerStart="url(#arrow-start)" markerEnd="url(#arrow)" />
      <text x="-240" y="0" className="dim-text font-sans" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', textAnchor: 'middle' }} transform="rotate(180, -240, 0)">VERTICAL: 21.0 FT</text>
    </svg>
  );
};

export default BlueprintSVG;
