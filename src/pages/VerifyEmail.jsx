import logoEmail from "../assets/gmail.png";

export default function VerifyEmail({ email = "youremail@gmail.com" }) {
  return (
    <div className="container h-[100vh] grid place-content-center ">
      <div className="flex flex-col justify-center items-center h-full rounded-md p-4 border  border-gray-border m-4">
        <img src={logoEmail} alt="Email Logo" className="w-[300px]" />
        <p className="inline">
          Ya le enviarmos un link al email: <b>{email}</b> para poder verificar
          la existencia del correo. Para entrar al gmail podes hacer
          <span>
            {" "}
            <a className="text-blue-200" href="https://mail.google.com/mail">
              click aca
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
