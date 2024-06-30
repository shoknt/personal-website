import { me } from "../data/informations";

export default function Head() {
  return (
    <>
      <title>{me.nickname}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content={`Hey, my name is ${me.name}. This is my personal website. Visit the website and get to know about me. You can connect with me for projects collaboration.`}
      />
      <meta name="keywords" content={me.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="57x57" href="https://media.discordapp.net/attachments/924654729475268629/1256985756816244848/7871-discord-staff.png?ex=6682c2b6&is=66817136&hm=1febd35b59e6fb76f3932d25b815c5a86cfec3c3fbe3aae41e23744bf62dd70b&" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://media.discordapp.net/attachments/924654729475268629/1256985756816244848/7871-discord-staff.png?ex=6682c2b6&is=66817136&hm=1febd35b59e6fb76f3932d25b815c5a86cfec3c3fbe3aae41e23744bf62dd70b&"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="preload" href="/logo.webp" as="image" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}
