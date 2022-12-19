import * as React from "react";
import type { HeadFC } from "gatsby";

/**
 * ? Local Imports
 */

import { SEO } from "@portfolio-components/seo";
import { Spinner } from "flowbite-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

declare global {
  interface Window {
    initMap: () => void;
  }
}

const Map: React.FC = ({ transitionStatus, entry }: any) => {
  function MyMapComponent({ center, zoom }: { center: google.maps.LatLngLiteral; zoom: number }) {
    const ref = React.createRef<HTMLDivElement>();

    // function initMap(): void {
    //   new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    //   });
    // }
    // window.initMap = initMap;
    React.useEffect(() => {
      new window.google.maps.Map(ref.current as HTMLDivElement, {
        center,
        zoom,
      });

      // initMap();
    }, []);

    return <div ref={ref} id="map" />;
  }

  const render = (status: Status): React.ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <></>;
  };

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <Wrapper apiKey={"AIzaSyBtninS1JvXDdWUNcZspWURij-t9gcQKkE"} render={render}>
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default Map;

export const Head: HeadFC = () => <SEO pathname={"/map"} title="Map Me" />;
