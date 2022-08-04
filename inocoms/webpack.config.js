const path = require('path');

module.exports = {
    mode: "development", // "production" || "development" || "none"
    // entry 속성은 최상위 자바스크립트를 의미하며
    // 이 속성에 명시된 파일을 기준으로 의존성 트리를 만들어 하나의 번틀 파일을 만든다.
    entry : "./src/index.js",
    // output 속성은 컴파일 + 번들링 된 js 파일이 저장될 경로와 이름을 지정한다.
    output : { 
        path : path.resolve(__dirname, "bundleBuild"),
        filename : 'build.js'
    },
    // module 속성은 로더를 설정해주는 역할을 한다.
    // webpack은 js뿐만 아니라 Loader를 이용하여 CSS나 이미지, 웹폰트, jSX, VUE 등
    // 다양한 종류의 파일을 함께 번들링 할 수 있는데 그 설정을 여기서 하는 것이다.
    module: {
        rules: [],
      },
}