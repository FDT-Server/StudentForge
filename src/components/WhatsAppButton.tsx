"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);

    // Replace with your actual WhatsApp number
    const whatsappNumber = "919000000000";
    const message = "Hi Student Forge, I'd like to know more about your programs!";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="mb-3 flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 shadow-2xl"
                    >
                        <img src="/logo.png" alt="SF" className="h-5 w-5 object-contain" />
                        <p className="whitespace-nowrap text-[13px] font-bold text-white tracking-tight">
                            We are here to help! 👋
                        </p>
                        {/* Tooltip Arrow */}
                        <div className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-zinc-900" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all hover:bg-[#20ba5a]"
            >
                {/* Pulsing Aura */}
                <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />

                {/* WhatsApp SVG Icon */}
                <svg
                    viewBox="0 0 24 24"
                    className="relative z-10 h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.091 3.393l-.715 2.614 2.678-.703c.833.459 1.782.721 2.793.721 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.39 8.211c-.147.412-.867.839-1.213.889-.345.05-1.547.05-2.091-.183-.545-.233-2.071-1.201-2.071-3.21 0-2.01 1.036-2.997 1.411-3.393.375-.397.81-.496 1.05-.496.24 0 .445.011.636.021.191.011.397-.042.603.412.206.454.708 1.725.769 1.847.062.122.103.264.021.428-.083.165-.124.268-.248.391-.124.124-.251.272-.36.368-.12.106-.245.221-.104.464.14.243.621 1.026 1.334 1.656.917.81 1.689 1.062 1.932 1.183.243.122.384.103.527-.061.142-.165.611-.708.775-.953.164-.245.323-.206.541-.122.217.083 1.378.65 1.616.772.238.122.397.183.454.28.057.096.057.55-.09.96z" />
                    <path d="M12.094 2c-5.517 0-9.994 4.477-9.994 9.994 0 1.916.539 3.705 1.472 5.228l-1.572 5.741 5.867-1.539c1.45.86 3.125 1.363 4.908 1.363 5.517 0 9.994-4.477 9.994-9.994S17.611 2 12.094 2zm0 18.21c-1.631 0-3.151-.433-4.469-1.189l-.32-.187-3.326.872.888-3.244-.206-.328c-.804-1.277-1.267-2.793-1.267-4.414 0-4.524 3.682-8.207 8.207-8.207s8.207 3.683 8.207 8.207-3.683 8.207-8.207 8.207z" />
                </svg>
            </motion.a>
        </div>
    );
}
