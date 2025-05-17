export default function CustomButton({
  onClick,
  backgroundColor = 'bg-blue-500',
  textColor = 'text-white',
  text = 'Button',
  disabled = false,
  position = '',
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${backgroundColor} ${textColor} ${position} px-4 py-2 rounded transition-transform duration-200 hover:scale-105 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {text}
    </button>
  );
}