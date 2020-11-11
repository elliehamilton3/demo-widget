import Widget from "../components/widget";
// import WidgetMaterial from '../components/widget.material';

export default function Home() {
  return (
    <>
      <div style={{ padding: "20px", maxWidth: "500px" }}>
        <Widget
          title={"Financial and Monetary Systems"}
          link={"https://intelligence.weforum.org/topics/a1Gb0000000LHOUEA4?tab=publications"}
          imageLink={
            "https://assets.weforum.org/topic/transformation_map_image/kSAv4-JRsZFgQTylLjadZR9D-Zag1ieUZA2IiQwd_zQ.png"
          }
        />
        {/* Dynamic: image, title, link */}
        {/* Configurable: Colours, fonts, layouts? */}
        {/* Tidy: Padding, layout, responsive, image loading perf improvements */}
      </div>
      {/* <WidgetMaterial />  */}
    </>
  );
}
