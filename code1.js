gdjs.Game_32WorldCode = {};
gdjs.Game_32WorldCode.forEachIndex2 = 0;

gdjs.Game_32WorldCode.forEachObjects2 = [];

gdjs.Game_32WorldCode.forEachTemporary2 = null;

gdjs.Game_32WorldCode.forEachTotalCount2 = 0;

gdjs.Game_32WorldCode.GDPlayerObjects1= [];
gdjs.Game_32WorldCode.GDPlayerObjects2= [];
gdjs.Game_32WorldCode.GDPlayerObjects3= [];
gdjs.Game_32WorldCode.GDPlayerObjects4= [];
gdjs.Game_32WorldCode.GDPlayerObjects5= [];
gdjs.Game_32WorldCode.GDDebug_95TextObjects1= [];
gdjs.Game_32WorldCode.GDDebug_95TextObjects2= [];
gdjs.Game_32WorldCode.GDDebug_95TextObjects3= [];
gdjs.Game_32WorldCode.GDDebug_95TextObjects4= [];
gdjs.Game_32WorldCode.GDDebug_95TextObjects5= [];
gdjs.Game_32WorldCode.GDBricksObjects1= [];
gdjs.Game_32WorldCode.GDBricksObjects2= [];
gdjs.Game_32WorldCode.GDBricksObjects3= [];
gdjs.Game_32WorldCode.GDBricksObjects4= [];
gdjs.Game_32WorldCode.GDBricksObjects5= [];
gdjs.Game_32WorldCode.GDVillagerObjects1= [];
gdjs.Game_32WorldCode.GDVillagerObjects2= [];
gdjs.Game_32WorldCode.GDVillagerObjects3= [];
gdjs.Game_32WorldCode.GDVillagerObjects4= [];
gdjs.Game_32WorldCode.GDVillagerObjects5= [];
gdjs.Game_32WorldCode.GDFlowersObjects1= [];
gdjs.Game_32WorldCode.GDFlowersObjects2= [];
gdjs.Game_32WorldCode.GDFlowersObjects3= [];
gdjs.Game_32WorldCode.GDFlowersObjects4= [];
gdjs.Game_32WorldCode.GDFlowersObjects5= [];
gdjs.Game_32WorldCode.GDGUI_95HeartObjects1= [];
gdjs.Game_32WorldCode.GDGUI_95HeartObjects2= [];
gdjs.Game_32WorldCode.GDGUI_95HeartObjects3= [];
gdjs.Game_32WorldCode.GDGUI_95HeartObjects4= [];
gdjs.Game_32WorldCode.GDGUI_95HeartObjects5= [];
gdjs.Game_32WorldCode.GDParticle_95GoldObjects1= [];
gdjs.Game_32WorldCode.GDParticle_95GoldObjects2= [];
gdjs.Game_32WorldCode.GDParticle_95GoldObjects3= [];
gdjs.Game_32WorldCode.GDParticle_95GoldObjects4= [];
gdjs.Game_32WorldCode.GDParticle_95GoldObjects5= [];

gdjs.Game_32WorldCode.conditionTrue_0 = {val:false};
gdjs.Game_32WorldCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32WorldCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32WorldCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32WorldCode.condition3IsTrue_0 = {val:false};
gdjs.Game_32WorldCode.condition4IsTrue_0 = {val:false};
gdjs.Game_32WorldCode.condition5IsTrue_0 = {val:false};
gdjs.Game_32WorldCode.conditionTrue_1 = {val:false};
gdjs.Game_32WorldCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32WorldCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32WorldCode.condition2IsTrue_1 = {val:false};
gdjs.Game_32WorldCode.condition3IsTrue_1 = {val:false};
gdjs.Game_32WorldCode.condition4IsTrue_1 = {val:false};
gdjs.Game_32WorldCode.condition5IsTrue_1 = {val:false};
gdjs.Game_32WorldCode.conditionTrue_2 = {val:false};
gdjs.Game_32WorldCode.condition0IsTrue_2 = {val:false};
gdjs.Game_32WorldCode.condition1IsTrue_2 = {val:false};
gdjs.Game_32WorldCode.condition2IsTrue_2 = {val:false};
gdjs.Game_32WorldCode.condition3IsTrue_2 = {val:false};
gdjs.Game_32WorldCode.condition4IsTrue_2 = {val:false};
gdjs.Game_32WorldCode.condition5IsTrue_2 = {val:false};


