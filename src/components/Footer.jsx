import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareGithub,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareBehance,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="white"
          >
            <FaFacebook />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="white"
          >
            <FaSquareXTwitter />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="white"
          >
            <FaSquareGithub />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="white"
          >
            <FaSquareInstagram />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="white"
          >
            <FaLinkedin />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="white"
          >
            <FaSquareBehance />
          </a>
        </section>
      </div>

      <div className="text-center text-light p-3 ">
        © 2023 Copyright: <br />
        <a className="text-white" href="https://nutflix-iti.netlify.app/">
          nutflix-iti.netlify.app
        </a>
      </div>
    </footer>
  );
}
export default Footer;
