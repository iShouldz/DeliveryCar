const SemiRadio = ({type}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="29"
      viewBox="0 0 40 29"
      fill="none"
    >
      <path
        d="M20.25 10.7047H12.1123L7.22975 13.6214H5.60222C3.79567 13.6214 2.34717 14.6597 2.34717 15.9547V19.4547H5.8789C6.57874 20.8547 8.41785 21.788 10.4848 21.788C12.5518 21.788 14.3909 20.8547 15.0744 19.4547H25.4092C26.1091 20.8547 27.9482 21.788 30.0151 21.788C32.0821 21.788 33.9212 20.8547 34.6048 19.4547H38.1528V18.288C38.1528 16.993 36.4764 16.573 34.8977 15.9547L20.25 10.7047ZM9.26416 14.788L12.9261 12.4547H19.4362L25.9463 14.788H9.26416ZM10.4848 16.538C11.1323 16.538 11.7532 16.7224 12.2111 17.0506C12.6689 17.3788 12.9261 17.8239 12.9261 18.288C12.9261 18.7522 12.6689 19.1973 12.2111 19.5255C11.7532 19.8537 11.1323 20.038 10.4848 20.038C9.83734 20.038 9.21638 19.8537 8.75855 19.5255C8.30072 19.1973 8.04352 18.7522 8.04352 18.288C8.04352 17.8239 8.30072 17.3788 8.75855 17.0506C9.21638 16.7224 9.83734 16.538 10.4848 16.538ZM30.0151 16.538C30.6626 16.538 31.2836 16.7224 31.7414 17.0506C32.1992 17.3788 32.4564 17.8239 32.4564 18.288C32.4564 18.7522 32.1992 19.1973 31.7414 19.5255C31.2836 19.8537 30.6626 20.038 30.0151 20.038C29.3677 20.038 28.7467 19.8537 28.2889 19.5255C27.8311 19.1973 27.5739 18.7522 27.5739 18.288C27.5739 17.8239 27.8311 17.3788 28.2889 17.0506C28.7467 16.7224 29.3677 16.538 30.0151 16.538Z"
        fill={type}
      />
    </svg>
  );
};

export default SemiRadio;