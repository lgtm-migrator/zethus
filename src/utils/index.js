import {
  MESSAGE_TYPE_TF,
  MESSAGE_TYPE_POSESTAMPED,
  MESSAGE_TYPE_DISPLAYJOINTSTATE,
  MESSAGE_TYPE_POINTCLOUD2,
  MESSAGE_TYPE_MARKERARRAY,
  MESSAGE_TYPE_LASERSCAN,
  MESSAGE_TYPE_OCCUPANCYGRID,
  MESSAGE_TYPE_ODOMETRY,
  MESSAGE_TYPE_POINTCLOUD,
  // MESSAGE_TYPE_DISPLAYTF,
  MESSAGE_TYPE_ROBOT_MODEL,
  MESSAGE_TYPE_POSEARRAY,
  MESSAGE_TYPE_PATH,
  MESSAGE_TYPE_IMAGE,
  MESSAGE_TYPE_MARKER,
  MESSAGE_TYPE_TF2,
  OBJECT_TYPE_ARROW,
} from 'amphion/src/utils/constants';

import { DEFAULT_COLOR_X_AXIS } from 'amphion/src/utils/defaults';
import { COLOR_SCHEMES } from 'amphion/src/viz/Map';
import {
  COLOR_TRANSFORMERS,
  INTENSITY_CHANNEL_OPTIONS,
  STYLE,
  AXIS_OPTIONS,
} from 'amphion/src/viz/LaserScan';

import { ARROW_OPTIONS_DEFAULTS } from '../components/sidebarOptions/ArrowOptions';
import { AXES_OPTIONS_DEFAULTS } from '../components/sidebarOptions/AxesOptions';
import { FLAT_ARROW_OPTIONS_DEFAULTS } from '../components/sidebarOptions/FlatArrowOptions';

export const ROS_SOCKET_STATUSES = {
  INITIAL: 'Idle. Not Connected',
  CONNECTING: 'Connecting',
  CONNECTED: 'Connected successfully',
  CONNECTION_ERROR: 'Error in connection',
};

export const LINE_STYLES = {
  LINES: 'Lines',
  BILLBOARDS: 'Billboards',
};

const intensityOptions = {
  channelName: INTENSITY_CHANNEL_OPTIONS.Intensity,
  useRainbow: false,
  invertRainbow: false,
  minColor: 0,
  maxColor: 0,
  autocomputeIntensityBounds: false,
  maxIntensity: 0,
  minIntensity: 0,
};

const axisColorOptions = {
  axis: AXIS_OPTIONS.X,
  autocomputeValueBounds: false,
  useFixedFrame: false,
  minAxisValue: 0,
  maxAxisValue: 0,
};

export const FIXED_FRAME = 'FixedFrame';

