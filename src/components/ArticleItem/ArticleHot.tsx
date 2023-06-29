import { Image } from 'antd'
import './ArticleHot.scss'
import StayConnected from 'components/StayConnected/StayConnected'
import Avtor from 'components/Avtor/Avtor'
import OtherArticles from 'components/OtherArticles/OtherArticles'

type Props = {}
const ArticleHot = (props: Props) => {
    return (
        <article className="row-col ar-hot-article">
            <p className="h4 ar-hot-p ar-hot-mar">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
            </p>
            <p className="h4 ar-hot-p ar-hot-mar">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
            </p>
            <h5 className="ar-hot-mar">
                You meet someone, they introduce themselves, and two minutes
                later you can’t recall their name. It happens all the time
            </h5>
            <div className="arc-hot-block ">
                <figure className="arc-hot-img-figure">
                    <img
                        width="819"
                        height="1024"
                        src="/images/art-hot-daniel-819x1024.jpg"
                        alt="hours"
                        className="arc-hot-img"
                        sizes="(max-width: 819px) 90vw, 819px"
                    />
                </figure>
                <div className="ar-hot-article1">
                    <p className="h4 ar-hot-p ">
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                    </p>
                    <p className="h4 ar-hot-p ">
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine.
                    </p>
                    <p className="h4 ar-hot-p ">
                        I am so happy, my dear friend, so absorbed in the
                        exquisite sense of mere tranquil existence, that I
                        neglect my talents. I should be incapable of drawing a
                        single stroke at the present moment; and yet I feel that
                        I never was a greater artist than now.
                    </p>
                </div>
            </div>
            <p className="h4 ar-hot-p ar-hot-mar">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
            </p>
            <blockquote className="arc-hot-block-quote ar-hot-mar">
                <p className="h4 ar-hot-p  ar-hot-p-quote">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                </p>
                <p className=" cite">John Doe</p>
            </blockquote>
            <figure className="arc-hot-img-figure ">
                <Image width="1280px" src="/images/arc-hot-fone.jpg" />
            </figure>
            <h2 className="ar-hot-mar">Apple Design Award Winners: Apps</h2>
            <p className="h4 ar-hot-p ar-hot-mar">
                Apple today named eight app and game developers receiving an
                Apple Design Award, each one selected for being thoughtful and
                creative. Apple Design Award winners bring distinctive new ideas
                to life and demonstrate deep mastery of Apple technology. The
                apps spring up from developers large and small, in every part of
                the world, and provide users with new ways of working, creating,
                and playing.
            </p>
            <h3 className="ar-hot-mar">Tech Specs</h3>
            <div className="arc-hot-block-li ar-hot-mar ">
                <ul>
                    <li>16-inch LCD touchscreen display</li>
                    <li>Intel Core i5-1135G7</li>
                    <li>512GB SSD</li>
                    <li>16GB DD4 Ram</li>
                    <li>10.5 battery hours</li>
                    <li>2 Pounds</li>
                </ul>
            </div>

            <div className="arc-hot-block-cover">
                <p className="h6 em">
                    If you look at what you have in life, you'll always have
                    more. If you look at what you don't have in life, you'll
                    never have enough.
                </p>
            </div>
            <p className="h4 ar-hot-p ar-hot-mar">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
            </p>
            <p className="h4 ar-hot-p ar-hot-mar">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn't listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way.
            </p>
            <figure className="arc-hot-block-a">
                <p className="h4-cat ar-hot-p ">
                    I believe you make your day. You make your life. So much of
                    it is all perception, and this is the form that I built for
                    myself. I have to accept it and work within those compounds,
                    and it’s up to me. <br /> <strong>Brad Pitt</strong>
                </p>
            </figure>
            <p className="h4 ar-hot-p ar-hot-mar">
                More than 250 developers have been recognized with Apple Design
                Awards over the past 20 years. The recognition has proven to be
                an accelerant for developers who are pioneering innovative
                designs within their individual apps and influencing entire
                categories.
            </p>
            <div className="arc-hot-block-images">
                <figure className="arc-hot-images-large row">
                    <Image
                        src="/images/arti-mahdi-.jpg"
                        className="wp-image-1 row"
                    />
                </figure>
                <figure className="arc-hot-images-large row">
                    <Image
                        src="/images\arti-uriel.jpg"
                        className="wp-image-2"
                    />
                </figure>
                <figure className="arc-hot-images-large row">
                    <Image src="/images\wilmer.jpg" className="wp-image-2" />
                </figure>
                <figure className="arc-hot-images-large2 row">
                    <Image src="/images\sameer-.jpg" className="wp-image-3" />
                </figure>
                <figure className="arc-hot-images-large2 row">
                    <Image src="/images\sameer-2.jpg" className="wp-image-4" />
                </figure>
            </div>
            <p className="h4 ar-hot-p ar-hot-mar">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way.
            </p>
            <StayConnected sizeStay="SC" />
            <Avtor />

            <OtherArticles />
        </article>
    )
}
export default ArticleHot
