import "./email.css"

function xyz() {
  return (
    <div className="emails">
      <div className="lorem1">
        <p style={{color:'White'}}>For regular updates share your Email address. We will keep you updated.</p>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Your email address" style={{ backgroundColor:'rgb(68, 66, 66)'}}
          value=""
        />
        <button className="normal" style={{backgroundColor: "rgb(195, 65, 0)"}}>
          Submit
        </button>
      </div>
    </div>

  );
};

export default xyz;