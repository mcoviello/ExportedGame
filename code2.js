gdjs.OptionsCode = {};
gdjs.OptionsCode.GDFullscreenObjects1= [];
gdjs.OptionsCode.GDFullscreenObjects2= [];
gdjs.OptionsCode.GDFullscrToggleObjects1= [];
gdjs.OptionsCode.GDFullscrToggleObjects2= [];
gdjs.OptionsCode.GDVolumeSliderObjects1= [];
gdjs.OptionsCode.GDVolumeSliderObjects2= [];
gdjs.OptionsCode.GDBorderObjects1= [];
gdjs.OptionsCode.GDBorderObjects2= [];
gdjs.OptionsCode.GDVolumeObjects1= [];
gdjs.OptionsCode.GDVolumeObjects2= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};


gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("VolumeSlider"), gdjs.OptionsCode.GDVolumeSliderObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDVolumeSliderObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDVolumeSliderObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDVolumeSliderObjects1[k] = gdjs.OptionsCode.GDVolumeSliderObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDVolumeSliderObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDVolumeSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.OptionsCode.GDVolumeSliderObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDVolumeSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDFullscreenObjects1.length = 0;
gdjs.OptionsCode.GDFullscreenObjects2.length = 0;
gdjs.OptionsCode.GDFullscrToggleObjects1.length = 0;
gdjs.OptionsCode.GDFullscrToggleObjects2.length = 0;
gdjs.OptionsCode.GDVolumeSliderObjects1.length = 0;
gdjs.OptionsCode.GDVolumeSliderObjects2.length = 0;
gdjs.OptionsCode.GDBorderObjects1.length = 0;
gdjs.OptionsCode.GDBorderObjects2.length = 0;
gdjs.OptionsCode.GDVolumeObjects1.length = 0;
gdjs.OptionsCode.GDVolumeObjects2.length = 0;

gdjs.OptionsCode.eventsList0(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
