import React from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  Container,
  MavicBox,
  Title,
  Subtitle,
  Detail,
  PhotoMavic,
  Buttons,
  Buy,
  More,
} from "./styled";

const drones = [
  {
    title: <img src={`images/air2sLogo.svg`} />,
    subtitle:
      "Integrated with a 1-inch camera sensor for up to 5.4K UHD video, 12km transmission range, and intelligent shooting modes like MasterShots, DJI Air 2S is an all-in-one film crew that records your adventures with ease.",
    photo: <img src={`images/air2s.jpg`} />,
    buy: (
      <Buy>
        <a
          href="https://store.dji.com/product/dji-air-2s?site=brandsite&from=landing_page"
          target="_blank"
        >
          Buy Now
        </a>
      </Buy>
    ),
    more: (
      <More>
        <a
          target=""
          href="https://www.dji.com/air-2s?site=brandsite&from=landing_page"
        >
          Learn More
          <FaAngleRight />
        </a>
      </More>
    ),
  },
  {
    title: <img src={`images/mini2Logo.svg`} />,
    subtitle:
      "Small but mighty, DJI Mini 2 features 4K videos, 4x Zoom, and stunning panoramas, allowing you to explore a whole new perspective.",
    photo: <img src={`images/mini2.jpg`} />,
    buy: (
      <Buy>
        <a
          href="https://store.dji.com/product/mini-2?site=brandsite&from=landing_page"
          target="_blank"
        >
          Buy Now
        </a>
      </Buy>
    ),
    more: (
      <More>
        <a
          target=""
          href="https://www.dji.com/mini-2?site=brandsite&from=landing_page"
        >
          Learn More
          <FaAngleRight />
        </a>
      </More>
    ),
  },
  {
    title: <img src={`images/air2.svg`} />,
    subtitle:
      "Mavic Air 2 takes camera and flight performance to the next level with 48MP photos, 4K/60fps video, up to 34 minutes of flight time, and more.",
    photo: <img src={`images/air2.jpg`} />,
    buy: (
      <Buy>
        <a
          href="https://store.dji.com/product/mavic-air-2?site=brandsite&from=landing_page"
          target="_blank"
        >
          Buy Now
        </a>
      </Buy>
    ),
    more: (
      <More>
        <a
          target=""
          href="https://www.dji.com/mavic-air-2?site=brandsite&from=landing_page"
        >
          Learn More
          <FaAngleRight />
        </a>
      </More>
    ),
  },
  {
    title: <img src={`images/mini.svg`} />,
    subtitle:
      "249 g Ultralight | 30-min Max. Flight Time | 4 km HD Video Transmission | Vision Sensor + GPS Precise Hover | 3-Axis Gimbal 2.7K Camera | Simplified Recording & Editing",
    photo: <img src={`images/mini.jpg`} />,
    buy: (
      <Buy>
        <a
          href="https://store.dji.com/product/mavic-mini?site=brandsite&from=landing_page"
          target="_blank"
        >
          Buy Now
        </a>
      </Buy>
    ),
    more: (
      <More>
        <a
          target=""
          href="https://www.dji.com/mavic-mini?site=brandsite&from=landing_page"
        >
          Learn More
          <FaAngleRight />
        </a>
      </More>
    ),
  },
  {
    title: <img src={`images/mavic2Pro.svg`} />,
    subtitle:
      "Hasselblad Camera | 20 MP 1” CMOS Sensor | Adjustable Aperture | 10-bit Dlog-M colour profile | 10-bit HDR Video | Hyperlapse | 8 km 1080p Video Transmission | 31min flight time",
    photo: <img src={`images/mavicPro.jpg`} />,
    buy: (
      <Buy>
        <a
          href="https://store.dji.com/product/mavic-2?site=brandsite&from=landing_page"
          target="_blank"
        >
          Buy Now
        </a>
      </Buy>
    ),
    more: (
      <More>
        <a
          target=""
          href="https://www.dji.com/mavic-2?site=brandsite&from=landing_page#pro"
        >
          Learn More
          <FaAngleRight />
        </a>
      </More>
    ),
  },
  {
    title: <img src={`images/mavic2Zoom.svg`} />,
    subtitle:
      "2× Optical Zoom Camera | 4× Lossless Zoom FHD Video | 48MP Super Resolution Photo | Dolly Zoom | Hyperlapse | 8 km 1080p Video Transmission | 31min flight time",
    photo: <img src={`images/mavicZoom.jpg`} />,
    buy: (
      <Buy>
        <a
          href="https://store.dji.com/product/mavic-2?site=brandsite&from=landing_page"
          target="_blank"
        >
          Buy Now
        </a>
      </Buy>
    ),
    more: (
      <More>
        <a
          target=""
          href="https://www.dji.com/mavic-2?site=brandsite&from=landing_page#zoom"
        >
          Learn More
          <FaAngleRight />
        </a>
      </More>
    ),
  },
  {
    title: <img src={`images/mavicAir.svg`} />,
    subtitle:
      "32 MP Sphere Panoramas | Foldable & Portable | 3-Axis Gimbal & 4K Camera | 3-Directional Environment Sensing | SmartCapture | 21-Minute Flight Time",
    photo: <img src={`images/mavicAir.jpg`} />,
    more: (
      <More>
        <a
          target=""
          href="https://www.dji.com/mavic-air?site=brandsite&from=landing_page"
        >
          Learn More
          <FaAngleRight />
        </a>
      </More>
    ),
  },
];

const Dji = (props) => {
  return (
    <Container>
      {drones.map((mavic) => {
        return <Mavic {...mavic} />;
      })}
    </Container>
  );
};

const Mavic = (props) => {
  const { title, subtitle, photo, more, buy } = props;
  return (
    <MavicBox>
      <Detail>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Buttons>
          <buy>{buy}</buy>
          <more>{more}</more>
        </Buttons>
      </Detail>
      <PhotoMavic>{photo}</PhotoMavic>
    </MavicBox>
  );
};

export default Dji;