gdjs.Game_32WorldCode.eventsList0 = function(runtimeScene) {

};gdjs.Game_32WorldCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Game_32WorldCode.eventsList0(runtimeScene);
}


{


{
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setString("idle");
}
}}

}


};gdjs.Game_32WorldCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition0IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8418020);
}
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].setAnimationName("Idle");
}
}}

}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition0IsTrue_0;
gdjs.Game_32WorldCode.condition0IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition2IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition3IsTrue_1.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Game_32WorldCode.condition0IsTrue_1.val ) {
    gdjs.Game_32WorldCode.conditionTrue_1.val = true;
}
}
{
gdjs.Game_32WorldCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Game_32WorldCode.condition1IsTrue_1.val ) {
    gdjs.Game_32WorldCode.conditionTrue_1.val = true;
}
}
{
gdjs.Game_32WorldCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.Game_32WorldCode.condition2IsTrue_1.val ) {
    gdjs.Game_32WorldCode.conditionTrue_1.val = true;
}
}
{
gdjs.Game_32WorldCode.condition3IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Game_32WorldCode.condition3IsTrue_1.val ) {
    gdjs.Game_32WorldCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)).setString("moving");
}
}}

}


{

/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects3 */

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition0IsTrue_0;
gdjs.Game_32WorldCode.condition0IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Game_32WorldCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariableNumber(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs.Game_32WorldCode.condition1IsTrue_1.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects3[k] = gdjs.Game_32WorldCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects3.length = k;}}
gdjs.Game_32WorldCode.conditionTrue_1.val = true && gdjs.Game_32WorldCode.condition0IsTrue_1.val && gdjs.Game_32WorldCode.condition1IsTrue_1.val;
}
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setString("attacking");
}
}}

}


};gdjs.Game_32WorldCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].setAnimation(1 + Math.round((gdjs.Game_32WorldCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").getAngle()) / 45) / 2);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_0.val = false;
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition0IsTrue_0;
gdjs.Game_32WorldCode.condition0IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition2IsTrue_1.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Game_32WorldCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.Game_32WorldCode.condition1IsTrue_1.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects4[k] = gdjs.Game_32WorldCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects4.length = k;}if ( gdjs.Game_32WorldCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariableNumber(gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Game_32WorldCode.condition2IsTrue_1.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects4[k] = gdjs.Game_32WorldCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects4.length = k;}}
}
gdjs.Game_32WorldCode.conditionTrue_1.val = true && gdjs.Game_32WorldCode.condition0IsTrue_1.val && gdjs.Game_32WorldCode.condition1IsTrue_1.val && gdjs.Game_32WorldCode.condition2IsTrue_1.val;
}
}if ( gdjs.Game_32WorldCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition1IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8425860);
}
}}
if (gdjs.Game_32WorldCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)).setString("dashing");
}
}}

}


{



}


{

gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition0IsTrue_0;
gdjs.Game_32WorldCode.condition0IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition2IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition3IsTrue_1.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Game_32WorldCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariableNumber(gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs.Game_32WorldCode.condition1IsTrue_1.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects4[k] = gdjs.Game_32WorldCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects4.length = k;}if ( gdjs.Game_32WorldCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariableNumber(gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs.Game_32WorldCode.condition2IsTrue_1.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects4[k] = gdjs.Game_32WorldCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects4.length = k;}if ( gdjs.Game_32WorldCode.condition2IsTrue_1.val ) {
{
{gdjs.Game_32WorldCode.conditionTrue_2 = gdjs.Game_32WorldCode.condition3IsTrue_1;
gdjs.Game_32WorldCode.conditionTrue_2.val = runtimeScene.getOnceTriggers().triggerOnce(8429308);
}
}}
}
}
gdjs.Game_32WorldCode.conditionTrue_1.val = true && gdjs.Game_32WorldCode.condition0IsTrue_1.val && gdjs.Game_32WorldCode.condition1IsTrue_1.val && gdjs.Game_32WorldCode.condition2IsTrue_1.val && gdjs.Game_32WorldCode.condition3IsTrue_1.val;
}
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)).setString("attacking");
}
}}

}


