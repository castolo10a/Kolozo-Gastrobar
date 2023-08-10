import wppImg from '../../assets/images/wpp.png';

const Wpp = () => {
  return (
    <div className='fixed bottom-0 right-0 z-50 p-4'>
        <a
            href="http://wa.me/573136582723#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Click to contact me by Whatsapp"
        >
            <img src={wppImg} alt="wppImg" className='w-14 h-14' />
        </a>
    </div>
  );
};

export default Wpp;
