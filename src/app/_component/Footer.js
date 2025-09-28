 export default function Footer() {
  return (
    <footer className="bg-black pt-20 text-white p-4">
      <div className="container mx-auto text-center text-gray-400">
        <span>&copy; {new Date().getFullYear()} Samuel Girma Asfaw</span>
        <span>, All right reserved!</span>
      </div>
    </footer>
  );
}