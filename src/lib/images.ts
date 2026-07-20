const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/**/*.{avif,jpeg,jpg,png,webp}',
  { eager: true },
);

export function resolveCmsImage(source: string | null | undefined): ImageMetadata | undefined {
  if (!source) return undefined;
  const imagePath = source.replace(/^\/+/, '').replace(/^src\/assets\/images\//, '');
  const image = imageModules[`../assets/images/${imagePath}`]?.default;
  if (!image) throw new Error(`CMS image not found in src/assets/images: ${source}`);
  return image;
}

export function requireCmsImage(source: string | null | undefined): ImageMetadata {
  const image = resolveCmsImage(source);
  if (!image) throw new Error('A required CMS image was not selected.');
  return image;
}
