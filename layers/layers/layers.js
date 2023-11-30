var wms_layers = [];


        var lyr_ESRITerrain_0 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:364.0944657854035,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CNTR_BN_10M_2020_4326_1 = new ol.format.GeoJSON();
var features_CNTR_BN_10M_2020_4326_1 = format_CNTR_BN_10M_2020_4326_1.readFeatures(json_CNTR_BN_10M_2020_4326_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNTR_BN_10M_2020_4326_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNTR_BN_10M_2020_4326_1.addFeatures(features_CNTR_BN_10M_2020_4326_1);
var lyr_CNTR_BN_10M_2020_4326_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CNTR_BN_10M_2020_4326_1,
maxResolution:7858.921340775428,
 minResolution:5226.025446538214,

                style: style_CNTR_BN_10M_2020_4326_1,
                interactive: true,
                title: '<img src="styles/legend/CNTR_BN_10M_2020_4326_1.png" /> CNTR_BN_10M_2020_4326'
            });
var format_PAISESNOVISTADOS_2 = new ol.format.GeoJSON();
var features_PAISESNOVISTADOS_2 = format_PAISESNOVISTADOS_2.readFeatures(json_PAISESNOVISTADOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAISESNOVISTADOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAISESNOVISTADOS_2.addFeatures(features_PAISESNOVISTADOS_2);
var lyr_PAISESNOVISTADOS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAISESNOVISTADOS_2,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_PAISESNOVISTADOS_2,
                interactive: true,
                title: '<img src="styles/legend/PAISESNOVISTADOS_2.png" /> PAISES NO VISTADOS'
            });
var format_provinciasES_3 = new ol.format.GeoJSON();
var features_provinciasES_3 = format_provinciasES_3.readFeatures(json_provinciasES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provinciasES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provinciasES_3.addFeatures(features_provinciasES_3);
var lyr_provinciasES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_provinciasES_3,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_provinciasES_3,
                interactive: true,
                title: '<img src="styles/legend/provinciasES_3.png" /> provincias ES'
            });
var format_comunidadesES_4 = new ol.format.GeoJSON();
var features_comunidadesES_4 = format_comunidadesES_4.readFeatures(json_comunidadesES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunidadesES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunidadesES_4.addFeatures(features_comunidadesES_4);
var lyr_comunidadesES_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comunidadesES_4,
maxResolution:4147.99352200689,
 minResolution:415.9111295069338,

                style: style_comunidadesES_4,
                interactive: true,
                title: '<img src="styles/legend/comunidadesES_4.png" /> comunidades ES'
            });
var format_ESPAA_5 = new ol.format.GeoJSON();
var features_ESPAA_5 = format_ESPAA_5.readFeatures(json_ESPAA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESPAA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPAA_5.addFeatures(features_ESPAA_5);
var lyr_ESPAA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESPAA_5,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_ESPAA_5,
                interactive: true,
                title: '<img src="styles/legend/ESPAA_5.png" /> ESPAÑA'
            });
var format_PORTUGAL_6 = new ol.format.GeoJSON();
var features_PORTUGAL_6 = format_PORTUGAL_6.readFeatures(json_PORTUGAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGAL_6.addFeatures(features_PORTUGAL_6);
var lyr_PORTUGAL_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGAL_6,
maxResolution:5226.025446538214,
 minResolution:364.0944657854035,

                style: style_PORTUGAL_6,
                interactive: true,
                title: '<img src="styles/legend/PORTUGAL_6.png" /> PORTUGAL'
            });
var format_PORTUGALzoommaximo_7 = new ol.format.GeoJSON();
var features_PORTUGALzoommaximo_7 = format_PORTUGALzoommaximo_7.readFeatures(json_PORTUGALzoommaximo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGALzoommaximo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGALzoommaximo_7.addFeatures(features_PORTUGALzoommaximo_7);
var lyr_PORTUGALzoommaximo_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGALzoommaximo_7,
maxResolution:364.0944657854035,
 minResolution:58.43971996654028,

                style: style_PORTUGALzoommaximo_7,
                interactive: true,
                title: '<img src="styles/legend/PORTUGALzoommaximo_7.png" /> PORTUGAL - zoom maximo '
            });
