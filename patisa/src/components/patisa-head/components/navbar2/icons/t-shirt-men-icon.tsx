type Props = {
  width?: string;
  height?: string;
};

const TshirtMenIcon = ({ width, height }: Props) => {
  return (
    <div className="fill-colorDark  group-hover:fill-colorPrimary duration-500">
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.0854 2.97813L12.506 1.68213C12.3558 2.69813 11.3704 4.26393 9.95978 4.26393C8.54918 4.26393 7.54878 2.69793 7.39838 1.68213C7.39838 1.68213 6.39778 2.24993 4.85218 2.93233L1.01758 8.03993L3.56378 10.5861L4.89538 9.26973L4.87238 18.2451C9.94438 19.9435 15.0368 18.2451 15.0368 18.2451L15.08 9.33333L16.325 10.6649L18.9998 7.99333L15.0854 2.97813ZM13.7614 7.75993C13.7614 7.95353 13.6774 8.13933 13.5348 8.26913L12.855 8.88273L12.165 8.22833C12.0276 8.09853 11.9512 7.91773 11.9512 7.72933V6.41553H13.7616L13.7614 7.75993Z" />
        <path d="M13.6942 6.61575H12.0068V6.67935H13.6942V6.61575Z" />
      </svg>
    </div>
  );
};

export default TshirtMenIcon;
