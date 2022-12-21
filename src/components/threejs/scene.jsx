import Wave from "./wave"


export default function Scene() {

    return <>
        <group rotation={[0, 0.2, 0]}>
            <Wave position={[-20, -3, 0]} lineCount={20} width={50} waveCount={4} separation={0.2} />
        </group>
        <group rotation={[0.3, -0.2, -1]}>
            <Wave position={[-15, -3, 0]} lineCount={20} width={40} waveCount={4} separation={0.2} />
        </group>
    </>
}