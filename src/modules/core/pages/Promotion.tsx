import { MemoizedNavbar, Footer  } from "@/shared/layouts";
import { ProgressBar } from "@/shared/components";
import { ScrollTopButton } from "@/shared/components";

import sass from "../sass/pages/Promotion.module.scss";

export const Promotion = () => {
  const dataBrands = [
    {
      url: "./img/logo-bluehost.svg",
      alt: "bluehost",
    },
    {
      url: "./img/logo-canva.svg",
      alt: "canva",
    },
    {
      url: "./img/logo-creativemarket.svg",
      alt: "creativemarket",
    },
    {
      url: "./img/logo-envato.svg",
      alt: "envato",
    },
    {
      url: "./img/logo-grammarly.svg",
      alt: "grammarly",
    },
    {
      url: "./img/logo-hotjar.svg",
      alt: "hotjar",
    },
  ];

  const dataDirectItems = [
    {
      url: "./img/direct-download.svg",
      title: "Download",
      descr: `Associate your brand with user’s positive emotion of finding the
        perfect photo for their creation.`,
    },
    {
      url: "./img/direct-feed.svg",
      title: "Feed",
      descr: `Reach creative professionals when they’re most focused on finding the perfect image.`,
    },
    {
      url: "./img/direct-homepage.svg",
      title: "Homepage",
      descr: `Taking over the homepage increases your brand’s
        relevance with the entirety of Luminova’s audience.`,
    },
    {
      url: "./img/direct-video.svg",
      title: "Video",
      descr: `Use eye-grabbing videos to give users a better understanding of your brand’s value-add.`,
    },
  ];

  const dataAudienceItems = [
    {
      bgColor: "#111",
      title: "All Creative Professionals",
      descr: `Luminova attracts all creative professionals, ranging from Fortune 500 industry
        leaders to the growing demographic of professionals empowered by the democratization
        of creativity.`,
    },
    {
      bgColor: "#f5f5f5",
      title: "Targeting Capability",
      descr: `Geo-targeting ads, by safelisting or blocklisting desired countries`,
    },
    {
      bgColor: "red",
      title: "Up to 2.00% clickthrough rate",
      descr: `10x higher than Pinterest 3x higher than Dribbble`,
    },
    {
      bgColor: "#f5f5f5",
      title: "75%",
      descr: `of visitors are between the ages of 18–34`,
    },
    {
      bgColor: "#f5f5f5",
      title: "71%",
      descr: `of visitors have a university degree`,
    },
    {
      bgColor: "#f5f5f5",
      title: "51%",
      descr: `of our users have a household income of more than $100k/year`,
    },
  ];

  return (
    <div className="promotion">
      <MemoizedNavbar />

      <PromotionContainer>
        <div className={sass.header}>
          <div className={sass.headerInfo}>
            <Description
              title={"Advertise on Luminova"}
              descr={"The world’s most popular creative platform."}
            />

            <PromotionButton styleBtn={null}>Get in touch with us</PromotionButton>
          </div>

          <img src="/img/advertiseHeader.avif" alt="promotion-header" />
        </div>

        <div className={sass.brands}>
          <p>Join the world’s biggest brands that we’re proud to call partners</p>

          <div className={sass.brandList}>
            {dataBrands.map((item: any, index: number) => (
              <img key={index} src={item.url} alt={item.alt} />
            ))}
          </div>
        </div>
      </PromotionContainer>

      <div className={sass.direct}>
        <div className={sass.directInfo}>
          <Description
            title={"Direct Advertising"}
            descr={`Direct ads are performance-driven placements. Built to generate traffic for brands and convert
              on customer acquisition KPIs. We create maximum impact with the following four paid placement opportunities`}
          />
        </div>
        <img src="./img/direct.avif" alt="Direct" />

        <PromotionContainer>
          <DirectListItems dataDirectItems={dataDirectItems} />
        </PromotionContainer>

        <PromotionButton styleBtn={{ margin: "30px auto 0px auto" }}>
          Get in touch with us
        </PromotionButton>
      </div>

      <div className={sass.native}>
        <div className={sass.nativeInfo}>
          <Description
            title={"Native advertising"}
            descr={`Generate brand lift unseen on any other platform.
          It works simply by sharing your brand’s beautiful
          content on Luminova in targeted search results. And in exchange,
          creators of the internet share your content with their audiences — in
          relevant trusted places.`}
          />
        </div>

        <img src="./img/native-banner.avif" alt="Native" />

        <p>Trusted by the world’s biggest brands</p>

        <PromotionContainer>
          <div className={sass.studio}>
            <div className={sass.studioInfo}>
              <Description
                title={"Don’t have images readily available?"}
                descr={`Take advantage of Luminova Studio: work with Luminova photographers
              to create custom content specifically intended for your campaign.`}
                styleTitle={{
                  fontSize: "28px",
                }}
              />
              <PromotionButton styleCenter={sass.center} styleBtn={null}>
                Get in touch to learn more about Studio
              </PromotionButton>
            </div>

            <img className={sass.studioImg} src="./img/studio.avif" alt="Studio" />
          </div>
        </PromotionContainer>
      </div>

      <PromotionContainer>
        <div className={sass.audience}>
          <div style={{ textAlign: "center" }}>
            <Description title="Our Audience" />
          </div>

          <AudienceListItems dataAudienceItems={dataAudienceItems} />

          <div className={sass.email}>
            <div className={sass.emailContent}>
              <h4 className={sass.emailTitle}>Ready to get started?</h4>
              <p className={sass.emailDescr}>
                Not sure where to start? Email us directly{" "}
                <a href="mailto:partnershisp@luminova.com">partnership@luminova.com</a>
              </p>
            </div>

            <div className={sass.emailButton}>
              <PromotionButton
                styleBtn={{
                  backgroundColor: "#fff",
                  height: "50px",
                  width: "200px",
                  margin: "0 auto",
                }}
              >
                Get in touch with us
              </PromotionButton>
            </div>
          </div>
        </div>
      </PromotionContainer>
      <Footer />

      <ScrollTopButton />
      <ProgressBar />
    </div>
  );
};

