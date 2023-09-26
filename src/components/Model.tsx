const Model = () => (
  <div id="model">
    <model-viewer 
      src="devonte.glb"
      camera-controls
      poster="poster.webp"
      shadow-intensity="1"
      auto-rotate
      style={{height: '100vh', margin: '0 auto', backgroundColor: '#d3d3d3'}}
      >
    </model-viewer>
    <style jsx global>{`
      .model {
        border: 2px solid black;
      }
    `}</style>
  </div>
);

export default Model;
