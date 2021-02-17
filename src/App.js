import info from "./assets/info.png";

export default function App() {
  return (
    <div>
      <p>A simple alertbox</p>
      <div className="alert-box">
        <div className="alert-box-wrapper">
          <div className="alert-box-icon-wrapper">
            <img src={info} alt="info" className="alert-box-icon" />
          </div>
          <div className="alert-box-content-wrapper">
            <div className="alert-box-content-title">This is a info alert</div>
            <div className="alert-box-content-message">
              Im alerting you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
