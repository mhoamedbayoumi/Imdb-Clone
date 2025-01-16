export default function Footer() {
    return (
      <footer className=" text-white py-8 border-t-2 border-slate-300">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            {/* Logo or Title */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl font-bold">Imdb Clone</h1>
              <p className="text-sm text-gray-400">Empowering your journey.</p>
            </div>
          </div>
  
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://github.com/mhoamedbayoumi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
             <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577v-2.17c-3.338.724-4.042-1.416-4.042-1.416-.546-1.385-1.332-1.754-1.332-1.754-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.806 1.305 3.492.998.108-.776.42-1.306.763-1.607-2.665-.303-5.466-1.333-5.466-5.933 0-1.31.467-2.382 1.236-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.4 3.006-.404 1.02.004 2.05.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.241 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.474 5.922.432.372.817 1.102.817 2.222v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-bayoumi-20020130-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451c.977 0 1.775-.774 1.775-1.729V1.729C24 .774 23.202 0 22.225 0zM7.118 20.452H3.637V9h3.481v11.452zm-1.744-13.07c-1.127 0-2.037-.91-2.037-2.037 0-1.127.91-2.037 2.037-2.037 1.128 0 2.037.91 2.037 2.037 0 1.127-.91 2.037-2.037 2.037zm16.008 13.07h-3.481v-5.577c0-1.33-.027-3.041-1.85-3.041-1.852 0-2.137 1.446-2.137 2.939v5.679h-3.481V9h3.344v1.561h.047c.465-.878 1.599-1.805 3.288-1.805 3.515 0 4.162 2.313 4.162 5.317v6.379z" />
              </svg>
            </a>
          </div>
  
          {/* Bottom Section */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  