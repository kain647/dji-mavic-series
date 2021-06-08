import React from "react";
import {
  Container,
  Title,
  SpecsTitle,
  ListTitle,
  SpecsContainer,
} from "./styled";

const Air2 = () => {
  return (
    <Container>
      <SpecsTitle>Specs</SpecsTitle>
      <SpecsContainer>
        <Title>Mavic Air 2</Title>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Aircraft</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">570 g</div>
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
                180×97×74 mm (Length×Width×Height)
                <br />
                Unfolded:
                <br />
                183×253×77 mm (Length×Width×Height)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Diagonal Distance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">302 mm</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Ascent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                4 m/s (S Mode)
                <br />4 m/s (N Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Descent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                3 m/s (S Mode)
                <br />3 m/s (N Mode)
                <br />5 m/s (S Mode and N Mode during a sharp descent)
                <br />3 m/s (all modes at elevations over 4500 m)
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
              <h4>Max Flight Time (without wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">34 minutes</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Hover Time (without wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">33 minutes</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Distance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">18.5 km</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Horizontal Flight Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                19 m/s (S Mode)
                <br />
                12 m/s (N Mode)
                <br />5 m/s (T Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Wind Resistance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                8.5-10.5 m/s (Level 5)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Tilt Angle</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                35° (S Mode)
                <br />
                20° (N Mode)
                <br /> 35° (N Mode under strong wind)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Angular Velocity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                250°/s (S Mode)
                <br />
                250°/s (N Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                -10° to 40°C (14° to 104°F)
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
                2.400-2.4835 GHz:
                <br />
                FCC: ≤26 dBm
                <br />
                CE: ≤20 dBm
                <br />
                SRRC: ≤20 dBm
                <br />
                MIC: ≤20 dBm
                <br />
                <br />
                5.725-5.850 GHz:
                <br />
                FCC: ≤26 dBm
                <br />
                CE: ≤14 dBm
                <br />
                SRRC: ≤26 dBm
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
                ±0.1 m (with vision positioning)
                <br />
                ±0.5 m (with GPS positioning)
                <br />
                <br />
                Horizontal:
                <br />
                ±0.1 m (with vision positioning)
                <br />
                ±1.5 m (with GPS positioning)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Propellers</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Quick release, low noise, folding
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
              <h4>IMU</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Single IMU</div>
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
              <div className="detailed-parameter-value">3500 mAh</div>
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
              <div className="detailed-parameter-value">40.42 Wh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">198 g</div>
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
              <div className="detailed-parameter-value">38 W</div>
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
                1/2" CMOS
                <br />
                Effective Pixels: 12 MP and 48 MP
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Lens</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FOV: 84°
                <br />
                Equivalent Focal Length: 24 mm <br />
                Aperture: f/2.8
                <br />
                Focus Range: 1 m to ∞
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
                100-6400
                <br />
                <br />
                Photo (12 MP):
                <br />
                100-3200 (Auto)
                <br />
                100-6400 (Manual)
                <br />
                Photo (48 MP):
                <br />
                100-1600 (Auto)
                <br />
                100-3200 (Manual)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Photo Resolution</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                48 MP 8000×6000 pixel
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Photo Modes</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Single: 12 MP and 48 MP
                <br />
                Burst: 12 MP, 3/5/7 frames
                <br />
                Automatic Exposure Bracketing (AEB): 12MP, 3/5 Frames at 0.7EV
                Bias
                <br />
                Timed: 12 MP 2/3/5/7/10/15/20/30/60 seconds
                <br />
                SmartPhoto: Scene Recognition, HyperLight, and HDR
                <br />
                HDR Panorama:
                <br />
                Vertical (3×1): 3328×8000 pixels (Width×Height)
                <br />
                Wide-angle (3×3): 8000×6144 pixels (Width×Height)
                <br />
                180° Panorama (3×7): 8192×3500 pixels (Width×Height)
                <br />
                Sphere (3×8+1): 8192×4096 pixels (Width×Height)
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
                4K Ultra HD: 3840×2160 24/25/30/48/50/60 fps
                <br />
                2.7K: 2688×1512 24/25/30/48/50/60 fps
                <br />
                FHD: 1920×1080 24/25/30/48/50/60/120/240 fps
                <br />
                4K Ultra HD HDR: 3840×2160 24/25/30 fps
                <br />
                2.7K HDR: 2688×1512 24/25/30 fps
                <br />
                FHD HDR: 1920×1080 24/25/30 fps
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Color Profiles</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">D-Cinelike, Normal</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Formats</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                MP4/MOV (H.264/MPEG-4 AVC, H.265/HEVC)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">120 Mbps</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported SD Cards</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Supports a microSD with capacity of up to 256 GB
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported File Systems</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">FAT32 and exFAT</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Zoom</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Available</div>
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
                Tilt: -135° to 45°
                <br />
                Roll: -45° to 45°
                <br />
                Pan: -100° to 100°
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Controllable Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Tilt: -90° to 0° (Default)
                <br />
                -90° to 24° (Extended)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Controllable Speed (tilt)</h4>
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
          <h3 className="group-list-title">Vision System</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Forward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.35-22.0 m<br />
                Detection Range: 0.35 to 44 m<br />
                Effective Sensing Speed: 12 m/s <br />
                Field of View (FOV):
                <br />
                71° (horizontal), 56° (vertical)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Backward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.37-23.6 m<br />
                Detection Range: 0.37-47.2 m<br />
                Effective Sensing Speed: 12 m/s <br />
                Field of View (FOV):
                <br />
                57° (horizontal), 44° (vertical)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Available Downward Sensors</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Dual Vision Sensors + Time of Flight Sensors (ToF)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Downward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                ToF Measurement Range: 0.1-8 m<br />
                Hovering Range: 0.5-30 m<br />
                Vision Sensor Hovering Range: 0.5-60 m
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Left/Right</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">None</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Downward Auxillary Light</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Single LED</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Safety</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Obstacle Avoidance System</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Advanced Pilot Assistance Systems (APAS) 3.0
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
                OcuSync 2.0
                <br />
                2.4 GHz/5.8 GHz Auto-Switching
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Transmission Distance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                10 km (FCC), 6 km (CE), 6 km (SRRC), 6 km (MIC)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Live View Quality</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                720p@30fps/1080@p30fps
              </div>
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
              <div className="detailed-parameter-value">120-130 ms</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Transmission Encoding format</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                H.265/H.264 (Auto-switches depending on encoding capabilities of
                device)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Transmission Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">12 Mbps</div>
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
              <div className="detailed-parameter-value">OcuSync 2.0</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported Mobile Device Connectors</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Lightning, Micro USB, USB Type-C
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max. Supported Mobile Device Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                180×86×10 mm (Height×Width×Thickness)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                -10° to 40°C (14° to 104°F)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmitter Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400-2.4835 GHz:
                <br />
                FCC: ≤26 dBm
                <br />
                CE: ≤20 dBm
                <br />
                SRRC: ≤20 dBm
                <br />
                MIC: ≤20 dBm
                <br />
                <br />
                5.725-5.850 GHz:
                <br />
                FCC: ≤26 dBm
                <br />
                CE: ≤14 dBm
                <br />
                SRRC: ≤26 dBm
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Current/Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1200 mA@3.6V (Android)
                <br />
                700 mA@ 3.6 V (iOS)
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
                100-240 V, 50/60 Hz, 1.3 A
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Charging Output</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Charging Port: 13.2 V⎓2.82 A<br />
                USB Port: 5 V⎓2 A
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
              <div className="detailed-parameter-value">38 W</div>
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
                SanDisk Extreme PRO 64GB V30 A2 microSDXC
                <br />
                SanDisk High Endurance 64GB V30 microSDXC
                <br />
                SanDisk Extreme 64GB V30 A2 microSDXC
                <br />
                SanDisk Extreme 128GB V30 A2 microSDXC
                <br />
                SanDisk Extreme 256GB V30 A2 microSDXC
                <br />
                Lexar Lexar 667x 64GB V30 A2 microSDXC
                <br />
                Lexar High-Endurance 64GB V30 microSDXC
                <br />
                Samsung EVO 64GB microSDXC
                <br />
                Samsung EVO Plus 64GB microSDXC
                <br />
                Samsung EVO Plus 256GB microSDXC
                <br />
                Kingston 128GB V30 microSDXC
                <br />
                Netac 256GB A1 microSDXC
              </div>
            </li>
          </ul>
        </div>
      </SpecsContainer>
    </Container>
  );
};

export default Air2;
