import Image from 'next/image';

function Banner() {
  return (
    <div className="banner" data-test="components-Banner">
      <Image src="/banner.jpg" alt="banner" layout="fill" objectFit="cover" />
      <div className="banner-center">
        <p className="banner-text">Not sure where to go? Perfect.</p>
        <button className="banner-button">I&apos;m flexible</button>
      </div>
    </div>
  );
}

export default Banner;
