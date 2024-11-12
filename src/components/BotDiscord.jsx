import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import discordLogo from '../img/discordLogo.png';
import discordBanner from "../img/discordBanner.webp";

const BotDiscord = () => (
  <Container
    className="my-5 text-center bot-section"
    style={{
      backgroundImage: `url(${discordBanner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '50px 0',
      borderRadius: '10px',
      color: 'white',
    }}
  >
    <Row className="justify-content-center">
      <Col md={8} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '30px', borderRadius: '10px' }}>
        <h2 className="display-4 text-light">
          MellianBot: Votre assistant musical
        </h2>

        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'inline-block', padding: '10px', borderRadius: '50%' }}>
          <Image
            src={discordLogo}
            alt="Bot Discord Logo"
            roundedCircle
            fluid
            style={{ width: '100px', height: '100px' }}
          />
        </div>

        <p className="lead text-light mt-4">
          Mon bot Discord est conçu pour gérer de manière optimale la lecture de musique sur plusieurs serveurs. Il
          fournit des commandes simples pour lire, mettre en pause, reprendre ou sauter des pistes. De plus, il ajuste
          l'état d'écoute en fonction du serveur et de la chanson actuelle pour une expérience personnalisée.
        </p>

        {/* Technologies utilisées */}
        <Row className="justify-content-center my-3">
          <Col xs="auto">
            <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
              <Image src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" height="30" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://github.com/DV8FromTheWorld/JDA" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/JDA_Software_Logo.svg/2560px-JDA_Software_Logo.svg.png"
                alt="JDA"
                height="30"
              />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://github.com/sedmelluq/lavaplayer" target="_blank" rel="noopener noreferrer">
              <Image src="https://avatars.githubusercontent.com/u/26258842?s=200&v=4" alt="LavaPlayer" height="30" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://developer.spotify.com/documentation/web-api/" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify API" height="30" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://developers.google.com/youtube" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube API"
                height="30"
              />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://railway.app/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://railway.app/brand/logo-light.svg"
                alt="Railway.app"
                height="30"
              />
            </a>
          </Col>
        </Row>

        <Button
          variant="primary"
          href="https://discord.com/oauth2/authorize?client_id=1264609819533250600&permissions=3145728&scope=bot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          Inviter le Bot sur votre Serveur
        </Button>
      </Col>
    </Row>
  </Container>
);

export default BotDiscord;
