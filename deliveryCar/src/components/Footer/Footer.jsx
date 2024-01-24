import { Typography } from "@mui/material";
import styles from "./styles.module.css";
import logo from "../../assets/footer/LogoWhite.svg";
import facebook from "../../assets/footer/Facebook.svg";
import instagram from "../../assets/footer/Instagram.svg";
import twitter from "../../assets/footer/Twitter.svg";

const Footer = () => {
  return (
    <footer className={styles.allContainer}>
      <section className={styles.infoContainer}>
        <img src={logo} />
        <address>MyRide Inc., 2nd Floor, New York, NY 10016</address>

        <div id={styles.socialContainer}>
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
        </div>
      </section>

      <section className={styles.linksContainer}>
        <article id={styles.links}>
          <Typography sx={{fontSize: '20px'}}>Company</Typography>

          <Typography sx={{fontSize: '16px'}}>About Us</Typography>
          <Typography sx={{fontSize: '16px'}}>News</Typography>
          <Typography sx={{fontSize: '16px'}}>Careers</Typography>
          <Typography sx={{fontSize: '16px'}}>How we work</Typography>
        </article>

        <article id={styles.links}>
          <Typography sx={{fontSize: '20px'}}>Support</Typography>

          <Typography sx={{fontSize: '16px'}}>FAQ</Typography>
          <Typography sx={{fontSize: '16px'}}>US Office</Typography>
          <Typography sx={{fontSize: '16px'}}>Asia Office</Typography>
          <Typography sx={{fontSize: '16px'}}>Help Center</Typography>
        </article>

        <article id={styles.links}>
          <Typography sx={{fontSize: '20px'}}>More</Typography>

          <Typography sx={{fontSize: '16px'}}>Become a partner</Typography>
          <Typography sx={{fontSize: '16px'}}>Partner Support</Typography>
          <Typography sx={{fontSize: '16px'}}>Mobile app links</Typography>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
