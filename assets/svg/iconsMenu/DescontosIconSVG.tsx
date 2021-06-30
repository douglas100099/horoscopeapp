import * as React from "react"
import Svg, { SvgProps, Image } from "react-native-svg"

function DescontosIconSVG(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={28}
      height={36}
      viewBox="0 0 28 36"
      {...props}
    >
      <Image
        width={28}
        height={36}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAYAAACaJFpUAAABuUlEQVRIie3XP0gCYRjH8W/eGQoSGLRLQY2tx7tGCUUEQUQQBFFL2BK1GU3tEW1lEPQHoclaytm3g6itJduFoGgwKrGIi8v+6fmqHRTcb3rxfd7nI3fP+acJxQhDhIAJoB9oB56BS+AA2JGmLKh0UgKFIfqALeAG2AUuAA3oBsbtPqPSlKcNg8IQg8A+sACsSVO+fNtvBhaBOaBHmtKsGxSGaAOugHlpyvUqtUvAFNApTflQqc7n1MR+1+fVMDvLQB6YdCqqBg4DKhjSlEVg0z5TOygMYe11AGcqoB2rtqsuEGixJ/G6BvAWCDkVNAlDDAAjZfas6RsD9gClZwxoBaL2mXJJ6MA0MOTQZEwR+5yJCq/f6e+rzEnmy04+nyfaG+UofUQo5HiVSslms8RmYm9nyvVCYUp/PRVBXdPx+XxomqZs+v1+dF13rKkIBoIBUocpgsGgMhiJRNje3a4PtBIOh5Ux1TN/5x56oAd6oAf+Wkof7YmNhGtIofDxg6EE5nI518BisfgTjC/GXQOtb/z0cfpt7U3p/wdLQ5NMJl1DCk9fH4t7a7G6suoa+CmPFjir+g+p4cDpK2KmbtatAofaAAAAAElFTkSuQmCC"
      />
    </Svg>
  )
}

export default DescontosIconSVG
