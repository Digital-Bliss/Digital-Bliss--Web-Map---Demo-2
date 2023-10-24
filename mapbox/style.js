
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "NetworkCoverage_1": {
            "type": "geojson",
            "data": json_NetworkCoverage_1
        }
                    ,
        "FiberRoutesDemo_2": {
            "type": "geojson",
            "data": json_FiberRoutesDemo_2
        }
                    ,
        "NetworkCoveragelive_3": {
            "type": "geojson",
            "data": json_NetworkCoveragelive_3
        }
                    ,
        "Sites_4": {
            "type": "geojson",
            "data": json_Sites_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_NetworkCoverage_1_0",
            "type": "fill",
            "source": "NetworkCoverage_1",
            "layout": {},
            "paint": {'fill-opacity': 0.558}
        }
,
        {
            "id": "lyr_FiberRoutesDemo_2_0",
            "type": "line",
            "source": "FiberRoutesDemo_2",
            "layout": {},
            "paint": {'line-width': 3.071428571428571, 'line-opacity': 1.0, 'line-color': '#e51054'}
        }
,
        {
            "id": "lyr_NetworkCoveragelive_3_0",
            "type": "fill",
            "source": "NetworkCoveragelive_3",
            "layout": {},
            "paint": {'fill-opacity': 0.502}
        }
,
        {
            "id": "lyr_Sites_4_0",
            "type": "circle",
            "source": "Sites_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 10.714285714285714, 2], 'circle-color': '#db1e2a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
],
}