type Props = {
  width?: string;
  height?: string;
};

const TopWoman = ({ width, height }: Props) => {
  return (
    <>
      <div className="fill-colorDark group-hover:fill-colorPrimary duration-500">
        <svg
          width={width}
          height={height}
          viewBox="0 0 12 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.341 16.5597C9.51518 16.7056 7.74071 16.7922 5.9811 16.8002C4.19774 16.8081 2.43652 16.7339 0.659244 16.557C0.607078 16.9355 0.57348 17.336 0.566406 17.7648C2.23394 17.9275 3.95798 18 5.70424 18C7.60607 18 9.52994 17.9134 11.4335 17.7613C11.4256 17.3342 11.3931 16.9364 11.341 16.5597ZM0.704514 16.2617C2.46755 16.4368 4.21379 16.5093 5.98042 16.5022C7.71692 16.4951 9.47815 16.4085 11.2968 16.2635C11.128 15.2556 10.8318 14.4094 10.5524 13.6109C9.94935 11.8903 9.42152 10.3828 10.3464 7.96813C10.0935 8.07158 9.78845 8.13082 9.47723 8.1264C9.04753 8.12021 8.60014 7.99554 8.25532 7.6967C8.19343 7.64277 8.18636 7.54905 8.24029 7.48627C8.29422 7.42438 8.38794 7.4173 8.45072 7.47124C8.73807 7.71881 9.11561 7.82314 9.48166 7.82843C9.91667 7.83462 10.3296 7.702 10.5533 7.50394C11.5736 6.59856 11.2986 5.54109 10.9653 4.25814C10.6691 3.11667 10.3287 1.80545 10.7478 0.24932L9.5073 0.000859989C9.23054 2.02736 8.46398 3.38994 7.53206 4.07419C7.06258 4.41989 6.54886 4.59408 6.0334 4.59761C5.51794 4.60115 5.00335 4.43227 4.52768 4.09098C3.58694 3.41459 2.80179 2.05298 2.49763 0L1.25537 0.24846C1.67535 1.80459 1.33494 3.11581 1.03786 4.25728C0.704524 5.54021 0.429558 6.5977 1.44988 7.50308C1.67358 7.70202 2.08648 7.83375 2.5215 7.82757C2.88754 7.82227 3.26509 7.71794 3.55243 7.47038C3.61433 7.41644 3.70893 7.42352 3.76287 7.48541C3.8168 7.5473 3.80973 7.64191 3.74784 7.69584C3.40214 7.9938 2.95562 8.11936 2.52593 8.12554C2.2147 8.12996 1.90966 8.06983 1.6568 7.96727C2.58163 10.3828 2.05379 11.8894 1.45079 13.6101C1.17139 14.4085 0.875194 15.2537 0.706317 16.2608L0.704514 16.2617ZM2.83092 0.206083C3.9715 1.16894 5.07406 1.61986 6.14214 1.60219C7.19341 1.5845 8.20137 1.11323 9.16862 0.230845C8.87684 2.02038 8.18453 3.22382 7.35343 3.83382C6.93521 4.14152 6.48164 4.29713 6.02983 4.29978C5.57714 4.30243 5.1218 4.15301 4.70005 3.84885C3.85743 3.2432 3.14568 2.03195 2.83092 0.206083Z"
          />
        </svg>
      </div>
    </>
  );
};

export default TopWoman;
