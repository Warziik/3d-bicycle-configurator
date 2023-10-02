import {Canvas} from "@react-three/fiber";
import {Model} from "./components/Model.tsx";
import {OrbitControls, PresentationControls, Stage} from "@react-three/drei";

export function Experience() {
    return <Canvas>
        <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
        />

        <Stage
            environment={`city`}
            intensity={1.2}
            adjustCamera={1}
        >
            <Model />
        </Stage>
    </Canvas>
}