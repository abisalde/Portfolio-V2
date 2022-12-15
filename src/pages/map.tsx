import * as React from "react";
import type { HeadFC } from "gatsby";

/**
 * ? Local Imports
 */

import { SEO } from "@portfolio-components/seo";
import { Spinner } from "flowbite-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Map: React.FC = ({ transitionStatus, entry }: any) => {
  function MyMapComponent({ center, zoom }: { center: google.maps.LatLngLiteral; zoom: number }) {
    const ref = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
      new window.google.maps.Map(ref.current as HTMLDivElement, {
        center,
        zoom,
      });
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
    <Wrapper apiKey={"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"} render={render}>
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default Map;

export const Head: HeadFC = () => <SEO pathname={"/map"} title="Map Me" />;