{



}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition0IsTrue_0;
gdjs.Game_32WorldCode.condition0IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition2IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition3IsTrue_1.val = false;
gdjs.Game_32WorldCode.condition4IsTrue_1.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
}if ( gdjs.Game_32WorldCode.condition0IsTrue_1.val ) {
{
gdjs.Game_32WorldCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
}if ( gdjs.Game_32WorldCode.condition1IsTrue_1.val ) {
{
gdjs.Game_32WorldCode.condition2IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if ( gdjs.Game_32WorldCode.condition2IsTrue_1.val ) {
{
gdjs.Game_32WorldCode.condition3IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
}if ( gdjs.Game_32WorldCode.condition3IsTrue_1.val ) {
{
gdjs.Game_32WorldCode.condition4IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}}
}
}
}
gdjs.Game_32WorldCode.conditionTrue_1.val = true && gdjs.Game_32WorldCode.condition0IsTrue_1.val && gdjs.Game_32WorldCode.condition1IsTrue_1.val && gdjs.Game_32WorldCode.condition2IsTrue_1.val && gdjs.Game_32WorldCode.condition3IsTrue_1.val && gdjs.Game_32WorldCode.condition4IsTrue_1.val;
}
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setString("idle");
}
}}

}


};gdjs.Game_32WorldCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.Game_32WorldCode.eventsList3(runtimeScene);
}


};gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDParticle_9595GoldObjects4Objects = Hashtable.newFrom({"Particle_Gold": gdjs.Game_32WorldCode.GDParticle_95GoldObjects4});gdjs.Game_32WorldCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects3, gdjs.Game_32WorldCode.GDPlayerObjects4);


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariableString(gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) == "attacking" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects4[k] = gdjs.Game_32WorldCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects4.length = k;}if ( gdjs.Game_32WorldCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition1IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8431812);
}
}}
if (gdjs.Game_32WorldCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects4 */
gdjs.Game_32WorldCode.GDParticle_95GoldObjects4.length = 0;

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].setAnimationName("Attack_01");
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects4[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects4[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDParticle_9595GoldObjects4Objects, (( gdjs.Game_32WorldCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32WorldCode.GDPlayerObjects4[0].getPointX("")) + 8, (( gdjs.Game_32WorldCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32WorldCode.GDPlayerObjects4[0].getPointY("")) - 8, "");
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDParticle_95GoldObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDParticle_95GoldObjects4[i].setAngle(-(90));
}
}}

}


{

/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects3 */

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects3[i].hasAnimationEnded() ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects3[k] = gdjs.Game_32WorldCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects3.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects3 */
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "AtkCooldown");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AtkCooldown");
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setString("moving");
}
}}

}


};gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.Game_32WorldCode.GDPlayerObjects3});gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDBricksObjects3Objects = Hashtable.newFrom({"Bricks": gdjs.Game_32WorldCode.GDBricksObjects3});gdjs.Game_32WorldCode.eventsList6 = function(runtimeScene) {

{



}


{



}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition0IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8435204);
}
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects2, gdjs.Game_32WorldCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].addPolarForce((gdjs.Game_32WorldCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").getAngle()), (gdjs.RuntimeObject.getVariableNumber(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(4))), 1);
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].resetTimer("DashTime");
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].unpauseTimer("DashTime");
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "DashCooldown");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DashCooldown");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Game_32WorldCode.GDBricksObjects3);
gdjs.copyArray(gdjs.Game_32WorldCode.GDPlayerObjects2, gdjs.Game_32WorldCode.GDPlayerObjects3);


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDPlayerObjects3Objects, gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDBricksObjects3Objects, false, runtimeScene, false);
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects3[i].clearForces();
}
}}

}


