export default function Heading() {
  return (
    <div className='heading'>
      <p>Our Pricing</p>
      <div className='toggler'>
        <span>Annually</span>
        <span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </span>
        <span>Monthly</span>
      </div>
    </div>
  );
}
