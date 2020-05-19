// const { createScopedThreejs } = require('threejs-miniprogram')
import { createScopedThreejs } from "../miniprogram_npm/threejs-miniprogram/index";

const { renderCube } = require("../test-cases/cube");
const { renderCubes } = require("../test-cases/cubes");
const { renderSphere } = require("../test-cases/sphere");
const { renderModel } = require("../test-cases/model");

const app = getApp();

Page({
  data: {},
  onReady() {},
  initCanvas() {
    my.createCanvas({
      id: "webgl",
      success: (canvas) => {
        const THREE = createScopedThreejs(canvas);

        // renderSphere(canvas, THREE)
        // renderCube(canvas, THREE)
        // renderCubes(canvas, THREE)
        renderModel(canvas, THREE);
      },
    });
  },

  test() {
    const fs = my.getFileSystemManager();
    const url = "image/RobotExpressive.glb";
    // const url = "image";

    // fs.readFile({
    //   filePath: url,
    //   success: (res) => {
    //     console.log("res:", res);
    //   },
    // });

    fs.access({
      path: url,
      success: (res) => {
        my.alert({ content: "文件存在:" + JSON.stringify(res) });
        console.log("文件存在", res);
      },
      fail: (err) => {
        my.alert({ content: "文件不存在:" + JSON.stringify(err) });
        console.log("err:", err);
      },
    });
  },
});
