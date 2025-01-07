const MixirLogo = ({ size = 70, color = "currentColor", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M70 23.6085H46.2824V0H23.5529C23.5529 13.0425 13.0118 23.6085 0 23.6085V46.3915H23.5529V70H46.2824C46.2824 56.9576 56.9882 46.3915 70 46.3915V23.6085Z" />
    </svg>
  );
};

export default MixirLogo;