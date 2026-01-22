import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/logo.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[6vw] md:px-[8vw] lg:px-[18vw] font-sans pt-16 md:pt-20 lg:pt-24"

    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 lg:gap-28">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-wide">
            Jitendra Kumar
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'App Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed max-w-xl">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>

          <a
            href="https://drive.google.com/file/d/1bu0_5q-PuF_CuSffJnIIMYjpLNQg0_Oe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-9 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(130,69,236,0.8)]"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 8px #8245ec, 0 0 25px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] border-4 border-purple-600 rounded-full p-1 bg-gradient-to-tr from-purple-600/20 to-transparent"
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            perspective={1200}
            scale={1.06}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Jitendra Kumar"
              className="w-full h-full rounded-full object-cover shadow-[0_15px_35px_rgba(130,69,236,0.6)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
