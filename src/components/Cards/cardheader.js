export default function CardHeader({ children, className = "" }) {
  return <div className={`border-b p-6 ${className}`}>{children}</div>;
}
