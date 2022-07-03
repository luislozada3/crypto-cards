export default function Button({
  children,
  onClick,
  className,
  type = "button",
}) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