var format_PORTUGALregiones_8 = new ol.format.GeoJSON();
var features_PORTUGALregiones_8 = format_PORTUGALregiones_8.readFeatures(json_PORTUGALregiones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGALregiones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGALregiones_8.addFeatures(features_PORTUGALregiones_8);
var lyr_PORTUGALregiones_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGALregiones_8,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_PORTUGALregiones_8,
                interactive: true,
                title: '<img src="styles/legend/PORTUGALregiones_8.png" /> PORTUGAL - regiones'
            });
var format_PORTUGALconcejosNorte_9 = new ol.format.GeoJSON();
var features_PORTUGALconcejosNorte_9 = format_PORTUGALconcejosNorte_9.readFeatures(json_PORTUGALconcejosNorte_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGALconcejosNorte_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGALconcejosNorte_9.addFeatures(features_PORTUGALconcejosNorte_9);
var lyr_PORTUGALconcejosNorte_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGALconcejosNorte_9,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_PORTUGALconcejosNorte_9,
                interactive: true,
                title: '<img src="styles/legend/PORTUGALconcejosNorte_9.png" /> PORTUGAL - concejos Norte'
            });
var format_PORTUGALconcejosCentro_10 = new ol.format.GeoJSON();
var features_PORTUGALconcejosCentro_10 = format_PORTUGALconcejosCentro_10.readFeatures(json_PORTUGALconcejosCentro_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGALconcejosCentro_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGALconcejosCentro_10.addFeatures(features_PORTUGALconcejosCentro_10);
var lyr_PORTUGALconcejosCentro_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGALconcejosCentro_10,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_PORTUGALconcejosCentro_10,
                interactive: true,
                title: '<img src="styles/legend/PORTUGALconcejosCentro_10.png" /> PORTUGAL - concejos Centro'
            });
var format_PORTUGALconcejosSur_11 = new ol.format.GeoJSON();
var features_PORTUGALconcejosSur_11 = format_PORTUGALconcejosSur_11.readFeatures(json_PORTUGALconcejosSur_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGALconcejosSur_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGALconcejosSur_11.addFeatures(features_PORTUGALconcejosSur_11);
var lyr_PORTUGALconcejosSur_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGALconcejosSur_11,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_PORTUGALconcejosSur_11,
                interactive: true,
                title: '<img src="styles/legend/PORTUGALconcejosSur_11.png" /> PORTUGAL - concejos Sur'
            });
var format_PORTUGALrutasdeviaje_12 = new ol.format.GeoJSON();
var features_PORTUGALrutasdeviaje_12 = format_PORTUGALrutasdeviaje_12.readFeatures(json_PORTUGALrutasdeviaje_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGALrutasdeviaje_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGALrutasdeviaje_12.addFeatures(features_PORTUGALrutasdeviaje_12);
var lyr_PORTUGALrutasdeviaje_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGALrutasdeviaje_12,
maxResolution:748.640593201804,
 minResolution:58.43971996654028,

                style: style_PORTUGALrutasdeviaje_12,
                interactive: true,
                title: '<img src="styles/legend/PORTUGALrutasdeviaje_12.png" /> PORTUGAL - rutas de viaje'
            });
var format_PORTUGALtodos_13 = new ol.format.GeoJSON();
var features_PORTUGALtodos_13 = format_PORTUGALtodos_13.readFeatures(json_PORTUGALtodos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGALtodos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGALtodos_13.addFeatures(features_PORTUGALtodos_13);
var lyr_PORTUGALtodos_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGALtodos_13,
maxResolution:748.640593201804,
 minResolution:58.43971996654028,

                style: style_PORTUGALtodos_13,
                interactive: true,
                title: '<img src="styles/legend/PORTUGALtodos_13.png" /> PORTUGAL - todos'
            });
