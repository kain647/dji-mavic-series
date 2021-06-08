import React from "react";
import {
  Container,
  Title,
  SpecsTitle,
  ListTitle,
  SpecsContainer,
} from "./styled";

const Platinum = () => {
  return (
    <Container>
      <SpecsTitle>Specs</SpecsTitle>
      <SpecsContainer>
        <Title>MAVIC PRO PLATINUM</Title>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Aircraft</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Weight (Battery & Propellers Included)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1.62 lbs (734 g) (exclude gimbal cover) 1.64 lbs (743 g)
                (include gimbal cover)
              </div>
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
                H83mm x W83mm x L198mm
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Diagonal Distance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">335 mm</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Ascent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                16.4 ft/s (5 m/s) in Sport mode
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Descent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">9.8 ft/s (3 m/s)</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Service Ceiling Above Sea Level</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                16404 feet (5000 m)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Time</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                30 minutes (no wind at a consistent 15.5 mph (25 kph))
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Hovering Time (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">27 minutes</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Distance (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">9.3 mi (15 km)</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                32° to 104° F (0° to 40° C)
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
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmitter Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.4GHz
                <br />
                FCC: 26 dBm; CE: 20 dBm; SRRC: 20 dBm; MIC: 18 dBm
                <br />
                5.2 GHz
                <br />
                FCC: 23 dBm
                <br />
                5.8 GHz
                <br />
                FCC: 23 dBm; CE: 13 dBm; SRRC: 23 dBm; MIC: -
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
                +/- 0.1 m (when Vision Positioning is active) or +/-0.5 m
                <br />
                Horizontal:
                <br />
                +/- 0.3 m (when Vision Positioning is active) or +/-1.5 m
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
              <div className="detailed-parameter-value">Dual Compass</div>
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
                3-axis (pitch, roll, yaw)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Controllable Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Pitch: -90° to +30°
                <br />
                Roll: 0° or 90° (Horizontally and vertically)
              </div>
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
                Precision measurement range: 2 ft (0.7 m) to 49 ft (15 m)
                <br />
                Detectable range: 49 ft (15 m) to 98 ft (30 m)
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
                2.4 GHz to 2.483 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Transmission Distance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FCC Compliant: 4.3 mi (7 km)
                <br />
                CE Compliant: 2.5 mi (4 km)
                <br />
                SRRC Compliant: 2.5mi (4 km)
                <br />
                MIC Compliant: 2.5 mi (4 km) (Unobstructed, free of
                interference)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                32° to 104° F ( 0° to 40° C )
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Current/Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">950mA @ 3.7V</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Charger</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">13.05 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Rated Power</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">50W</div>
            </li>
          </ul>
        </div>
      </SpecsContainer>
    </Container>
  );
};

export default Platinum;
