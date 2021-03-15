// @flow strict
const ICONS = {
  TWITTER: {
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
    viewBox: '-1 -1 25 25'
  },
  FACEBOOK: {
    path: 'M374.244,285.825l14.105,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.116,0l0,-78.291c0,0 -36.407,-6.214 -71.213,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.541 32.798,3.865 49.709,3.865c16.911,0 33.511,-1.324 49.708,-3.865l0,-222.31l74.128,0Z',
    viewBox: '0 0 530 530'
  },
  TELEGRAM: {
    path: 'M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z',
    viewBox: '0 0 28 28'
  },
  GITHUB: {
    path: 'M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z',
    viewBox: '0 0 26 28'
  },
  EMAIL: {
    path: 'M19,15.4615385 L36.3076923,0.461538462 L1.69230769,0.461538462 L19,15.4615385 Z M14.3251765,13.8010536 L19,17.6382399 L23.6015813,13.8010536 L36.3076923,24.6923077 L1.69230769,24.6923077 L14.3251765,13.8010536 Z M0.538461538,23.5384615 L0.538461538,1.61538462 L13.2307692,12.5769231 L0.538461538,23.5384615 Z M37.4615385,23.5384615 L37.4615385,1.61538462 L24.7692308,12.5769231 L37.4615385,23.5384615 Z',
    viewBox: '0 -5 38 38'
  },
  RSS: {
    path: 'M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z',
    viewBox: '0 0 22 28'
  },
  LINKEDIN: {
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    viewBox: '0 0 24 24'
  },
  INSTAGRAM: {
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
    viewBox: '0 0 24 24'
  },
  SPOTIFY: {
    path: 'm12 24c6.624 0 12-5.376 12-12s-5.376-12-12-12-12 5.376-12 12 5.376 12 12 12zm4.872-6.344v.001c-.807 0-3.356-2.828-10.52-1.36-.189.049-.436.126-.576.126-.915 0-1.09-1.369-.106-1.578 3.963-.875 8.013-.798 11.467 1.268.824.526.474 1.543-.265 1.543zm1.303-3.173c-.113-.03-.08.069-.597-.203-3.025-1.79-7.533-2.512-11.545-1.423-.232.063-.358.126-.576.126-1.071 0-1.355-1.611-.188-1.94 4.716-1.325 9.775-.552 13.297 1.543.392.232.547.533.547.953-.005.522-.411.944-.938.944zm-13.627-7.485c4.523-1.324 11.368-.906 15.624 1.578 1.091.629.662 2.22-.498 2.22l-.001-.001c-.252 0-.407-.063-.625-.189-3.443-2.056-9.604-2.549-13.59-1.436-.175.048-.393.125-.625.125-.639 0-1.127-.499-1.127-1.142 0-.657.407-1.029.842-1.155z',
    viewBox: '0 0 24 24'
  },
  FIRSTORY: {
    path: 'M37.683 12.059s-2.387-2.412-10.74-2.412H18.59c-2.91 0-5.516-1.318-7.266-3.395l-.21-.256A9.664 9.664 0 019.045 0h19.093c5.272 0 9.546 4.32 9.546 9.647zM0 22.46c0-5.329 4.274-9.648 9.546-9.648H28.64c0 2.386-.86 4.569-2.28 6.253-1.75 2.076-4.355 3.394-7.266 3.394H10.74c-8.075 0-10.574 2.254-10.732 2.404L0 24.87zM4.522 25.624c-2.497 0-4.522 2.194-4.522 4.9 0 2.705 2.025 4.898 4.522 4.898 2.497 0 4.522-2.193 4.522-4.899 0-2.705-2.025-4.899-4.522-4.899',
    viewBox: '0 0 37 37'
  },
  APPLEPODCAST: {
    path: 'M1038 5319 c-273 -32 -538 -164 -724 -361 -146 -154 -233 -320 -291 -555 -15 -62 -17 -207 -20 -1653 -3 -1064 -1 -1621 6 -1695 28 -284 141 -523 338 -717 181 -176 389 -280 648 -322 91 -15 252 -17 1715 -14 1503 4 1620 5 1688 22 245 58 440 163 597 321 164 163 258 342 315 600 19 88 20 132 20 1718 0 1582 -1 1630 -20 1716 -61 275 -150 441 -332 617 -163 158 -349 255 -598 311 -68 15 -216 17 -1670 19 -885 1 -1629 -2 -1672 -7z m1800 -665 c103 -51 135 -122 182 -399 60 -352 91 -658 92 -888 1 -196 -8 -233 -69 -298 -99 -106 -259 -152 -451 -131 -116 14 -190 39 -258 90 -94 72 -114 128 -114 326 0 264 87 949 145 1144 20 67 74 128 140 158 43 21 66 24 166 24 104 0 120 -3 167 -26z m-772 -471 c-3 -16 -10 -63 -17 -105 -6 -43 -17 -84 -23 -92 -6 -8 -51 -36 -101 -62 -458 -240 -776 -663 -877 -1166 -32 -161 -32 -444 0 -604 89 -446 334 -813 711 -1066 123 -82 202 -123 331 -171 622 -232 1304 -77 1760 400 428 446 572 1067 384 1648 -38 118 -144 327 -221 435 -148 208 -385 413 -621 535 l-90 46 -12 67 c-20 118 -24 162 -12 162 25 0 151 -53 262 -111 267 -138 555 -407 710 -663 107 -177 191 -386 242 -596 21 -88 23 -117 23 -385 0 -268 -2 -297 -23 -385 -181 -752 -721 -1283 -1467 -1442 -98 -21 -136 -23 -355 -23 -216 0 -258 3 -358 23 -296 60 -591 199 -823 388 -91 74 -244 234 -311 325 -155 209 -267 450 -329 704 -42 172 -48 577 -13 753 74 364 235 678 478 931 203 210 401 349 638 446 104 43 121 44 114 8z m-86 -830 l0 -128 -65 -73 c-151 -170 -225 -321 -260 -532 -30 -179 -9 -375 61 -550 135 -339 475 -596 833 -632 206 -20 404 13 566 94 141 71 314 223 402 353 59 88 109 193 140 292 25 81 27 101 28 268 0 222 -13 283 -94 450 -55 115 -135 228 -210 299 l-31 30 0 115 c0 119 7 150 31 136 48 -29 171 -143 232 -216 326 -392 386 -910 160 -1364 -147 -295 -405 -515 -727 -620 -149 -48 -229 -58 -423 -52 -137 4 -186 10 -265 30 -440 116 -778 454 -893 895 -113 431 17 886 342 1204 70 69 143 127 161 127 9 1 12 -31 12 -126z m805 -645 c64 -16 115 -47 177 -106 167 -159 169 -428 4 -596 -203 -208 -552 -146 -683 122 -26 52 -28 66 -28 172 0 108 2 119 31 180 45 94 102 153 189 196 103 51 196 61 310 32z',
    viewBox: '0 0 5300 5300'
  },
  CODEPEN: {
    path: 'M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z',
    viewBox: '0 0 24 24'
  },
  YOUTUBE: {
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    viewBox: '0 0 24 24'
  },
  SOUNDCLOUD: {
    path: 'M 14.5 6 C 12.601563 6 11 6.90625 10 8.40625 L 10 17 L 20.5 17 C 22.398438 17 24 15.398438 24 13.5 C 24 11.601563 22.398438 10 20.5 10 C 20.300781 10 20.011719 9.992188 19.8125 10.09375 C 19.210938 7.695313 17 6 14.5 6 Z M 8 8 L 8 17 L 9 17 L 9 8.09375 C 8.699219 7.992188 8.300781 8 8 8 Z M 7 8.09375 C 6.601563 8.195313 6.300781 8.398438 6 8.5 L 6 17 L 7 17 Z M 5 9.40625 C 4.5 9.90625 4.195313 10.488281 4.09375 11.1875 L 4 11.1875 L 4 17 L 5 17 Z M 3 11 C 2.601563 11 2.300781 11.085938 2 11.1875 L 2 16.8125 C 2.300781 16.914063 2.601563 17 3 17 Z M 1 11.8125 C 0.398438 12.3125 0 13.101563 0 14 C 0 14.898438 0.398438 15.6875 1 16.1875 Z',
    viewBox: '0 0 24 24'
  },
  GOOGLEPODCAST:{
    path: 'M64 238.545v34.91c0 17.673-14.327 32-32 32s-32-14.327-32-32v-34.91c0-17.673 14.327-32 32-32s32 14.327 32 32z M448.013 239.455a32.6 32.6 0 0 1-.013-.91c0-17.673 14.327-32 32-32s32 14.327 32 32c0 .304-.004.608-.013.91H512v34.909h-.013c-.48 17.252-14.618 31.09-31.987 31.09s-31.506-13.838-31.987-31.09H448v-34.91h.013z M174.545 343.273v34.909c0 17.673-14.326 32-32 32s-32-14.327-32-32v-34.91c0-17.672 14.327-32 32-32s32 14.328 32 32zM174.545 133.818V248h-.008c-.386 17.337-14.562 31.273-31.992 31.273S110.94 265.337 110.554 248h-.009V133.818c0-17.673 14.327-32 32-32s32 14.327 32 32z M337.455 168.727c0 17.673 14.326 32 32 32s32-14.327 32-32v-34.909c0-17.673-14.327-32-32-32s-32 14.327-32 32z M224 66.91c0 17.672 14.327 32 32 32s32-14.328 32-32V32c0-17.673-14.327-32-32-32s-32 14.327-32 32zM224 445.09c0-17.672 14.327-32 32-32s32 14.328 32 32V480c0 17.673-14.327 32-32 32s-32-14.327-32-32z M337.455 264.727c0-17.673 14.326-32 32-32s32 14.327 32 32v113.455c0 17.673-14.327 32-32 32s-32-14.327-32-32z M288 162.91v186.18c0 17.674-14.327 32-32 32s-32-14.326-32-32V162.91c0-17.674 14.327-32 32-32s32 14.326 32 32z',
    viewBox: '0 0 500 500'
  } ,
  KKBOX:{
    path: 'M284 2344 c-55 -19 -118 -75 -152 -132 l-27 -47 -3 -923 c-2 -922 -2 -922 19 -972 12 -27 42 -69 68 -93 88 -83 19 -78 1056 -75 1034 3 952 -3 1034 79 82 82 76 0 79 1034 2 839 1 924 -14 964 -21 55 -74 114 -133 149 l-46 27 -920 2 c-787 1 -926 0 -961 -13z m1322 -599 c162 -76 301 -146 309 -155 43 -47 45 -72 45 -475 0 -419 -1 -426 -56 -476 -16 -15 -165 -95 -332 -179 -288 -145 -305 -152 -350 -148 -68 7 -646 291 -684 337 -47 55 -50 79 -46 486 3 362 4 382 24 415 14 25 132 116 405 315 l384 280 3 -130 3 -130 295 -140z M772 1554 l-22 -15 0 -424 0 -424 22 -15 c31 -22 175 -22 206 0 21 15 22 20 22 217 l0 202 192 -199 c121 -124 206 -204 227 -214 41 -16 210 -28 265 -18 25 5 36 12 34 21 -2 8 -96 111 -210 228 l-206 214 204 204 c112 112 204 209 204 215 0 19 -26 24 -115 24 -168 0 -163 3 -392 -217 l-203 -195 0 191 c0 228 4 221 -125 221 -57 0 -87 -5 -103 -16z',
    viewBox: '0 0 2350 2350'
  } 
};

export default ICONS;
