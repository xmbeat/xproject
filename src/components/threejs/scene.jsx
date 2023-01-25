import { useFrame } from "@react-three/fiber"
import { useEffect, useMemo, useState } from "react"
import { Vector3 } from "three"
import Wave from "./wave"


export default function Scene() {
    const cameraPositions = useMemo(() => {
        return [
            { position: new Vector3(0, 0, -8), lookAt: new Vector3(0, 0, 0), scrollPos: [0, 400] },
            { position: new Vector3(-2, 0, -2), lookAt: new Vector3(0, 0, 0), scrollPos: [400, 1200] },
            { position: new Vector3(-3, -3, -4), lookAt: new Vector3(0, 0, 0), scrollPos: [1200, 2000] },
            { position: new Vector3(-3, 1, -8), lookAt: new Vector3(0, 0, 0), scrollPos: [2000, 2600] },
            { position: new Vector3(-3, 3, -8), lookAt: new Vector3(0, 0, 0), scrollPos: [2600, 20000] }
        ]
    })
    const [currentCamera,  setCurrentCamera] = useState(null)

    useEffect(()=>{
        let listener = ()=>{
            // console.log(document.documentElement.scrollTop)
            for (var i = 0; i < cameraPositions.length; i++){
                var min = cameraPositions[i].scrollPos[0]
                var max = cameraPositions[i].scrollPos[1]
                var scrollPos = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
                if (scrollPos >= min && scrollPos < max){
                    setCurrentCamera(cameraPositions[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', listener)
        listener()
        return ()=>{
            window.removeEventListener('scroll', listener)
        }
    }, [])

    useFrame((state) => {
        if (currentCamera){

            state.camera.lookAt(currentCamera.lookAt)
            state.camera.position.lerp(currentCamera.position, 0.1)
            state.camera.updateProjectionMatrix()
        }
    })

    return <>
        <group rotation={[0, 0.2, 0]}>
            <Wave position={[-60, -3, 0]} lineCount={20} width={100} waveCount={10} separation={0.2} />
        </group>
        <group rotation={[0.3, -0.2, -1]}>
            <Wave position={[-30, -3, 0]} lineCount={20} width={100} waveCount={10} separation={0.2} />
        </group>
    </>
}