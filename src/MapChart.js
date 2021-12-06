import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
import CountryDataVisual from './CountryDataVisual';
import './map.css';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" height="300" projectionConfig={{ scale: 125 }}>
        <ZoomableGroup>
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(<CountryDataVisual value={geo.properties} />);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  className="geography"
                  style={{
                    default: {
                        // gray
                      fill: "#D6D6DA",
                      outline: "bold"
                    },
                    hover: {
                        // orange
                      // fill: "#F53",
                      fill: "#A4B509",
                      outline: "bold"
                    },
                    pressed: {
                        // also orange
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);

