interface MainButtonProps {
  text: string;
}

const MainButton = ({ text }: MainButtonProps) => {
  return (
    <div>
      <a
        href="calendy-booking-link"
        className="font-bold bg-primary rounded-lg px-10 py-5 hover:text-black hover:bg-white duration-[400ms]"
      >
        {text}
      </a>
    </div>
  );
};

export default MainButton;
