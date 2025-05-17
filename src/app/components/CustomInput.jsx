export default function CustomInput({
  onChange,
  value,
  backgroundColor = 'bg-white',
  textColor = 'text-black',
  placeholder = '',
  disabled = false,
  position = '',
  type = 'text',
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={`border px-4 py-2 rounded ${backgroundColor} ${textColor} ${position} transition-transform duration-200 hover:scale-105 ${disabled ? 'opacity-50' : ''}`}
    />
  );
}
