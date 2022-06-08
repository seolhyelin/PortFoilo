import ParticlesEffect from 'components/ParticlesEffect';
import styles from './homePage.module.scss';

const HomePage = () => {
  return (
    <main>
      <ParticlesEffect />
      <section className={styles.textContainer}>
        <h1>I work</h1>
        <h1>until beer o’clock.</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium asperiores nobis aut omnis ipsam
          voluptatem delectus sit officiis ad impedit consectetur, minus explicabo aspernatur laudantium mollitia
          corrupti perferendis ullam pariatur optio enim cumque sapiente! Rerum dicta exercitationem nisi ratione, sequi
          pariatur corrupti minus enim. Blanditiis vel ullam repudiandae optio officia sunt mollitia, beatae placeat rem
          tempore. Itaque laborum dolor doloremque ipsum at pariatur quo cum distinctio reprehenderit, mollitia amet et
          deleniti debitis provident nobis numquam maiores, nostrum eveniet libero beatae! Voluptas dolor tempora illo,
          quos sequi nihil iure sunt tenetur eos molestiae voluptates perspiciatis non assumenda quo blanditiis debitis.
        </span>
      </section>
    </main>
  );
};

export default HomePage;