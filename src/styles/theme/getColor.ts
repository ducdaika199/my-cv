export function getColor(
  overrideColor: string | null | undefined,
  defaultColor: string
) {
  return overrideColor || defaultColor;
}
