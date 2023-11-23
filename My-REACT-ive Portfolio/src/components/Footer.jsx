
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/github';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <ul className="list-inline">
          <li className=" social list-inline-item">
            <SocialIcon url="https://github.com/Sharareh18" />
          </li>
          <li className=" social list-inline-item">
            <SocialIcon url="https://www.instagram.com/lemon.18/" />
          </li>
          <li className=" social list-inline-item">
            <SocialIcon url="https://www.linkedin.com" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
