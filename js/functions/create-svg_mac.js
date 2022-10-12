export function createSvgMac(project, index) {
    let image = project.images.pc;
    const svgMac = `
    <div class="project-vector mac-vector">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="844.898" height="513.715" viewBox="0 0 844.898 513.715" data-img="csm-scrn-macbook.jpg">
        <defs>
            <filter id="macbook-screen2" x="78.055" y="0" width="710.229" height="513.715" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="10" result="blur"/>
            <feFlood/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
            </filter>
            <pattern id="pattern-mac${index}" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 1000 609">
            <image id="project-image" width="1000" height="609" href="${image}"/>
            </pattern>
            <linearGradient id="linear-gradient" x1="0.716" y1="0.024" x2="1.044" y2="0.915" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0.855"/>
            </linearGradient>
            <radialGradient id="radial-gradient" cx="0.5" cy="0.602" r="0.526" gradientTransform="translate(0.025 0.03) scale(0.95 0.95)" xlink:href="#linear-gradient"/>
            <linearGradient id="linear-gradient-2" x1="0.001" y1="-0.623" x2="1" y2="-0.623" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#b3b3b3"/>
            <stop offset="0.02" stop-color="#e9e9e9"/>
            <stop offset="0.04" stop-color="#d4d4d7"/>
            <stop offset="0.96" stop-color="#e4e4e6"/>
            <stop offset="0.98" stop-color="#f4f4f4"/>
            <stop offset="1" stop-color="#b3b3b3"/>
            </linearGradient>
            <linearGradient id="linear-gradient-3" x1="0.411" y1="1.77" x2="0.411" y2="2.443" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#c6c6c6"/>
            <stop offset="1" stop-color="#f2f2f2"/>
            </linearGradient>
            <linearGradient id="linear-gradient-4" y1="0.791" x2="1" y2="0.791" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#cfcfcf" stop-opacity="0"/>
            <stop offset="0.5" stop-color="#fff" stop-opacity="0.847"/>
            <stop offset="1" stop-color="#cfcfcf" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="linear-gradient-5" x1="-0.042" y1="1.991" x2="0.024" y2="1.925" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-opacity="0.702"/>
            <stop offset="1" stop-color="#4b5151" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="linear-gradient-6" x1="-0.044" y1="1.98" x2="0.023" y2="1.915" xlink:href="#linear-gradient-5"/>
            <linearGradient id="linear-gradient-7" x1="0.447" y1="0.83" x2="0.447" y2="2.932" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#d1d4d6"/>
            <stop offset="0.5" stop-color="#a1a5a6"/>
            <stop offset="1"/>
            </linearGradient>
            <linearGradient id="linear-gradient-8" x1="0.457" x2="0.457" y2="1.534" gradientUnits="objectBoundingBox">
            <stop offset="0"/>
            <stop offset="0.5" stop-color="#4e4e4e"/>
            <stop offset="1" stop-color="#212121"/>
            </linearGradient>
        </defs>
        <g id="macbook" transform="translate(-18.142 -63.649)">
            <g transform="matrix(1, 0, 0, 1, 18.14, 63.65)" filter="url(#macbook-screen2)">
            <rect id="macbook-screen2-2" data-name="macbook-screen2" width="648.229" height="451.715" rx="19.999" transform="translate(99.05 21)" fill="#d0d0d2" stroke="#b3b7b7" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/>
            </g>
            <rect id="macbook-screen" width="640.258" height="439.979" rx="17" transform="translate(120.639 88.971)" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1.009"/>
            <rect id="macbook-project-image" width="591.548" height="370.464" transform="translate(143.622 116.724)" fill="url(#pattern-mac${index})"/>
            <path id="macbook-highlight" d="M551.114,88.936,238.7,524.028l477.414,1.219s1.54-395.465.9-413.116c-.676-18.486-10.953-22.735-32.184-22.938-22.314-.214-133.716-.264-133.716-.264Z" transform="translate(43.02 0.835)" fill-rule="evenodd" opacity="0.095" fill="url(#linear-gradient)"/>
            <path id="macbook-camera" d="M469.358,127.342a5.217,5.217,0,1,1-5.21-4.949A5.084,5.084,0,0,1,469.358,127.342Z" transform="translate(-27.028 -23.656)" opacity="0.164" fill="url(#radial-gradient)"/>
            <rect id="macbook-bottom-edge2" width="843.936" height="19.079" transform="translate(18.623 519.015)" stroke="#707070" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="0.805" fill="url(#linear-gradient-2)"/>
            <path id="macbook-bottom-gradient" d="M315.17,447.658v1.836c0,5.722,5.33,10.328,11.95,10.328H431.006c6.621,0,11.951-4.606,11.951-10.328v-1.836Z" transform="translate(57.934 70.804)" opacity="0.871" fill="url(#linear-gradient-3)"/>
            <rect id="macbook-bottom-edge" width="844.898" height="2.39" transform="translate(18.142 536.185)" fill="url(#linear-gradient-4)"/>
            <path id="macbook-slit-shadow" d="M442.95,447.889v1.8c0,5.621-5.333,10.146-11.958,10.146H327.038c-6.625,0-11.958-4.525-11.958-10.146v-1.8H442.95Z" transform="translate(57.917 70.849)" opacity="0.871" fill="url(#linear-gradient-5)"/>
            <path id="macbook-slit" d="M315.242,447.646v1.836c0,5.722,5.33,10.328,11.95,10.328H431.078c6.621,0,11.95-4.606,11.95-10.328v-1.836Z" transform="translate(57.948 70.801)" opacity="0.871" fill="url(#linear-gradient-6)"/>
            <path id="macbook-bottom" d="M18.542,464.474c7.431,5.832,36.115,8.306,47.324,8.365,258.151.042,740.929,0,740.929,0,9.142,0,51.769-3.934,55.689-8.365Z" transform="translate(0.078 74.083)" fill="url(#linear-gradient-7)"/>
            <rect id="macbook-screen-edge" width="637.625" height="417.487" rx="16.93" transform="translate(120.908 89.613)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1" opacity="0.279"/>
            <rect id="macbook-hinge" width="529.603" height="8.596" transform="translate(173.203 509.148)" fill="url(#linear-gradient-8)"/>
        </g>
        </svg>
    </div>
    `
    return svgMac;
}