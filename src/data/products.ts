import type { ImageMetadata } from "astro";
import sk401 from "../assets/sk4-1.jpg";
import sk402 from "../assets/sk4-2.jpg";
import sk403 from "../assets/sk4-3.jpg";
import sk404 from "../assets/sk4-4.jpg";
import sk405 from "../assets/sk4-5.gif";
import sk406 from "../assets/sk4-6.jpg";
import t301 from "../assets/t3-1.jpg";
import t302 from "../assets/t3-2.jpg";
import t303 from "../assets/t3-3.jpg";
import t304 from "../assets/t3-4.jpg";
import t305 from "../assets/t3-5.jpg";
import t306 from "../assets/t3-6.jpg";
import tp101 from "../assets/tp1-1.jpg";
import tp102 from "../assets/tp1-2.jpg";
import tp103 from "../assets/tp1-3.jpg";
import tp104 from "../assets/tp1-4.jpg";
import tp105 from "../assets/tp1-5.jpg";
import tp106 from "../assets/tp1-6.jpg";
import c60101 from "../assets/601-1.jpg";
import c60102 from "../assets/601-2.jpg";
import c60103 from "../assets/601-3.jpg";
import c60104 from "../assets/601-4.jpg";
import c60105 from "../assets/601-5.jpg";
import c60106 from "../assets/601-6.jpg";
import c60107 from "../assets/601-7.jpg";
import c60108 from "../assets/601-8.jpg";
import hld401 from "../assets/hld4-1.jpg";
import hld402 from "../assets/hld4-2.jpg";
import hld403 from "../assets/hld4-3.jpg";
import hld404 from "../assets/hld4-4.jpg";
import hld405 from "../assets/hld4-5.jpg";
import hld406 from "../assets/hld4-6.jpg";
import et6601 from "../assets/et66-1.jpg";
import et6602 from "../assets/et66-2.jpg";
import et6603 from "../assets/et66-3.jpg";
import a101 from "../assets/a1-1.jpg";
import a102 from "../assets/a1-2.jpg";
import a103 from "../assets/a1-3.jpg";
import a104 from "../assets/a1-4.avif";
import a105 from "../assets/a1-5.jpg";
import abr2101 from "../assets/abr21-1.jpg";
import abr2102 from "../assets/abr21-2.png";
import abr2103 from "../assets/abr21-3.png";
import abr2104 from "../assets/abr21-4.jpg";
import abr2105 from "../assets/abr21-5.jpg";
import abr2106 from "../assets/abr21-6.jpg";
import abr2107 from "../assets/abr21-7.jpg";
import ls201 from "../assets/l2-1.jpg";
import ls202 from "../assets/l2-2.jpg";
import ls203 from "../assets/l2-3.jpeg";
import ls204 from "../assets/l2-4.png";
import le101 from "../assets/le1-1.jpg";
import le102 from "../assets/le1-2.jpg";
import le103 from "../assets/le1-3.jpg";
import le104 from "../assets/le1-4.avif";
import le105 from "../assets/le1-5.webp";
import le106 from "../assets/le1-6.jpeg";
import nizo01 from "../assets/nizo-1.webp";
import nizo02 from "../assets/nizo-2.jpeg";
import nizo03 from "../assets/nizo-3.jpg";
import nizo04 from "../assets/nizo-4.webp";
import nizo05 from "../assets/nizo-5.png";
import rt2001 from "../assets/rt20-1.jpg";
import rt2002 from "../assets/rt20-2.webp";
import rt2003 from "../assets/rt20-3.jpg";
import rt2004 from "../assets/rt20-4.jpg";
import rt2005 from "../assets/rt20-5.jpg";
import ts4501 from "../assets/ts45-1.jpeg";
import ts4502 from "../assets/ts45-2.avif";
import ts4503 from "../assets/ts45-3.avif";
import ts4504 from "../assets/ts45-4.avif";
import ts4505 from "../assets/ts45-5.jpg";

type Product = {
    name: string;
    description: string;
    year: string;
    images: ImageMetadata[];
    slug: string;
};