export const vizOptions = [
  {
    name: 'Laser Scan',
    messageTypes: [MESSAGE_TYPE_LASERSCAN],
    description: `shows data from a sensor_msgs/LaserScan message with different options for rendering modes, accumulation, etc.  
![](/image/sc_pointcloud.png)`,
    exampleLink: '',
    docsLink: '',
    defaultOptions: {
      unreliable: false,
      selectable: false,
      style: STYLE.FLAT_SQUARES,
      size: 0.01,
      alpha: 1,
      decayTime: 0,
      queueSize: 10,
      colorTransformer: COLOR_TRANSFORMERS.INTENSITY,
      flatColor: '#ffffff',
      ...intensityOptions,
      ...axisColorOptions,
    },
  },
  {
    name: 'Map',
    messageTypes: [MESSAGE_TYPE_OCCUPANCYGRID],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
    defaultOptions: {
      unreliable: false,
      alpha: 1,
      colorScheme: COLOR_SCHEMES.MAP,
      drawBehind: false,
    },
  },
  {
    name: 'Markers',
    messageTypes: [MESSAGE_TYPE_MARKER],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
    defaultOptions: {
      unreliable: false,
      queueSize: 100,
      namespaces: [],
    },
  },
  {
    name: 'Marker Array',
    messageTypes: [MESSAGE_TYPE_MARKERARRAY],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
    defaultOptions: {
      unreliable: false,
      queueSize: 100,
      namespaces: [],
    },
  },
  {
    name: 'Point Cloud',
    messageTypes: [MESSAGE_TYPE_POINTCLOUD2, MESSAGE_TYPE_POINTCLOUD],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
  },
  {
    name: 'Pose',
    messageTypes: [MESSAGE_TYPE_POSESTAMPED],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
    defaultOptions: {
      color: DEFAULT_COLOR_X_AXIS,
      alpha: 1,
      ...ARROW_OPTIONS_DEFAULTS,
      ...AXES_OPTIONS_DEFAULTS,
      type: OBJECT_TYPE_ARROW,
      unreliable: false,
    },
  },
  {
    name: 'Pose Array',
    messageTypes: [MESSAGE_TYPE_POSEARRAY],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
    defaultOptions: {
      color: DEFAULT_COLOR_X_AXIS,
      alpha: 1,
      ...ARROW_OPTIONS_DEFAULTS,
      ...AXES_OPTIONS_DEFAULTS,
      ...FLAT_ARROW_OPTIONS_DEFAULTS,
      type: OBJECT_TYPE_ARROW,
      unreliable: false,
    },
  },
  {
    name: 'Path',
    messageTypes: [MESSAGE_TYPE_PATH],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
    defaultOptions: {
      unreliable: false,
      lineStyle: LINE_STYLES.LINES,
      color: '#ffffff',
      alpha: 1,
      poseStyle: 'None',
      bufferLength: 0,
      ...AXES_OPTIONS_DEFAULTS,
      ...ARROW_OPTIONS_DEFAULTS,
    },
  },
  {
    name: 'Image',
    messageTypes: [MESSAGE_TYPE_IMAGE],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
  },
  {
    name: 'Robot Model',
    messageTypes: [MESSAGE_TYPE_ROBOT_MODEL],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
  },
  {
    name: 'Tf',
    messageTypes: [MESSAGE_TYPE_TF, MESSAGE_TYPE_TF2],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
  },
  {
    name: 'Display Joint state',
    messageTypes: [MESSAGE_TYPE_DISPLAYJOINTSTATE],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
    isDisplay: true,
  },
  // {
  //   name: 'Display Tf',
  //   messageTypes: [MESSAGE_TYPE_DISPLAYTF],
  //   description: 'Lorem ipsum',
  //   exampleLink: '',
  //   docsLink: '',
  //   isDisplay: true,
  // },
  {
    name: 'Display Odometry',
    messageTypes: [MESSAGE_TYPE_ODOMETRY],
    description: 'Lorem ipsum',
    exampleLink: '',
    docsLink: '',
    isDisplay: false,
    defaultOptions: {
      unreliable: false,
      type: OBJECT_TYPE_ARROW,
      color: DEFAULT_COLOR_X_AXIS,
      alpha: 1,
      ...ARROW_OPTIONS_DEFAULTS,
      ...AXES_OPTIONS_DEFAULTS,
      ...FLAT_ARROW_OPTIONS_DEFAULTS,
      positionTolerance: 0.1,
      angleTolerance: 0.1,
      keep: 100,
    },
  },
];

