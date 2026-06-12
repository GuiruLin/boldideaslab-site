type ShapeProps = {
  className?: string;
};

/** 思维力标记：圆角十边形（描边） */
export function Decagon({ className = "", stroke = "#002FA7" }: ShapeProps & { stroke?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 100 100">
      <polygon
        points="50,3 79,12 97,37 97,63 79,88 50,97 21,88 3,63 3,37 21,12"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth="6"
      />
    </svg>
  );
}

/** 创作力标记：平底半圆（拱） */
export function Arch({ className = "" }: ShapeProps) {
  return <span aria-hidden className={`block bg-gold ${className}`} style={{ borderRadius: "999px 999px 0 0" }} />;
}

/** 表达力标记：pill 胶囊 */
export function Pill({ className = "" }: ShapeProps) {
  return <span aria-hidden className={`block rounded-full bg-blue ${className}`} />;
}

/** 四分之一圆 */
export function Quad({ className = "" }: ShapeProps) {
  return <span aria-hidden className={`block bg-blue ${className}`} style={{ borderRadius: "0 100% 0 10px" }} />;
}

/** 圆角方块 */
export function Block({ className = "" }: ShapeProps) {
  return <span aria-hidden className={`block rounded-[10px] bg-gold ${className}`} />;
}

/** 红点：全屏唯一红形，句号级强调 */
export function Dot({ className = "" }: ShapeProps) {
  return <span aria-hidden className={`block rounded-full bg-red ${className}`} />;
}
