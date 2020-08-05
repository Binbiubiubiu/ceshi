// const { createScopedThreejs } = require('threejs-miniprogram')
import { createScopedThreejs } from "../miniprogram_npm/threejs-miniprogram/index";

const { renderCube } = require("../test-cases/cube");
const { renderCubes } = require("../test-cases/cubes");
const { renderSphere } = require("../test-cases/sphere");
const { renderModel } = require("../test-cases/model");
const { renderModel1 } = require("../test-cases/model_1");

const app = getApp();

Page({
  data: {},
  onReady() { },
  loadNetModel() {
    my.createCanvas({
      id: "webgl",
      success: (canvas) => {
        const THREE = createScopedThreejs(canvas);

        // renderSphere(canvas, THREE)
        // renderCube(canvas, THREE)
        // renderCubes(canvas, THREE)
        renderModel1(canvas, THREE);
      },
    });
  },

  loadLocalModel() {
    try{
my.createCanvas({
      id: "webgl",
      success: (canvas) => {
        console.log(canvas)
        const THREE = createScopedThreejs(canvas);

        // renderSphere(canvas, THREE)
        // renderCube(canvas, THREE)
        // renderCubes(canvas, THREE)
        renderModel(canvas, THREE);
      },
    });
    }catch(e){
      my.alert({
        content:e.message
      })
    }
    
  },
});