export const products: Product[] = [
    {
        name: "SK4 Phonosuper",
        description: "Designed together with Hans Gugelot in 1956 for Braun, is a record player with an integrated radio that revolutionized audio equipment design. Its metal and wood casing, along with an innovative transparent acrylic lid instead of the traditional fabric or wooden cover, earned it the nickname “Snow White’s Coffin.” This iconic design laid the foundation for minimalism in consumer electronics.",
        year: "1956",
        images: [sk401, sk402, sk403, sk404, sk405, sk406],
        slug: "sk4-phonousuper"
    },
    {
       name: "T3 Transistor", 
       description: "Designed in 1958 for Braun, is a portable radio that influenced the design of later electronic products. Its minimalist aesthetic, based on a rational grid and discreet buttons, optimizes functionality and visual clarity. Its simple yet precise design exemplifies Rams’ philosophy of “less, but better.”",
       year: "1958",
       images: [t301, t302, t303, t304, t305, t306],
       slug: "t3-transistor"
    },
    {
        name: "Portable Transistor TP1",
        description: "Designed in 1959 for Braun, is a compact record player with an integrated radio. Its innovative and minimalist design combines functionality and aesthetics, featuring a modular structure that allows the speaker to be detached from the main body. It is a clear example of Rams’ rational and timeless approach to industrial design.",
        year: "1959",
        images: [tp101, tp102, tp103, tp104, tp105, tp106],
        slug: "portable-transistor-tp1"
    },
    {
        name: "601 Easy Chair",
        description: "Designed for the company Vitsoe in 1960, it reflects Rams’ philosophy of functional and minimalist design. With a modular structure, its design stands out for clean lines, a low base, and ergonomic cushions that prioritize comfort without sacrificing timeless aesthetics.",
        year: "1960",
        images: [c60101, c60102, c60103, c60104, c60105, c60106, c60107, c60108],
        slug: "601-easy-chair"
    },
    {
        name: "Hair Dryer HLD4",
        description: "Designed in 1970 for Braun, is a hair dryer that combines functionality, minimalist design, and a touch of fun. Its compact, ergonomic shape reflects Rams’ philosophy that design should be simple yet effective. Although minimalist, the HLD4 retains a playful character without sacrificing its design principles.",
        year: "1970",
        images: [hld401, hld402, hld403, hld404, hld405, hld406],
        slug: "hair-dryer-hld4"
    },
    {
        name: "Calculator ET66",
        description: "Designed in 1987 for Braun, the ET66 calculator is one of the most iconic examples of Rams’ 'less, but better' approach. With its rounded edges, clear button layout, and minimalist aesthetic, it prioritizes usability and clarity. Its influence is so enduring that it served as the direct inspiration for the calculator app in Apple’s original iOS. The ET66 embodies timeless, functional design at its best.",
        year: "1987",
        images: [et6601, et6602, et6603],
        slug: "calculator-et66"
    },
    {
        name: "Audio 1",
        description: "Designed in 1962 for Braun, the Audio 1 was one of the first modular hi-fi systems. With a sleek, horizontal layout, it allowed users to combine a radio tuner and amplifier in a single, elegant unit. Its clean lines and grid-based controls reflect Rams’ systematic and rational approach.",
        year: "1962",
        images: [a101, a102, a103, a104, a105],
        slug: "audio-1"
    },
    {
        name: "RT 20 Table Radio",
        description: "Released in 1961, the RT 20 exemplifies Rams’ minimalist design principles. With a plain white surface, horizontal speaker grille, and simple dials, it strips the radio to its most essential components without compromising on functionality.",
        year: "1961",
        images: [rt2001, rt2002, rt2003, rt2004, rt2005],
        slug: "rt-20-table-radio"
    },
    {
        name: "L2 Speaker",
        description: "Designed in 1958, the L2 is part of Braun’s early forays into high-fidelity audio. With its rectangular, perforated front panel and minimal enclosure, it’s a perfect example of form following function.",
        year: "1958",
        images: [ls201, ls202, ls203, ls204],
        slug: "l2-speaker"
    },
    {
        name: "ABR 21 Alarm Clock",
        description: "A compact, efficient design from 1978 that exemplifies clarity and usability. Its rounded edges, legible numbers, and bright alarm indicator show Rams' commitment to user-centered design.",
        year: "1978",
        images: [abr2101, abr2102, abr2103, abr2104, abr2105, abr2106, abr2107],
        slug: "abr-21-alarm-clock"
    },
    {
        name: "TS 45 Control Unit",
        description: "Part of the hi-fi system designed in the early 1970s, the TS 45 features a reduced layout of sliders and buttons, emphasizing intuitive control. Its logical arrangement makes it a classic in audio interface design.",
        year: "1973",
        images: [ts4501, ts4502, ts4503, ts4504, ts4505],
        slug: "ts-45-control-unit"
    },
    {
        name: "LE1 Electrostatic Speaker",
        description: "Released in 1959, the LE1 was the first electrostatic speaker for domestic use, and it was mounted on a minimalist metal stand, appearing to float in space. It’s a prime example of elegant engineering.",
        year: "1959",
        images: [le101, le102, le103, le104, le105, le106],
        slug: "le1-electrostatic-speaker"
    },
    {
        name: "Nizo S 56 Super 8 Camera",
        description: "Designed in the 1960s, this camera for Braun brought Rams’ clarity and simplicity to the world of film. The Nizo series is highly collectible today and known for its streamlined, all-white body.",
        year: "1968",
        images: [nizo01, nizo02, nizo03, nizo04, nizo05],
        slug: "nizo-s56-super8-camera"
    },
]