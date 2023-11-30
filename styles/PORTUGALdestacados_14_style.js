var size = 0;
var placement = 'point';

// Añadimos un nuevo estilo para el texto del punto
var textStyle = new ol.style.Text({
    font: '13.0px \'Quicksand\', sans-serif',
    fill: new ol.style.Fill({
        color: '#323232'
    }),
    offsetX: 8,
    offsetY: 3,
    textAlign: 'left',
    // Necesario para que el texto sea siempre legible
    overflow: true,
});

var style_PORTUGALdestacados_14 = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    size = 0;
    var labelText = "";

    if (feature.get("· Sitio") !== null) {
        labelText = String(feature.get("· Sitio"));
    }

    // Creamos un enlace HTML usando Autolinker.js
    var link = Autolinker.link(feature.get("post"));

    // Añadimos el enlace al contenido del popup
    var popupContent = '<div>' + link + '</div>';

    // Configuramos el estilo del punto y el texto
    var style = [
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 4.0 + size,
                fill: new ol.style.Fill({
                    color: 'rgba(8,24,36,1.0)'
                })
            }),
            text: new ol.style.Text({
                // Configuramos el texto del popup
                text: labelText,
                font: '13.0px \'Quicksand\', sans-serif',
                fill: new ol.style.Fill({
                    color: '#323232'
                }),
                offsetX: 8,
                offsetY: 3,
                textAlign: 'left',
                // Necesario para que el texto sea siempre legible
                overflow: true,
            })
        })
    ];

    // Añadimos el clic para mostrar el popup
    feature.on('click', function (evt) {
        // Centramos el mapa en el punto
        map.getView().animate({
            center: feature.getGeometry().getCoordinates(),
            duration: 500
        });

        // Mostramos el popup con el contenido
        overlay.setPosition(evt.coordinate);
        content.innerHTML = popupContent;
    });

    return style;
};

