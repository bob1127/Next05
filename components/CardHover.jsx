"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";




// components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";

export default function App() {



    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="overflow-hidden cardFiver group py-40 px-30 relative w-full rounded-xl border border-white/10 bg-black px-8 py-16 shadow-2xl "
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-00 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 90%d
            )
          `,
                }}
            />
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className=" ">
                    <h3 className="text-base font-semibold leading-7 text-sky-500">
                        Nearly half of the global population is estimated to be infected with H. pylori
                    </h3>
                    <div className="mt-2 flex items-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-white">
                            Nearly half of the global population

                        </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                        The primary modes of transmission for Helicobacter pylori infection are through diet and oral contact. This bacterium can be present in the saliva, oral cavity, vomit, or feces of infected individuals. It can spread through direct contact, sharing utensils, consuming contaminated food or water, and more. Additionally, infection can occur through contact with the vomit or feces of an infected person.
                    </p>
                </div>
                <div className=" h-80 overflow-hidden ">
                    {/* <iframe className="h-80 w-full scale-150" src="https://my.spline.design/planetearthdaycopy-2333a6dda7fecbc7779226b36abe6285/" frameborder="0"></iframe> */}

                </div>
            </div>
        </div>
    );
}