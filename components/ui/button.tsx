export function Button({ children, onClick, variant = "default" }) {
  const style = variant === "outline" ? "border border-gray-400 px-4 py-2 rounded-full" : "bg-black text-white px-4 py-2 rounded-full";
  return <button onClick={onClick} className={style}>{children}</button>;
}
