import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

/**
 * Converts an array of objects with 'name' and 'id' properties
 * into an array of strings.
 *
 * @param {Array<{name: string, id: number|string}>} arrayOfObjects - The array of objects to convert.
 * @returns {string[]} The resulting array of strings.
 */
export function convertObjectsToStringArray<T>(
  arrayOfObjects: T[],
  formatter: (obj: T) => string
) {
  return arrayOfObjects.map(formatter);
}
