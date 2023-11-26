import React from 'react';
import Center from '../../components/center'
import './assoc.css'
const logosData = [
    {
        imageUrl: "https://logowik.com/content/uploads/images/openai5002.jpg",
        altText: "Open Ai",
        title: "openai1",
        index: 1,
    },
    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_VJskwX7fm6utvq4umYxjBp_W9As96S5dh8OE0XU3uRLzZU5eu4NCipxkSoRebsYGFw0f2w-rjK4D1DPkMR1F0g9czF2NIwZWlnm4YJSEBEGpsR0boTlKnVYF-ajScO_Xg5HhLJdy7vdGDlvKc6kUke248xNY-5gEF1RORdqrfJ55zIjUR7fvBCLPOsLF/s1640/10.png",
        altText: "lama Logo",
        title: "lama2",
        index: 2,
    },
    {
        imageUrl: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc5d749a-528e-414c-9727-18dfbb93e78b_1000x500.png",
        altText: "pinecone Logo",
        title: "pinecone3",
        index: 3,
    },
    {
        imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*-PlFCd_VBcALKReO3ZaOEg.png",
        altText: "Langchain Logo",
        title: "langchain4",
        index: 4,
    },
    {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg",
        altText: "Vercel Logo",
        title: "vercel5",
        index: 5,
    },
];

const Logo = ({ imageUrl, altText, title, index }) => {

    return (
        <div className="owl-item active index-active" data-index={index} style={{ width: '166px', padding: '20px' }}>
            <div className="tmb tmb-carousel tmb-iso-h4 tmb-light tmb-overlay-showed tmb-overlay-middle tmb-overlay-text-left tmb-desaturated tmb-image-color-anim tmb-id-59390 tmb-media-first tmb-media-last tmb-content-overlay tmb-lightbox" style={{ transitionDelay: '120ms', transitionDuration: '320ms' }}>
                <div className="t-inside style-color-xsdn-bg start_animation">
                    <div className="t-entry-visual">
                        <div className="t-entry-visual-tc">
                            <div className="t-entry-visual-cont">
                                <div className="dummy" style={{ paddingTop: '20%', paddingBottom: '20%' }}></div>
                                <a tabIndex="-1" href={imageUrl} className="pushed" data-active="1" data-lbox={`ilightbox_gallery-${index + 206493}`} data-options={`width:1000,height:1000,thumbnail: '${imageUrl}'`} data-lb-index={index} data-lbox-init="true">
                                    <div className="t-entry-visual-overlay">
                                        <div className="t-entry-visual-overlay-in style-color-xsdn-bg" style={{ opacity: '0.01' }}></div>
                                    </div>
                                    <img decoding="async" className={`wp-image-593${index}`} src={imageUrl} width="1000" height="1000" alt={altText} title={`${altText} ${index + 1}`} data-lazy-srcset={`${imageUrl} 1000w, ${imageUrl.replace(/\.\w+$/, '-300x300$&')} 300w, ${imageUrl.replace(/\.\w+$/, '-150x150$&')} 150w, ${imageUrl.replace(/\.\w+$/, '-768x768$&')} 768w, ${imageUrl.replace(/\.\w+$/, '-12x12$&')} 12w`} data-lazy-sizes="(max-width: 1000px) 100vw, 1000px" data-lazy-src={imageUrl} data-ll-status="loaded" sizes="(max-width: 1000px) 100vw, 1000px" srcSet={`${imageUrl} 1000w, ${imageUrl.replace(/\.\w+$/, '-300x300$&')} 300w, ${imageUrl.replace(/\.\w+$/, '-150x150$&')} 150w, ${imageUrl.replace(/\.\w+$/, '-768x768$&')} 768w, ${imageUrl.replace(/\.\w+$/, '-12x12$&')} 12w`}></img>
                                    <noscript>
                                        <img decoding="async" className={`wp-image-593${index}`} src={imageUrl} width="1000" height="1000" alt={altText} title={`${altText} ${index + 1}`} srcSet={`${imageUrl} 1000w, ${imageUrl.replace(/\.\w+$/, '-300x300$&')} 300w, ${imageUrl.replace(/\.\w+$/, '-150x150$&')} 150w, ${imageUrl.replace(/\.\w+$/, '-768x768$&')} 768w, ${imageUrl.replace(/\.\w+$/, '-12x12$&')} 12w`} sizes="(max-width: 1000px) 100vw, 1000px" />
                                    </noscript>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Assoc = () => (
    <Center>
        <div className="owl-stage">
            {logosData.map((logo, index) => (
                <Logo {...logo} key={index} />
            ))}
        </div>
    </Center>
);

export default Assoc
