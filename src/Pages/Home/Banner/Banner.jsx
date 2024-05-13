import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./Banner.css"; // Import the CSS file for banner styles

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className="max-w-screen-2xl">
      <AutoplaySlider
        className="h-[600px] max-w-screen-2xl md:fixed"
        play={true} // Autoplay is set to true
        cancelOnInteraction={false} // Should stop playing on user interaction
        interval={3000} // Interval between slides in milliseconds
        bullets={false} // Hide the bullets navigation
        organicArrows={false} // Hide the arrow navigation
        media={[
          {
            source: "https://i.ibb.co/zGGpZ5q/myrlene-numa-Sn-ITZTTe-JVE-unsplash.jpg",
          },

          {
            source: "https://i.ibb.co/dWT5kx9/parker-burchfield-tv-G4-Wvjgs-EY-unsplash.jpg",
            alt: "Slider 2",
          },
          {
            source: "https://i.ibb.co/bzjBTCF/cam-morin-kn-Km7u-7-Ihw-unsplash.jpg",
            alt: "Slider 3",
          },
        ]}
      />
    </div>
  );
};

export default Banner;
