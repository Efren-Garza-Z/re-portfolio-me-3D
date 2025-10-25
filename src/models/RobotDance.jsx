import React, {useEffect} from 'react'
import { Robot } from './Robot'

const RobotDance = () => {
    const three = new Robot()

    useEffect(() => {
        // three.playAnimation()
        three.resize()
        three.initScene()
    }, [])

    return (
        <div  id="container3D" ></div>
    )
}

export default RobotDance