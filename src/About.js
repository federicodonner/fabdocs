export default function About() {
  return (
    <div className="mainRoute about">
      <div className="title">About</div>
      <div className="aboutContentContainer">
        <p>
          This app is not official and in no way endorsed by Legend Story
          Studios. It's made with ❤️ by Federico Donner.
        </p>
        <p>It's updated to Penalty Guidelines version 1.7 (2021-09-24).</p>
        <p>
          If you found any mistakes or want to help me with coding, feel free to
          contact me at{" "}
          <a className="bold" href="mailto:federico.donner@gmail.com">
            federico.donner@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
