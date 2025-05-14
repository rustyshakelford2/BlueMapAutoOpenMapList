//open the map menu 
bluemap.appState.menu.openPage('maps', "Maps")
//BlueMapMapIcons plugin does not apply the custom icons until a click event is fired, so we give it one (messy but functional)
function simulateClickAt(x, y) {
  const target = document.elementFromPoint(x, y);
  if (!target) {
    console.warn('Fake click coordinates invalid.');
    return;
  }

  ['mousedown', 'mouseup', 'click'].forEach(eventType => {
    const event = new MouseEvent(eventType, {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y,
      view: window
    });
    target.dispatchEvent(event);
  });
}

simulateClickAt(100, 200);
