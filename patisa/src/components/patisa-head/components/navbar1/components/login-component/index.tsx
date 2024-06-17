import loginIcon from "../../../icon/login-icon.svg";

const LoginComponents = () => {
  return (
    <>
      <div className="p-3 bg-blueLigth rounded-lg border border-colorPrimary lg:hidden">
        <img className="w-7 h-7 " src={loginIcon} />
      </div>
    </>
  );
};

export default LoginComponents;
