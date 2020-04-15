function main() {
    //获取<canvas>元素
    var canvas = document.getElementById('webgl');
    //获取webgl图形上下文
    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log('Faild to get the rendering context for WebGL');
        return;
    }
    //指定清空<canvas>的颜色
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    //清空canvas
    gl.clear(gl.COLO)
}