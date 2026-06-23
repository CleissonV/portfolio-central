import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 5

    // Particle field (green dots)
    const count = 200
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.8 + Math.random() * 2.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.65
      pos[i * 3 + 2] = r * Math.cos(phi) * 0.5
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const pMat = new THREE.PointsMaterial({ color: 0x00ff88, size: 0.03, transparent: true, opacity: 0.6 })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // Wireframe icosahedron (outer — purple)
    const iGeo = new THREE.IcosahedronGeometry(1.5, 1)
    const iMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.22 })
    const ico = new THREE.Mesh(iGeo, iMat)
    scene.add(ico)

    // Wireframe octahedron (inner — cyan)
    const oGeo = new THREE.OctahedronGeometry(0.8, 1)
    const oMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.18 })
    const oct = new THREE.Mesh(oGeo, oMat)
    scene.add(oct)

    const mouse = { x: 0, y: 0 }
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    let frameId: number
    let t = 0
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      t += 0.005

      ico.rotation.y = t * 0.38
      ico.rotation.x = t * 0.16
      oct.rotation.y = -t * 0.58
      oct.rotation.x = t * 0.26
      oct.rotation.z = t * 0.14
      ico.scale.setScalar(1 + Math.sin(t * 1.8) * 0.025)

      particles.rotation.y += (mouse.x * 0.38 - particles.rotation.y) * 0.016
      particles.rotation.x += (-mouse.y * 0.22 - particles.rotation.x) * 0.016

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('mousemove', onMouse)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      pGeo.dispose()
      pMat.dispose()
      iGeo.dispose()
      iMat.dispose()
      oGeo.dispose()
      oMat.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />
}
