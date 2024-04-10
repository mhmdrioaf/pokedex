export function properizeName(name: string): string {
  const fullName = name
    .split("-")
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1, name.length));

  return fullName.join(" ");
}
