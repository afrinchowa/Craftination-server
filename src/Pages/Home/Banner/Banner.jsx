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
            source: "https://i.ibb.co/wYYPTq4/medium-shot-people-cleaning-building.jpg",
          },

          {
            source: "https://i.ibb.co/wYYPTq4/medium-shot-people-cleaning-building.jpg",
            alt: "Slider 2",
          },
          {
            source: "https://i.ibb.co/F3s0SRN/man-doing-professional-home-cleaning-service.jpg",
            alt: "Slider 3",
          },
        ]}
      />
    </div>
  );
};

export default Banner;
