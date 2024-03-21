import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="https://twitter.com/TheSolaNetwork" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.instagram.com/thesolanetwork" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(3.500000,28.500000) scale(0.05,-0.05)">
                    <path d="M93 450 c-53 -32 -63 -64 -63 -200 0 -136 10 -168 63 -200 27 -17 51 -20 157 -20 140 0 175 12 205 69 21 42 21 260 0 302 -30 57 -65 69 -205 69 -106 0 -130 -3 -157 -20z m297 -15 c49 -25 60 -60 60 -185 0 -179 -21 -200 -200 -200 -179 0 -200 21 -200 200 0 179 20 199 198 200 82 0 121 -4 142 -15z"/>
                    <path d="M354 379 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z"/>
                    <path d="M174 326 c-28 -28 -34 -42 -34 -76 0 -34 6 -48 34 -76 48 -48 104 -48 152 0 28 28 34 42 34 76 0 34 -6 48 -34 76 -28 28 -42 34 -76 34 -34 0 -48 -6 -76 -34z m133 -10 c22 -19 28 -32 28 -65 0 -55 -31 -86 -84 -86 -48 0 -78 25 -87 71 -15 81 80 134 143 80z"/>
                  </g>
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.facebook.com/thesolanetwork/" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; 2024 SOLA Network. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
