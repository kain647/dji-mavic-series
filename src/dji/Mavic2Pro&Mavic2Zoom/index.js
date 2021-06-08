import React from "react";
import {
  Container,
  Title,
  SpecsTitle,
  ListTitle,
  SpecsContainer,
} from "./styled";

const MavicProZoom = () => {
  return (
    <Container>
      <SpecsTitle>Specs</SpecsTitle>
      <SpecsContainer>
        <Title>Mavic 2 Pro & Mavic 2 Zoom</Title>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Aircraft</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Mavic 2 Pro: 907 g <br />
                Mavic 2 Zoom: 905g
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
                214×91×84 mm (length×width×height)
                <br />
                Unfolded:
                <br />
                322×242×84 mm (length×width×height)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Diagonal Distance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">354 mm</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Ascent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                5 m/s (S-mode)
                <br />4 m/s (P-mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Descent Speed</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                3 m/s (S-mode)
                <br />3 m/s (P-mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Service Ceiling Above Sea Level</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">6000 m</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Time (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                31 minutes (at a consistent 25 kph)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Hovering Time (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">29 minutes</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Distance (no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                18 km (at a consistent 50 kph)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Wind Speed Resistance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">29–38 kph</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Tilt Angle</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                35° (S-mode, with remote controller) 25° (P-mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Angular Velocity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">200°/s</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Temperature Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                -10°C to 40°C (14° to 104°F)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Frequency</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400 - 2.483 GHz
                <br />
                5.725 - 5.850 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmitter Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400 - 2.483 GHz
                <br />
                FCC：≤26 dBm
                <br />
                CE：≤20 dBm
                <br />
                SRRC：≤20 dBm
                <br />
                MIC：≤20 dBm
                <br />
                5.725-5.850 GHz
                <br />
                FCC：≤26 dBm
                <br />
                CE：≤14 dBm
                <br />
                SRRC：≤26 dBm
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
                ± 0.1 m (when vision positioning is active)
                <br />
                ± 0.5 m (with GPS positioning)
                <br />
                Horizontal:
                <br />
                ± 0.3 m (when vision positioning is active)
                <br />± 1.5 m (with GPS positioning)
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
              <div className="detailed-parameter-value">3850 mAh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">15.4 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Charging Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">17.6 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Battery Type</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">LiPo 4S</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Energy</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">59.29 Wh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Net Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">297 g</div>
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
              <div className="detailed-parameter-value">80 W</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Mavic 2 Pro Camera</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Sensor</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1” CMOS
                <br />
                Effective Pixels: 20 million
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Lens</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FOV: about 77°
                <br />
                35 mm Format Equivalent: 28 mm
                <br />
                Aperture: f/2.8–f/11
                <br />
                Shooting Range: 1 m to ∞
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
                100-6400
                <br />
                Photo:
                <br />
                100-3200 (auto)
                <br />
                100-12800 (manual)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Still Image Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">5472×3648</div>
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
                Burst shooting: 3/5 frames
                <br />
                Auto Exposure Bracketing (AEB): 3/5 bracketed frames at 0.7 EV
                Bias
                <br />
                Interval (JPEG: 2/3/5/7/10/15/20/30/60s RAW:5/7/10/15/20/30/60s)
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
                4K: 3840×2160 24/25/30p
                <br />
                2.7K: 2688x1512 24/25/30/48/50/60p
                <br />
                FHD: 1920×1080 24/25/30/48/50/60/120p
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Color Mode</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Dlog-M (10bit), support HDR video (HLG 10bit)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Formats</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
								MP4 / MOV (MPEG-4 AVC/H.264, HEVC/H.265)
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
                Supports a microSD with capacity of up to 256 GB
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported File Systems</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FAT32 (≤ 32 GB) exFAT (> 32 GB)
              </div>
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
          <h3 className="group-list-title">Mavic 2 Zoom Camera</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Sensor</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1/2.3" CMOS
                <br />
                Effective Pixels: 12 million
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Lens</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FOV: about 83° (24 mm); about 48° (48 mm）
                <br />
                35 mm Format Equivalent: 24-48 mm
                <br />
                Aperture: f/2.8 (24 mm)–f/3.8 (48 mm)
                <br />
                Shooting Range: 0.5 m to ∞
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
                100-3200
                <br />
                <br />
                Photo:
                <br />
                100-1600 (Auto)
                <br />
                100-3200 (Manual)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Still Image Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">4000×3000</div>
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
                Burst shooting: 3/5/7 frames
                <br />
                Auto Exposure Bracketing (AEB): 3/5 bracketed frames at 0.7 EV
                Bias
                <br />
                Interval (JPEG: 2/3/5/7/10/15/20/30/60s RAW:5/7/10/15/20/30/60s)
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
                4K: 3840×2160 24/25/30p
                <br />
                2.7K: 2688×1512 24/25/30/48/50/60p
                <br />
                FHD: 1920×1080 24/25/30/48/50/60/120p
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
                MP4 / MOV (MPEG-4 AVC/H.264, HEVC/H.265)
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
                Supports a microSD with capacity of up to 256 GB
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported File Systems</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FAT32 (≤ 32 GB) exFAT (> 32 GB)
              </div>
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
                Tilt: -90° to 30°
                <br />
                Pan: -75° to 75°
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
              <div className="detailed-parameter-value">
                ±0.005° (Mavic 2 Zoom) <br /> ±0.01° (Mavic 2 Pro)
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
                Precision Measurement Range: 0.5 - 20 m
                <br />
                Detectable Range: 20 - 40 m
                <br />
                Effective Sensing Speed: ≤ 14m/s
                <br />
                FOV: Horizontal: 40°, Vertical: 70°
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Backward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.5 - 16 m
                <br />
                Detectable Range: 16 - 32 m
                <br />
                Effective Sensing Speed: ≤ 12m/s
                <br />
                FOV: Horizontal: 60°, Vertical: 77°
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Downward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.5 - 11 m
                <br />
                Detectable Range: 11 - 22 m
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Upward</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Precision Measurement Range: 0.1 - 8 m
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
              <h4>Operating Temperature</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">0℃ - 40℃</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmitter Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.400 - 2.483 GHz
                <br />
                FCC: ≤26 dBm
                <br />
                CE: ≤20 dBm
                <br />
                SRRC: ≤20 dBm
                <br />
                MIC: ≤20 dBm
                <br />
                5.725-5.850 GHz
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
              <div className="detailed-parameter-value">1800 mA ⎓ 3.83 V</div>
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
                100-240 V, 50/60 Hz, 1.8A
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Charging Output</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Main: 17.6 V ⎓ 3.41 A
                <br />
                or 17.0 V ⎓ 3.53 A USB: 5 V⎓2 A
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">17.6 ± 0.1 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Rated Power</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">60 W</div>
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
                Supports a microSD with capacity of up to 128 GB. A UHS-I Speed
                Grade 3 rating microSD card is required.
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Recommended microSD Cards</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                32G
                <br />
                Sandisk V30
                <br />
                Sandisk Extreme V30 Pro
                <br />
                64G
                <br />
                Sandisk Extreme Pro V30
                <br />
                128G
                <br />
                Sandisk Extreme V30
                <br />
                Sandisk Extreme Pro V30
                <br />
                Kingston Canvas Go!
                <br />
                Kingston Canvas React
              </div>
            </li>
          </ul>
        </div>
      </SpecsContainer>
    </Container>
  );
};

export default MavicProZoom;
