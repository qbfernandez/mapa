var size = 0;
var placement = 'point';

var style_PORTUGALdestacados_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Quicksand\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("· Sitio") !== null) {
        labelText = String(feature.get("· Sitio"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
             fill: new ol.style.Fill({color: 'rgba(8,24,36,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
