// import wppImg from '../../assets/pictures/wpp.png';

const Wpp = () => {
  return (
    <div className='fixed bottom-0 right-0 z-50 md:p-12 p-4 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-300'>
        <a
            href="http://wa.me/573136582723#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Click to contact me by Whatsapp"
        >
            {/* <img src={wppImg} alt="wppImg" className='w-14 h-14 md:w-20 md:h-20' /> */}
        </a>
    </div>
  );
};

export default Wpp;
