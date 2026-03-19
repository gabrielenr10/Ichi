import type { ImageMetadata } from "astro"

export interface Testimonial {
    date?: string
    title?: string
    description?: string
    imagePath?: ImageMetadata
}
