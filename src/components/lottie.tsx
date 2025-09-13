"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Lottie = (props: {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <DotLottieReact
      src={props.src}
      autoplay={props.autoplay}
      loop={props.loop}
      style={props.style}
      className={props.className}
    />
  );
};
