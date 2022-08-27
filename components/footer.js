import ViewSourceCode from "./viewSourceCode";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-5 mb-5 flex items-center justify-center">
      <div className="flex flex-wrap md:space-x-10 justify-center items-center">
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
              href="https://vivianplasencia.com/"
            >
              Vivian Plasencia
            </a>
          </span>
        </div>
        <ViewSourceCode />
      </div>
    </footer>
  );
}