export const urdfDetails = {
  urdf: `<?xml version="1.0" ?>
<!-- =================================================================================== -->
<!-- |    This document was autogenerated by xacro from japanpost_env_schmalz_multisuction.urdf.xacro | -->
<!-- |    EDITING THIS FILE BY HAND IS NOT RECOMMENDED                                 | -->
<!-- =================================================================================== -->
<robot name="japanpost_environment" xmlns:xacro="http://ros.org/wiki/xacro">
  <gazebo>
    <plugin filename="libgazebo_ros_control.so" name="ros_control">
      <!--robotNamespace>/</robotNamespace-->
      <!--robotSimType>gazebo_ros_control/DefaultRobotHWSim</robotSimType-->
    </plugin>
    <!--
    <plugin name="gazebo_ros_power_monitor_controller" filename="libgazebo_ros_power_monitor.so">
      <alwaysOn>true</alwaysOn>
      <updateRate>1.0</updateRate>
      <timeout>5</timeout>
      <powerStateTopic>power_state</powerStateTopic>
      <powerStateRate>10.0</powerStateRate>
      <fullChargeCapacity>87.78</fullChargeCapacity>     
      <dischargeRate>-474</dischargeRate>
      <chargeRate>525</chargeRate>
      <dischargeVoltage>15.52</dischargeVoltage>
      <chargeVoltage>16.41</chargeVoltage>
    </plugin>
-->
  </gazebo>
  <!--
  Author: Kelsey Hawkins
  Contributers: Jimmy Da Silva, Ajit Krisshna N L, Muhammad Asif Rana
-->
  <!-- measured from model -->
  <material name="Grey">
    <color rgba="0.7 0.7 0.7 1.0"/>
  </material>
  <material name="GreyPallet">
    <color rgba="0.7 0.7 0.7 1.0"/>
  </material>
  <material name="Grey4">
    <color rgba="0.6 0.7 0.8 1.0"/>
  </material>
  <material name="Grey2">
    <color rgba="0.7 0.7 0.7 1.0"/>
  </material>
  <link name="japanpost_environment"/>
  <joint name="japanpost_environment_jp_table_base_joint" type="fixed">
    <origin rpy="0.0 0.0 0.0" xyz="0 0 0.75"/>
    <parent link="japanpost_environment"/>
    <child link="jp_table_link"/>
  </joint>
  <link name="jp_table_link">
    <visual>
      <geometry>
        <mesh filename="package://rr_world_description/meshes/rr_japanpost_parts/table_frame_camera_v.stl"/>
      </geometry>
      <material name="Grey"/>
    </visual>
    <!--collision>
      <geometry>
        <mesh filename="package://rr_world_description/meshes/rr_japanpost_parts/table_frame_camera_v.stl"/>
      </geometry>
    </collision-->
    <collision>
      <origin rpy="0 0 0" xyz="0 0 -0.37"/>
      <geometry>
        <box size="0.77 0.77 0.77"/>
      </geometry>
    </collision>
    <collision>
      <origin rpy="0 0 0" xyz="0 0.32 0.73"/>
      <geometry>
        <box size="0.77 0.14 1.8"/>
      </geometry>
    </collision>
    <collision>
      <origin rpy="0 0 0" xyz="-0.73 0.08 1.525"/>
      <geometry>
        <box size="0.8 0.77 0.13"/>
      </geometry>
    </collision>
    <collision>
      <origin rpy="-0.785 0 0" xyz="0.355 0.15 0.13"/>
      <geometry>
        <box size="0.05 0.05 0.5"/>
      </geometry>
    </collision>
  </link>
  <gazebo reference="jp_table_link">
    <static>true</static>
  </gazebo>
  <joint name="japanpost_environment_jp_pallet_base_joint" type="planar">
    <origin rpy="0.0 0.0 -1.57" xyz="-1.10 -0.25 0"/>
    <parent link="japanpost_environment"/>
    <child link="jp_pallet_link"/>
  </joint>
  <link name="jp_pallet_link">
    <visual>
      <geometry>
        <mesh filename="package://rr_world_description/meshes/rr_japanpost_parts/roll_pallet_v.stl"/>
      </geometry>
      <material name="GreyPallet"/>
    </visual>
    <!--collision>
      <geometry>
        <mesh filename="package://rr_world_description/meshes/rr_japanpost_parts/roll_pallet_v.stl"/>
      </geometry>
    </collision-->
    <collision>
      <origin rpy="0 0 0" xyz="0 -0.34 1.1"/>
      <geometry>
        <box size="1.27 0.08 1.9"/>
      </geometry>
    </collision>
    <collision>
      <origin rpy="0 0 0" xyz="0.62 0.02 1.1"/>
      <geometry>
        <box size="0.2 0.74 1.9"/>
      </geometry>
    </collision>
    <collision>
      <origin rpy="0 0 0" xyz="-0.61 0.02 1.1"/>
      <geometry>
        <box size="0.2 0.74 1.9"/>
      </geometry>
    </collision>
    <collision>
      <origin rpy="0 0 0" xyz="0 0.01 0.15"/>
      <geometry>
        <box size="1.27 0.75 0.27"/>
      </geometry>
    </collision>
  </link>
  <gazebo reference="jp_pallet_link">
    <static>true</static>
  </gazebo>
  <joint name="japanpost_environment_jp_conveyor_base_joint" type="fixed">
    <origin rpy="0.0 0.0 0.0" xyz="0.0 0.0 0.0"/>
    <parent link="japanpost_environment"/>
    <child link="jp_conveyor_link"/>
  </joint>
  <link name="jp_conveyor_link">
    <visual>
      <geometry>
        <mesh filename="package://rr_world_description/meshes/rr_japanpost_parts/dummy_conveyor.stl"/>
      </geometry>
      <material name="Grey4"/>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://rr_world_description/meshes/rr_japanpost_parts/dummy_conveyor.stl"/>
      </geometry>
    </collision>
    <!--collision>
      <origin xyz="0.0 1 -0.03" rpy="0 0 0"/>
      <geometry>
        <box size="0.64 2.1 0.16"/>
      </geometry>
    </collision-->
  </link>
  <gazebo reference="jp_conveyor_link">
    <static>true</static>
  </gazebo>
  <link name="agv_base_link">
    <visual>
      <origin rpy="0.0 0 1.57" xyz="0 0 -0.13"/>
      <geometry>
        <!--<box size="1.03 0.6 0.04"/>-->
        <!--<mesh filename="package://rr_shared_world_description/meshes/ifollow_agv/nowheels_robot.stl" scale="0.001 0.001 0.001"/>-->
        <mesh filename="package://rr_shared_world_description/meshes/ifollow_agv/fancy_agv.dae" scale="0.001 0.001 0.001"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <box size="1.03 0.63 0.04"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="80"/>
      <inertia ixx="2.66" ixy="0.0" ixz="0.0" iyy="7.08" iyz="0.0" izz="9.72"/>
    </inertial>
  </link>
  <joint name="agv_base_link_left_wheel_joint" type="continuous">
    <origin rpy="-1.57 0.0 0.0" xyz="0.0 0.329 -0.055"/>
    <parent link="agv_base_link"/>
    <child link="left_wheel_link"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.01" friction="0.5"/>
  </joint>
  <link name="left_wheel_link">
    <visual>
      <geometry>
        <cylinder length="0.046" radius="0.075"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.046" radius="0.075"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="2.5"/>
      <inertia ixx="0.00395645833333" ixy="0.0" ixz="0.0" iyy="0.00395645833333" iyz="0.0" izz="0.00703125"/>
    </inertial>
    <surface>
      <friction>
        <ode>
          <mu>0.1</mu>
          <mu2>0.1</mu2>
        </ode>
      </friction>
    </surface>
  </link>
  <transmission name="agv_base_link_left_wheel_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="agv_base_link_left_wheel_joint">
      <hardwareInterface>hardware_interface/VelocityJointInterface</hardwareInterface>
    </joint>
    <actuator name="agv_base_link_left_wheel_actuator">
      <mechanicalReduction>6.75</mechanicalReduction>
      <hardwareInterface>VelocityJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <joint name="agv_base_link_right_wheel_joint" type="continuous">
    <origin rpy="-1.57 0.0 0.0" xyz="0.0 -0.329 -0.055"/>
    <parent link="agv_base_link"/>
    <child link="right_wheel_link"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.01" friction="0.5"/>
  </joint>
  <link name="right_wheel_link">
    <visual>
      <geometry>
        <cylinder length="0.046" radius="0.075"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.046" radius="0.075"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="2.5"/>
      <inertia ixx="0.00395645833333" ixy="0.0" ixz="0.0" iyy="0.00395645833333" iyz="0.0" izz="0.00703125"/>
    </inertial>
    <surface>
      <friction>
        <ode>
          <mu>0.1</mu>
          <mu2>0.1</mu2>
        </ode>
      </friction>
    </surface>
  </link>
  <transmission name="agv_base_link_right_wheel_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="agv_base_link_right_wheel_joint">
      <hardwareInterface>hardware_interface/VelocityJointInterface</hardwareInterface>
    </joint>
    <actuator name="agv_base_link_right_wheel_actuator">
      <mechanicalReduction>6.75</mechanicalReduction>
      <hardwareInterface>VelocityJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <link name="front_left_wheel_caster_link">
    <visual>
      <geometry>
        <sphere radius="0.01"/>
        <!--<box size="0.01 0.01 0.01"/>-->
      </geometry>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.01"/>
        <!--<box size="0.01 0.01 0.01"/>-->
      </geometry>
    </collision>
    <inertial>
      <mass value="0.5"/>
      <inertia ixx="0.0002" ixy="0.0" ixz="0.0" iyy="0.0002" iyz="0.0" izz="0.0002"/>
    </inertial>
  </link>
  <joint name="front_left_wheel_pitch" type="continuous">
    <parent link="agv_base_link"/>
    <child link="front_left_wheel_caster_link"/>
    <origin rpy="0.0 0.0 0.0" xyz="0.515 0.315 -0.035"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.003" friction="0.08"/>
  </joint>
  <transmission name="front_left_wheel_pitch_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="front_left_wheel_pitch">
      <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    </joint>
    <actuator name="front_left_wheel_pitch_actuator">
      <mechanicalReduction>1</mechanicalReduction>
      <hardwareInterface>EffortJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <joint name="front_left_wheel_caster_link_front_left_wheel_joint" type="continuous">
    <origin rpy="1.57 1.57 0" xyz="-0.04 0 -0.06"/>
    <parent link="front_left_wheel_caster_link"/>
    <child link="front_left_wheel_link"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.01" friction="0.5"/>
  </joint>
  <link name="front_left_wheel_link">
    <visual>
      <geometry>
        <cylinder length="0.053" radius="0.035"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.053" radius="0.035"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.25"/>
      <inertia ixx="0.000675416666667" ixy="0.0" ixz="0.0" iyy="0.000675416666667" iyz="0.0" izz="0.000765625"/>
    </inertial>
    <surface>
      <friction>
        <ode>
          <mu>0.1</mu>
          <mu2>0.1</mu2>
        </ode>
      </friction>
    </surface>
  </link>
  <transmission name="front_left_wheel_caster_link_front_left_wheel_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="front_left_wheel_caster_link_front_left_wheel_joint">
      <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    </joint>
    <actuator name="front_left_wheel_caster_link_front_left_wheel_actuator">
      <mechanicalReduction>1</mechanicalReduction>
      <hardwareInterface>EffortJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <link name="front_right_wheel_caster_link">
    <visual>
      <geometry>
        <sphere radius="0.01"/>
        <!--<box size="0.01 0.01 0.01"/>-->
      </geometry>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.01"/>
        <!--<box size="0.01 0.01 0.01"/>-->
      </geometry>
    </collision>
    <inertial>
      <mass value="0.5"/>
      <inertia ixx="0.0002" ixy="0.0" ixz="0.0" iyy="0.0002" iyz="0.0" izz="0.0002"/>
    </inertial>
  </link>
  <joint name="front_right_wheel_pitch" type="continuous">
    <parent link="agv_base_link"/>
    <child link="front_right_wheel_caster_link"/>
    <origin rpy="0.0 0.0 0.0" xyz="0.515 -0.315 -0.035"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.003" friction="0.08"/>
  </joint>
  <transmission name="front_right_wheel_pitch_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="front_right_wheel_pitch">
      <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    </joint>
    <actuator name="front_right_wheel_pitch_actuator">
      <mechanicalReduction>1</mechanicalReduction>
      <hardwareInterface>EffortJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <joint name="front_right_wheel_caster_link_front_right_wheel_joint" type="continuous">
    <origin rpy="1.57 1.57 0" xyz="-0.04 0 -0.06"/>
    <parent link="front_right_wheel_caster_link"/>
    <child link="front_right_wheel_link"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.01" friction="0.5"/>
  </joint>
  <link name="front_right_wheel_link">
    <visual>
      <geometry>
        <cylinder length="0.053" radius="0.035"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.053" radius="0.035"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.25"/>
      <inertia ixx="0.000675416666667" ixy="0.0" ixz="0.0" iyy="0.000675416666667" iyz="0.0" izz="0.000765625"/>
    </inertial>
    <surface>
      <friction>
        <ode>
          <mu>0.1</mu>
          <mu2>0.1</mu2>
        </ode>
      </friction>
    </surface>
  </link>
  <transmission name="front_right_wheel_caster_link_front_right_wheel_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="front_right_wheel_caster_link_front_right_wheel_joint">
      <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    </joint>
    <actuator name="front_right_wheel_caster_link_front_right_wheel_actuator">
      <mechanicalReduction>1</mechanicalReduction>
      <hardwareInterface>EffortJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <link name="back_left_wheel_caster_link">
    <visual>
      <geometry>
        <sphere radius="0.01"/>
        <!--<box size="0.01 0.01 0.01"/>-->
      </geometry>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.01"/>
        <!--<box size="0.01 0.01 0.01"/>-->
      </geometry>
    </collision>
    <inertial>
      <mass value="0.5"/>
      <inertia ixx="0.0002" ixy="0.0" ixz="0.0" iyy="0.0002" iyz="0.0" izz="0.0002"/>
    </inertial>
  </link>
  <joint name="back_left_wheel_pitch" type="continuous">
    <parent link="agv_base_link"/>
    <child link="back_left_wheel_caster_link"/>
    <origin rpy="0.0 0.0 0.0" xyz="-0.515 0.315 -0.035"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.003" friction="0.08"/>
  </joint>
  <transmission name="back_left_wheel_pitch_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="back_left_wheel_pitch">
      <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    </joint>
    <actuator name="back_left_wheel_pitch_actuator">
      <mechanicalReduction>1</mechanicalReduction>
      <hardwareInterface>EffortJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <joint name="back_left_wheel_caster_link_back_left_wheel_joint" type="continuous">
    <origin rpy="1.57 1.57 0" xyz="-0.04 0 -0.06"/>
    <parent link="back_left_wheel_caster_link"/>
    <child link="back_left_wheel_link"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.01" friction="0.5"/>
  </joint>
  <link name="back_left_wheel_link">
    <visual>
      <geometry>
        <cylinder length="0.053" radius="0.035"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.053" radius="0.035"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.25"/>
      <inertia ixx="0.000675416666667" ixy="0.0" ixz="0.0" iyy="0.000675416666667" iyz="0.0" izz="0.000765625"/>
    </inertial>
    <surface>
      <friction>
        <ode>
          <mu>0.1</mu>
          <mu2>0.1</mu2>
        </ode>
      </friction>
    </surface>
  </link>
  <transmission name="back_left_wheel_caster_link_back_left_wheel_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="back_left_wheel_caster_link_back_left_wheel_joint">
      <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    </joint>
    <actuator name="back_left_wheel_caster_link_back_left_wheel_actuator">
      <mechanicalReduction>1</mechanicalReduction>
      <hardwareInterface>EffortJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <link name="back_right_wheel_caster_link">
    <visual>
      <geometry>
        <sphere radius="0.01"/>
        <!--<box size="0.01 0.01 0.01"/>-->
      </geometry>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.01"/>
        <!--<box size="0.01 0.01 0.01"/>-->
      </geometry>
    </collision>
    <inertial>
      <mass value="0.5"/>
      <inertia ixx="0.0002" ixy="0.0" ixz="0.0" iyy="0.0002" iyz="0.0" izz="0.0002"/>
    </inertial>
  </link>
  <joint name="back_right_wheel_pitch" type="continuous">
    <parent link="agv_base_link"/>
    <child link="back_right_wheel_caster_link"/>
    <origin rpy="0.0 0.0 0.0" xyz="-0.515 -0.315 -0.035"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.003" friction="0.08"/>
  </joint>
  <transmission name="back_right_wheel_pitch_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="back_right_wheel_pitch">
      <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    </joint>
    <actuator name="back_right_wheel_pitch_actuator">
      <mechanicalReduction>1</mechanicalReduction>
      <hardwareInterface>EffortJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <joint name="back_right_wheel_caster_link_back_right_wheel_joint" type="continuous">
    <origin rpy="1.57 1.57 0" xyz="-0.04 0 -0.06"/>
    <parent link="back_right_wheel_caster_link"/>
    <child link="back_right_wheel_link"/>
    <axis xyz="0 0 1"/>
    <dynamics damping="0.01" friction="0.5"/>
  </joint>
  <link name="back_right_wheel_link">
    <visual>
      <geometry>
        <cylinder length="0.053" radius="0.035"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.053" radius="0.035"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.25"/>
      <inertia ixx="0.000675416666667" ixy="0.0" ixz="0.0" iyy="0.000675416666667" iyz="0.0" izz="0.000765625"/>
    </inertial>
    <surface>
      <friction>
        <ode>
          <mu>0.1</mu>
          <mu2>0.1</mu2>
        </ode>
      </friction>
    </surface>
  </link>
  <transmission name="back_right_wheel_caster_link_back_right_wheel_transmission">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="back_right_wheel_caster_link_back_right_wheel_joint">
      <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    </joint>
    <actuator name="back_right_wheel_caster_link_back_right_wheel_actuator">
      <mechanicalReduction>1</mechanicalReduction>
      <hardwareInterface>EffortJointInterface</hardwareInterface>
    </actuator>
  </transmission>
  <gazebo reference="agv_base_link">
    <material>Gazebo/Grey3</material>
  </gazebo>
  <gazebo>
    <plugin filename="libgazebo_ros_control.so" name="gazebo_ros_control">
      <robotNamespace>/</robotNamespace>
    </plugin>
  </gazebo>
  <joint name="agv_joint" type="planar">
    <parent link="japanpost_environment"/>
    <child link="agv_base_link"/>
    <origin rpy="0.0 0.0 3.14" xyz="-1.10 -0.25 0.15"/>
  </joint>
  <link name="base_link">
    <visual>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/visual/base.dae"/>
      </geometry>
      <material name="LightGrey">
        <color rgba="0.7 0.7 0.7 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/collision/base.stl"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="4.0"/>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0"/>
      <inertia ixx="0.0061063308908" ixy="0.0" ixz="0.0" iyy="0.0061063308908" iyz="0.0" izz="0.01125"/>
    </inertial>
  </link>
  <joint name="shoulder_pan_joint" type="revolute">
    <parent link="base_link"/>
    <child link="shoulder_link"/>
    <origin rpy="0.0 0.0 0.0" xyz="0.0 0.0 0.1273"/>
    <axis xyz="0 0 1"/>
    <limit effort="330.0" lower="0.0" upper="3.14159265359" velocity="2.16"/>
    <dynamics damping="0.0" friction="0.0"/>
  </joint>
  <link name="shoulder_link">
    <visual>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/visual/shoulder.dae"/>
      </geometry>
      <material name="LightGrey">
        <color rgba="0.7 0.7 0.7 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/collision/shoulder.stl"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="7.778"/>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0"/>
      <inertia ixx="0.0314743125769" ixy="0.0" ixz="0.0" iyy="0.0314743125769" iyz="0.0" izz="0.021875625"/>
    </inertial>
  </link>
  <joint name="shoulder_lift_joint" type="revolute">
    <parent link="shoulder_link"/>
    <child link="upper_arm_link"/>
    <origin rpy="0.0 1.57079632679 0.0" xyz="0.0 0.220941 0.0"/>
    <axis xyz="0 1 0"/>
    <limit effort="330.0" lower="-3.14159265359" upper="0.0" velocity="2.16"/>
    <dynamics damping="0.0" friction="0.0"/>
  </joint>
  <link name="upper_arm_link">
    <visual>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/visual/upperarm.dae"/>
      </geometry>
      <material name="LightGrey">
        <color rgba="0.7 0.7 0.7 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/collision/upperarm.stl"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="12.93"/>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.306"/>
      <inertia ixx="0.421753803798" ixy="0.0" ixz="0.0" iyy="0.421753803798" iyz="0.0" izz="0.036365625"/>
    </inertial>
  </link>
  <joint name="elbow_joint" type="revolute">
    <parent link="upper_arm_link"/>
    <child link="forearm_link"/>
    <origin rpy="0.0 0.0 0.0" xyz="0.0 -0.1719 0.612"/>
    <axis xyz="0 1 0"/>
    <limit effort="150.0" lower="-3.14159265359" upper="3.14159265359" velocity="3.15"/>
    <dynamics damping="0.0" friction="0.0"/>
  </joint>
  <link name="forearm_link">
    <visual>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/visual/forearm.dae"/>
      </geometry>
      <material name="LightGrey">
        <color rgba="0.7 0.7 0.7 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/collision/forearm.stl"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="3.87"/>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.28615"/>
      <inertia ixx="0.111069694097" ixy="0.0" ixz="0.0" iyy="0.111069694097" iyz="0.0" izz="0.010884375"/>
    </inertial>
  </link>
  <joint name="wrist_1_joint" type="revolute">
    <parent link="forearm_link"/>
    <child link="wrist_1_link"/>
    <origin rpy="0.0 1.57079632679 0.0" xyz="0.0 0.0 0.5723"/>
    <axis xyz="0 1 0"/>
    <limit effort="54.0" lower="-3.14159265359" upper="0.785398163397" velocity="3.2"/>
    <dynamics damping="0.0" friction="0.0"/>
  </joint>
  <link name="wrist_1_link">
    <visual>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/visual/wrist1.dae"/>
      </geometry>
      <material name="LightGrey">
        <color rgba="0.7 0.7 0.7 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/collision/wrist1.stl"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.96"/>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0"/>
      <inertia ixx="0.0051082479567" ixy="0.0" ixz="0.0" iyy="0.0051082479567" iyz="0.0" izz="0.0055125"/>
    </inertial>
  </link>
  <joint name="wrist_2_joint" type="revolute">
    <parent link="wrist_1_link"/>
    <child link="wrist_2_link"/>
    <origin rpy="0.0 0.0 0.0" xyz="0.0 0.1149 0.0"/>
    <axis xyz="0 0 1"/>
    <limit effort="54.0" lower="-3.14159265359" upper="0.0" velocity="3.2"/>
    <dynamics damping="0.0" friction="0.0"/>
  </joint>
  <link name="wrist_2_link">
    <visual>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/visual/wrist2.dae"/>
      </geometry>
      <material name="LightGrey">
        <color rgba="0.7 0.7 0.7 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/collision/wrist2.stl"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.96"/>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0"/>
      <inertia ixx="0.0051082479567" ixy="0.0" ixz="0.0" iyy="0.0051082479567" iyz="0.0" izz="0.0055125"/>
    </inertial>
  </link>
  <joint name="wrist_3_joint" type="revolute">
    <parent link="wrist_2_link"/>
    <child link="wrist_3_link"/>
    <origin rpy="0.0 0.0 0.0" xyz="0.0 0.0 0.1157"/>
    <axis xyz="0 1 0"/>
    <limit effort="54.0" lower="2.09439510239" upper="4.71238898038" velocity="3.2"/>
    <dynamics damping="0.0" friction="0.0"/>
  </joint>
  <link name="wrist_3_link">
    <visual>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/visual/wrist3.dae"/>
      </geometry>
      <material name="LightGrey">
        <color rgba="0.7 0.7 0.7 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://ur_description/meshes/ur10/collision/wrist3.stl"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="0.202"/>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0"/>
      <inertia ixx="0.000526462289415" ixy="0.0" ixz="0.0" iyy="0.000526462289415" iyz="0.0" izz="0.000568125"/>
    </inertial>
  </link>
  <joint name="ee_fixed_joint" type="fixed">
    <parent link="wrist_3_link"/>
    <child link="ee_link"/>
    <origin rpy="0.0 0.0 1.57079632679" xyz="0.0 0.0922 0.0"/>
  </joint>
  <link name="ee_link">
    <collision>
      <geometry>
        <box size="0.01 0.01 0.01"/>
      </geometry>
      <origin rpy="0 0 0" xyz="-0.01 0 0"/>
    </collision>
  </link>
  <transmission name="shoulder_pan_trans">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="shoulder_pan_joint">
      <hardwareInterface>hardware_interface/PositionJointInterface</hardwareInterface>
    </joint>
    <actuator name="shoulder_pan_motor">
      <mechanicalReduction>1</mechanicalReduction>
    </actuator>
  </transmission>
  <transmission name="shoulder_lift_trans">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="shoulder_lift_joint">
      <hardwareInterface>hardware_interface/PositionJointInterface</hardwareInterface>
    </joint>
    <actuator name="shoulder_lift_motor">
      <mechanicalReduction>1</mechanicalReduction>
    </actuator>
  </transmission>
  <transmission name="elbow_trans">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="elbow_joint">
      <hardwareInterface>hardware_interface/PositionJointInterface</hardwareInterface>
    </joint>
    <actuator name="elbow_motor">
      <mechanicalReduction>1</mechanicalReduction>
    </actuator>
  </transmission>
  <transmission name="wrist_1_trans">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="wrist_1_joint">
      <hardwareInterface>hardware_interface/PositionJointInterface</hardwareInterface>
    </joint>
    <actuator name="wrist_1_motor">
      <mechanicalReduction>1</mechanicalReduction>
    </actuator>
  </transmission>
  <transmission name="wrist_2_trans">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="wrist_2_joint">
      <hardwareInterface>hardware_interface/PositionJointInterface</hardwareInterface>
    </joint>
    <actuator name="wrist_2_motor">
      <mechanicalReduction>1</mechanicalReduction>
    </actuator>
  </transmission>
  <transmission name="wrist_3_trans">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="wrist_3_joint">
      <hardwareInterface>hardware_interface/PositionJointInterface</hardwareInterface>
    </joint>
    <actuator name="wrist_3_motor">
      <mechanicalReduction>1</mechanicalReduction>
    </actuator>
  </transmission>
  <!-- nothing to do here at the moment -->
  <!-- ROS base_link to UR 'Base' Coordinates transform -->
  <link name="base"/>
  <joint name="base_link-base_fixed_joint" type="fixed">
    <!-- NOTE: this rotation is only needed as long as base_link itself is
                 not corrected wrt the real robot (ie: rotated over 180
                 degrees)
      -->
    <origin rpy="0 0 -3.14159265359" xyz="0 0 0"/>
    <parent link="base_link"/>
    <child link="base"/>
  </joint>
  <!-- Frame coincident with all-zeros TCP on UR controller -->
  <link name="tool0"/>
  <joint name="wrist_3_link-tool0_fixed_joint" type="fixed">
    <origin rpy="-1.57079632679 0 0" xyz="0 0.0922 0"/>
    <parent link="wrist_3_link"/>
    <child link="tool0"/>
  </joint>
  <joint name="ur10_joint" type="fixed">
    <parent link="jp_table_link"/>
    <child link="base_link"/>
    <origin rpy="0.0 0.0 1.57" xyz="0.0 0.0 0.0"/>
  </joint>
  <joint name="tool0_schmalz_gripper_gripper_joint" type="fixed">
    <origin rpy="0.0 0.0 0.345" xyz="0.0 0.0 0.05"/>
    <parent link="tool0"/>
    <child link="schmalz_gripper_link"/>
  </joint>
  <link name="schmalz_gripper_link">
    <visual>
      <geometry>
        <mesh filename="package://rr_world_description/meshes/rr_schmalz_multisuction/schmalz_visual.stl"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <mesh filename="package://rr_world_description/meshes/rr_schmalz_multisuction/schmalz_visual.stl"/>
        <!--box size="0.29 0.17 0.2"/-->
      </geometry>
    </collision>
    <!--collision for the wires to gripper-->
    <collision>
      <origin rpy="0.0 0.0 0.0" xyz="0.13 -0.01 -0.125"/>
      <geometry>
        <box size="0.02 0.10 0.25"/>
      </geometry>
    </collision>
  </link>
  <!-- tool center point -->
  <link name="tool_center_point"/>
  <joint name="tool_center_point_joint" type="fixed">
    <parent link="tool0"/>
    <child link="tool_center_point"/>
    <origin rpy="0.0 0.0 0.345" xyz="0.0 0.0 0.125"/>
  </joint>
</robot>`,
  packages: {
    robotiq_2f_model:
      'https://storage.googleapis.com/kompose-artifacts/robotiq_2f_model',
    rr_world_description:
      'https://storage.googleapis.com/kompose-artifacts/rr_world_description',
    ur_description:
      'https://storage.googleapis.com/kompose-artifacts/ur_description',
    rr_japanpost_parts:
      'https://storage.googleapis.com/kompose-artifacts/rr_japanpost_parts',
    rr_schmalz_multisuction:
      'https://storage.googleapis.com/kompose-artifacts/rr_schmalz_multisuction',
    mitsubishi_manipulator_description:
      'https://storage.googleapis.com/kompose-artifacts/mitsubishi_manipulator_description',
    nkc_amr_description:
      'https://storage.googleapis.com/kompose-artifacts/nkc_amr_description',
    rr_shared_world_description:
      'https://storage.googleapis.com/kompose-artifacts/rr_shared_world_description',
  },
};
