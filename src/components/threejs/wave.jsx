import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { LineBasicMaterial } from 'three';
import { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Line } from '@react-three/drei';
export default function Wave({lineCount  = 8, position = [0, 0, 0], separation = 0.5, width = 10, waveCount = 3},) {
    // const linesRef = useRef(Array(8).fill(0).map(() => createRef()))
    const accumulatorDelta = useRef(0)
    const angle = useRef(0)
    const [points, setPoints] = useState([])

    const createWaveLine = useCallback((startAngle, startX, startY,  startZ, width, segments, waveCount, colors) => {
        var points = []
        var stepWidth = width / segments
        for (let i = 0; i <= segments; i++) {
            var base = i * 3;
            var x = i * stepWidth + startX
            var y = Math.cos((Math.PI * waveCount * x / width) + startAngle) + startY
            points.push(new THREE.Vector3(x, y, startZ))

        }

        var color = colors[0].clone()
        color.lerp(colors[1], Math.sin(startAngle)/2)
        
        return { positions: points, color: color }
    }, [])

    useFrame((state, delta) => {
        var interval = 1 / 60
        accumulatorDelta.current += delta;
        if (accumulatorDelta.current > interval) {
            accumulatorDelta.current %= interval
            var points = []
            for (var index = 0; index < lineCount; index++) {
                 
                var result = createWaveLine(angle.current + Math.cos(index * Math.PI / lineCount),
                    position[0],
                    position[1],
                    position[2] + index * separation,
                    width, 100, waveCount, [new THREE.Color('#01C38E'), new THREE.Color('#018cc3')])
                points.push(result)
                // linesRef.current[index].current.geometry.setAttribute('position', new THREE.BufferAttribute(result.positions, 3))
                // linesRef.current[index].current.geometry.setAttribute('color', new THREE.BufferAttribute(result.colors, 3))
            }
            setPoints(points)
            angle.current = (angle.current + 0.02) % (Math.PI * 2)
        }
    })
    return <group>
        {points.map((ref, index) => {
            return <Line key={index} color={points[index].color} points={points[index].positions}  worldUnits linewidth={0.02} />
            {/* <bufferGeometry />
                <mesh linewidth={1} 
                    linejoin='round' />
            </line> */}
        })}

    </group>
}