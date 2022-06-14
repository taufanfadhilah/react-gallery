import { Player } from "@lottiefiles/react-lottie-player";

export default function PostTimeline() {
  const card = () => {
    return (
      <div className="rounded overflow-hidden border w-full bg-white my-4 shadow-md">
        <img
          className="w-full bg-cover"
          src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
          alt="photos"
        />
        <div className="px-3 pb-2">
          <div className="pt-1">
            <div className="mb-2 text-sm">
              Lord of the Rings is my favorite film-series. One day I'll make my
              way to New Zealand to visit the Hobbiton set!
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyState = () => (
    <>
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_dmw3t0vg.json"
        style={{
          height: "300px",
          width: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></Player>
      <p className="text-center">
        Seems you haven't share any shot, what are you waiting for?
      </p>
    </>
  );

  return (
    <>
      {true ? [1, 2, 3].map(() => card()) : emptyState()}
      <p>Found 0 photos</p>
    </>
  );
}