var format_PORTUGALdestacados_14 = new ol.format.GeoJSON();
var features_PORTUGALdestacados_14 = format_PORTUGALdestacados_14.readFeatures(json_PORTUGALdestacados_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PORTUGALdestacados_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PORTUGALdestacados_14.addFeatures(features_PORTUGALdestacados_14);
var lyr_PORTUGALdestacados_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PORTUGALdestacados_14,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_PORTUGALdestacados_14,
                interactive: true,
                title: '<img src="styles/legend/PORTUGALdestacados_14.png" /> PORTUGAL - destacados'
            });
var format_regionesFR_15 = new ol.format.GeoJSON();
var features_regionesFR_15 = format_regionesFR_15.readFeatures(json_regionesFR_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesFR_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesFR_15.addFeatures(features_regionesFR_15);
var lyr_regionesFR_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesFR_15,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesFR_15,
                interactive: true,
                title: '<img src="styles/legend/regionesFR_15.png" /> regiones FR'
            });
var format_FRANCIA_16 = new ol.format.GeoJSON();
var features_FRANCIA_16 = format_FRANCIA_16.readFeatures(json_FRANCIA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRANCIA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRANCIA_16.addFeatures(features_FRANCIA_16);
var lyr_FRANCIA_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRANCIA_16,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_FRANCIA_16,
                interactive: true,
                title: '<img src="styles/legend/FRANCIA_16.png" /> FRANCIA'
            });
var format_regionesIT_17 = new ol.format.GeoJSON();
var features_regionesIT_17 = format_regionesIT_17.readFeatures(json_regionesIT_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesIT_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesIT_17.addFeatures(features_regionesIT_17);
var lyr_regionesIT_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesIT_17,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesIT_17,
                interactive: true,
                title: '<img src="styles/legend/regionesIT_17.png" /> regiones IT'
            });
var format_ITALIA_18 = new ol.format.GeoJSON();
var features_ITALIA_18 = format_ITALIA_18.readFeatures(json_ITALIA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ITALIA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ITALIA_18.addFeatures(features_ITALIA_18);
var lyr_ITALIA_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ITALIA_18,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_ITALIA_18,
                interactive: true,
                title: '<img src="styles/legend/ITALIA_18.png" /> ITALIA'
            });
var format_regionesBE_19 = new ol.format.GeoJSON();
var features_regionesBE_19 = format_regionesBE_19.readFeatures(json_regionesBE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesBE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesBE_19.addFeatures(features_regionesBE_19);
var lyr_regionesBE_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesBE_19,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesBE_19,
                interactive: true,
                title: '<img src="styles/legend/regionesBE_19.png" /> regiones BE'
            });
var format_BLGICA_20 = new ol.format.GeoJSON();
var features_BLGICA_20 = format_BLGICA_20.readFeatures(json_BLGICA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLGICA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLGICA_20.addFeatures(features_BLGICA_20);
var lyr_BLGICA_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BLGICA_20,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_BLGICA_20,
                interactive: true,
                title: '<img src="styles/legend/BLGICA_20.png" /> BÉLGICA'
            });
var format_regionesHL_21 = new ol.format.GeoJSON();
var features_regionesHL_21 = format_regionesHL_21.readFeatures(json_regionesHL_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesHL_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesHL_21.addFeatures(features_regionesHL_21);
var lyr_regionesHL_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesHL_21,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesHL_21,
                interactive: true,
                title: '<img src="styles/legend/regionesHL_21.png" /> regiones HL'
            });
var format_HOLANDA_22 = new ol.format.GeoJSON();
var features_HOLANDA_22 = format_HOLANDA_22.readFeatures(json_HOLANDA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOLANDA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOLANDA_22.addFeatures(features_HOLANDA_22);
var lyr_HOLANDA_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOLANDA_22,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_HOLANDA_22,
                interactive: true,
                title: '<img src="styles/legend/HOLANDA_22.png" /> HOLANDA'
            });
var format_regionesAL_23 = new ol.format.GeoJSON();
var features_regionesAL_23 = format_regionesAL_23.readFeatures(json_regionesAL_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesAL_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesAL_23.addFeatures(features_regionesAL_23);
var lyr_regionesAL_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesAL_23,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesAL_23,
                interactive: true,
                title: '<img src="styles/legend/regionesAL_23.png" /> regiones AL'
            });
