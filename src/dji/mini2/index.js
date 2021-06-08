import React from "react";
import {
  Container,
  Title,
  SpecsTitle,
  ListTitle,
  SpecsContainer,
} from "./styled";

const Mini2 = () => {
  return (
    <Container>
      <SpecsTitle>Specs</SpecsTitle>
      <SpecsContainer>
        <Title>DJI Mini 2 </Title>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Aircraft</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>
                Takeoff Weight <sup>[1]</sup>
              </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">&lt; 249 g</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Dimensions</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Folded: 138×81×58 mm (L×W×H) <br />
                Unfolded: 159×203×56 mm (L×W×H) <br />
                Unfolded (with propellers): 245×289×56 mm (L×W×H)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Diagonal Distance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">213 mm</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Ascent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                5 m/s (S Mode) <br />3 m/s (N Mode) <br />2 m/s (C Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Descent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                3.5 m/s (S Mode) <br />3 m/s (N Mode) <br />
                1.5 m/s (C Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Speed (near sea level, no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                16 m/s (S Mode) <br />
                10 m/s (N Mode) <br />6 m/s (C Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Service Ceiling Above Sea Level</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">4000 m</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Time</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                31 mins (measured while flying at 4.7 m/s in windless
                conditions)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Wind Speed Resistance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                8.5-10.5 m/s (Scale 5)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Tilt Angle</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                40° (S Mode) <br />
                25° (N Mode)* <br />
                25° (C Mode)* <br />* Up to 40° under strong winds
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Angular Velocity (by default)*</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                130°/s (S Mode) <br />
                60°/s (N Mode) <br />
                30°/s (C Mode) <br />* Can be adjusted to 250°/s with the DJI
                Fly app
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                0° to 40°C (32° to 104°F)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>
                Operating Frequency<sup> [2]</sup>
              </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400-2.4835 GHz, 5.725-5.850 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmitter Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400-2.4835 GHz <br />
                FCC ≤ 26 dBm <br />
                CE ≤ 20 dBm <br />
                SRRC ≤ 20 dBm <br />
                5.725-5.850 GHz <br />
                FCC ≤ 26 dBm <br />
                CE ≤ 14 dBm <br />
                SRRC ≤ 26 dBm
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Global Navigation Satellite System (GNSS)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                GPS+GLONASS+GALILEO
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Hovering Accuracy Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Vertical: ±0.1 m (with Vision Positioning), ±0.5 m (with GPS
                Positioning) <br />
                Horizontal: ±0.3 m (with Vision Positioning), ±1.5 m (with GPS
                Positioning)
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Gimbal</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Mechanical Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Tilt: -110° to 35° <br />
                Roll: -35° to 35° <br />
                Pan: -20° to 20°
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Controllable Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Tilt: -90° to 0° (default setting) -90° to +20° (extended)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Stabilization</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                3-axis (tilt, roll, pan)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Control Speed (tilt)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">100°/s</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Angular Vibration Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">±0.01°</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Sensing System</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Downward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Hovering Range: 0.5-10 m
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Environment</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Non-reflective, discernable surfaces <br />
                Diffuse reflectivity (&gt; 20%,such as cement pavement)
                <br />
                Adequate lighting (lux &gt; 15, Normal exposure environment of
                indoor fluorescent lamp)
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Camera</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Sensor</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1/2.3” CMOS <br />
                Effective Pixels: 12 MP
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Lens </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FOV: 83° <br />
                35 mm format equivalent: 24 mm <br />
                Aperture: f/2.8 <br />
                Focus range: 1 m to ∞
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>ISO</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Video: <br />
                100-3200 (Auto) <br />
                100-3200 (Manual) <br />
                Photos: <br />
                100-3200 (Auto)
                <br /> 100-3200 (Manual)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Shutter Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Electronic Shutter: 4-1/8000 s
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Image Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                4:3: 4000×3000 <br />
                16:9: 4000×2250
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Still Photography Modes</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Single Shot <br />
                Interval: JPEG: 2/3/5/7/10/15/20/30/60 s <br />
                JPEG+RAW: 5/7/10/15/20/30/60 s <br />
                Auto Exposure Bracketing (AEB): 3 bracketed frames at 2/3 EV
                Bias <br />
                Panorama: Sphere, 180°, and Wide-angle
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Resolution</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                4K: 3840×2160 @ 24/25/30fps <br />
                2.7K: 2720×1530 @ 24/25/30/48/50/60fps <br />
                FHD: 1920×1080 @ 24/25/30/48/50/60fps
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Video Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">100 Mbps</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Zoom Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                4K: 2x <br />
                2.7K: 3x
                <br />
                FHD: 4x
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>QuickShot Modes</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Dronie,
                <br /> Helix,
                <br /> Rocket,
                <br /> Circle,
                <br /> Boomerang
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported File Formats</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FAT32 (≤ 32 GB)
                <br />
                exFAT (&gt; 32 GB)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Photo Formats</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">JPEG/DNG (RAW)</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Formats</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                MP4 (H.264/MPEG-4 AVC）
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">
            Remote Controller &amp; Video Transmission
          </h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Frequency</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400-2.4835 GHz, 5.725-5.850 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>
                Max Transmission Distance (unobstructed, free of interference){" "}
                <sup>[3]</sup>
              </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                10 km (FCC) <br />6 km (CE)
                <br />6 km (SRRC)
                <br />6 km (MIC)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>
                Signal Transmission Ranges (FCC)<sup> [4]</sup>
              </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Strong Interference (urban landscape, limited line of sight,
                many competing signals): Approx. 3 km <br />
                Medium Interference (suburban landscape, open line of sight,
                some competing signals): Approx. 6 km <br />
                Low Interference (open landscape abundant line of sight, few
                competing signals): Approx. 10 km
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                -10° to 40° C (14° to 104° F)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmission Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400-2.4835 GHz
                <br />
                FCC ≤ 26 dBm <br />
                CE ≤ 20 dBm
                <br />
                SRRC ≤ 20 dBm <br />
                MIC ≤ 20 dBm <br />
                5.725-5.850 GHz <br />
                FCC ≤ 26 dBm <br />
                CE ≤ 14 dBm <br />
                SRRC ≤ 26 dBm
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Battery Capacity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">5200 mAh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1200 mA 3.6 V (Android) <br />
                700 mA 3.6 V (iOS)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported Mobile Device Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                180×86×10 mm (Height×Width×Thickness)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported USB Port Types</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                LightningMicro USB (Type-B) USB-C
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Transmission System</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">OcuSync 2.0</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Live View Quality</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Remote Controller: 720p/30fps
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">8 Mbps</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>
                Latency (depending on environmental conditions and mobile
                device)
              </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">About 200 ms</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Charger</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Input</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                100-240 V, 50/60 Hz, 0.5 A
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Output</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                12V 1.5 A / 9V 2A / 5V 3A
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Rated Power</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">18 W</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Intelligent Flight Battery</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Battery Capacity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">2250 mAh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">7.7 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Charging Voltage Limit</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">8.8 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Battery Type</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">LiPo 2S</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Energy</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">17.32 Wh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">86.2 g</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Charging Temperature</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                5° to 40°C (41° to 104°F)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Charging Power</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">29 W</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">App</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Name</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">DJI Fly</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Required Operating System</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                iOS v10.0 or laterAndroid v6.0 or later
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Supported SD Cards</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported SD Cards</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                UHS-I Speed Class 3 or above is required. A list of recommended
                microSD cards can be found below.
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Recommended microSD Cards</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                16 GB: SanDisk Extreme <br />
                32 GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk
                Industrial, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2,
                SanDisk Extreme Pro V30 A1, SanDisk Extreme Pro V30 A2, Lexar
                633x, Lexar 667x <br /> 64 GB: Samsung Pro Endurance, Samsung
                Evo Plus, SanDisk Extreme V30 A2, Lexar 633x, Lexar 667x, Lexar
                1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac
                Pro V30 A1 <br />
                128 GB: Samsung Evo Plus, SanDisk Extreme V30 A2, SanDisk
                Extreme Plus V30 A1, SanDisk Extreme Plus V30 A2, Lexar 633x,
                Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA
                M303 V30 A1, Netac Pro V30 A1 <br />
                256 GB: SanDisk Extreme V30 A2
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Footnotes</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Footnotes</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1. The standard weight of the aircraft (including battery,
                propellers, and a microSD card) is 242 grams. Actual poduct
                weight may vary. Registration is not required in some countries
                and regions. Check local rules and regulations before use. These
                specifications have been determined through tests conducted with
                the latest firmware. Firmware updates can enhance performance,
                so updating to the latest firmware is highly recommended. <br />
                2. Due to local policy and regulation restrictions, the 5.8 GHz
                frequency band is currently banned in certain countries,
                including but not limited to Japan, Russia, Israel, Ukraine, and
                Kazakhstan. Please use the 2.4 GHz frequency band when operating
                in these locations. Always check local rules and regulations
                before use, as they may change over time. <br />
                3. Maximum flight range specification is a proxy for radio link
                strength and resilience, not aircraft battery capability. It
                only refers to the maximum, one-way flight distance. Data was
                measured in an open environment without interference. Please pay
                attention to the return prompt on the DJI Fly app during actual
                flight. Refer to the following applicable standard in different
                countries and regions:
                <br />
                FCC: United States, Australia, Canada, Hong Kong, Taiwan, Chile,
                Colombia, Puerto Rico, and other regions;
                <br />
                SRRC: Mainland China;
                <br />
                CE: UK, Russia, France, Germany, Portugal, Spain, Switzerland,
                Macau, New Zealand, UAE, and other regions;
                <br />
                MIC: Japan. <br />
                4. Data is tested under different standards in open areas free
                of interference. It only refers to the maximum, one-way flight
                distance without considering Return to Home. Please pay
                attention to RTH prompts in the DJI Fly app during actual
                flight.
              </div>
            </li>
          </ul>
        </div>
      </SpecsContainer>
    </Container>
  );
};

export default Mini2;
