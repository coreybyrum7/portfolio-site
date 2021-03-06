import styles from './index.module.scss';
import { Section, HeroVideo, Grid, Title, Subtitle } from 'src/components'

export interface WelcomeProps {
  visible: boolean;
}

export const Welcome: React.FC<WelcomeProps> = (props) => {
  const { visible } = props;

  return (
    visible &&
    <Section id="welcome">
      <HeroVideo
        videoSrc="/assets/video/south-padre.mp4"
        isLooping={true}
        autoPlay={true}
      >
        <div className={styles.Welcome}>
          <Grid
            mobileCols={1}
            tabletCols={1}
            desktopCols={1}
          >
            <Title 
              size={10}
              weight="400"
              alignment="center"
              color="white"
            >
              Hi, I'm Corey.
            </Title>
            <Subtitle 
              size={6}
              subHeadingText="UI/UX Front End Engineer based in San Francisco, CA."
              alignment="center"
              color="white"
            />
          </Grid>
        </div>
      </HeroVideo>
    </Section>
  )
}
