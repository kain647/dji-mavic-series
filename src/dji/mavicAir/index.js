import React from "react";
import {
  Container,
  Title,
  SpecsTitle,
  TitleSpec,
  SpecsContainer,
} from "./styled";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { More } from "../styled";

const MavicAir = () => {
  return (
    <Container>
      <SpecsTitle>
        <TitleSpec>Specs</TitleSpec>
        <More>
          <Link to={"/mavic-air/settings"}>
            Mavic Air settings
            <FaAngleRight />
          </Link>
        </More>
      </SpecsTitle>
      <SpecsContainer>
        <Title>Mavic Air</Title>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Aircraft</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">430 g</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Folded:
                <br />
                168×83×49 mm (L×W×H)
                <br />
                Unfolded:
                <br />
                168×184×64 mm (L×W×H)
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
                4 m/s (S - mode)
                <br />
                2 m/s (P - mode)
                <br />2 m/s (Wi-Fi mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Descent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                3 m/s (S - mode)
                <br />
                1.5 m/s (P - mode)
                <br />1 m/s (Wi-Fi mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Service Ceiling Above Sea Level</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">5000 m</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Time (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                21 minutes (at a consistent 25 kph)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Hovering Time (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">20 minutes</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Distance (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">10 km</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Wind Resistance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">29 - 38 kph</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Tilt Angle</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                35° (S - mode) 15° (P - mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Angular Velocity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                250°/s (S - mode) 250°/s (P - mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">0° to 40°C</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Frequency</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400-2.4835 GHz
                <br />
                5.725-5.850 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmitter Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400 - 2.4835 GHz
                <br />
                FCC: ≤28 dBm
                <br />
                CE: ≤19 dBm
                <br />
                SRRC: ≤19 dBm
                <br />
                MIC: ≤19 dBm
                <br />
                5.725 - 5.850 GHz
                <br />
                FCC: ≤31 dBm
                <br />
                CE: ≤14 dBm
                <br />
                SRRC: ≤27 dBm
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Hovering Accuracy Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Vertical:
                <br />
                ±0.1 m (with Vision Positioning)
                <br />
                ±0.5 m (with GPS Positioning)
                <br />
                Horizontal:
                <br />
                ±0.1 m (with Vision Positioning)
                <br />
                ±1.5 m (with GPS Positioning)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Satellite Systems</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">GPS+GLONASS</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Compass</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Single Compass</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Internal Storage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">8 GB</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Battery</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Capacity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">2375 mAh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">11.55 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Charging Voltage Limit</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">13.2 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Battery Type</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">LiPo 3S</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Energy</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">27.43 Wh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">140 g</div>
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
              <div className="detailed-parameter-value">60 W</div>
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
                1/2.3” CMOS
                <br />
                Effective Pixels: 12 MP
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Lens</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FOV: 85°
                <br />
                35 mm Format Equivalent: 24 mm
                <br />
                Aperture: f/2.8
                <br />
                Shooting Range: 0.5 m to ∞
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>ISO</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Video:
                <br />
                100 - 3200 (auto)
                <br />
                100 - 3200 (manual)
                <br />
                Photo:
                <br />
                100 - 1600 (auto)
                <br />
                100 - 3200 (manual)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Still Image Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                4:3: 4056×3040
                <br />
                16:9: 4056×2280
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Still Photography Modes</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Single shot
                <br />
                HDR
                <br />
                Burst shooting: 3/5/7 frames
                <br />
                Auto Exposure Bracketing (AEB): 3/5 bracketed frames at 0.7EV
                Bias
                <br />
                Interval: 2/3/5/7/10/15/20/30/60 s
                <br />
                Pano: 3×1: 42°×78°, 2048×3712 (W×H)
                <br />
                3×3: 119°×78°, 4096×2688 (W×H)
                <br />
                180°: 251°×88°, 6144×2048 (W×H)
                <br />
                Sphere (3×8+1): 8192×4096 (W×H)
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
              <h4>Video Resolution and Frame Rates</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                4K Ultra HD: 3840×2160 24/25/30p
                <br />
                2.7K: 2720×1530 24/25/30/48/50/60p
                <br />
                FHD: 1920×1080 24/25/30/48/50/60/120p
                <br />
                HD: 1280×720 24/25/30/48/50/60/120p
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Color Profiles</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">D-Cinelike</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Formats</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                MP4/MOV (H.264/MPEG-4 AVC
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">100 Mbps</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported SD Cards</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                microSD Class 10 or UHS-1 rating required 128 GB
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported File Systems</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">FAT32</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Gimbal</h3>
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
              <h4>Mechanical Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Tilt: -100° to 22°
                <br />
                Roll: -30° to 30°
                <br />
                Pan: -12° to 12°
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Controllable Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Tilt: -90° to 0° (default setting)
                <br />
                -90° to +17° (extended)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Controllable Speed (tilt)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">120°/s</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Angular Vibration Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">±0.005°</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Vision System</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Forward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.5 - 12 m
                <br />
                Detectable Range: 0.5 - 24 m
                <br />
                Effective Sensing Speed: ≤ 8 m/s
                <br />
                Field of View (FOV): Horizontal 50°, Vertical ±19°
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Backward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.5 - 10 m
                <br />
                Detectable Range: 0.5 - 20 m
                <br />
                Effective Sensing Speed: ≤ 8 m/s
                <br />
                Field of View (FOV): Horizontal 50°, Vertical ±19°
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Downward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Altitude Range: 0.1 - 8 m
                <br />
                Operating Range: 0.5 - 30 m
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Video Transmission</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmission System</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                When connected to the remote controller:
                <br />
                2.4GHz
                <br />
                FCC: 4000 m, CE: 2000 m, SRRC: 2000 m (unobstructed, free of
                interference, when FCC compliant).
                <br />
                5.8GHz
                <br />
                FCC: 4000 m, CE: 500 m, SRRC: 2500 m (unobstructed, free of
                interference, when FCC compliant).
                <br />
                When connected to a mobile device:
                <br />
                Max height: 50 m
                <br />
                Max distance: 80 m
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Live View Quality</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Remote Controller:
                <br />
                720p@30fps
                <br />
                Smart Device:
                <br />
                720p@30fps
                <br />
                DJI Goggles:
                <br />
                720p@30fps
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Transmission Encoding format</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                MP4/MOV (H.264/MPEG-4 AVC)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Frequency</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400-2.4835 GHz
                <br />
                5.725-5.850 GHz
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Remote Controller</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Remote Controller Transmission System</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400 - 2.4835 GHz
                <br />
                5.725 - 5.850 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported Mobile Device Connectors</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Lightning, Micro USB (Type-B), USB-C
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">0℃ - 40℃</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Current/Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1400 mA ⎓ 3.7 V (Android)
                <br />
                750 mA ⎓ 3.7 V (iOS)
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Charger</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Charging Input</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                100 - 240 V, 50/60 Hz, 1.4 A
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Charging Output</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Main: 13.2 V ⎓ 3.79 A USB: 5 V ⎓ 2 A
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">13.2 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Rated Power</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">50 W</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">SD Cards</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported SD Cards</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Micro SD™
                <br />
                Supports a microSD card with a capacity of up to 256 GB.
                <br />A UHS-I Speed Grade 3 rating microSD card is required.
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Recommended microSD Cards</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                16G
                <br />
                Sandisk Extreme
                <br />
                Kingston 16GB SDHC-I SDCAC/16GB
                <br />
                32G
                <br />
                Sandisk Extreme V30
                <br />
                Sandisk Extreme V30 A1
                <br />
                Sandisk Extreme V30 Pro A1
                <br />
                64G
                <br />
                Sandisk Extreme V30 A1
                <br />
                Sandisk Extreme Pro V30 A1
                <br />
                128G
                <br />
                Sandisk Extreme V30 A1
                <br />
                Sandisk Extreme Plus V30 A1
              </div>
            </li>
          </ul>
        </div>
      </SpecsContainer>
    </Container>
  );
};

export default MavicAir;