{

/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects2 */

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects2[i].timerElapsedTime("DashTime", (gdjs.RuntimeObject.getVariableNumber(gdjs.Game_32WorldCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)))) ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects2[k] = gdjs.Game_32WorldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects2.length = k;}if ( gdjs.Game_32WorldCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition1IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8437556);
}
}}
if (gdjs.Game_32WorldCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects2[i].resetTimer("DashTime");
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects2[i].pauseTimer("DashTime");
}
}{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("moving");
}
}}

}


};gdjs.Game_32WorldCode.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects3);

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariableString(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == "init" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects3[k] = gdjs.Game_32WorldCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects3.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32WorldCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects3);

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariableString(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == "idle" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects3[k] = gdjs.Game_32WorldCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects3.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32WorldCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects3);

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariableString(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == "moving" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects3[k] = gdjs.Game_32WorldCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects3.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32WorldCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects3);

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariableString(gdjs.Game_32WorldCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == "attacking" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects3[k] = gdjs.Game_32WorldCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects3.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32WorldCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects2);

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32WorldCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "dashing" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDPlayerObjects2[k] = gdjs.Game_32WorldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDPlayerObjects2.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32WorldCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDBricksObjects2Objects = Hashtable.newFrom({"Bricks": gdjs.Game_32WorldCode.GDBricksObjects2});gdjs.Game_32WorldCode.eventsList8 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Game_32WorldCode.GDBricksObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDBricksObjects2Objects, false);
}
}}

}


};gdjs.Game_32WorldCode.eventsList9 = function(runtimeScene) {

{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "DashCooldown");
}if ( gdjs.Game_32WorldCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition1IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8375004);
}
}}
if (gdjs.Game_32WorldCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "DashCooldown");
}}

}


{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "AtkCooldown");
}if ( gdjs.Game_32WorldCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition1IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8376052);
}
}}
if (gdjs.Game_32WorldCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32WorldCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "AtkCooldown");
}}

}


};gdjs.Game_32WorldCode.eventsList10 = function(runtimeScene) {

{


gdjs.Game_32WorldCode.eventsList7(runtimeScene);
}


{


gdjs.Game_32WorldCode.eventsList8(runtimeScene);
}


{


gdjs.Game_32WorldCode.eventsList9(runtimeScene);
}


};gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDVillagerObjects3Objects = Hashtable.newFrom({"Villager": gdjs.Game_32WorldCode.GDVillagerObjects3});gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.Game_32WorldCode.GDPlayerObjects3});gdjs.Game_32WorldCode.eventsList11 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(gdjs.Game_32WorldCode.GDVillagerObjects3, gdjs.Game_32WorldCode.GDVillagerObjects4);

{for(var i = 0, len = gdjs.Game_32WorldCode.GDVillagerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDVillagerObjects4[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects3);
/* Reuse gdjs.Game_32WorldCode.GDVillagerObjects3 */

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
gdjs.Game_32WorldCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDVillagerObjects3Objects, gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDPlayerObjects3Objects, 100, false);
}if ( gdjs.Game_32WorldCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition1IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7768044);
}
}}
if (gdjs.Game_32WorldCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDVillagerObjects3 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDVillagerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDVillagerObjects3[i].returnVariable(gdjs.Game_32WorldCode.GDVillagerObjects3[i].getVariables().getFromIndex(0)).setString("fleeing");
}
}}

}


};gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDVillagerObjects4Objects = Hashtable.newFrom({"Villager": gdjs.Game_32WorldCode.GDVillagerObjects4});gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.Game_32WorldCode.GDPlayerObjects4});gdjs.Game_32WorldCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Game_32WorldCode.GDVillagerObjects3, gdjs.Game_32WorldCode.GDVillagerObjects4);


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDVillagerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDVillagerObjects4[i].getVariableString(gdjs.Game_32WorldCode.GDVillagerObjects4[i].getVariables().getFromIndex(0)) == "fleeing" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDVillagerObjects4[k] = gdjs.Game_32WorldCode.GDVillagerObjects4[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDVillagerObjects4.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDVillagerObjects4 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDVillagerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDVillagerObjects4[i].setAnimationName("fleeing");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects4);
gdjs.copyArray(gdjs.Game_32WorldCode.GDVillagerObjects3, gdjs.Game_32WorldCode.GDVillagerObjects4);


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32WorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDVillagerObjects4Objects, gdjs.Game_32WorldCode.mapOfGDgdjs_46Game_9532WorldCode_46GDPlayerObjects4Objects, 100, false);
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDPlayerObjects4 */
/* Reuse gdjs.Game_32WorldCode.GDVillagerObjects4 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDVillagerObjects4.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDVillagerObjects4[i].getBehavior("Pathfinding").moveTo(runtimeScene, -(((( gdjs.Game_32WorldCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32WorldCode.GDPlayerObjects4[0].getPointX("")) - (gdjs.Game_32WorldCode.GDVillagerObjects4[i].getPointX("")))) + (gdjs.Game_32WorldCode.GDVillagerObjects4[i].getPointX("")) + gdjs.randomInRange(-(10), 10), -(((( gdjs.Game_32WorldCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32WorldCode.GDPlayerObjects4[0].getPointY("")) - (gdjs.Game_32WorldCode.GDVillagerObjects4[i].getPointY("")))) + (gdjs.Game_32WorldCode.GDVillagerObjects4[i].getPointY("")) + gdjs.randomInRange(-(10), 10));
}
}}

}


{

/* Reuse gdjs.Game_32WorldCode.GDVillagerObjects3 */

gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDVillagerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDVillagerObjects3[i].getBehavior("Pathfinding").destinationReached() ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDVillagerObjects3[k] = gdjs.Game_32WorldCode.GDVillagerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDVillagerObjects3.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32WorldCode.GDVillagerObjects3 */
{for(var i = 0, len = gdjs.Game_32WorldCode.GDVillagerObjects3.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDVillagerObjects3[i].returnVariable(gdjs.Game_32WorldCode.GDVillagerObjects3[i].getVariables().getFromIndex(0)).setString("idle");
}
}}

}


};gdjs.Game_32WorldCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32WorldCode.GDVillagerObjects2, gdjs.Game_32WorldCode.GDVillagerObjects3);


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDVillagerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDVillagerObjects3[i].getVariableString(gdjs.Game_32WorldCode.GDVillagerObjects3[i].getVariables().getFromIndex(0)) == "idle" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDVillagerObjects3[k] = gdjs.Game_32WorldCode.GDVillagerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDVillagerObjects3.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32WorldCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Game_32WorldCode.GDVillagerObjects2, gdjs.Game_32WorldCode.GDVillagerObjects3);


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32WorldCode.GDVillagerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32WorldCode.GDVillagerObjects3[i].getVariableString(gdjs.Game_32WorldCode.GDVillagerObjects3[i].getVariables().getFromIndex(0)) == "fleeing" ) {
        gdjs.Game_32WorldCode.condition0IsTrue_0.val = true;
        gdjs.Game_32WorldCode.GDVillagerObjects3[k] = gdjs.Game_32WorldCode.GDVillagerObjects3[i];
        ++k;
    }
}
gdjs.Game_32WorldCode.GDVillagerObjects3.length = k;}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32WorldCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32WorldCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Villager"), gdjs.Game_32WorldCode.GDVillagerObjects1);

for(gdjs.Game_32WorldCode.forEachIndex2 = 0;gdjs.Game_32WorldCode.forEachIndex2 < gdjs.Game_32WorldCode.GDVillagerObjects1.length;++gdjs.Game_32WorldCode.forEachIndex2) {
gdjs.Game_32WorldCode.GDVillagerObjects2.length = 0;


gdjs.Game_32WorldCode.forEachTemporary2 = gdjs.Game_32WorldCode.GDVillagerObjects1[gdjs.Game_32WorldCode.forEachIndex2];
gdjs.Game_32WorldCode.GDVillagerObjects2.push(gdjs.Game_32WorldCode.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.Game_32WorldCode.eventsList13(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Game_32WorldCode.eventsList15 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Debug_Text"), gdjs.Game_32WorldCode.GDDebug_95TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32WorldCode.GDDebug_95TextObjects2.length ;i < len;++i) {
    gdjs.Game_32WorldCode.GDDebug_95TextObjects2[i].setString("State: " + (gdjs.RuntimeObject.getVariableString(((gdjs.Game_32WorldCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32WorldCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) + " \n   CanDash: " + (gdjs.RuntimeObject.getVariableString(((gdjs.Game_32WorldCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32WorldCode.GDPlayerObjects2[0].getVariables()).getFromIndex(1))) + "   CanAttack: " + (gdjs.RuntimeObject.getVariableString(((gdjs.Game_32WorldCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32WorldCode.GDPlayerObjects2[0].getVariables()).getFromIndex(3))));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32WorldCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32WorldCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32WorldCode.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32WorldCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32WorldCode.GDPlayerObjects1[0] : null), true, "Player", 0);
}}

}


};gdjs.Game_32WorldCode.eventsList16 = function(runtimeScene) {

{


gdjs.Game_32WorldCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32WorldCode.conditionTrue_1 = gdjs.Game_32WorldCode.condition0IsTrue_0;
gdjs.Game_32WorldCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8368572);
}
}if (gdjs.Game_32WorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Main Game Theme.ogg", 0, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 1);
}}

}


