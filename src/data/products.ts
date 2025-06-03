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
]