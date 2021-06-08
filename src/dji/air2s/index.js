import React from "react";
import { Container, Title, SpecsTitle, ListTitle, SpecsContainer } from "./styled";

const Air2s = () => {
  return (
    <Container>
      <SpecsTitle>Specs</SpecsTitle>
      <SpecsContainer>
        <Title>DJI Air 2S</Title>
        <div className="specs-parameter-wrap">
          <ListTitle>Aircraft</ListTitle>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Takeoff Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">595 g</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Dimensions</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Folded:
                <br />
                180×97×77 mm (length×width×height)
                <br />
                Unfolded:
                <br />
                183×253×77 mm (length×width×height)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Diagonal Length</h4>
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
                6 m/s (S Mode)
                <br />6 m/s (N Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Descent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                6 m/s (S Mode)
                <br />6 m/s (N Mode)
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
              <div className="detailed-parameter-value">31 minutes</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Hovering Time (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">30 minutes</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Distance (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">18.5 km</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Speed (near sea level, no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                19 m/s (S Mode)
                <br />
                15 m/s (N Mode)
                <br />5 m/s (C Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Wind Speed Resistance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">10.7 m/s</div>
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
                Front: 30°, Back: 20°, Left: 35°, Right: 35° (N Mode)
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
                90°/s (N Mode)
                <br />
                60°/s (C Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                0° to 40°C (32° to 104°F)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Frequency</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.4 GHz
                <br />
                5.8 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmission Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.4 GHz:
                <br />
                FCC: ≤30 dBm
                <br />
                CE: ≤20 dBm
                <br />
                SRRC: ≤20 dBm
                <br />
                MIC: ≤20 dBm
                <br />
                5.8 GHz:
                <br />
                FCC: ≤30 dBm
                <br />
                CE: ≤14 dBm
                <br />
                SRRC: ≤29 dBm
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
                <br />± 0.1 m (with vision positioning)
                <br />± 0.5 m (with GNSS positioning)
                <br />
                Horizontal:
                <br />± 0.1 m (with vision positioning)
                <br />± 1.5 m (with GNSS positioning)
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
              <h4>Aircraft Arms</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Foldable</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>GNSS</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                GPS+GLONASS+GALILEO
              </div>
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
          <h3 className="group-list-title">Intelligent Flight Battery</h3>
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
              <h4>Max Charging Voltage</h4>
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
              <h4>Charging Temperature Range</h4>
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
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Built-in Battery</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">N/A</div>
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
                1" CMOS
                <br />
                Effective Pixels: 20 MP; 2.4μm Pixel Size
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Lens</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FOV: 88°
                <br />
                35 mm Format Equivalent: 22 mm
                <br />
                Aperture: f/2.8
                <br />
                Shooting Range: 0.6 m to ∞
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>ISO Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Video:
                <br />
                100-3200 (Auto)
                <br />
                100-6400 (Manual)
                <br />
                10-Bit Dlog-M Video:
                <br />
                100-800 (Auto)
                <br />
                100-1600 (Manual)
                <br />
                Photo:
                <br />
                100-3200 (Auto)
                <br />
                100-12800 (Manual)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Still Image Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                20 MP <br />
                5472×3648 (3:2)
                <br />
                5472×3078 (16:9)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Still Photography Modes</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Single shot: 20 MP
                <br />
                Burst shooting: 20 MP (continuous burst)
                <br />
                Auto Exposure Bracketing (AEB): 20 MP, 3/5 bracketed frames at
                0.7 EV bias
                <br />
                Timed: 20 MP, 2/3/5/7/10/15/20/30/60s
                <br />
                SmartPhoto (including HDR and HyperLight): 20 MP
                <br />
                HDR Panorama:
                <br />
                Vertical (3×1): 3328×8000 (width×height)
                <br />
                Wide-angle (3×3): 8000×6144 (width×height)
                <br />
                180° (3×7): 8192×3500 (width×height)
                <br />
                Sphere (3×8+1): 8192×4096 (width×height)
                <br />
                JPEG/DNG (RAW)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Resolution</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                5.4K: 5472×3078 @ 24/25/30 fps
                <br />
                4K Ultra HD: 3840×2160 @ 24/25/30/48/50/60 fps
                <br />
                2.7K: 2688x1512 @ 24/25/30/48/50/60 fps
                <br />
                FHD: 1920×1080 @ 24/25/30/48/50/60/120 fps
                <br />
                MP4/MOV (H.264/MPEG-4 AVC, H.265/HEVC)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Video Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">150 Mbps</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported File System</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FAT32/exFAT
                <br />
                Supports a microSD card with a capacity of up to 256 GB.
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Digital Zoom</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Zoom recording is not available while recording 10-bit videos
                and 120fps videos.
                <br />
                4K/30fps:
                <br />
                4x;
                <br />
                2.7K/60fps:
                <br />
                4x;
                <br />
                2.7K/30fps:
                <br />
                6x;
                <br />
                1080p/60fps:
                <br />
                6x;
                <br />
                1080p/30fps:
                <br />
                8x
              </div>
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
              <h4>Pan Axis</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Not Controllable</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Controllable Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Tilt: -90° to 0°(default); -90° to 24° (extended)
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
          <h3 className="group-list-title">Sensing System</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Forward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.38-23.8 m<br />
                Effective Sensing Speed: ≤15 m/s <br />
                Field of View (FOV): 72° (horizontal), 58° (vertical)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Backward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.37-23.4 m<br />
                Effective Sensing Speed: ≤12 m/s
                <br />
                Field of View (FOV): 57° (horizontal), 44° (vertical)
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
              <div className="detailed-parameter-value">N/A</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Upward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.34-28.6 m<br />
                Field of View (FOV): 63° (horizontal), 78° (vertical)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Downward Auxiliary Light</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Single LED</div>
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
                O3
                <br />
                2.4 GHz/5.8 GHz Auto-Switching (compatible with OcuSync 2.0)
                <br />
                4-antenna 2T4R <br />
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Transmission Distance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                12 km (FCC), 8 km (CE)
                <br />8 km (SRRC), 8 km (MIC)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Live View Quality/Latency</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Drone + Remote Controller: 1080p/30fps 12 Mbps 120 ms
                <br /> Drone + DJI Smart Controller: 1080p/30fps 12Mbps 130 ms
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Transmission Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                44 Mbps (download bitrate)
                <br />
                16 Mbps (live video bitrate)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Frequency</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.4 GHz
                <br />
                5.8 GHz
              </div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Remote Controller</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Multiple Controllers</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">N/A</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>DJI Smart Controller</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Supported</div>
            </li>
          </ul>
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
              <h4>Battery Life</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                6 hours (4 hours when charging a mobile device)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported Mobile Device Connectors</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Lightning, Micro USB, USB-C
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Supported Mobile Device Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                180×86×10 mm (length×width×height)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                0° to 40°C (14° to 104°F)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmitter Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.4 GHz:
                <br />
                FCC: ≤26 dBm
                <br />
                CE: ≤20 dBm
                <br />
                SRRC: ≤20 dBm
                <br />
                MIC: ≤20 dBm
                <br />
                5.8 GHz:
                <br />
                FCC: ≤26 dBm
                <br />
                CE: ≤14 dBm
                <br />
                SRRC: ≤26 dBm
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
                100-240V, 50/60 Hz, 1.3 A
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
      </SpecsContainer>
    </Container>
  );
};

export default Air2s;
