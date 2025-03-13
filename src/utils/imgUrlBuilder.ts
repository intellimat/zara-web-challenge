import { Thumbnail } from "../types/Character";

const ThumbnailLayouts = {
  portrait: "portrait",
  standard: "standard",
  landscape: "landscape",
};

const ThumbnailSizes = {
  small: "small",
  medium: "medium",
  large: "large",
  xlarge: "xlarge",
};

export default function buildImgUrl(thumbnail: Thumbnail) {
  return (
    thumbnail.path +
    "/" +
    ThumbnailLayouts.standard +
    "_" +
    ThumbnailSizes.xlarge +
    "." +
    thumbnail.extension
  );
}
