interface ProfileProps {
  isOpen: boolean;
}

export default function Profile({ isOpen }: ProfileProps) {
  return (
    <div className="profile-section">
      <img
        src="https://via.placeholder.com/40"
        alt="Pfp"
        className="profile-pic"
      />
      {isOpen && (
        <div className="profile-info">
          <p className="profile-name">ProfileName</p>
          <p className="profile-title"></p>
        </div>
      )}
    </div>
  );
}
