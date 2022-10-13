export function createSvgPhone(project, index) {
  let image = project.images.phone;

  const svgIphone = `
    <div class="project-vector iphone-vector"> 
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="303.214" height="582.629" viewBox="0 0 303.214 582.629">
        <defs>
          <clipPath id="clip-path">
            <rect id="rect5403" width="12.692" height="21.508" rx="0.451"/>
          </clipPath>
          <linearGradient id="linear-gradient" x1="1" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#cbcbcb" stop-opacity="0.275"/>
            <stop offset="0.05" stop-color="#cbcbcb"/>
            <stop offset="0.95" stop-color="#cbcbcb"/>
            <stop offset="1" stop-color="#cbcbcb" stop-opacity="0.275"/>
          </linearGradient>
          <clipPath id="clip-path-2">
            <path id="path5591" d="M1.308,39.688A1.3,1.3,0,0,0,0,40.995V78.441a1.306,1.306,0,0,0,1.308,1.308H11.383a1.306,1.306,0,0,0,1.308-1.308V40.995a1.3,1.3,0,0,0-1.308-1.307Z" transform="translate(0 -39.688)"/>
          </clipPath>
          <linearGradient id="linear-gradient-2" x1="-25.328" y1="-1.063" x2="-25.328" y2="-0.063" xlink:href="#linear-gradient"/>
          <filter id="phone-edge3" x="0" y="0" width="303.214" height="582.629" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feFlood flood-opacity="0.6"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <clipPath id="clip-path-4">
            <path id="path4962" d="M41.941.533a41.015,41.015,0,0,0-41.1,41.1V510.016a41.015,41.015,0,0,0,41.1,41.1H231.1a41.015,41.015,0,0,0,41.1-41.1V41.638A41.015,41.015,0,0,0,231.1.533ZM40.849,3.585H232.191A36.734,36.734,0,0,1,269.007,40.4V511.689A36.735,36.735,0,0,1,232.191,548.5H40.849A36.735,36.735,0,0,1,4.033,511.689V40.4A36.734,36.734,0,0,1,40.849,3.585Z" transform="translate(-0.837 -0.533)" fill="#ebebeb"/>
          </clipPath>
          <linearGradient id="linear-gradient-4" x1="0.637" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#404040"/>
            <stop offset="0.6" stop-color="#838383"/>
            <stop offset="1" stop-color="#a7a7a7"/>
          </linearGradient>
          <linearGradient id="linear-gradient-5" x1="51.922" y1="1.951" x2="53.294" y2="1.951" xlink:href="#linear-gradient-4"/>
          <pattern id="pattern-${index}" width="1" height="1" viewBox="0 0 247 504">
            <image preserveAspectRatio="xMidYMid slice" width="247" height="533.583" href="${image}"/>
          </pattern>
          <linearGradient id="linear-gradient-6" x1="-0.001" y1="1.79" x2="0.999" y2="1.79" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#4f4f4f" stop-opacity="0.129"/>
            <stop offset="0.07" stop-color="#4f4f4f"/>
            <stop offset="0.937" stop-color="#4f4f4f" stop-opacity="0.953"/>
            <stop offset="1" stop-color="#4f4f4f" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="linear-gradient-7" x1="-0.001" y1="-53.566" x2="0.999" y2="-53.566" xlink:href="#linear-gradient-6"/>
          <linearGradient id="linear-gradient-8" x1="0.716" y1="0.024" x2="1.044" y2="0.915" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#fff"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0.855"/>
          </linearGradient>
        </defs>
        <g id="iphone" transform="translate(3.495 4.801)">
          <g id="phone-button3" transform="translate(0 74.606)">
            <rect id="rect5351" width="12.692" height="21.508" rx="0.451" transform="translate(0)"/>
            <g id="Group_31" data-name="Group 31" transform="translate(0)" clip-path="url(#clip-path)">
              <path id="rect5351-6" d="M-12.567,26.259a1.163,1.163,0,0,0-1.166,1.166V44.268a1.163,1.163,0,0,0,1.166,1.166h.363V26.259Z" transform="translate(14.153 -25.092)" fill="url(#linear-gradient)"/>
            </g>
          </g>
          <g id="phone-button2" transform="translate(0 114.716)">
            <path id="rect5351-5" d="M1.308,39.688A1.3,1.3,0,0,0,0,40.995V78.441a1.306,1.306,0,0,0,1.308,1.308H11.383a1.306,1.306,0,0,0,1.308-1.308V40.995a1.3,1.3,0,0,0-1.308-1.307Z" transform="translate(0 -39.688)"/>
            <g id="Group_32" data-name="Group 32" clip-path="url(#clip-path-2)">
              <path id="rect5351-6-6" d="M1.311,40.09A1.163,1.163,0,0,0,.145,41.256v35.4a1.163,1.163,0,0,0,1.166,1.166h.363V40.09Z" transform="translate(0.275 -38.924)" fill="url(#linear-gradient-2)"/>
            </g>
          </g>
          <g id="phone-button1" transform="translate(0 165.096)">
            <path id="rect5351-5-6" d="M1.308,39.688A1.3,1.3,0,0,0,0,40.995V78.441a1.306,1.306,0,0,0,1.308,1.308H11.383a1.306,1.306,0,0,0,1.308-1.308V40.995a1.3,1.3,0,0,0-1.308-1.307Z" transform="translate(0 -39.688)"/>
            <g id="Group_33" data-name="Group 33" transform="translate(0 0)" clip-path="url(#clip-path-2)">
              <path id="rect5351-6-6-2" d="M1.311,40.09A1.163,1.163,0,0,0,.145,41.256v35.4a1.163,1.163,0,0,0,1.166,1.166h.363V40.09Z" transform="translate(0.275 -38.924)" fill="url(#linear-gradient-2)"/>
            </g>
          </g>
          <g transform="matrix(1, 0, 0, 1, -3.5, -4.8)" filter="url(#phone-edge3)">
            <path id="phone-edge3-2" data-name="phone-edge3" d="M41.016.2A40.407,40.407,0,0,0,.519,40.7V512.329a40.409,40.409,0,0,0,40.5,40.5h82.071l1.677-2.377h24.722l1.678,2.377h82.071a40.409,40.409,0,0,0,40.5-40.5V40.7A40.408,40.408,0,0,0,233.236.2Z" transform="translate(4.48 4.8)"/>
          </g>
          <g id="phone-edge2" transform="translate(2.426 1.167)">
            <g id="g5116" transform="translate(0 0.193)">
              <path id="path5106" d="M245.178,22.3h3.2V18.523h-3.2Z" transform="translate(-245.177 33.456)" fill="#7d7e7f"/>
              <path id="path5104" d="M245.178,458.81h3.2V19.826h-3.2Z" transform="translate(-245.177 35.931)" fill="#ebebeb"/>
              <path id="path5102" d="M245.178,174.98h3.2V171.2h-3.2Z" transform="translate(-245.177 323.539)" fill="#7d7e7f"/>
              <path id="path5100" d="M516.549,172.5h-3.2v12.642a36.736,36.736,0,0,1-36.816,36.816H285.191a36.736,36.736,0,0,1-36.816-36.816V172.5h-3.2v10.97a41.016,41.016,0,0,0,41.105,41.105h189.16a41.016,41.016,0,0,0,41.105-41.105Z" transform="translate(-245.176 326.016)" fill="#ebebeb"/>
              <path id="path5098" d="M340.849,171.2h-3.2v3.78h3.2Z" transform="translate(-69.477 323.54)" fill="#7d7e7f"/>
              <path id="path5096" d="M340.849,19.826h-3.2V458.81h3.2Z" transform="translate(-69.477 35.931)" fill="#ebebeb"/>
              <path id="path5094" d="M340.849,18.523h-3.2V22.3h3.2Z" transform="translate(-69.477 33.456)" fill="#7d7e7f"/>
              <path id="rect4873" d="M286.283.6A41.016,41.016,0,0,0,245.178,41.7V52.578h3.2V40.467A36.734,36.734,0,0,1,285.19,3.652H476.536a36.734,36.734,0,0,1,36.816,36.815V52.578h3.2V41.7A41.016,41.016,0,0,0,475.443.6Z" transform="translate(-245.178 -0.599)" fill="#ebebeb"/>
            </g>
            <g id="Group_34" data-name="Group 34" transform="translate(0.001)" clip-path="url(#clip-path-4)">
              <path id="path4878" d="M30.6,3.069c-5.054-.129-14.686,1.4-24.577,12.516-14.386,16.168-1.508,6.439-1.508,6.439s8.838-13.7,21.169-15.482,8.563-3.015,8.563-3.015A15.494,15.494,0,0,0,30.6,3.069Zm218.023,0a15.494,15.494,0,0,0-3.648.459s-3.768,1.234,8.563,3.015S274.7,22.024,274.7,22.024s12.879,9.728-1.508-6.439C263.307,4.469,253.674,2.94,248.62,3.068ZM-.372,517.421c-1.1-.132-.351,1.756,6.393,9.335,14.386,16.168,28.224,12.058,28.224,12.058s3.768-1.234-8.563-3.015S4.513,520.316,4.513,520.316s-3.635-2.745-4.885-2.9Zm279.963,0c-1.251.15-4.885,2.9-4.885,2.9s-8.838,13.7-21.169,15.482-8.563,3.015-8.563,3.015,13.838,4.11,28.224-12.058c6.744-7.579,7.5-9.467,6.393-9.335Z" transform="translate(-3.926 4.272)" fill="#434343" fill-rule="evenodd"/>
            </g>
          </g>
          <g id="phone-edge1" transform="translate(8.328 11.404)">
            <path id="rect5132" d="M86.436,4.069c-.9-.089-.476.809,1.547,2.682A34.043,34.043,0,0,1,98.8,31.835V506.889a34.043,34.043,0,0,1-10.815,25.083c-2.022,1.873-2.448,2.772-1.547,2.682a10.3,10.3,0,0,0,3-1.229c9.752-5.2,15.414-16.426,15.414-28.347V33.645c0-11.921-5.663-23.145-15.414-28.347a10.3,10.3,0,0,0-3-1.229Z" transform="translate(154.717 -4.063)" fill="url(#linear-gradient-4)"/>
            <path id="rect5132-5" d="M21.4,4.069c.9-.089.476.809-1.547,2.683A34.044,34.044,0,0,0,9.033,31.835V506.9A34.044,34.044,0,0,0,19.849,531.98c2.022,1.873,2.448,2.772,1.547,2.682a10.3,10.3,0,0,1-3-1.229c-9.752-5.2-15.415-16.426-15.415-28.348V33.645C2.985,21.724,8.648,10.5,18.4,5.3a10.3,10.3,0,0,1,3-1.229Z" transform="translate(-2.985 -4.063)" fill="url(#linear-gradient-5)"/>
          </g>
          <g id="camera" transform="translate(80.599 18.383)">
            <circle id="path5263" cx="3.9" cy="3.9" r="3.9" transform="translate(73.989 0.22)" fill="#2b2b2b"/>
            <circle id="path5265" cx="3.125" cy="3.125" r="3.125" transform="translate(74.764 0.995)" fill="#0a0d13"/>
            <circle id="path5267" cx="2.381" cy="2.381" r="2.381" transform="translate(75.508 1.739)" fill="#091427"/>
            <path id="path5271" d="M57.818,7.341c-.282.03-.683.461-.713,1.308s.342,1.308.55,1.308a1.929,1.929,0,0,0,.163-2.615Z" transform="translate(18.431 -4.814)" fill="rgba(35,90,145,0.56)" fill-rule="evenodd"/>
            <path id="path5273" d="M58.387,7.283c-.445.137-.531.856-.514,1.267s.6,1.49,1.3,1.25a1.232,1.232,0,0,0,.531-1.73C59.414,7.471,58.883,7.043,58.387,7.283Z" transform="translate(19.89 -5.052)" fill="rgba(35,90,145,0.56)" fill-rule="evenodd"/>
          </g>
          <path id="iphone-project-image" d="M0,0H247a0,0,0,0,1,0,0V478a26,26,0,0,1-26,26H26A26,26,0,0,1,0,478V0A0,0,0,0,1,0,0Z" transform="translate(14.718 36.213)" fill="url(#pattern-${index})"/>
          <path id="phone-top" d="M26.484,2.577a33.887,33.887,0,0,0-18.1,5.2v4.364a31.6,31.6,0,0,1,17.4-5.178H218.976a31.6,31.6,0,0,1,17.4,5.178V7.774a33.884,33.884,0,0,0-18.1-5.2H26.484Z" transform="translate(15.926 4.519)" fill="url(#linear-gradient-6)"/>
          <path id="phone-bottom" d="M26.484,194.648a33.886,33.886,0,0,1-18.1-5.2v-4.364a31.6,31.6,0,0,0,17.4,5.178H218.977a31.6,31.6,0,0,0,17.4-5.178v4.364a33.886,33.886,0,0,1-18.1,5.2H26.484Z" transform="translate(15.926 351.283)" fill="url(#linear-gradient-7)"/>
          <path id="phone-highlight" d="M471.207-67.51,233.217,316.535a28.255,28.255,0,0,0,10.027,5.572,32.2,32.2,0,0,0,11.41.844l193.225.323s11.023-.518,17.03-8.036,6.322-17.216,6.322-17.216l-.023-365.536Z" transform="translate(-209.503 217.25)" fill-rule="evenodd" opacity="0.1" fill="#fff"/>
          <g id="Icon_feather-wifi" data-name="Icon feather-wifi" transform="translate(204.604 18.122)">
            <path id="Path_2897" data-name="Path 2897" d="M7.5,16.347a5.454,5.454,0,0,1,7.169,0" transform="translate(-5.612 -12.44)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path id="Path_2898" data-name="Path 2898" d="M2.13,9.612a8.1,8.1,0,0,1,10.9,0" transform="translate(-2.13 -7.504)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path id="Path_2899" data-name="Path 2899" d="M12.8,23.087a3.164,3.164,0,0,1,3.665,0" transform="translate(-9.173 -17.36)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path id="Path_2900" data-name="Path 2900" d="M18,30h0" transform="translate(-12.549 -22.273)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </g>
          <path id="Icon_awesome-battery-half" data-name="Icon awesome-battery-half" d="M9.754,7.9V9.045h.574v1.148H9.754V11.34H1.148V7.9H9.754m.287-1.148H.861A.861.861,0,0,0,0,7.611v4.016a.861.861,0,0,0,.861.861h9.18a.861.861,0,0,0,.861-.861V11.34h.143a.43.43,0,0,0,.43-.43V8.328a.43.43,0,0,0-.43-.43H10.9V7.611A.861.861,0,0,0,10.041,6.75Zm-4.3,1.721H1.721v2.3H5.738Z" transform="translate(233.048 12.888)" fill="#fff"/>
          <path id="Icon_awesome-signal" data-name="Icon awesome-signal" d="M6.009,4.927H4.928a.326.326,0,0,0-.36.274V8.486a.326.326,0,0,0,.36.274h1.08a.326.326,0,0,0,.36-.274V5.2A.326.326,0,0,0,6.009,4.927ZM3.128,6.57H2.048a.326.326,0,0,0-.36.274V8.486a.326.326,0,0,0,.36.274h1.08a.326.326,0,0,0,.36-.274V6.843A.326.326,0,0,0,3.128,6.57ZM8.89,3.285H7.809a.326.326,0,0,0-.36.274V8.486a.326.326,0,0,0,.36.274H8.89a.326.326,0,0,0,.36-.274V3.559A.326.326,0,0,0,8.89,3.285ZM11.77,1.642H10.69a.326.326,0,0,0-.36.274v6.57a.326.326,0,0,0,.36.274h1.08a.326.326,0,0,0,.36-.274V1.916A.326.326,0,0,0,11.77,1.642ZM14.651,0h-1.08a.326.326,0,0,0-.36.274V8.486a.326.326,0,0,0,.36.274h1.08a.326.326,0,0,0,.36-.274V.274A.326.326,0,0,0,14.651,0Z" transform="translate(212.671 18.122)" fill="#fff"/>
          <text id="_12:45" data-name="12:45" transform="translate(40.919 26.002)" fill="#fff" font-size="10" font-family="Arimo-SemiBold, Arimo" font-weight="600"><tspan x="0" y="0">12:45</tspan></text>
        </g>
      </svg>
    </div>
`
return svgIphone
}