import React from "react";
import {
  Container,
  Title,
  SpecsTitle,
  ListTitle,
  SpecsContainer,
} from "./styled";

const Mini = () => {
  return (
    <Container>
      <SpecsTitle>Specs</SpecsTitle>
      <SpecsContainer>
        <Title>Mavic Mini</Title>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">Aircraft</h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>
                Takeoff Weight <sup>[1]</sup>
              </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">249 g</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Dimensions</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Folded: 140×81×57 mm (L×W×H)
                <br /> Unfolded: 159×202×55 mm (L×W×H)
                <br /> Unfolded (with propellers): 245×289×55 mm (L×W×H)
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
                4 m/s (S Mode)
                <br /> 2 m/s (P Mode)
                <br /> 1.5 m/s (C Mode)
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
                <br /> 1.8 m/s (P Mode)
                <br /> 1 m/s (C Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Speed (near sea level, no wind)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                13 m/s (S Mode)
                <br /> 8 m/s (P Mode)
                <br /> 4 m/s (C Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Maximum Takeoff Altitude</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">3000 m</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Flight Time</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                30 minutes (measured while flying at 14 kph in windless
                conditions)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Wind Speed Resistance</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">8 m/s (Scale 4)</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Tilt Angle</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                30° (S Mode) <br /> 20° (P Mode)
                <br /> 20° (C Mode)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Angular Velocity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                150°/s (S Mode)
                <br /> 130°/s (P Mode)
                <br /> 30°/s (C Mode)
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
              <h4>
                Operating Frequency<sup>[2]</sup>
              </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Model MT1SS5: 5.725-5.850 GHz
                <br /> Model MT1SD25: 2.400-2.4835 GHz, 5.725-5.850 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Transmission Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Model MT1SS5
                <br /> 5.8 GHz: &lt;30 dBm (FCC); &lt;28 dBm (SRRC)
                <br /> Model MT1SD25
                <br /> 2.4 GHz: &lt;19 dBm (MIC/CE)
                <br /> 5.8 GHz: &lt;14 dBm (CE)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>GNSS</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">GPS+GLONASS</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Hovering Accuracy Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Vertical: ±0.1 m (with Vision Positioning), ±0.5 m (with GPS
                Positioning) <br /> Horizontal: ±0.3 m (with Vision
                Positioning), ±1.5 m (with GPS Positioning)
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
                Tilt: -110° to 35° <br /> Roll: -35° to 35° <br /> Pan: -20° to
                20°
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
              <div className="detailed-parameter-value">120°/s</div>
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
                Operating Range: 0.5-10 m
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Environment</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Non-reflective, discernable surfaces
                <br /> Diffuse reflectivity (&gt;20%)
                <br /> Adequate lighting (lux&gt;15)
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
                1/2.3” CMOS
                <br /> Effective Pixels: 12 MP
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Lens</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FOV: 83°
                <br /> 35 mm Format Equivalent: 24 mm
                <br /> Aperture: f/2.8
                <br /> Shooting Range: 1 m to ∞
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>ISO Range</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Video: <br /> 100-3200 (Auto)
                <br />
                100-3200 (Manual) <br />
                Photo: <br /> 100-1600 (Auto)
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
                Electronic Shutter: 4-1/8000s
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Still Image Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                4:3: 4000×3000
                <br /> 16:9: 4000×2250
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
                <br /> Interval: 2/3/5/7/10/15/20/30/60 s
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Resolution</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                2.7K：2720×1530 24/25/30 p<br />
                FHD：1920×1080 24/25/30/48/50/60 p
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Video Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">40 Mbps</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported File System</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                FAT32（≤32 GB）
                <br /> exFAT（&gt;32 GB）
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Photo Format</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">JPEG</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Format</h4>
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
                Model MR1SS5: 5.725-5.850 GHz
                <br /> Model MR1SD25: 2.400-2.4835 GHz, 5.725-5.850 GHz
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>
                Max Transmission Distance (unobstructed, free of interference)
              </h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Model MR1SS5
                <br /> 5.8 GHz: 4000 m (FCC); 2500 m (SRRC)
                <br /> Model MR1SD25
                <br /> 2.4 GHz: 2000 m (MIC/CE)
                <br /> 5.8 GHz: 500 m (CE)
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
              <h4>Transmission Power (EIRP)</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Model MR1SS5
                <br /> 5.8 GHz: &lt;30 dBm (FCC); &lt;28 dBm (SRRC)
                <br /> Model MR1SD25
                <br /> 2.4 GHz: &lt;19 dBm (MIC/CE)
                <br /> 5.8 GHz: &lt;14 dBm (CE)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Battery Capacity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">2600 mAh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Operating Current/Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                1200 mA 3.6 V (Android)
                <br /> 450 mA 3.6 V (iOS)
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported Mobile Device Size</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Max length: 160 mm <br /> Max thickness: 6.5-8.5 mm
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Supported USB Port Types</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">
                Lightning, Micro USB (Type-B), USB Type-C
              </div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Video Transmission System</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Enhanced Wi-Fi</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Live View Quality</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">720p/30fps</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max. Bitrate</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">4 Mbps</div>
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
              <div className="detailed-parameter-value">170-240 ms</div>
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
                100-240 V, 50/60 Hz, 0.5A
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
              <h4>Capacity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">2400 mAh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">7.2 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Charging Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">8.4 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Battery Type</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">Li-ion 2S</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Energy</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">17.28 Wh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Net Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">100 g</div>
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
              <div className="detailed-parameter-value">24 W</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">
            Intelligent Flight Battery (1100 mAh)
          </h3>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Capacity</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">1100 mAh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">7.6 V</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Max Charging Voltage</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">8.7 V</div>
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
              <div className="detailed-parameter-value">8.36 Wh</div>
            </li>
          </ul>
          <ul className="detailed-parameter-list">
            <li className="detailed-parameter-key">
              <h4>Net Weight</h4>
            </li>
            <li className="detailed-parameter">
              <div className="detailed-parameter-value">50 g</div>
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
              <div className="detailed-parameter-value">18 W</div>
            </li>
          </ul>
        </div>
        <div className="specs-parameter-wrap">
          <h3 className="group-list-title">APP</h3>
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
                iOS v10.0 or later Android v6.0 or later
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
                UHS-I Speed Class 3 or above is required. A list of reccomended
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
                16 GB: SanDisk Extreme, Lexar 633x
                <br /> 32 GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk
                Industrial, Sandisk Extreme V30 A1, SanDisk Extreme V30 A2,
                SanDisk Extreme Pro V30 A1, SanDisk Extreme Pro V30 A2, Lexar
                633x, Lexar 667x
                <br /> 64 GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk
                Extreme V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High
                Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1
                <br /> 128 GB: Samsung Evo Plus, SanDisk Extreme V30 A2, SanDisk
                Extreme Plus V30 A1, SanDisk Extreme Plus V30 A2, Lexar 633x,
                Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA
                M303 V30 A1, Netac Pro V30 A1
                <br /> 256 GB: SanDisk Extreme V30 A2
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
                1. Aircraft takeoff weight (includes battery, propellers, and a
                microSD card). Registration not required in some countries and
                regions. Check local rules and regulations before use.These
                specs have been determined through tests conducted with the
                latest firmware. Firmware updates can enhance performance, so
                updating to the latest firmware is highly recommended.
                <br />
                2. Due to local policy and regulation restrictions, the 5.8 GHz
                frequency band is currently banned in certain countries,
                including but not limited to Japan, Russia, Israel, Ukraine, and
                Kazakhstan. Please use the 2.4 GHz frequency band when operating
                in these locations. Always check local rules and regulations
                before use, as they may change over time.
              </div>
            </li>
          </ul>
        </div>
      </SpecsContainer>
    </Container>
  );
};

export default Mini;
