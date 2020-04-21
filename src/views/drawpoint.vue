<template>
  <div>
    <canvas id="webgl" width="400" height="400"></canvas>
  </div>
</template>
<script>


export default {
  data() {
    return {
      //顶点着色器程序
      VSHADER_SOURCE: 'void main() {\n' +
                      'gl_Position = vec4(0.0,0.0,0.0,1.0);\n'+//坐标
                      'gl_PointSize = 10.0;\n'+//尺寸
                      '}\n',
      //片元着色器
      FSHADER_SOURCE: 'void main() {\n'+
                      'gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n'+//颜色
                      '}\n'
    }
  },
  mounted() {
    this.main();
  },
  methods: {
    main() {
      //获取<canvas>元素
      var canvas = document.getElementById("webgl");
      //获取WebGL绘图上下文
      var gl = getWebGLContext(canvas);
      if (!gl) {
        console.log("Faild to get the rendering context for WebGL");
        return;
      }
      //初始化着色器
      if(!initShaders(gl, this.VSHADER_SOURCE, this.FSHADER_SOURCE)) {
        console.log("Faild to init Shaders");
        return;
      }
      //指定清空<canvas>的颜色
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      //清空canvas
      gl.clear(gl.COLOR_BUFFER_BIT);
      //绘制一个点
      gl.drawArrays(gl.POINTS, 0, 1);
    }
  }
};
</script>
