import { Thumbnail } from "../types/Character";

export enum ThumbnailLayouts {
  portrait = "portrait",
  standard = "standard",
  landscape = "landscape",
}

export enum ThumbnailSizes {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

export default function buildImgUrl(
  thumbnail: Thumbnail,
  thumbnailLayout: ThumbnailLayouts,
  thumbnailSizes: ThumbnailSizes
) {
  return (
    thumbnail.path +
    "/" +
    thumbnailLayout +
    "_" +
    thumbnailSizes +
    "." +
    thumbnail.extension
  );
}
