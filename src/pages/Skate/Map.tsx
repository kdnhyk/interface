import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import ParkIcon from "../../assets/ParkIcon.png";

const MapBlock = styled.div`
  width: 100vw;
  height: calc(100vh - 46px);
`;

declare global {
  interface Window {
    naver: any;
  }
}

interface IsSpot {
  name: string;
  location: number[];
}

const SpotArray: IsSpot[] = [
  {
    name: "한강 이촌 스케이트 파크",
    location: [37.5194, 126.9662],
  },
  {
    name: "살곶이 보드 파크 익스트림장",
    location: [37.5542, 127.0479],
  },
  {
    name: "서울숲 스케이트 파크",
    location: [37.5463, 127.0485],
  },
];

export default function Map() {
  const mapRef = useRef(null);
  const [myLocation, setMyLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 37.4979517, longitude: 127.0276188 });

  const markerRef = useRef<any | null>(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapRef.current || !naver) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    // 위치추적에 성공했을때 위치 값을 넣어줍니다.
    function success(position: any) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
    function error() {
      console.log("현재 위치를 찾을 수 없습니다");
    }

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(
      myLocation.latitude,
      myLocation.longitude
    );
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: false,
    };
    const map = new naver.maps.Map(mapRef.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });

    // SpotArray.map((item) => {
    //   markerRef.current = new naver.maps.Marker({
    //     position: new naver.maps.LatLng(item.location[0], item.location[1]),
    //     map: mapRef.current,
    //     icon: {
    //       url: { ParkIcon },
    //       size: new naver.maps.Size(38, 58),
    //       anchor: new naver.maps.Point(19, 58),
    //     },
    //   });
    //   // markerClickEvent(markerRef, item);
    // });

    // function markerClickEvent(marker: any, item: IsSpot) {
    //   naver.maps.Event.addListener(marker, "click", (e: any) => {
    //     const mapLatLng = new naver.maps.LatLng(
    //       Number(item?.location[0]),
    //       Number(item?.location[1])
    //     );

    //     // 선택한 마커로 부드럽게 이동합니다.
    //     mapRef.current?.panTo(mapLatLng, e?.coord);
    //   });
    // }
  }, []);

  return <MapBlock ref={mapRef}></MapBlock>;
}
