import { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
    return (
        <Html>
            <Head>
                <html lang="pt-br" />
                <meta charSet="utf-8" />
                <meta name="description" content="Encontre as melhores camisetas da Rocketseat com preços imperdíveis 😱" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}