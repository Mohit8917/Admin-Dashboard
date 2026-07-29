export default function CardFooter({ children, className = "" }) {
  return (
    <div className={`border-t p-6 ${className}`}>
      {children}
    </div>
  );
}