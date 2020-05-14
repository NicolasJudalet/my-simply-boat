/** @jsx jsx */
import Head from 'next/head';
import Link from 'next/link';
import { Global, css, jsx } from '@emotion/core';
import { darkGray, lightGray, tealBlue } from '../styles';

export default function Home() {
  return (
    <div className="container">
      <Global
        styles={css`
          html,
          body {
            padding: 0 10px;
            margin: 0;
            font-family: 'Roboto', sans-serif;
            color: ${darkGray};
          }

          * {
            box-sizing: border-box;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0 0 30px;
            display: flex;
            flex-direction: row;
          }

          .presentationItem {
            flex: 1;
            text-align: center;
            padding: 0 40px;

            h2 {
              font-size: 1.5rem;
            }
          }

          @media (max-width: 600px) {
            ul {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      />
      <Head>
        <title>My Simply Boat</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header
        css={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: '1.5rem',
          padding: '10px 0',
          width: '100%',
          borderBottom: `1px solid ${lightGray}`,
        }}
      >
        <Link href="/">
          <a>MySimplyBoat</a>
        </Link>
      </header>
      <main
        css={{
          padding: '2rem 0',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          css={{
            color: tealBlue,
            fontWeight: 'bold',
            fontSize: '2.5rem',
            textAlign: 'center',
          }}
        >
          Votre bateau en propriété partagée
          <br />
          en toute simplicité
        </h1>

        <ul css={{}}>
          <li className="presentationItem">
            <h2>Achetez</h2>
            <p>
              Trouvez le bateau qui vous convient parmi les annonces de
              MySimplyBoat
            </p>
          </li>
          <li className="presentationItem">
            <h2>Vendez</h2>
            <p>
              Trouvez des acheteurs pour votre bateau en postant une annonce
            </p>
          </li>
          <li className="presentationItem">
            <h2>Gérez</h2>
            <p>
              Gérez le planning de votre bateau en vous connectant avec vos
              copropriétaires
            </p>
          </li>
        </ul>

        <img
          src="/images/home_picture.jpg"
          alt="home_picture"
          css={{ width: '100%' }}
        />
      </main>

      <footer
        css={{
          width: '100%',
          padding: '20px',
          borderTop: `1px solid ${lightGray}`,
          textAlign: 'center',
        }}
      >
        <span>Contact : contact@mysimplyboat.fr</span>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
