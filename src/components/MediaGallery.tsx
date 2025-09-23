"use client";

import { motion } from "framer-motion";

const media = [
  { type: "image", src: "/assets/WhatsApp Image 2025-09-23 at 19.24.14_68a9d510.jpg" },
  { type: "image", src: "/assets/WhatsApp Image 2025-09-23 at 19.29.09_ee07aee4.jpg" },
  { type: "video", src: "/assets/WhatsApp Video 2025-09-23 at 19.29.09_2c46ad5d.mp4" },
  { type: "video", src: "/assets/WhatsApp Video 2025-09-23 at 19.29.09_cca22a3a.mp4" },
];

export function MediaGallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {media.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
        >
          {m.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={m.src} alt="gallery" className="w-full h-48 object-cover" />
          ) : (
            <video src={m.src} className="w-full h-48 object-cover" controls preload="metadata" />
          )}
        </motion.div>
      ))}
    </div>
  );
}