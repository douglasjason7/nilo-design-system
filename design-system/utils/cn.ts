import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * O preset Kemet define font-sizes com nomes próprios (text-body-sm,
 * text-heading-md, text-caption, ...). O tailwind-merge padrão não os conhece
 * e os trata como COR, colidindo com as cores semânticas (text-bg, text-fg).
 * Resultado: em `cn("text-bg", "text-body-sm")` o merge descartava text-bg,
 * deixando o texto sem cor (ex.: botão primary com texto invisível).
 *
 * Registrar esses nomes no grupo font-size separa font-size de cor no merge.
 */
const FONT_SIZES = [
  "display-2xl", "display-xl", "display-lg",
  "heading-xl", "heading-lg", "heading-md", "heading-sm",
  "body-lg", "body-md", "body-sm",
  "label-lg", "label-sm", "caption",
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: FONT_SIZES }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
