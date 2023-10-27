const SettingForm = () => {
  return (
    <div className="card border-danger">
      <h6 className="card-header">
        <i className="bi bi-gear-fill text-danger"></i> Wallet
      </h6>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <i className="bi bi-bell"></i> Promotional Balance
          <div className="form-check form-switch float-end">
            <input className="form-check-input" type="checkbox" />
          </div>
        </li>
        <li className="list-group-item">
          <i className="bi bi-envelope"></i> Main balance
          <div className="form-check form-switch float-end">
            <input className="form-check-input" type="checkbox" />
          </div>
        </li>
        <li className="list-group-item">
          <i className="bi bi-percent"></i> Coupon Balance
          <div className="form-check form-switch float-end">
            <input className="form-check-input" type="checkbox" disabled />
          </div>
        </li>
        <li className="list-group-item">
          <i className="bi bi-percent"></i> Total  Balance
          <div className="form-check form-switch float-end">
            <input className="form-check-input" type="checkbox" disabled />
          </div>
        </li>
        <li className="list-group-item bg-danger text-white">
          <i className="bi bi-trash"></i> Delete Account{" "}
          <button type="button" className="btn btn-sm btn-light ms-3">
            Submit
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SettingForm;
