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
gdjs.OptionsCode.GDtempBackObjects1= [];
gdjs.OptionsCode.GDtempBackObjects2= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};
gdjs.OptionsCode.condition2IsTrue_0 = {val:false};
gdjs.OptionsCode.conditionTrue_1 = {val:false};
gdjs.OptionsCode.condition0IsTrue_1 = {val:false};
gdjs.OptionsCode.condition1IsTrue_1 = {val:false};
gdjs.OptionsCode.condition2IsTrue_1 = {val:false};


gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDtempBackObjects1Objects = Hashtable.newFrom({"tempBack": gdjs.OptionsCode.GDtempBackObjects1});gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.OptionsCode.eventsList1 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8154748);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VolumeSlider"), gdjs.OptionsCode.GDVolumeSliderObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeSliderObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


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


{

gdjs.copyArray(runtimeScene.getObjects("tempBack"), gdjs.OptionsCode.GDtempBackObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDtempBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList0(runtimeScene);} //End of subevents
}

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
gdjs.OptionsCode.GDtempBackObjects1.length = 0;
gdjs.OptionsCode.GDtempBackObjects2.length = 0;

gdjs.OptionsCode.eventsList1(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
