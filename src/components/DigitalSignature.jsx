import { DgaDigitalSignature } from "platformscode-new-react";

function DigitalSignature() {
  return (
    <DgaDigitalSignature
      extension=".gov.sa"
      language="ar"
      linkProps={{
        inline: true,
        label: "20230103200",
        size: "md",
        target: "_self",
        url: "#",
        variant: "primary",
      }}
    />
  );
}

export default DigitalSignature;