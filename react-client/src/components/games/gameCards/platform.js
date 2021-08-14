import windows from "../../../assets/windows.svg";
import xbox from "../../../assets/xbox.svg";
import playstation from "../../../assets/playstation.svg";
import nintendoSwitch from "../../../assets/nintendoSwitch.svg";
import linux from "../../../assets/linux.svg";
import apple from "../../../assets/apple.svg";

const getPlatforms = (platforms) => {
  if (platforms === null) platforms = [];
  let platform = [];
  for (let i = 0; platforms.length > i; i++) {
    if (platforms[i].platform.slug === "pc")
      platform.push(<img src={windows} alt="star" />);
    if (platforms[i].platform.slug === "linux")
      platform.push(<img src={linux} alt="star" />);
    if (platforms[i].platform.slug === "nintendo-switch")
      platform.push(<img src={nintendoSwitch} alt="star" />);
    if (platforms[i].platform.slug === "macos")
      platform.push(<img src={apple} alt="star" />);
    if (
      platforms[i].platform.slug === "xbox-series-x" ||
      platforms[i].platform.slug === "xbox-one" ||
      platforms[i].platform.slug === "xbox360"
    )
      platform.push(<img src={xbox} alt="platform" />);
    if (
      platforms[i].platform.slug === "playstation3" ||
      platforms[i].platform.slug === "playstation4" ||
      platforms[i].platform.slug === "playstation5"
    )
      platform.push(<img src={playstation} alt="platform" />);
  }
  return platform;
};

export default getPlatforms;
