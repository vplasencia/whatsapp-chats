import ViewSourceCode from "./viewSourceCode";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-5 mb-5 flex items-center justify-center">
      <div className="grid place-items-center">
        <ViewSourceCode />
        <div className="text-center py-3">
          <span className="flex flex-wrap justify-center items-center space-x-1">
            <span>{year}</span>
            <span>&bull;</span>
            <span>Made with</span>
            <span>❤️</span>
            <span>by</span>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="text-cyan-400 hover:underline"
              href="https://twitter.com/ViviPlasenciaC"
            >
              Vivian Plasencia
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
