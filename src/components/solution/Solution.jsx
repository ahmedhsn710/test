import React from "react";
import Heading from "../heading/Heading";
import "../videopage/videopage.css";

const Solution = () => {
    return (
        <div style={{ backgroundColor: 'black', paddingTop: '40px' }} id="products">
            <Heading id='products' title="Products" color='white' />
            <div className="video-container">
                <div className="video-info">
                    <p>The NUST InfoBot is a chatbot designed to provide assistance by offering information on NUST policies outlined in both the undergraduate and postgraduate handbooks.</p>

                </div>
                <div className="video-wrapper">
                    <iframe
                        title="Nust chatbot"
                        src="https://nust-help-bot.vercel.app/"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="video-container">
                <div className="video-wrapper">
                    <iframe
                        title="Pakistan Constitution chatbot"
                        src="https://pakistan-constitution.vercel.app/"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
                <div className="video-info">
                    <p>The constitution chatbot allows users to ask questions related to the laws described in the Constitution of Pakistan.</p>

                </div>
            </div>
            <div className="video-container">
                <div className="video-info">
                    <p>This chatbot offers assistance with any queries regarding the translation of Quranic verses and their meanings (Tafheem).</p>

                </div>
                <div className="video-wrapper">
                    <iframe
                        title="Holy Quran Translation bot"
                        src="https://holy-quran-bot.vercel.app/"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="video-container">
                <div className="video-wrapper">
                    <iframe
                        title="Tafhim al quran bot"
                        src="https://tafhim-al-qur-an.vercel.app/"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
                <div className="video-info">
                    <p>This chatbot offers assistance with any queries regarding the translation of Quranic verses and their meanings (Tafheem).</p>

                </div>
            </div>
            <Heading />
        <div style={{ backgroundColor: 'white', paddingTop: '40px', marginBottom: '70px'}}>
            <Heading title="Ongoing projects" color="black"/>
            <div className="video-info">
                <h1 style={{color: 'black'}}>Presentation Maker</h1>
                <ul>
                    <li>An AI tool enabling businesses to create presentations on any topic within seconds.</li>
                </ul>
            </div>
            <div className="video-info">
                <h1 style={{color: 'black'}}>LLM Fine-tuning:</h1>
                <ul>
                    <li>We also offer fine-tuning for existing LLMs, allowing them to be trained on specific data for particular use cases</li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Solution;