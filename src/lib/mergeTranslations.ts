function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Deep-merge locale objects. Arrays and primitives from `source` overwrite `target`. */
export function deepMergeTranslations(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...target }

  for (const [key, value] of Object.entries(source)) {
    if (isObject(value) && isObject(result[key])) {
      result[key] = deepMergeTranslations(
        result[key] as Record<string, unknown>,
        value,
      )
    } else {
      result[key] = value
    }
  }

  return result
}
