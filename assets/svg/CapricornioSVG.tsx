import * as React from "react"
import Svg, { SvgProps, Image } from "react-native-svg"

function CapricornioSVG(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={54}
      height={74}
      viewBox="0 0 54 74"
      {...props}
    >
      <Image
        width={54}
        height={74}
        xlinkHref="data:img/png;base64,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"
      />
    </Svg>
  )
}

export default CapricornioSVG