{


gdjs.Game_32WorldCode.eventsList10(runtimeScene);
}


{


gdjs.Game_32WorldCode.eventsList14(runtimeScene);
}


{


gdjs.Game_32WorldCode.eventsList15(runtimeScene);
}


};

gdjs.Game_32WorldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32WorldCode.GDPlayerObjects1.length = 0;
gdjs.Game_32WorldCode.GDPlayerObjects2.length = 0;
gdjs.Game_32WorldCode.GDPlayerObjects3.length = 0;
gdjs.Game_32WorldCode.GDPlayerObjects4.length = 0;
gdjs.Game_32WorldCode.GDPlayerObjects5.length = 0;
gdjs.Game_32WorldCode.GDDebug_95TextObjects1.length = 0;
gdjs.Game_32WorldCode.GDDebug_95TextObjects2.length = 0;
gdjs.Game_32WorldCode.GDDebug_95TextObjects3.length = 0;
gdjs.Game_32WorldCode.GDDebug_95TextObjects4.length = 0;
gdjs.Game_32WorldCode.GDDebug_95TextObjects5.length = 0;
gdjs.Game_32WorldCode.GDBricksObjects1.length = 0;
gdjs.Game_32WorldCode.GDBricksObjects2.length = 0;
gdjs.Game_32WorldCode.GDBricksObjects3.length = 0;
gdjs.Game_32WorldCode.GDBricksObjects4.length = 0;
gdjs.Game_32WorldCode.GDBricksObjects5.length = 0;
gdjs.Game_32WorldCode.GDVillagerObjects1.length = 0;
gdjs.Game_32WorldCode.GDVillagerObjects2.length = 0;
gdjs.Game_32WorldCode.GDVillagerObjects3.length = 0;
gdjs.Game_32WorldCode.GDVillagerObjects4.length = 0;
gdjs.Game_32WorldCode.GDVillagerObjects5.length = 0;
gdjs.Game_32WorldCode.GDFlowersObjects1.length = 0;
gdjs.Game_32WorldCode.GDFlowersObjects2.length = 0;
gdjs.Game_32WorldCode.GDFlowersObjects3.length = 0;
gdjs.Game_32WorldCode.GDFlowersObjects4.length = 0;
gdjs.Game_32WorldCode.GDFlowersObjects5.length = 0;
gdjs.Game_32WorldCode.GDGUI_95HeartObjects1.length = 0;
gdjs.Game_32WorldCode.GDGUI_95HeartObjects2.length = 0;
gdjs.Game_32WorldCode.GDGUI_95HeartObjects3.length = 0;
gdjs.Game_32WorldCode.GDGUI_95HeartObjects4.length = 0;
gdjs.Game_32WorldCode.GDGUI_95HeartObjects5.length = 0;
gdjs.Game_32WorldCode.GDParticle_95GoldObjects1.length = 0;
gdjs.Game_32WorldCode.GDParticle_95GoldObjects2.length = 0;
gdjs.Game_32WorldCode.GDParticle_95GoldObjects3.length = 0;
gdjs.Game_32WorldCode.GDParticle_95GoldObjects4.length = 0;
gdjs.Game_32WorldCode.GDParticle_95GoldObjects5.length = 0;

gdjs.Game_32WorldCode.eventsList16(runtimeScene);
return;

}

gdjs['Game_32WorldCode'] = gdjs.Game_32WorldCode;