var format_ALEMANIA_24 = new ol.format.GeoJSON();
var features_ALEMANIA_24 = format_ALEMANIA_24.readFeatures(json_ALEMANIA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALEMANIA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALEMANIA_24.addFeatures(features_ALEMANIA_24);
var lyr_ALEMANIA_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ALEMANIA_24,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_ALEMANIA_24,
                interactive: true,
                title: '<img src="styles/legend/ALEMANIA_24.png" /> ALEMANIA'
            });
var format_regionesRC_25 = new ol.format.GeoJSON();
var features_regionesRC_25 = format_regionesRC_25.readFeatures(json_regionesRC_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesRC_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesRC_25.addFeatures(features_regionesRC_25);
var lyr_regionesRC_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesRC_25,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesRC_25,
                interactive: true,
                title: '<img src="styles/legend/regionesRC_25.png" /> regiones RC'
            });
var format_REPCHECA_26 = new ol.format.GeoJSON();
var features_REPCHECA_26 = format_REPCHECA_26.readFeatures(json_REPCHECA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REPCHECA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REPCHECA_26.addFeatures(features_REPCHECA_26);
var lyr_REPCHECA_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REPCHECA_26,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_REPCHECA_26,
                interactive: true,
                title: '<img src="styles/legend/REPCHECA_26.png" /> REP CHECA'
            });
var format_regionesRO_27 = new ol.format.GeoJSON();
var features_regionesRO_27 = format_regionesRO_27.readFeatures(json_regionesRO_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesRO_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesRO_27.addFeatures(features_regionesRO_27);
var lyr_regionesRO_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesRO_27,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesRO_27,
                interactive: true,
                title: '<img src="styles/legend/regionesRO_27.png" /> regiones RO'
            });
var format_RUMANIA_28 = new ol.format.GeoJSON();
var features_RUMANIA_28 = format_RUMANIA_28.readFeatures(json_RUMANIA_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMANIA_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMANIA_28.addFeatures(features_RUMANIA_28);
var lyr_RUMANIA_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMANIA_28,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_RUMANIA_28,
                interactive: true,
                title: '<img src="styles/legend/RUMANIA_28.png" /> RUMANIA'
            });
var format_regionesMA_29 = new ol.format.GeoJSON();
var features_regionesMA_29 = format_regionesMA_29.readFeatures(json_regionesMA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesMA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesMA_29.addFeatures(features_regionesMA_29);
var lyr_regionesMA_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesMA_29,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesMA_29,
                interactive: true,
                title: '<img src="styles/legend/regionesMA_29.png" /> regiones MA'
            });
var format_MARRUECOS_30 = new ol.format.GeoJSON();
var features_MARRUECOS_30 = format_MARRUECOS_30.readFeatures(json_MARRUECOS_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARRUECOS_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARRUECOS_30.addFeatures(features_MARRUECOS_30);
var lyr_MARRUECOS_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARRUECOS_30,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_MARRUECOS_30,
                interactive: true,
                title: '<img src="styles/legend/MARRUECOS_30.png" /> MARRUECOS'
            });
var format_regionesCU_31 = new ol.format.GeoJSON();
var features_regionesCU_31 = format_regionesCU_31.readFeatures(json_regionesCU_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionesCU_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionesCU_31.addFeatures(features_regionesCU_31);
var lyr_regionesCU_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionesCU_31,
maxResolution:748.640593201804,
 minResolution:36.405805997940554,

                style: style_regionesCU_31,
                interactive: true,
                title: '<img src="styles/legend/regionesCU_31.png" /> regiones CU'
            });
var format_CUBA_32 = new ol.format.GeoJSON();
var features_CUBA_32 = format_CUBA_32.readFeatures(json_CUBA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUBA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUBA_32.addFeatures(features_CUBA_32);
var lyr_CUBA_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUBA_32,
maxResolution:5226.025446538214,
 minResolution:415.9111295069338,

                style: style_CUBA_32,
                interactive: true,
                title: '<img src="styles/legend/CUBA_32.png" /> CUBA'
            });
