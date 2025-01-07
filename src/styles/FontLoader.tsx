import { Helmet } from "react-helmet-async";

export const FontLoader = () => {
  return (
    <Helmet>
      <link
        rel="preconnect"
        href="https://cdn.jsdelivr.net"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
      />
    </Helmet>
  );
};
