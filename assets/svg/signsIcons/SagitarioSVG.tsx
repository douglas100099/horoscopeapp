import * as React from "react"
import Svg, { SvgProps, Image } from "react-native-svg"

function SagitarioSVG(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={55}
      height={54}
      viewBox="0 0 55 54"
      {...props}
    >
      <Image
        width={55}
        height={54}
        xlinkHref="data:img/png;base64,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"
      />
    </Svg>
  )
}

export default SagitarioSVG