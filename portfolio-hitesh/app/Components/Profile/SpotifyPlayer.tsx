"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const SpotifyPlayer = () => {
  return (
    <a
      target="_blank"
      href="https://open.spotify.com/embed/track/72zHuDxFQTjbL51qJQSA7j?utm_source=generator"
    >
      {" "}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex gap-2 scale-80 max-w-[170px] bg-green-50 border border-green-200 rounded-full pl-2 pr-4 m-2 py-1 items-center w-fit"
      >
        <div className="w-8 h-8  items-center flex bg-green-100 rounded-full">
          <div className="playing">
            <div className="greenline line-1"></div>
            <div className="greenline line-2"></div>
            <div className="greenline line-3"></div>
            <div className="greenline line-4"></div>
            <div className="greenline line-5"></div>
          </div>
        </div>
        <p className="whitespace-nowrap font-semibold overflow-hidden text-ellipsis">
          Ranjha (From "Shershaah")
        </p>
      </motion.div>
    </a>
  );
};

export default SpotifyPlayer;
