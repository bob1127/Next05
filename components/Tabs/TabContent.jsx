"use client"
import React from "react";
import { motion } from "framer-motion";
import cardImage from "../../public/images/5.jpg";

const tabContentVariant = {
    active: {
        display: "block",
        transition: {
            staggerChildren: 0.2
        }
    },
    inactive: {
        display: "none"
    }
};

const cardVariant = {
    active: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    inactive: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.5
        }
    }
};

const cards = ["產品-01", "產品-02", "產品-03", "產品-04", "產品-05", "產品-07",];

const TabContent = ({ id, active }) => (
    <motion.div
        role="tabpanel"
        id={id}
        className="tab-content"
        variants={tabContentVariant}
        animate={active ? "active" : "inactive"}
        initial="inactive"
    >
        <div className="cards">
            {cards.map((item, index) => (
                <motion.div key={index} variants={cardVariant} className="content-card">
                    <img src={cardImage} alt="view of mountain" />
                    <div className="info">
                        <h3 className="text-normal text-white">{`${item}`} </h3>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

export default TabContent;
