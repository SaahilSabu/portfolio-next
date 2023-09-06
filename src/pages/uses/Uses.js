import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { VisuallyHidden } from 'components/VisuallyHidden';
import { Icon } from 'components/Icon';
import { DecoderText } from 'components/DecoderText';

function useSectionInView(sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });

  return {
    ref,
  };
}

const skillsData = [
  { name: 'Node.js', img: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
  {
    name: 'Express.js',
    img: 'https://camo.githubusercontent.com/9270fc40ed052b4158b76122cc9984c9c9670b717577d3e89497629fc25782e7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67',
  },
  {
    name: ' React.js',
    img: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  },
  {
    name: 'Next.js',
    img: 'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png',
  },
  {
    name: ' Redux',
    img: 'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
  },
  {
    name: 'Web3.js',
    img: 'https://cdn-images-1.medium.com/max/1200/1*fIzg0ShjGtI-iKt5JF1xBA@2x.png',
  },
  {
    name: 'Ether.js',
    img: 'https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png',
  },
  {
    name: 'THREE.js',
    img: 'https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png',
  },
  {
    name: 'Vite',
    img: 'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png',
  },
  {
    name: 'CSS',
    img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
  },
  {
    name: 'HTML',
    img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png',
  },
  { name: 'Typescript', img: 'https://cdn-icons-png.flaticon.com/512/919/919832.png' },
  { name: 'Java', img: 'https://friconix.com/png/fi-cnsuxx-java.png' },
  {
    name: 'Javascript',
    img: 'https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg',
  },
  { name: 'Python', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968286.png' },
  { name: 'Solidity', img: 'https://www.svgrepo.com/show/374088/solidity.svg' },
  {
    name: 'C++',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
  },
  {
    name: 'MongoDB',
    img: 'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
  },
  {
    name: 'MySQL',
    img: 'https://cdn.icon-icons.com/icons2/1508/PNG/512/mysqlworkbench_103806.png',
  },
  {
    name: 'Redis',
    img: 'https://cdn.iconscout.com/icon/free/png-256/free-redis-2-458177.png',
  },
  {
    name: 'Firestore',
    img: 'https://cdn.iconscout.com/icon/free/png-256/firebase-3629364-3032357.png',
  },
  {
    name: 'Git',
    img: 'https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png',
  },
  {
    name: 'Gitlab',
    img: 'https://cdn.iconscout.com/icon/free/png-256/free-gitlab-3050927-2538295.png',
  },
  {
    name: 'Ethereum',
    img: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/ethereum_logo_icon_147293.png',
  },
  { name: 'Polygon', img: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
  { name: 'REST API', img: 'https://lordicon.com/icons/wired/lineal/1330-rest-api.svg' },
  {
    name: 'AWS',
    img: 'https://static-00.iconduck.com/assets.00/aws-icon-512x512-hniukvcn.png',
  },
  { name: 'Docker', img: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
  {
    name: 'GCP',
    img: 'https://q2i8y8f7.rocketcdn.me/wp-content/uploads/2023/06/GoogleCloud.webp',
  },
  {
    name: 'Firebase',
    img: 'https://cdn.iconscout.com/icon/free/png-256/firebase-3629364-3032357.png',
  },
  {
    name: 'Cloudinary',
    img: 'https://res.cloudinary.com/demo/image/upload/sample_watermark.png',
  },
  {
    name: 'IPFS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png',
  },
  {
    name: 'Netlify',
    img: 'https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png',
  },
  {
    name: 'Heroku',
    img: 'https://seeklogo.com/images/H/heroku-logo-90FDE34A7D-seeklogo.com.png',
  },
  {
    name: 'Vercel',
    img: 'https://www.hockeycomputindo.com/assets/img/blog/04/vercels.png',
  },
  {
    name: 'Render',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///9G47c84rQt4bGY7dKQ7NCi79ju/fg44rPC9OT3/vz6/v3p/PaI681Q5Lp76cjO9+rZ+O596smr8Nq48+BY5b3G9ecg4K4D36vT9+zj+vNo58K99OKb7tXD9OWv8d1v6MNEnehfAAADXklEQVR4nO3d23aiMBhA4RpPUesBFa0HRt//KTu9mbVif1RyDrO/a0qzJ4INOvDxAQAAAAAAAAAAAORnWm2ut93kXU1l/PRM3GhhbNNIu/kTo21+2m1r/ZfqYHg19rGUflibhUdpk2XwvGpy+UkbdKVnZqG0B2UWDqVNxmHzzs1Kd48rp3B2sc0ro3C/0tZ5JRReB0592Reease+zAvnW+l39ajwYPHeUFTh2MME5lw4rX1MYMaFlae+bAsPzqfQzAuvfg7BfAtvHgOzLPQ5g1kWHrwGZlhY+TvJ5Fk49fY2kWth7Tkwu8LxO1OolH7f0bxOsz0OBWbhl7DF0dN1mtdnGaXVZXzbVOfPd839DM2P+asZ1Hq5yWrEXW2fFip9P6QeoaPT09eoXp9TD9DZ6tkE1tXrHeTu9uS9XjepR+dD+0Go1Cn14Hxon0JVF33+/Kf1KFSXxeufLkDrsl5dUg/Nk3vLYahW/ZjBj8/WKZymHponk5Yp1L04i/5oWTXpSeqB+XJueZHWKQajVr8NRo473ckvUp3kT7UgK+CLfJZZexlxVyEKFy1TmGY1EaLwJB6GiaYwSKF8GOqNnxF3FaJQXtwrPwPuLESh+G6oXE/QtkIUiodhsj9nAhRO5RNNqlVhgEL5s4pkq6YAheLaMNlhGKJwL36YsPc04M4CFIpvh+nWTdEKk10ADlAoLn91ssU9hRYojIxCC7kVSv8boVeF97Vg57TLzAoDoLB8FJaPwvJRWD4Ky0dh+TIrPGwEbtfFMis8Cl+mHrp9Czqzwv9gjU9hdxRGRqEFCiOj0AKFkVFogcLIKLRAYWQUWqAwsv5fp7nOBG7fssusMAAKy0dh+SgsH4Xlo7B8FJYvs8LtUnBz2mVmheJd53u1Au7/Gp9CCxRGRqEFCiOj0AKFkVFogcLIKLRAYWQUWhALh70qlB7Zl64wwHWaxVziabzdiaPpyX1iAQAAgF5rpAdpfZnbaOlZW+ZNXDfSbvJ4Zpe8Aja3ER9hcjc2Ee8Knsdz1yikkEIKKaSQQgoppJBCCimkkMJ+FDbSp9xHc5uB9NHzQ6F0u/jhQ6H0qx4KxU+53a7THMaj3x7+0Rphk5F5K/izuBvzAYN7aTcjs1Dazci8oAUAAAAAAAAAAAAE8w39zlW3oYFBQgAAAABJRU5ErkJggg==',
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export const Uses = () => {
  const { ref } = useSectionInView('Skills');
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />

        <ProjectHeader
          title={<DecoderText text="Skills" delay={500} />}
          description={
            <DecoderText
              text="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. Always learning new stuff !! "
              delay={200}
            />
          }
        />
        <ProjectSection>
          <section id="skills" ref={ref} className={styles.skills}>
            <div className={styles.scrollIndicator}>↓ Scroll to see more skills ↓</div>
            <Icon className={styles.navIcon} icon={'down'} />
            <ul className={styles.skillContainer}>
              {skillsData.map((skill, index) => (
                <motion.div
                  className={styles.skillWrapper}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  key={index}
                  viewport={{
                    once: true,
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${skill.img})`,
                    }}
                    className={styles.imgC}
                  />
                  <motion.li
                    className={styles.skillitem}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    {skill.name}
                  </motion.li>
                </motion.div>
              ))}
            </ul>
          </section>
        </ProjectSection>
      </ProjectContainer>
      {/* <Footer /> */}
    </Fragment>
  );
};
