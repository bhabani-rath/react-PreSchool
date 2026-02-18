import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONFETTI_COLORS = [
  "#FFD166",
  "#06D6A0",
  "#EF476F",
  "#118AB2",
  "#9B5DE5",
  "#F15BB5",
  "#00F5D4",
  "#FF9F1C",
];

const SHAPES = ["circle", "square", "triangle"];

const createConfettiPiece = (id) => ({
  id,
  x: Math.random() * 100,
  color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
  size: Math.random() * 8 + 4,
  shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
  rotation: Math.random() * 360,
  delay: Math.random() * 0.5,
  duration: Math.random() * 2 + 2,
});

const ConfettiPiece = ({ piece }) => {
  const getShapeStyle = () => {
    switch (piece.shape) {
      case "circle":
        return "rounded-full";
      case "square":
        return "rounded-sm";
      case "triangle":
        return "rounded-none";
      default:
        return "rounded-full";
    }
  };

  return (
    <motion.div
      initial={{
        x: `${piece.x}vw`,
        y: -20,
        rotate: 0,
        opacity: 1,
      }}
      animate={{
        y: "110vh",
        rotate: piece.rotation + 720,
        opacity: [1, 1, 0.8, 0],
        x: `${piece.x + (Math.random() * 20 - 10)}vw`,
      }}
      transition={{
        duration: piece.duration,
        delay: piece.delay,
        ease: "linear",
      }}
      className={`absolute ${getShapeStyle()}`}
      style={{
        width: `${piece.size}px`,
        height: `${piece.size}px`,
        backgroundColor: piece.color,
      }}
    />
  );
};

const ConfettiEffect = ({
  isActive = false,
  count = 50,
  duration = 4000,
  autoTrigger = false,
}) => {
  const [pieces, setPieces] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (autoTrigger) {
      triggerConfetti();
    }
  }, [autoTrigger]);

  useEffect(() => {
    if (isActive) {
      triggerConfetti();
    }
  }, [isActive]);

  const triggerConfetti = () => {
    const newPieces = Array.from({ length: count }, (_, i) =>
      createConfettiPiece(i)
    );
    setPieces(newPieces);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
      setPieces([]);
    }, duration);
  };

  return (
    <AnimatePresence>
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 z-[300] overflow-hidden">
          {pieces.map((piece) => (
            <ConfettiPiece key={piece.id} piece={piece} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfettiEffect;