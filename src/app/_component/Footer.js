export default function Footer() {
  return (
    <footer className="bg-background text-foreground pt-20 p-4 border-t border-border">
      <div className="container mx-auto text-center opacity-70">
        <span>&copy; {new Date().getFullYear()} Samuel Girma Asfaw</span>
        <span>, All right reserved!</span>
      </div>
    </footer>
  );
}