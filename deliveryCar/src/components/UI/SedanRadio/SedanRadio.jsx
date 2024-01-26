/* eslint-disable react/prop-types */

const SedanRadio = ({type}) => {
  return (
    <svg
      width="52"
      height="29"
      viewBox="0 0 52 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="sedanCar"
    >
      <g id="Card Image">
        <path
          id="Vector"
          d="M38.2835 12.4471H37.424L31.5802 7.47331C31.258 7.1992 30.8494 6.97791 30.3847 6.82583C29.9199 6.67375 29.4109 6.59477 28.8952 6.59473H17.4038C15.9979 6.59473 14.7339 7.1774 14.2117 8.06623L11.6379 12.5297C10.1574 12.7909 9.05933 13.6984 9.05933 14.788V18.8847C9.05933 19.208 9.44397 19.4699 9.91886 19.4699H12.4975C12.4975 21.4092 14.8064 22.9813 17.6547 22.9813C20.503 22.9813 22.8119 21.4092 22.8119 19.4699H29.6881C29.6881 21.4092 31.9971 22.9813 34.8454 22.9813C37.6936 22.9813 40.0026 21.4092 40.0026 19.4699H42.5812C43.0561 19.4699 43.4407 19.208 43.4407 18.8847V15.9585C43.4407 14.0192 41.1318 12.4471 38.2835 12.4471ZM17.6547 21.2256C16.2327 21.2256 15.0761 20.4381 15.0761 19.4699C15.0761 18.5017 16.2327 17.7142 17.6547 17.7142C19.0767 17.7142 20.2333 18.5017 20.2333 19.4699C20.2333 20.4381 19.0767 21.2256 17.6547 21.2256ZM21.5226 12.4471H15.3409L17.4038 8.93567H21.5226V12.4471ZM24.1012 12.4471V8.93567H28.8952L33.021 12.4471H24.1012ZM34.8454 21.2256C33.4234 21.2256 32.2668 20.4381 32.2668 19.4699C32.2668 18.5017 33.4234 17.7142 34.8454 17.7142C36.2673 17.7142 37.424 18.5017 37.424 19.4699C37.424 20.4381 36.2673 21.2256 34.8454 21.2256Z"
          fill={type}
        />
      </g>
    </svg>
  );
};

export default SedanRadio;
