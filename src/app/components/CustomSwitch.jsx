import { useState } from 'react';

export default function CustomSwitch({
  label = '',
  onChange,
  backgroundColor = 'bg-gray-300',
  textColor = 'text-black',
  position = '',
}) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <div className={`flex items-center gap-2 ${position}`}>
      <span className={textColor}>{label}</span>
      <button
        onClick={handleToggle}
        className={`w-10 h-5 rounded-full relative transition-colors ${checked ? 'bg-green-500' : backgroundColor}`}
      >
        <span
          className={`w-5 h-5 bg-white rounded-full absolute top-0 transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`}
        ></span>
      </button>
    </div>
  );
}
