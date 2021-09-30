export default function About() {
  return (
    <div className="mainRoute about">
      <div className="title">About</div>
      <div className="aboutContentContainer">
        <p>
          This app is not official and in no way endorsed by Legend Story
          Studios. I used their logo without permission, I hope no one gets mad.
        </p>
        <p>Made with ❤️ by Federico Donner.</p>
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
