import React from "react";
import { Container, Header } from "./styled";

const AirSettings = () => {
  return (
    <Container>
      <Header>Settings Mavic Air</Header>
      <div className="specs-parameter-wrap">
        <h3 className="group-list-title">Aircraft</h3>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>FCC\CE</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Если у вас каналы с 1 по 11 потом с 149 по 165 это FCC
              <br />
              Eсли с 1 по 13 потом с 149 по 165 тогда это СЕ
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>Подъем нормальный режим сток</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">2ms</div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>Спуск нормальный режим сток</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">-1.5ms</div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>Подъем нормальный режим изменено</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">2ms</div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>Спуск нормальный режим изменено</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">-1.5ms</div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>Подъем спорт режим сток</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">4ms</div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>Спуск спорт режим сток</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">-3ms</div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>Подъем спорт режим изменено</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">7ms</div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>Спуск спорт режим изменено</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">-5ms</div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>RC Controller</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              79% моргает 4 лампочка
              <br />
              62% моргает 3 лампочка
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>g_congig_mode_normal_cfg_vert_vel_up</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              ( 2мс подъем в режиме GPS )
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>g_congig_mode_normal_cfg_vert_vel_down</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              ( -1.5мс снижение в режиме GPS )
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>
              mode_sport_cfg_vert_vel_up|g_config_mode_sport_cfg_vert_vel_up
            </h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              ( 7мс подъем в режиме sport )
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>
              mode_sport_cfg_vert_vel_down|g_config_mode_sport_cfg_vert_vel_down
            </h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              ( -5мс снижение в режиме sport )
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>vert_vel_down_adding_max</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              ( -5мс максимальная скорость снижения )
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>g_config.flying_limit.avoid_ground_and_smart_landing_enable</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              (1on\0off)
              <br />
              Отключение инфракрасного датчика посадки
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>
              bat_level_2_action|g_config_voltage_level_2_protect_type = 0
            </h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Отключение самопроизовольной посадки на 10% ( Можно летать после
              0% )
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>bat_enable_smart_bat_landing_protect = 0</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Отключение самопроизовольной посадки на 10% ( Можно летать после
              0% )
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>battery_type = 3</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Сторонняя батарея Li-ion ( Корректное отображение ползунка )
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>raw_battery_cell_num|g_config_voltage_battery_call = 2</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Для 18650 кол-во банок 2
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>g_config_takeoff_auto_takeoff_height = 1.2</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              1.2м высота автовзлета
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>g_config_takeoff_auto_takeoff_vel = 0.5</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              0.5мс скорость подъема при автовзлете
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>fswitch_selection_1|g_config_control_control_mode[1] = 8</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              ATTI 3 переключение кнопкой sport
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>dji_bat_level_1|g_config_voltage2_level_1_voltage = 10</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Сообщение о посадке 10%
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>
              level1_smart_battert_gohome|g_config_voltage2_level2_smart_battert_gohome
              = 10
            </h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Сообщение о возврате домой 10%
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>
              mode_sport_cfg_tilt_atti_range|g_config_mode_sport_cfg_tilt_atti_range
            </h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Угол атаки стандарт
              <br />
              : 35 = 68,4 км / ч
              <br />: 26 = 50/51 км / ч
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter-key">
            <h4>g_config_mode_normal_cfg_tilt_atti_range</h4>
          </li>
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              Угол атаки стандарт
              <br />
              : 35
              <br />: 13 = 25/26/27 км / ч
            </div>
          </li>
        </ul>
        <ul className="detailed-parameter-list">
          <li className="detailed-parameter">
            <div className="detailed-parameter-value">
              <img src={`images/settings.jpg`} />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default AirSettings;