var format_marcaspio_33 = new ol.format.GeoJSON();
var features_marcaspio_33 = format_marcaspio_33.readFeatures(json_marcaspio_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_marcaspio_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_marcaspio_33.addFeatures(features_marcaspio_33);
var lyr_marcaspio_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_marcaspio_33, 
                style: style_marcaspio_33,
                interactive: true,
                title: '<img src="styles/legend/marcaspio_33.png" /> mar caspio'
            });
var format_pinpaisvisitado_34 = new ol.format.GeoJSON();
var features_pinpaisvisitado_34 = format_pinpaisvisitado_34.readFeatures(json_pinpaisvisitado_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pinpaisvisitado_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pinpaisvisitado_34.addFeatures(features_pinpaisvisitado_34);
var lyr_pinpaisvisitado_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pinpaisvisitado_34,
maxResolution:7858.921340775428,
 minResolution:748.640593201804,

                style: style_pinpaisvisitado_34,
                interactive: true,
                title: '<img src="styles/legend/pinpaisvisitado_34.png" /> pin pais visitado'
            });

lyr_ESRITerrain_0.setVisible(true);lyr_CNTR_BN_10M_2020_4326_1.setVisible(true);lyr_PAISESNOVISTADOS_2.setVisible(true);lyr_provinciasES_3.setVisible(true);lyr_comunidadesES_4.setVisible(true);lyr_ESPAA_5.setVisible(true);lyr_PORTUGAL_6.setVisible(true);lyr_PORTUGALzoommaximo_7.setVisible(true);lyr_PORTUGALregiones_8.setVisible(true);lyr_PORTUGALconcejosNorte_9.setVisible(true);lyr_PORTUGALconcejosCentro_10.setVisible(true);lyr_PORTUGALconcejosSur_11.setVisible(true);lyr_PORTUGALrutasdeviaje_12.setVisible(true);lyr_PORTUGALtodos_13.setVisible(true);lyr_PORTUGALdestacados_14.setVisible(true);lyr_regionesFR_15.setVisible(true);lyr_FRANCIA_16.setVisible(true);lyr_regionesIT_17.setVisible(true);lyr_ITALIA_18.setVisible(true);lyr_regionesBE_19.setVisible(true);lyr_BLGICA_20.setVisible(true);lyr_regionesHL_21.setVisible(true);lyr_HOLANDA_22.setVisible(true);lyr_regionesAL_23.setVisible(true);lyr_ALEMANIA_24.setVisible(true);lyr_regionesRC_25.setVisible(true);lyr_REPCHECA_26.setVisible(true);lyr_regionesRO_27.setVisible(true);lyr_RUMANIA_28.setVisible(true);lyr_regionesMA_29.setVisible(true);lyr_MARRUECOS_30.setVisible(true);lyr_regionesCU_31.setVisible(true);lyr_CUBA_32.setVisible(true);lyr_marcaspio_33.setVisible(true);lyr_pinpaisvisitado_34.setVisible(true);
var layersList = [lyr_ESRITerrain_0,lyr_CNTR_BN_10M_2020_4326_1,lyr_PAISESNOVISTADOS_2,lyr_provinciasES_3,lyr_comunidadesES_4,lyr_ESPAA_5,lyr_PORTUGAL_6,lyr_PORTUGALzoommaximo_7,lyr_PORTUGALregiones_8,lyr_PORTUGALconcejosNorte_9,lyr_PORTUGALconcejosCentro_10,lyr_PORTUGALconcejosSur_11,lyr_PORTUGALrutasdeviaje_12,lyr_PORTUGALtodos_13,lyr_PORTUGALdestacados_14,lyr_regionesFR_15,lyr_FRANCIA_16,lyr_regionesIT_17,lyr_ITALIA_18,lyr_regionesBE_19,lyr_BLGICA_20,lyr_regionesHL_21,lyr_HOLANDA_22,lyr_regionesAL_23,lyr_ALEMANIA_24,lyr_regionesRC_25,lyr_REPCHECA_26,lyr_regionesRO_27,lyr_RUMANIA_28,lyr_regionesMA_29,lyr_MARRUECOS_30,lyr_regionesCU_31,lyr_CUBA_32,lyr_marcaspio_33,lyr_pinpaisvisitado_34];
lyr_CNTR_BN_10M_2020_4326_1.set('fieldAliases', {'EU_FLAG': 'EU_FLAG', 'EFTA_FLAG': 'EFTA_FLAG', 'CC_FLAG': 'CC_FLAG', 'OTHR_FLAG': 'OTHR_FLAG', 'COAS_FLAG': 'COAS_FLAG', 'CNTR_BN_ID': 'CNTR_BN_ID', 'POL_STAT': 'POL_STAT', 'CNTR_BN_CO': 'CNTR_BN_CO', 'CNTR_CODE': 'CNTR_CODE', 'FID': 'FID', });
lyr_PAISESNOVISTADOS_2.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', 'FID': 'FID', });
lyr_provinciasES_3.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_comunidadesES_4.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_ESPAA_5.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_PORTUGAL_6.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_PORTUGALzoommaximo_7.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_PORTUGALregiones_8.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'REGION': 'REGION', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_PORTUGALconcejosNorte_9.set('fieldAliases', {'· Concejo': '· Concejo', '· Región': '· Región', '· País': '· País', });
lyr_PORTUGALconcejosCentro_10.set('fieldAliases', {'· Concejo': '· Concejo', '· Región': '· Región', '· País': '· País', });
lyr_PORTUGALconcejosSur_11.set('fieldAliases', {'· Concejo': '· Concejo', '· Región': '· Región', '· País': '· País', });
lyr_PORTUGALrutasdeviaje_12.set('fieldAliases', {'· Ruta': '· Ruta', '· Km': '· Km', });
lyr_PORTUGALtodos_13.set('fieldAliases', {'· Sitio': '· Sitio', '· Info': '· Info', });
lyr_PORTUGALdestacados_14.set('fieldAliases', {'· Sitio': '· Sitio', '· Info': '· Info', 'post': 'post', });
lyr_regionesFR_15.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_FRANCIA_16.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_regionesIT_17.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_ITALIA_18.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_regionesBE_19.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_BLGICA_20.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_regionesHL_21.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_HOLANDA_22.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_regionesAL_23.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_ALEMANIA_24.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_regionesRC_25.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_REPCHECA_26.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_regionesRO_27.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_RUMANIA_28.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_regionesMA_29.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_MARRUECOS_30.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_regionesCU_31.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_CUBA_32.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_marcaspio_33.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_pinpaisvisitado_34.set('fieldAliases', {'PAIS': 'PAIS', 'capital': 'capital', 'post': 'post', });
lyr_CNTR_BN_10M_2020_4326_1.set('fieldImages', {'EU_FLAG': 'TextEdit', 'EFTA_FLAG': 'TextEdit', 'CC_FLAG': 'TextEdit', 'OTHR_FLAG': 'TextEdit', 'COAS_FLAG': 'TextEdit', 'CNTR_BN_ID': 'Range', 'POL_STAT': 'Range', 'CNTR_BN_CO': 'Range', 'CNTR_CODE': 'TextEdit', 'FID': 'Range', });
lyr_PAISESNOVISTADOS_2.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', 'FID': 'TextEdit', });
lyr_provinciasES_3.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_comunidadesES_4.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_ESPAA_5.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_PORTUGAL_6.set('fieldImages', {'GID_0': 'Hidden', 'COUNTRY': 'Hidden', });
lyr_PORTUGALzoommaximo_7.set('fieldImages', {'GID_0': 'Hidden', 'COUNTRY': 'Hidden', });
lyr_PORTUGALregiones_8.set('fieldImages', {'GID_1': 'Hidden', 'GID_0': 'Hidden', 'COUNTRY': 'Hidden', 'REGION': 'Hidden', 'VARNAME_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'CC_1': 'Hidden', 'HASC_1': 'Hidden', 'ISO_1': 'Hidden', });
lyr_PORTUGALconcejosNorte_9.set('fieldImages', {'· Concejo': 'TextEdit', '· Región': 'TextEdit', '· País': 'TextEdit', });
lyr_PORTUGALconcejosCentro_10.set('fieldImages', {'· Concejo': 'TextEdit', '· Región': 'TextEdit', '· País': 'TextEdit', });
lyr_PORTUGALconcejosSur_11.set('fieldImages', {'· Concejo': 'TextEdit', '· Región': 'TextEdit', '· País': 'TextEdit', });
lyr_PORTUGALrutasdeviaje_12.set('fieldImages', {'· Ruta': 'TextEdit', '· Km': 'TextEdit', });
lyr_PORTUGALtodos_13.set('fieldImages', {'· Sitio': 'TextEdit', '· Info': 'TextEdit', });
lyr_PORTUGALdestacados_14.set('fieldImages', {'· Sitio': 'TextEdit', '· Info': 'TextEdit', 'post': 'TextEdit', });
lyr_regionesFR_15.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_FRANCIA_16.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_regionesIT_17.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_ITALIA_18.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_regionesBE_19.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_BLGICA_20.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_regionesHL_21.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_HOLANDA_22.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_regionesAL_23.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_ALEMANIA_24.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_regionesRC_25.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_REPCHECA_26.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_regionesRO_27.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_RUMANIA_28.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_regionesMA_29.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_MARRUECOS_30.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_regionesCU_31.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_CUBA_32.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_marcaspio_33.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_pinpaisvisitado_34.set('fieldImages', {'PAIS': 'TextEdit', 'capital': 'TextEdit', 'post': 'TextEdit', });
lyr_CNTR_BN_10M_2020_4326_1.set('fieldLabels', {'EU_FLAG': 'no label', 'EFTA_FLAG': 'no label', 'CC_FLAG': 'no label', 'OTHR_FLAG': 'no label', 'COAS_FLAG': 'no label', 'CNTR_BN_ID': 'no label', 'POL_STAT': 'no label', 'CNTR_BN_CO': 'no label', 'CNTR_CODE': 'no label', 'FID': 'no label', });
lyr_PAISESNOVISTADOS_2.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', 'FID': 'no label', });
lyr_provinciasES_3.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_comunidadesES_4.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_ESPAA_5.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_PORTUGAL_6.set('fieldLabels', {});
lyr_PORTUGALzoommaximo_7.set('fieldLabels', {});
lyr_PORTUGALregiones_8.set('fieldLabels', {});
lyr_PORTUGALconcejosNorte_9.set('fieldLabels', {'· Concejo': 'header label', '· Región': 'header label', '· País': 'header label', });
lyr_PORTUGALconcejosCentro_10.set('fieldLabels', {'· Concejo': 'header label', '· Región': 'header label', '· País': 'header label', });
lyr_PORTUGALconcejosSur_11.set('fieldLabels', {'· Concejo': 'header label', '· Región': 'header label', '· País': 'header label', });
lyr_PORTUGALrutasdeviaje_12.set('fieldLabels', {'· Ruta': 'header label', '· Km': 'header label', });
lyr_PORTUGALtodos_13.set('fieldLabels', {'· Sitio': 'header label', '· Info': 'header label', });
lyr_PORTUGALdestacados_14.set('fieldLabels', {'· Sitio': 'header label', '· Info': 'header label', 'post': 'no label', });
lyr_regionesFR_15.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_FRANCIA_16.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_regionesIT_17.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_ITALIA_18.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_regionesBE_19.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_BLGICA_20.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'header label', });
lyr_regionesHL_21.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_HOLANDA_22.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_regionesAL_23.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_ALEMANIA_24.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_regionesRC_25.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_REPCHECA_26.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_regionesRO_27.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_RUMANIA_28.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_regionesMA_29.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_MARRUECOS_30.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_regionesCU_31.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_CUBA_32.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_marcaspio_33.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_pinpaisvisitado_34.set('fieldLabels', {'PAIS': 'no label', 'capital': 'no label', 'post': 'no label', });
lyr_pinpaisvisitado_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});