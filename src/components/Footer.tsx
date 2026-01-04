export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm font-mono text-gray-main-text border-t border-main-text-color/10">
      <p>
        &copy; {new Date().getFullYear()} SHIV.DEV | Built with{" "}
        <span className="text-main-text-color">React</span>,{" "}
        <span className="text-crimson-main-text">Motion</span> & Magic ✨
      </p>
    </footer>
  );
}
