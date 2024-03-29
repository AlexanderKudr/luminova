import { useState } from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { Search } from "@/shared/components/form";
import sass from "../sass/layouts/PagePreview.module.scss";

type PagePreviewProps = {
  imgURL: string | undefined;
  description?: string | undefined;
  title?: string | undefined;
  handleOpenModal?: () => void;
};

export function PagePreview({ imgURL, description, title, handleOpenModal }: PagePreviewProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleImageLoad = () => setImgLoaded(true);

  return (
    <div className={sass.pagePreviewContainer}>
      <img
        src={imgURL || ""}
        alt="page preview"
        style={{ userSelect: "none" }}
        loading={"eager"}
        onLoad={handleImageLoad}
      />

      {imgLoaded && (
        <div>
          <section className={sass.mainTextSection}>
            <h1 className={sass.textHeader}>{title}</h1>
            <p className={sass.textDescription}>{description}</p>

            {title === "Luminova" ? (
              <Search />
            ) : (
              <Button
                onClick={handleOpenModal}
                variant="gradient"
                gradient={{ from: "#ffa2c7", to: "#ffb79c", deg: 35 }}
              >
                <p style={{ color: "black", fontWeight: "lighter" }}>
                  Submit to <span style={{ fontWeight: "bold" }}>{title}</span>
                </p>
              </Button>
            )}
          </section>

          <section className={sass.licenseTextSection}>
            <span>
              Read more about the <Link to={"/tos/license"}>Luminova License</Link>
            </span>
          </section>
        </div>
      )}
    </div>
  );
}
