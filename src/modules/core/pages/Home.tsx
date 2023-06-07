import { useResizeWidth } from "@/hooks";
import { ImagesBlock, Footer } from "../layouts";
import { useImages } from "../hooks";
import { endpoints, handleFetch } from "@/utils";
import { ImageResources } from "@/types";
import { PageContainer } from "../components";
import { Loader } from "@/components";

export function Home() {
  const width = useResizeWidth();
  const accessToken = localStorage.getItem("accessToken");

  const fetchImages = async (): Promise<ImageResources> => {
    const { imagesForNonUser, imagesForUser } = endpoints.images;

    if (!accessToken) {
      const fetchForAnyone = await handleFetch(imagesForNonUser);
      return fetchForAnyone;
    }

    const fetchForUser = await handleFetch(imagesForUser, "POST", {}, { accessToken: accessToken });
    return fetchForUser;
  };

  const queryKey = ["images", accessToken];
  const images = useImages(queryKey, fetchImages);

  return (
    <PageContainer>
      
      {images.isLoading ? (
        <Loader style={{ margin: "auto" }} />
      ) : (
        <ImagesBlock width={width} images={images} />
      )}
      <Footer />
    </PageContainer>
  );
}
