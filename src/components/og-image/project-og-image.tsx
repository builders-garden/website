/* eslint-disable @next/next/no-img-element */
import { OG_IMAGE_SIZE } from "@/lib/constants";

interface ProjectOGImageProps {
  projectName: string;
  coverImage: ArrayBuffer;
  coverImageType: string;
}

export const ProjectOGImage = ({
  projectName,
  coverImage,
  coverImageType,
}: ProjectOGImageProps) => {
  return (
    <div
      style={{
        width: `${OG_IMAGE_SIZE.width}px`,
        height: `${OG_IMAGE_SIZE.height}px`,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#1E1E1E",
      }}
    >
      {/* Cover Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image container */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            overflow: "hidden",
            backgroundColor: "black",
          }}
        >
          <img
            src={`data:image/${coverImageType};base64,${Buffer.from(
              coverImage
            ).toString("base64")}`}
            alt="Cover Image"
            style={{
              width: "100%",
              height: "100%",
              objectPosition: "top",
              marginBottom: "-33.33%",
              imageRendering: "crisp-edges",
              boxShadow: "none",
              filter: "none",
            }}
          />
          {/* Dark gradient overlay - darkens the bottom area */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.9) 100%)",
              display: "flex",
            }}
          />
          {/* Project name section - positioned at bottom-left */}
          <div
            style={{
              position: "absolute",
              left: 50,
              bottom: 50,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "15px",
              width: "auto",
              minWidth: "350px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 0px",
                gap: "0px",
                width: "auto",
              }}
            >
              <p
                style={{
                  display: "flex",
                  color: "#FFFFF0",
                  fontSize: `110px`,
                  fontFamily: "Archivo",
                  fontWeight: "bold",
                }}
              >
                {projectName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