function AudienceItem({ bgColor, title, descr }: any) {
  const textColor = () => {
    if (bgColor !== "#f5f5f5") {
      return "#fff";
    } else {
      return "#000";
    }
  };

  return (
    <div
      className={sass.audienceItem}
      style={{
        backgroundColor: bgColor,
        color: textColor(),
      }}
    >
      <p>{title}</p>
      <span>{descr}</span>
    </div>
  );
}

function AudienceListItems({ dataAudienceItems }: any) {
  const items = dataAudienceItems?.map((item: any, index: number) => (
    <AudienceItem key={index} bgColor={item.bgColor} title={item.title} descr={item.descr} />
  ));

  return <div className={sass.audienceListItems}>{items}</div>;
}

function PromotionContainer({ children }: any) {
  return <div className={sass.container}>{children}</div>;
}

function DirectItem({ url, title, descr }: any) {
  return (
    <div className={sass.directItem}>
      <img src={url} alt={title} />

      <div className={sass.directItemInfo}>
        <Description
          title={title}
          descr={descr}
          styleTitle={{ fontSize: "18px" }}
          styleDescr={{ fontSize: "14px" }}
        />
      </div>
    </div>
  );
}

function DirectListItems({ dataDirectItems }: any) {
  const items = dataDirectItems.map((item: any, index: number) => (
    <DirectItem key={index} url={item.url} title={item.title} descr={item.descr} />
  ));

  return <div className={sass.directListItems}>{items}</div>;
}

function PromotionButton({
  styleBtn,
  children,
  styleCenter,
}: {
  styleBtn: any;
  children: React.ReactNode;
  styleCenter?: string;
}) {
  const setColor = () => {
    if (styleBtn?.backgroundColor === "#fff") {
      return "#111";
    } else {
      return "#fff";
    }
  };

  return (
    <div className={sass.button}>
      <button
        className={styleCenter}
        style={{
          ...styleBtn,
        }}
      >
        <div style={{ color: setColor() }}>{children}</div>
      </button>
    </div>
  );
}

function Description({ title, descr, styleTitle, styleDescr }: any) {
  return (
    <div>
      {title ? (
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px",
            ...styleTitle,
          }}
        >
          {title}
        </h2>
      ) : null}
      {descr ? (
        <p
          style={{
            marginBottom: "30px",
            fontSize: "18px",
            lineHeight: "27px",
            fontWeight: "400",
            ...styleDescr,
          }}
        >
          {descr}
        </p>
      ) : null}
    </div>
  );
}
