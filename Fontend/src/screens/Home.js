import React from 'react'
import HomPage from '../template/HomePage';
import "../styles/home.css"
import "../styles/tailwind.min.css"

import { ToastContainer } from "react-toastify";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {
  return (

    <HomPage>
      <>
        <ToastContainer />
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <img src="https://cdn.mentorcruise.com/img/home/hero/homehero_1x.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                <h3 className='title'>Why choose Happy Programming ?</h3>
                <p className="fst-italic">
                  The Happy Programming is based on 3 criteria such as effective
                  teaching, rapid progress, and especially 2 trial lessons.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        <Container className='information'>
          <div className="mx-auto py-12 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="mx-auto bg-white z-50 space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="relative text-3xl lg:text-center mx-auto max-w-2xl font-bold tracking-tight sm:text-4xl">
                  Learn that new skill, launch that project, land your dream career.</h2>
                <p className="relative text-xl lg:text-center mx-auto max-w-3xl">
                  Your online mentor can elevate your career or be a shoulder to lean on. Get a personalized
                  mentoring program, including curated study plans, regular check-ins, and unlimited
                  actionable support. Be part of an online mentor community that spans across the globe.
                </p>
              </div>
              <ul className="space-y-4 sm:grid sm:grid-cols-1 sm:gap-2 lg:grid-cols-2 lg:gap-8">
                <li className="max-w-lg mx-auto p-6 text-left rounded-lg xl:px-10">
                  <div className="space-y-2">
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="text-lg leading-6 space-y-1">
                        <div className="flex items-center space-x-4 py-4">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/chat-bubble.svg"
                            alt="Chat Bubble"
                          />
                          <span className="font-bold text-base">CHAT</span>
                        </div>
                        <div className="flex">
                          <h3 className="font-bold text-3xl">
                            Expert mentorship. One text away.
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 text-base">
                            Ask questions, kick the tires on a new idea, or discuss
                            professional progress and improvements in your online
                            mentoring sessions with unlimited messaging.
                          </p>
                          <p className="my-4 text-base">
                            Have an upcoming interview at{" "}
                            <a
                              href="/company/amazon/"
                              className="text-navy-900 underline"
                            >
                              Amazon
                            </a>
                            ? Need help in{" "}
                            <a
                              href="/experts/productmanagement/"
                              className="text-navy-900 underline"
                            >
                              product management
                            </a>{" "}
                            or
                            <a
                              href="/coach/marketing/"
                              className="text-navy-900 underline"
                            >
                              marketing
                            </a>
                            ? Whatever it is, our online mentors are there for you.
                          </p>
                        </div>
                        <div>
                          <p className="my-4 text-base font-bold">
                            Fewer interruptions in your day-to-day and easier
                            documentation. A text away, get expert guidance at your
                            convenience from your mentor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="hidden lg:block mx-auto">
                  <picture className="max-w-screen-lg">
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/chat-screen_2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/chat-screen_2x.png 2x"
                      type="image/png"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/chat-screen_1x.webp"
                      className="image-enhancer"
                      type="image/webp"
                    />
                    <img
                      src="https://cdn.mentorcruise.com/img/home/screenshots/chat-screen_2x.png"
                      alt="Our Chat"
                      className="image-enhancer"
                    />
                  </picture>
                </li>
                <li className="hidden lg:block mx-auto max-w-lg">
                  <picture className="max-w-screen-lg">
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/conversation_2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/conversation_2x.png 2x"
                      type="image/png"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/conversation_1x.webp"
                      className="image-enhancer"
                      type="image/webp"
                    />
                    <img
                      src="https://cdn.mentorcruise.com/img/home/screenshots/conversation_1x.png"
                      alt="Coding Challenge"
                      className="image-enhancer"
                    />
                  </picture>
                </li>
                <li className="max-w-lg mx-auto p-6 text-left rounded-lg xl:px-10">
                  <div className="space-y-2">
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="text-lg leading-6 space-y-1">
                        <div className="flex items-center space-x-4 py-4">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/goals-icon.svg"
                            alt="Goals"
                          />
                          <span className="font-bold text-base">
                            ESTABLISH MILESTONES
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-3xl">
                            Shortcut growth through expert guidance.
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 text-base">
                            Get invaluable knowledge from veterans and founders. Through
                            effective mentorship, eliminate the time spent on figuring out
                            your next steps. Get an action plan, and gain wisdom from
                            consistent mentoring sessions.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <picture className="flex items-center max-w-screen-lg w-12 h-12">
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/tomray_2x.webp 2x"
                              type="image/webp"
                              alt="Tom Ray"
                              className="rounded-full w-12 h-12"
                            />
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/tomray_2x.png 2x"
                              type="image/png"
                              alt="Tom Ray"
                              className="rounded-full w-12 h-12"
                            />
                            <source
                              srcSet="https://cdn.mentorcruise.com/img/faces/tomray_1x.webp"
                              type="image/webp"
                              alt="Tom Ray"
                              className="image-enhancer rounded-full w-12 h-12"
                            />
                            <img
                              src="https://cdn.mentorcruise.com/img/faces/tomray_1x.png"
                              alt="Tom Ray"
                              className="image-enhancer rounded-full w-12 h-12"
                            />
                          </picture>
                          <div className="flex flex-col">
                            <p className="text-sm italic">
                              "In just a few weeks, I feel a LOT more confident navigating
                              the React world. Chris has been an excellent mentor."
                            </p>
                            <p className="text-sm italic font-bold">
                              - Tom Ray, a{" "}
                              <a href="/coach/React/" className="underline text-navy-900">
                                React
                              </a>{" "}
                              mentee.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="max-w-lg mx-auto p-6 text-left rounded-lg xl:px-10">
                  <div className="space-y-2">
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="text-lg leading-6 space-y-1">
                        <div className="flex items-center space-x-4 py-4">
                          <img
                            src="https://cdn.mentorcruise.com/img/home/icons/videochat-icon.svg"
                            alt="Video-chat"
                          />
                          <span className="font-bold text-base">VIDEO CALLS</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-3xl">
                            Talk it out. Face-to-face.
                          </h3>
                        </div>
                        <div>
                          <p className="my-4 text-base">
                            Online mentorship shouldn’t compromise genuine
                            interactions—enter video chat.
                          </p>
                          <p className="my-4 text-base">
                            When you’re stuck in a logjam, be it a design flaw, code
                            defect, or business decision, skip the endless back-and-forth
                            of essays and talk it out face-to-face with your mentor on
                            video call.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">

                          <div className="flex flex-col">

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="hidden lg:block mx-auto max-w-lg relative">
                  <picture className="max-w-screen-lg">
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/bounce_ideas_2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/bounce_ideas_2x.png 2x"
                      type="image/png"
                    />
                    <source
                      srcSet="https://cdn.mentorcruise.com/img/home/screenshots/bounce_ideas_1x.webp"
                      className="image-enhancer"
                      type="image/webp"
                    />
                    <img
                      src="https://cdn.mentorcruise.com/img/home/screenshots/bounce_ideas_1x.png"
                      alt="Coding Challenge"
                      className="image-enhancer"
                    />
                  </picture>
                </li>
              </ul>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <Link to={'/listmentor'}>
                  <button type="submit" className="blue-btn" href="/mentor/browse/">Find my mentor
                  </button>
                </Link>


              </div>
            </div>
          </div>
        </Container>

        <div
          className="relative text-navy-900"
          style={{ background: "linear-gradient(#ffffff 0%, #8DD2D2 40%)" }}
        >
          <div className="hidden lg:block">
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
              className="absolute"
              style={{ top: 300, right: 150, height: 25 }}
            />
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
              className="absolute"
              style={{ top: 400, left: 50, height: 50 }}
            />
            <img
              src="https://cdn.mentorcruise.com/img/home/shapes/white_triangle.svg"
              className="absolute"
              style={{ top: 600, right: 100, height: 95 }}
            />
          </div>
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-20">
              <div className="mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl lg:text-center mx-auto max-w-2xl font-bold tracking-tight sm:text-4xl">
                  An arsenal of industry veterans and mentoring packages at a flexible
                  price.
                </h2>
                <p className="text-xl lg:text-center mx-auto max-w-3xl">
                  Pick from a curated collection of mentors and services. Try them out
                  for 7 days with no obligation. Found your mentoring sessions useful?
                  Move to a low-cost, monthly mentoring subscription. No lock-ins, no
                  hidden fees – Just accelerated professional growth.
                </p>
              </div>
              <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-4 lg:space-x-8 space-y-4 md:space-y-0 list-unstyled">
                <li>
                  <div className="w-72 py-4 px-6 space-y-4 bg-white text-left rounded-lg shadow-lg">
                    <div className="flex flex-row justify-between px-2 items-center space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="flex flex-col md:justify-between">
                        <h3 className="font-bold text-base">Ayla S.</h3>
                        <p className="text-xs lg:text-sm text-gray-400 w-36">
                          Top-rated marketing expert
                        </p>
                      </div>
                      <div>
                        <picture className="px-8 lg:px-0 max-w-screen-lg z-30">
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/ayla_2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/ayla_2x.png 2x"
                            type="image/png"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/ayla.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://cdn.mentorcruise.com/img/faces/ayla.png"
                            className="rounded-full h-16 w-16"
                            alt="Ayla S."
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="hidden md:block">
                  <div className="w-72 py-4 px-6 space-y-4 bg-white text-left rounded-lg shadow-lg">
                    <div className="flex flex-row justify-between px-2 items-center space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="flex flex-col md:justify-between">
                        <h3 className="font-bold text-base">Francois J.</h3>
                        <p className="text-xs lg:text-sm text-gray-400 w-36">
                          Full-Stack Software Developer
                        </p>
                      </div>
                      <div>
                        <picture className="px-8 lg:px-0 max-w-screen-lg z-30">
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/francois_2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/francois_2x.png 2x"
                            type="image/png"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/francois.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://cdn.mentorcruise.com/img/faces/francois.png"
                            className="rounded-full h-16 w-16"
                            alt="Francois J."
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="hidden lg:block">
                  <div className="w-72 py-4 px-6 space-y-4 bg-white text-left rounded-lg shadow-lg">
                    <div className="flex flex-row justify-between px-2 items-center space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="flex flex-col md:justify-between">
                        <h3 className="font-bold text-base">Annie L.</h3>
                        <p className="text-xs lg:text-sm text-gray-400 w-36">
                          UX Designer
                        </p>
                      </div>
                      <div>
                        <picture className="px-8 lg:px-0 max-w-screen-lg z-30">
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/annie_2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/annie_2x.png 2x"
                            type="image/png"
                          />
                          <source
                            srcSet="https://cdn.mentorcruise.com/img/faces/annie.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://cdn.mentorcruise.com/img/faces/annie.png"
                            className="rounded-full h-16 w-16"
                            alt="Annie L."
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>

    </HomPage>
  );
}

export default Home;