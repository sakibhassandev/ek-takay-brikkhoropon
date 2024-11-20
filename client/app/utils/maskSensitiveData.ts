export function maskSensitiveData(data: string): string {
  const visiblePart = data.slice(0, 4);
  const maskedPart = "*".repeat(data.length - 4);
  return visiblePart + maskedPart;
}
