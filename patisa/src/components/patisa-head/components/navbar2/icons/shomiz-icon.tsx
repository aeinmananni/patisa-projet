type Props = {
  width?: string;
  height?: string;
};
const ShomizIcon = ({ width, height }: Props) => {
  return (
    <>
      <div className="fill-colorDark  group-hover:fill-colorPrimary duration-500">
        <svg
          width={width}
          height={height}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.9424 5.54462C7.20982 5.39875 7.38 5.17995 7.40431 4.96115C7.42862 4.74235 7.30707 4.47493 7.08827 4.28044C6.89378 4.15888 6.74791 4.01301 6.60204 3.89146L6.55342 3.84283L6.5048 3.89146C6.38324 4.01301 6.21307 4.15888 6.01858 4.28044C5.79978 4.47493 5.67822 4.71804 5.70253 4.96115C5.72684 5.17995 5.89702 5.37444 6.16444 5.54462C6.21306 5.56893 6.26169 5.64186 6.26169 5.69048C6.26169 5.73911 6.23738 5.81204 6.16444 5.83635C5.87271 6.00653 5.70253 6.29826 5.70253 6.59C5.70253 6.85742 5.87271 7.10053 6.14013 7.2464C6.18875 7.27071 6.23738 7.31933 6.23738 7.39227C6.23738 7.4652 6.21306 7.51382 6.16444 7.53813C5.82409 7.73262 5.65391 8.14591 5.75115 8.51058C5.8484 8.85094 6.14013 9.04543 6.55342 9.04543C6.96671 9.04543 7.25845 8.85094 7.35569 8.51058C7.45294 8.14591 7.28276 7.73262 6.96671 7.53813C6.91809 7.51382 6.89378 7.44089 6.89378 7.39227C6.89378 7.31933 6.9424 7.27071 6.99102 7.2464C7.25845 7.10053 7.42862 6.85742 7.42862 6.59C7.42862 6.29826 7.25845 6.00653 6.96671 5.83635C6.91809 5.81204 6.86947 5.73911 6.86947 5.69048C6.86947 5.64186 6.89378 5.56893 6.9424 5.54462Z" />
          <path d="M5.19202 4.06154C5.41082 4.15879 5.60531 4.08585 5.7998 3.98861C5.96997 3.89136 6.11584 3.7455 6.2374 3.62394C4.82735 2.62718 4.46268 1.60611 4.36544 1.02264C4.24388 1.16851 4.14664 1.29007 4.0737 1.46025C4.02508 1.70336 4.24388 3.64825 5.19202 4.06154Z" />
          <path d="M6.55356 3.38087C8.23103 2.16532 8.3769 1.047 8.3769 0.730956C8.3769 0.633711 8.25535 0.269043 6.55356 0.269043C4.87609 0.269043 4.73022 0.6094 4.73022 0.730956C4.73022 1.16856 4.92471 2.26256 6.55356 3.38087Z" />
          <path d="M6.82104 3.62402C6.96691 3.74558 7.11278 3.89144 7.28296 3.98869C7.47745 4.11024 7.67194 4.15887 7.89074 4.06162C8.83887 3.62402 9.05767 1.70344 8.96043 1.43601C8.8875 1.29015 8.79025 1.14428 8.66869 0.998413C8.59576 1.53326 8.2554 2.55433 6.82104 3.62402Z" />
          <path d="M10.662 6.24963L11.8289 2.53002C11.8289 2.53002 11.829 2.5057 11.8533 2.5057C11.2698 1.94655 9.81112 1.58188 9.3249 1.38739C9.44645 1.92224 9.15472 3.89144 8.06072 4.40198C7.91485 4.47491 7.79329 4.47491 7.67174 4.47491C7.74467 4.62078 7.76898 4.76664 7.76898 4.91251C7.76898 4.93682 7.76898 4.98545 7.76898 5.00976C7.74467 5.20425 7.64743 5.47167 7.35569 5.71478C7.62312 5.95789 7.79329 6.27394 7.79329 6.6143V6.63861C7.79329 6.95465 7.64743 7.24639 7.38 7.46519C7.62312 7.7083 7.76898 8.02434 7.76898 8.3647C7.76898 8.46194 7.74467 8.5835 7.72036 8.68075C7.57449 9.16697 7.13689 9.4587 6.57773 9.4587C6.01858 9.4587 5.58098 9.16697 5.43511 8.65644C5.4108 8.55919 5.38649 8.43763 5.38649 8.34039C5.38649 8.00003 5.53235 7.68399 5.77547 7.44088C5.50804 7.24639 5.36218 6.95465 5.36218 6.6143V6.58998C5.36218 6.24963 5.53235 5.93358 5.79978 5.69047C5.50804 5.44736 5.38649 5.17993 5.36218 4.98545C5.36218 4.96113 5.36218 4.91251 5.36218 4.8882C5.36218 4.74233 5.38649 4.59647 5.45942 4.4506C5.33786 4.4506 5.192 4.42629 5.04613 4.37767C3.97644 3.89144 3.66039 1.97086 3.78195 1.38739C3.27141 1.60619 1.95861 2.04379 1.35083 2.53002L2.76088 7.00327C2.76088 7.02759 2.76088 7.02759 2.76088 7.0519C2.76088 7.0519 2.76088 7.12483 2.76088 7.2707C2.93106 8.02434 2.97968 9.21559 3.0283 10.0422C3.05261 10.1151 3.10124 10.1394 3.10124 10.1394H3.6847C4.02506 10.1394 4.24386 10.188 4.58422 10.5041C4.70577 10.5041 6.48049 10.5041 6.48049 10.5041C6.52911 10.5041 6.57773 10.5284 6.60205 10.5527C6.62636 10.577 6.65067 10.6256 6.65067 10.6743V12.3517C6.65067 12.449 6.57773 12.5219 6.48049 12.5219C6.48049 12.5219 4.80302 12.5219 4.68146 12.5219C4.43835 12.838 3.87919 12.9595 3.39297 12.9352H2.29897C2.08017 13.859 1.95861 13.9806 1.88568 14.8801H11.3427C11.2212 13.47 10.2244 11.6467 10.1272 10.2367C9.9813 8.19452 10.4189 6.90603 10.662 6.24963Z" />
          <path d="M15.0137 12.2059C14.9894 12.133 12.5826 4.15888 12.072 2.87039L10.978 6.3712C11.2211 7.2464 12.5583 12.5949 12.6069 12.765C12.7284 13.1297 12.7771 13.6889 13.3362 13.8834L15.0137 13.3728C15.2082 13.0811 15.1109 12.5219 15.0137 12.2059Z" />
          <path d="M15.0382 13.7131L13.458 14.1993C13.6282 14.7828 13.9199 15.7309 13.9199 15.7309L15.5001 15.3176L15.0382 13.7131Z" />
          <path d="M2.39627 12.5705H3.39303C3.83063 12.5705 4.21961 12.4733 4.38979 12.3274C4.4141 12.3031 4.43841 12.2788 4.46272 12.2545C4.46272 12.2302 4.48703 12.2302 4.48703 12.2302V10.8444C4.46272 10.8444 4.43841 10.8201 4.4141 10.8201C4.38979 10.7958 4.38979 10.7958 4.36548 10.7958C4.07374 10.5527 3.92788 10.5284 3.66045 10.5284H3.1013C3.07699 10.5284 3.05267 10.5284 3.02836 10.5041C2.68801 10.4311 2.56645 9.92059 2.51783 9.60455C2.44489 9.19126 2.39627 7.29499 2.39627 7.12481C2.39627 7.12481 2.34765 6.97894 2.27472 6.76014C2.00729 5.93356 1.3752 3.91573 1.10778 3.08915C1.08347 2.99191 1.05916 2.89466 1.03485 2.84604C0.621556 3.96435 0.548622 5.88494 0.5 7.46516V7.80552C0.5 7.92708 0.5 8.07294 0.5 8.1945C0.5 9.09401 0.597245 10.1637 0.743112 11.1118C0.816045 11.5494 1.08347 12.5948 2.05592 12.6191L2.39627 12.5705Z" />
          <path d="M4.82739 10.8444V12.1572C5.24068 12.1572 6.09157 12.1572 6.31038 12.1572C6.31038 11.9141 6.31038 11.0875 6.31038 10.8444C6.09157 10.8201 5.26499 10.8444 4.82739 10.8444Z" />
        </svg>
      </div>
    </>
  );
};

export default ShomizIcon;
