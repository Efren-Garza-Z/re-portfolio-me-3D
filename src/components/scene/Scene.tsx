// components/Scene.tsx
"use client"
import { Canvas } from "@react-three/fiber"
import {OrbitControls, Center, Environment, ContactShadows} from "@react-three/drei"
import { Suspense } from "react"
import Model from "./Model"

export default function Scene({ isTyping }: { isTyping: boolean }) {
    return (
        <Canvas
            shadows
            // fov: 35 para acercar, position: [0, 0, 5] para centrar el eje de la cámara
            camera={{ position: [0, 0, 8], fov: 45 }}
            className="w-full h-full"
        >
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <Environment preset="city" />
            <Suspense fallback={null}>
                <Center top position={[0, -0.2, 0]}>
                    <Model isTyping={isTyping} />
                </Center>
            </Suspense>
            <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={5} blur={2} />
            {/* Deshabilitamos interacción para mantenerlo estable */}
            <OrbitControls
                enablePan={false}
                minDistance={5}
                maxDistance={12}
                makeDefault
            />
        </Canvas>
    )
}