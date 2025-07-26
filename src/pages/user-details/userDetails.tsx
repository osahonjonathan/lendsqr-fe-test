import type { IUserDetails } from '../../model/user';

type UserDetailsProps = {
  userDetails: IUserDetails;
};

const UserDetails = ({ userDetails }: UserDetailsProps) => (
  <div className="user-details">
    <div className="user-details-sections">
      <div className="details-section">
        <h3>Personal Information</h3>
        <div className="details-grid">
          {userDetails.personalInfo.map((item, idx) => (
            <div className="details-item" key={idx}>
              <span className="label">{item.label}</span>
              <p className="value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="details-section">
        <h3>Education and Employment</h3>
        <div className="details-grid">
          {userDetails.educationEmployment.map((item, idx) => (
            <div className="details-item" key={idx}>
              <span className="label">{item.label}</span>
              <p className="value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="details-section">
        <h3>Socials</h3>
        <div className="details-grid">
          {userDetails.socials.map((item, idx) => (
            <div className="details-item" key={idx}>
              <span className="label">{item.label}</span>
              <p className="value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default UserDetails;
