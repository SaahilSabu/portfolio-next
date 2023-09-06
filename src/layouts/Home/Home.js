import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Web ', 'DevOps', 'Database', 'Cloud', 'Blockchain', 'Full Stack'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  const projectOneIco = [
    'https://cdn-icons-png.flaticon.com/512/919/919832.png',
    'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png',
    'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    'https://camo.githubusercontent.com/9270fc40ed052b4158b76122cc9984c9c9670b717577d3e89497629fc25782e7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67',
    'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
  ];
  const projectTwoIco = [
    'https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg',
    'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    'https://camo.githubusercontent.com/9270fc40ed052b4158b76122cc9984c9c9670b717577d3e89497629fc25782e7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67',
    'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
  ];
  const projectThreeIco = [
    'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
    'https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg',
    'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    'https://camo.githubusercontent.com/9270fc40ed052b4158b76122cc9984c9c9670b717577d3e89497629fc25782e7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67',
    'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
    'https://www.svgrepo.com/show/374088/solidity.svg',
    'https://cdn.icon-icons.com/icons2/2429/PNG/512/ethereum_logo_icon_147293.png',
    'https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png',
    'https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png',
  ];
  const projectFourIco = [
    'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
    'https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg',
    'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    'https://camo.githubusercontent.com/9270fc40ed052b4158b76122cc9984c9c9670b717577d3e89497629fc25782e7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67',
    'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
    'https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1',
    'https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1',
    'https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png',
    'https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png',
  ];
  const projectFiveIco = [
    'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
    'https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg',
    'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    'https://camo.githubusercontent.com/9270fc40ed052b4158b76122cc9984c9c9670b717577d3e89497629fc25782e7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67',
    'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
    'https://www.svgrepo.com/show/374088/solidity.svg',
    'https://cdn.icon-icons.com/icons2/2429/PNG/512/ethereum_logo_icon_147293.png',
    'https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png',
    'https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png',
  ];

  return (
    <div className={styles.home}>
      <Meta title="Saahil Sabu Hameed" description="Software Engineer" />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Password Manager"
        description="This project demonstrates the implementation of a secure password manager that uses advanced hashing and encryption strategies to ensure the safety of user data. The application is built using React.js for the frontend and TypeScript for type-safe coding. The backend server is set up to handle user registration, login, and vault management securely."
        buttonText="Github"
        buttonLink="https://github.com/SaahilSabu/pwd_manager"
        ico={projectOneIco}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Url Shortner"
        description="URL shortening service that streamlines lengthy URLs into concise, easy-to-share links. With a minimalist and intuitive interface."
        buttonText="Github"
        buttonLink="https://github.com/SaahilSabu/Url_shortner"
        ico={projectTwoIco}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Real Estate NFT"
        description="This project aim to demonstrate how we can buy and sell NFT's using a decentralized platform using blockchain."
        buttonText="Github"
        buttonLink="https://github.com/SaahilSabu/real-estate-nft"
        ico={projectThreeIco}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Faculty Website for Institute"
        description="This project was built by the guidance of the DEAN of Academics of our institute. This portal aims to help recruit new professors for the institute"
        buttonText="Github"
        buttonLink="https://github.com/SaahilSabu/institute-job-portal"
        ico={projectFourIco}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Crowdfund Eth"
        description="This project was built on top of the ethereum blockchain and helps to fund new projects using a consensus voting mechanism"
        buttonText="Github"
        buttonLink="https://github.com/SaahilSabu/crowdfund-eth"
        ico={projectFiveIco}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      {/* <Footer /> */}
    </div>
  );
};
