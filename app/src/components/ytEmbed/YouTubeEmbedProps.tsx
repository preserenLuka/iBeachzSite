import React, { useEffect, useRef } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
// @ts-ignore
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
// @ts-ignore
import "./ytEmbed.css";

interface YouTubeEmbedProps {
  videoId: string;
  startTime?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, startTime }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const params = startTime ? `autoplay=0&start=${startTime}` : "autoplay=0";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeName === "IFRAME") {
              const iframe = node as HTMLIFrameElement;
              if (iframe.src && iframe.src.includes("autoplay=1")) {
                iframe.src = iframe.src.replace(/autoplay=1/g, "autoplay=0");
              }
            }
          });
        }
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "src"
        ) {
          const target = mutation.target as HTMLIFrameElement;
          if (target.src && target.src.includes("autoplay=1")) {
            target.src = target.src.replace(/autoplay=1/g, "autoplay=0");
          }
        }
      });
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src"],
    });

    // IntersectionObserver to stop video when not visible
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            const iframe = container.querySelector(
              "iframe",
            ) as HTMLIFrameElement;
            if (iframe) {
              iframe.contentWindow?.postMessage(
                '{"event":"command","func":"stopVideo","args":""}',
                "*",
              );
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    intersectionObserver.observe(container);

    return () => {
      observer.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="yt-embed-wrapper">
      <LiteYouTubeEmbed
        id={videoId}
        title="YouTube video player"
        autoplay={false}
        alwaysLoadIframe={false}
        params={params}
      />
    </div>
  );
};

export default YouTubeEmbed;
