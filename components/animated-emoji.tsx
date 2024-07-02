"use client";

import { useRef, useEffect, useState } from "react";

import { ForwardRefComponent, motion } from "framer-motion";

export const AnimatedEmoji = ({
  src,
  className,
  autoplay = true,
  loop = true,
  as,
}: {
  src: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  as?: ForwardRefComponent<any, any>;
}) => {
  const ref = useRef<HTMLElement>(null);

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleRendered = () => {
      setLoaded(true);
    };

    const player = ref.current;

    player?.addEventListener("rendered", handleRendered);
    player?.addEventListener("ready", handleRendered);

    return () => {
      player?.removeEventListener("rendered", handleRendered);
      player?.removeEventListener("ready", handleRendered);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Component = as || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.8 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <tgs-player
        ref={ref}
        src={src}
        autoplay={autoplay}
        loop={loop}
        mode="normal"
        style={{ width: "100%", height: "100%" }}
      />
    </Component>
  );
};
