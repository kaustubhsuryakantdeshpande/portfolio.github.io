export default function Home() {
  return (
    <div className="home-hero">
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a developer passionate about creating amazing experiences</p>
        <div className="button-group">
          <a href="/projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="/about" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
