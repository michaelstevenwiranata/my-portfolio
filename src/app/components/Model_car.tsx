import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type ActionName = "Car engine";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Spring_Light_black_0: THREE.Mesh;
    Spring_Black_0: THREE.Mesh;
    Spring001_Light_black_0: THREE.Mesh;
    Spring001_Black_0: THREE.Mesh;
    Spring002_Light_black_0: THREE.Mesh;
    Spring002_Black_0: THREE.Mesh;
    Spring003_Light_black_0: THREE.Mesh;
    Spring003_Black_0: THREE.Mesh;
    Smoke001_Smoke_0: THREE.Mesh;
    Smoke002_Smoke_0: THREE.Mesh;
    Smoke003_Smoke_0: THREE.Mesh;
    Smoke004_Smoke_0: THREE.Mesh;
    Smoke005_Smoke_0: THREE.Mesh;
    Smoke006_Smoke_0: THREE.Mesh;
    Smoke007_Smoke_0: THREE.Mesh;
    Smoke008_Smoke_0: THREE.Mesh;
    Smoke009_Smoke_0: THREE.Mesh;
    Smoke010_Smoke_0: THREE.Mesh;
    Smoke011_Smoke_0: THREE.Mesh;
    Smoke012_Smoke_0: THREE.Mesh;
    Frame_Orange_0: THREE.Mesh;
    Frame_Black_0: THREE.Mesh;
    Frame_Glass_0: THREE.Mesh;
    Frame_Light_0: THREE.Mesh;
    Frame_Light_red_0: THREE.Mesh;
    Frame_Dark_brown_0: THREE.Mesh;
    Frame_Dark_brown_handle_0: THREE.Mesh;
    Frame_Glass_trailer_0: THREE.Mesh;
    Frame_Light_black_0: THREE.Mesh;
    Frame_Brown_0: THREE.Mesh;
    Front_wheel_Black_0: THREE.Mesh;
    Front_wheel_Light_black_0: THREE.Mesh;
    Rear_wheel_Black_0: THREE.Mesh;
    Rear_wheel_Light_black_0: THREE.Mesh;
    Front_wheel001_Black_0: THREE.Mesh;
    Front_wheel001_Light_black_0: THREE.Mesh;
    Rear_wheel001_Black_0: THREE.Mesh;
    Rear_wheel001_Light_black_0: THREE.Mesh;
  };
  materials: {
    Light_black: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    Smoke: THREE.MeshStandardMaterial;
    Orange: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    Light: THREE.MeshStandardMaterial;
    Light_red: THREE.MeshStandardMaterial;
    Dark_brown: THREE.MeshStandardMaterial;
    Dark_brown_handle: THREE.MeshStandardMaterial;
    Glass_trailer: THREE.MeshStandardMaterial;
    Brown: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Car(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const frontWheelRef = useRef<THREE.Group>();
  const rearWheelRef = useRef<THREE.Group>();
  const frontWheel001Ref = useRef<THREE.Group>();
  const rearWheel001Ref = useRef<THREE.Group>();

  const { nodes, materials, animations } = useGLTF(
    "/models/car.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["Car engine"]) {
      actions["Car engine"].timeScale = 0.5;
      actions["Car engine"].play();
    }
  }, [actions]);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useFrame((state, delta) => {
    const rotation = state.clock.getElapsedTime() * 1.7;
    if (frontWheelRef.current) {
      frontWheelRef.current.rotation.z = -rotation;
    }
    if (rearWheelRef.current) {
      rearWheelRef.current.rotation.z = -rotation;
    }
    if (frontWheel001Ref.current) {
      frontWheel001Ref.current.rotation.z = -rotation;
    }
    if (rearWheel001Ref.current) {
      rearWheel001Ref.current.rotation.z = -rotation;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={isMobile ? 0.005 : 0.009}
      position={isMobile ? [0, -1, 0] : [3, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2.5, 0, -2.5]}>
          <group
            name="7f09d404031140d78a7bb6db74b81fa4fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                {/* ... other groups like springs and smoke ... */}
                <group
                  name="Spring"
                  position={[155.621, 20.722, -81.958]}
                  rotation={[-0.209, Math.PI / 2, 0]}
                  scale={2.803}
                >
                  <mesh
                    name="Spring_Light_black_0"
                    geometry={nodes.Spring_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                  <mesh
                    name="Spring_Black_0"
                    geometry={nodes.Spring_Black_0.geometry}
                    material={materials.Black}
                  />
                </group>
                <group
                  name="Spring001"
                  position={[-128.512, 20.722, -81.958]}
                  rotation={[-0.209, Math.PI / 2, 0]}
                  scale={2.803}
                >
                  <mesh
                    name="Spring001_Light_black_0"
                    geometry={nodes.Spring001_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                  <mesh
                    name="Spring001_Black_0"
                    geometry={nodes.Spring001_Black_0.geometry}
                    material={materials.Black}
                  />
                </group>
                <group
                  name="Spring002"
                  position={[155.621, 20.722, 81.958]}
                  rotation={[0.209, -Math.PI / 2, 0]}
                  scale={2.803}
                >
                  <mesh
                    name="Spring002_Light_black_0"
                    geometry={nodes.Spring002_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                  <mesh
                    name="Spring002_Black_0"
                    geometry={nodes.Spring002_Black_0.geometry}
                    material={materials.Black}
                  />
                </group>
                <group
                  name="Spring003"
                  position={[-128.512, 20.722, 81.958]}
                  rotation={[0.209, -Math.PI / 2, 0]}
                  scale={2.803}
                >
                  <mesh
                    name="Spring003_Light_black_0"
                    geometry={nodes.Spring003_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                  <mesh
                    name="Spring003_Black_0"
                    geometry={nodes.Spring003_Black_0.geometry}
                    material={materials.Black}
                  />
                </group>
                <group
                  name="Smoke001"
                  position={[70.408, 165.259, 94.261]}
                  scale={0}
                >
                  <mesh
                    name="Smoke001_Smoke_0"
                    geometry={nodes.Smoke001_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke002"
                  position={[74.602, 165.67, 92.365]}
                  scale={0}
                >
                  <mesh
                    name="Smoke002_Smoke_0"
                    geometry={nodes.Smoke002_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke003"
                  position={[72.18, 166.534, 95.135]}
                  scale={0}
                >
                  <mesh
                    name="Smoke003_Smoke_0"
                    geometry={nodes.Smoke003_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke004"
                  position={[73.14, 165.638, 93.102]}
                  scale={0}
                >
                  <mesh
                    name="Smoke004_Smoke_0"
                    geometry={nodes.Smoke004_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke005"
                  position={[75.198, 166.038, 95.17]}
                  scale={0}
                >
                  <mesh
                    name="Smoke005_Smoke_0"
                    geometry={nodes.Smoke005_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke006"
                  position={[75.865, 167.365, 89.869]}
                  scale={0}
                >
                  <mesh
                    name="Smoke006_Smoke_0"
                    geometry={nodes.Smoke006_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke007"
                  position={[74.987, 167.942, 90.928]}
                  scale={0}
                >
                  <mesh
                    name="Smoke007_Smoke_0"
                    geometry={nodes.Smoke007_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke008"
                  position={[73.567, 166.392, 94.528]}
                  scale={0}
                >
                  <mesh
                    name="Smoke008_Smoke_0"
                    geometry={nodes.Smoke008_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke009"
                  position={[70.765, 159.593, 95.076]}
                  scale={0}
                >
                  <mesh
                    name="Smoke009_Smoke_0"
                    geometry={nodes.Smoke009_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke010"
                  position={[72.875, 163.489, 92.993]}
                  scale={0}
                >
                  <mesh
                    name="Smoke010_Smoke_0"
                    geometry={nodes.Smoke010_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke011"
                  position={[75.049, 162.613, 91.645]}
                  scale={0}
                >
                  <mesh
                    name="Smoke011_Smoke_0"
                    geometry={nodes.Smoke011_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Smoke012"
                  position={[73.821, 161.817, 89.947]}
                  scale={0}
                >
                  <mesh
                    name="Smoke012_Smoke_0"
                    geometry={nodes.Smoke012_Smoke_0.geometry}
                    material={materials.Smoke}
                  />
                </group>
                <group
                  name="Frame"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[300, 100, 50]}
                >
                  <mesh
                    name="Frame_Orange_0"
                    geometry={nodes.Frame_Orange_0.geometry}
                    material={materials.Orange}
                  />
                  <mesh
                    name="Frame_Black_0"
                    geometry={nodes.Frame_Black_0.geometry}
                    material={materials.Black}
                  />
                  <mesh
                    name="Frame_Glass_0"
                    geometry={nodes.Frame_Glass_0.geometry}
                    material={materials.Glass}
                  />
                  <mesh
                    name="Frame_Light_0"
                    geometry={nodes.Frame_Light_0.geometry}
                    material={materials.Light}
                  />
                  <mesh
                    name="Frame_Light_red_0"
                    geometry={nodes.Frame_Light_red_0.geometry}
                    material={materials.Light_red}
                  />
                  <mesh
                    name="Frame_Dark_brown_0"
                    geometry={nodes.Frame_Dark_brown_0.geometry}
                    material={materials.Dark_brown}
                  />
                  <mesh
                    name="Frame_Dark_brown_handle_0"
                    geometry={nodes.Frame_Dark_brown_handle_0.geometry}
                    material={materials.Dark_brown_handle}
                  />
                  <mesh
                    name="Frame_Glass_trailer_0"
                    geometry={nodes.Frame_Glass_trailer_0.geometry}
                    material={materials.Glass_trailer}
                  />
                  <mesh
                    name="Frame_Light_black_0"
                    geometry={nodes.Frame_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                  <mesh
                    name="Frame_Brown_0"
                    geometry={nodes.Frame_Brown_0.geometry}
                    material={materials.Brown}
                  />
                </group>

                {/* 4. Assign the refs to the wheel groups */}
                <group
                  ref={frontWheelRef}
                  name="Front_wheel"
                  position={[155.621, 9.27, -127.28]}
                  scale={[50.096, 50.096, 27.014]}
                >
                  <mesh
                    name="Front_wheel_Black_0"
                    geometry={nodes.Front_wheel_Black_0.geometry}
                    material={materials.Black}
                  />
                  <mesh
                    name="Front_wheel_Light_black_0"
                    geometry={nodes.Front_wheel_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                </group>
                <group
                  ref={rearWheelRef}
                  name="Rear_wheel"
                  position={[-128.512, 14.271, -125.978]}
                  scale={[55.106, 55.106, 29.617]}
                >
                  <mesh
                    name="Rear_wheel_Black_0"
                    geometry={nodes.Rear_wheel_Black_0.geometry}
                    material={materials.Black}
                  />
                  <mesh
                    name="Rear_wheel_Light_black_0"
                    geometry={nodes.Rear_wheel_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                </group>
                <group
                  ref={frontWheel001Ref}
                  name="Front_wheel001"
                  position={[155.621, 9.27, 127.28]}
                  scale={[50.096, 50.096, 27.014]}
                >
                  <mesh
                    name="Front_wheel001_Black_0"
                    geometry={nodes.Front_wheel001_Black_0.geometry}
                    material={materials.Black}
                  />
                  <mesh
                    name="Front_wheel001_Light_black_0"
                    geometry={nodes.Front_wheel001_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                </group>
                <group
                  ref={rearWheel001Ref}
                  name="Rear_wheel001"
                  position={[-128.512, 14.271, 125.978]}
                  scale={[55.106, 55.106, 29.617]}
                >
                  <mesh
                    name="Rear_wheel001_Black_0"
                    geometry={nodes.Rear_wheel001_Black_0.geometry}
                    material={materials.Black}
                  />
                  <mesh
                    name="Rear_wheel001_Light_black_0"
                    geometry={nodes.Rear_wheel001_Light_black_0.geometry}
                    material={materials.Light_black}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/car.glb");
