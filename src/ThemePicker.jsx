import { useEffect, useState } from 'react';

function ThemePicker() {
  const [glow, setGlow] = useState('#FF0000');

  useEffect(() => {
    document.documentElement.style.setProperty('--color-palette-border-glow', glow);
  }, [glow]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-palette-secondary/80 p-3 rounded-lg shadow-lg">
      <label htmlFor="glowPicker" className="text-palette-text text-sm">Glow:</label>
      <input
        type="color"
        id="glowPicker"
        value={glow}
        onChange={(e) => setGlow(e.target.value)}
        className="w-8 h-8 border-none rounded-full cursor-pointer bg-transparent"
      />
    </div>
  );
}

export default ThemePicker;