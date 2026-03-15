import Image from 'next/image';

export default function Banner() {
    return (
        <div className="block p-[5px] m-0 w-screen h-[60vh] relative">
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            className="object-cover object-bottom"/>
            <div className="relative top-[100px] z-20 text-center">
                <h1 className="text-4xl font-bold">where every event finds its venue</h1>
                <h3 className="text-xl mt-4">Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
            </div>
        </div>
    );
}