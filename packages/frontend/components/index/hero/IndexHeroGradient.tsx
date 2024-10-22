'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function IndexHeroGradient({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 450"
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="55"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          />
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <motion.ellipse
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 30, -30, 0], // Smooth horizontal movement
            y: [0, 20, -20, 0], // Smooth vertical movement
            transition: {
              duration: 8, // Slower animation
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          rx="277.5"
          ry="219"
          cx="413.24064774946737"
          cy="234.9619404185902"
          fill="hsl(210, 100%, 12%)"
        />
        <motion.ellipse
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 20, -20, 0], // Smooth horizontal movement
            y: [0, 30, -30, 0], // Smooth vertical movement
            transition: {
              duration: 8, // Slower animation
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          rx="277.5"
          ry="219"
          cx="122.80480194091797"
          cy="92.09180450439453"
          fill="hsl(203, 41%, 39%)"
        />
        <motion.ellipse
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -20, 20, 0], // Smooth horizontal movement
            y: [0, 10, -10, 0], // Smooth vertical movement
            transition: {
              duration: 8, // Slower animation
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          rx="277.5"
          ry="219"
          cx="692.8209006569602"
          cy="24.278434059836684"
          fill="hsl(185, 100%, 57%)"
        />
        <motion.ellipse
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 40, -40, 0], // Smooth horizontal movement
            y: [0, 15, -15, 0], // Smooth vertical movement
            transition: {
              duration: 8, // Slower animation
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          rx="277.5"
          ry="219"
          cx="690.7485906427557"
          cy="399.0363880504261"
          fill="hsl(203, 41%, 39%)"
        />
        <motion.ellipse
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -30, 30, 0], // Smooth horizontal movement
            y: [0, 25, -25, 0], // Smooth vertical movement
            transition: {
              duration: 8, // Slower animation
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          rx="277.5"
          ry="219"
          cx="125.99309747869319"
          cy="380.51456798206675"
          fill="hsl(185, 100%, 57%)"
        />
      </g>
    </svg>
  )
}
