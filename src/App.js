import React, { useCallback, useEffect, useRef, useState } from "react";
import moment from "moment";
import Countdown from "./Countdown";

import { ReactComponent as Logo } from "./assets/logo.svg";
import entertainmentTrack from "./assets/tracks/entertainment.png";
import healthcareTrack from "./assets/tracks/healthcare.png";
import blockchainTrack from "./assets/tracks/privacy.png";
import sustainabilityTrack from "./assets/tracks/sustainability.png";
import educationTrack from "./assets/tracks/education.png";

import mainImage from "./assets/image_234.png"; //'./assets/photos/DA Hacks-129.webp';
import main2Image from "./assets/image_233.png"; //'./assets/photos/DA Hacks-129.webp';
import globeImage from "./assets/globe.svg";
import hootowImg from "./assets/lightbulb.png";
import sechootowImg from "./assets/sec1_hootow.png";
import stats from "./assets/stats.png";

import scroll1 from "./assets/photos/scroll1.webp";
import scroll2 from "./assets/photos/scroll2.webp";
import scroll3 from "./assets/photos/scroll3.webp";
import scroll4 from "./assets/photos/scroll4.webp";
import scroll5 from "./assets/photos/scroll5.webp";
import scroll6 from "./assets/photos/scroll6.webp";
import scroll7 from "./assets/photos/scroll7.webp";

import introVideo from "./assets/videos/compressed_intro.mp4";
import "./App.css";

import elon from "./assets/photos/elon.webp";
import kaliszan from "./assets/photos/kaliszan.webp";
import chou from "./assets/photos/chou.webp";
import durumeric from "./assets/photos/durumeric.webp";

import Intel from "./assets/logos/intel.webp";
import Intersystems from "./assets/logos/intersystems.webp";
import Vespa from "./assets/logos/vespa.webp";
import Caldera from "./assets/logos/caldera.webp";
import HRT from "./assets/logos/HRT.webp";
import Hakko from "./assets/logos/hakko.webp";
import Reflex from "./assets/logos/reflex.webp";
import TogetherAI from "./assets/logos/togetherai.webp";
import Convex from "./assets/logos/convex.webp";
import Taisu from "./assets/logos/taisu.webp";
import Terra from "./assets/logos/terra.webp";
import Chroma from "./assets/logos/chroma.webp";
import Roblox from "./assets/logos/roblox.webp";
import Canva from "./assets/logos/canvaDev.webp";
import Parrot from "./assets/logos/parrot.webp";
import Pinterest from "./assets/logos/pinterest.webp";
import OtsVal from "./assets/logos/otsval.webp";
import DEShaw from "./assets/logos/deshaw.webp";
import Warp from "./assets/logos/warp.webp";
import Pinecone from "./assets/logos/pinecone.webp";
import Pear from "./assets/logos/pear.webp";
import Verkada from "./assets/logos/verkada.webp";
import Seeed from "./assets/logos/seeed.webp";
import DoorDash from "./assets/logos/doordash.webp";
import EdStem from "./assets/logos/edStem.webp";
import QED from "./assets/logos/qed.webp";
import StanfordEco from "./assets/logos/stanfordeco.webp";
import fetchAI from "./assets/logos/fetchAI.webp";
import HumanCap from "./assets/logos/humanCap.webp";
import Avalanche from "./assets/logos/avalanche.webp";
import Bun from "./assets/logos/bun.webp";
import Codegen from "./assets/logos/codegen.webp";
import BGB from "./assets/logos/bgb.webp";
import CrossMint from "./assets/logos/crossmint.webp";
import Samsung from "./assets/logos/samsung.webp";
import Monster from "./assets/logos/monster.webp";
import Endex from "./assets/logos/endex.webp";
import Reazon from "./assets/logos/reazon.webp";
import Neo from "./assets/logos/neo.webp";
import YC from "./assets/logos/ycomb.webp";
import Merkle from "./assets/logos/merkle.webp";
import Postman from "./assets/logos/postman.webp";
import Wispr from "./assets/logos/wispr.webp";
import Coframe from "./assets/logos/coframe.webp";
import Cotopaxi from "./assets/logos/cotopaxi.webp";

// import { prizes } from './prizes';

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineMedium,
  AiOutlineTwitter,
  AiFillStar,
} from "react-icons/ai";

function App() {
  const Tracks = {
    Education: 0,
    Sustainability_and_Development: 1,
    Healthcare: 2,
    Fintech_and_Blockchain: 3,
    Entertainment_and_Interaction: 4,
    Privacy_and_Safety: 5,
  };

  const [activePrizePage, setActivePrizePage] = useState(1);

  let count = 0;
  let count2 = 0;
  let countsm = 0;
  let count3 = 0;

  // FAQ Accordian

  useEffect(() => {
    if (count === 0) {
      const accordionHeader = document.querySelectorAll(".accordion-header");
      console.log(accordionHeader);
      accordionHeader.forEach((header) => {
        header.addEventListener("click", function () {
          const accordionContent =
            header.parentElement.querySelector(".accordion-content");
          let accordionMaxHeight = accordionContent.style.maxHeight;

          // Condition handling
          if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${
              accordionContent.scrollHeight + 32
            }px`;
            header.querySelector(".fas").classList.remove("fa-plus");
            header.querySelector(".fas").classList.add("fa-minus");
            header.parentElement.classList.add("bg-indigo-50");
          } else {
            accordionContent.style.maxHeight = `0px`;
            header.querySelector(".fas").classList.add("fa-plus");
            header.querySelector(".fas").classList.remove("fa-minus");
            header.parentElement.classList.remove("bg-indigo-50");
          }
        });
      });
      count = 1;
    }
  }, []);

  // Horizontal scroller

  useEffect(() => {
    if (count2 === 0) {
      (function horizontalScrollingBanner() {
        var banners = document.getElementsByClassName(
          "horizontal-scrolling-banner"
        );
        if (!banners || banners.length === 0) {
          return;
        }
        var pxPerSecond = 50;
        setUpElements();
        scrollTheBanners();
        window.addEventListener("resize", setUpElements);

        function setUpElements() {
          for (var i = 0; i < banners.length; i++) {
            var currentBanner = banners[i];
            var helperWrapperClass =
              "horizontal-scrolling-banner__helper-wrapper";
            var currentHelperWrapper = currentBanner.querySelector(
              "." + helperWrapperClass
            );
            if (currentHelperWrapper) {
              var clones =
                currentHelperWrapper.querySelectorAll("[data-clone]");
              Array.prototype.forEach.call(clones, function (clone) {
                clone.remove();
              });
              var childrenCount = currentHelperWrapper.children.length;
              for (var i = 0; i < childrenCount; i++) {
                currentBanner.appendChild(currentHelperWrapper.children[0]);
              }
              currentHelperWrapper.remove();
            }

            var children = currentBanner.children;

            var bannerWidth = currentBanner.getBoundingClientRect().width;
            var minWidthToCoverBanner =
              bannerWidth * 2 + children[0].getBoundingClientRect().width;
            var childrenWidth = Array.prototype.reduce.call(
              children,
              function (r, child) {
                return r + child.getBoundingClientRect().width;
              },
              0
            );
            var currentWidth = childrenWidth;

            do {
              Array.prototype.forEach.call(children, function (child) {
                var clone = child.cloneNode();
                clone.setAttribute("aria-hidden", true);
                clone.dataset.clone = true;
                currentBanner.appendChild(clone);
              });
              currentWidth += childrenWidth;
            } while (currentWidth < minWidthToCoverBanner);

            var transitionHelperWrapper = document.createElement("div");
            transitionHelperWrapper.classList.add(
              "horizontal-scrolling-banner__helper-wrapper"
            );
            var childrenCount = children.length;
            for (var i = 0; i < childrenCount; i++) {
              transitionHelperWrapper.appendChild(children[0]);
            }
            currentBanner.appendChild(transitionHelperWrapper);
            transitionHelperWrapper.dataset.childrenWidth = childrenWidth;
          }
        }

        function scrollTheBanners() {
          for (var i = 0; i < banners.length; i++) {
            var helperWrapper = banners[i].firstElementChild;
            var childrenWidth = helperWrapper.dataset.childrenWidth;
            var offsetLeft = helperWrapper.offsetLeft;

            if (offsetLeft <= childrenWidth * -1) {
              helperWrapper.style.transitionDuration = "0s";
              helperWrapper.style.left = "0px";
              helperWrapper.style.removeProperty("transition-duration");
            } else if (
              helperWrapper.style.left === "" ||
              helperWrapper.style.left === "0px"
            ) {
              setTimeout(function () {
                helperWrapper.style.transitionDuration =
                  (childrenWidth / pxPerSecond).toFixed() + "s";
                helperWrapper.style.left = childrenWidth * -1 + "px";
              }, 0);
            }
          }
          requestAnimationFrame(scrollTheBanners);
        }
      })();

      count2 = 1;
    }
  }, []);

  // Horizontal scroll 2

  useEffect(() => {
    if (countsm === 0) {
      (function horizontalScrollingStat() {
        var banners = document.getElementsByClassName(
          "horizontal-scrolling-stats"
        );
        if (!banners || banners.length === 0) {
          return;
        }
        var pxPerSecond = 50;
        setUpStats();
        scrollTheStat();
        window.addEventListener("resize", setUpStats);

        function setUpStats() {
          for (var i = 0; i < banners.length; i++) {
            var currentBanner = banners[i];
            var helperWrapperClass =
              "horizontal-scrolling-stats__helper-wrapper";
            var currentHelperWrapper = currentBanner.querySelector(
              "." + helperWrapperClass
            );
            if (currentHelperWrapper) {
              var clones =
                currentHelperWrapper.querySelectorAll("[data-clone]");
              Array.prototype.forEach.call(clones, function (clone) {
                clone.remove();
              });
              var childrenCount = currentHelperWrapper.children.length;
              for (var i = 0; i < childrenCount; i++) {
                currentBanner.appendChild(currentHelperWrapper.children[0]);
              }
              currentHelperWrapper.remove();
            }

            var children = currentBanner.children;

            var bannerWidth = currentBanner.getBoundingClientRect().width;
            var minWidthToCoverBanner =
              bannerWidth * 2 + children[0].getBoundingClientRect().width;
            var childrenWidth = Array.prototype.reduce.call(
              children,
              function (r, child) {
                return r + child.getBoundingClientRect().width;
              },
              0
            );
            var currentWidth = childrenWidth;

            do {
              Array.prototype.forEach.call(children, function (child) {
                var clone = child.cloneNode();
                clone.setAttribute("aria-hidden", true);
                clone.dataset.clone = true;
                currentBanner.appendChild(clone);
              });
              currentWidth += childrenWidth;
            } while (currentWidth < minWidthToCoverBanner);

            var transitionHelperWrapper = document.createElement("div");
            transitionHelperWrapper.classList.add(
              "horizontal-scrolling-stats__helper-wrapper"
            );
            var childrenCount = children.length;
            for (var i = 0; i < childrenCount; i++) {
              transitionHelperWrapper.appendChild(children[0]);
            }
            currentBanner.appendChild(transitionHelperWrapper);
            transitionHelperWrapper.dataset.childrenWidth = childrenWidth;
          }
        }

        function scrollTheStat() {
          for (var i = 0; i < banners.length; i++) {
            var helperWrapper = banners[i].firstElementChild;
            var childrenWidth = helperWrapper.dataset.childrenWidth;
            var offsetLeft = helperWrapper.offsetLeft;

            if (offsetLeft <= childrenWidth * -1) {
              helperWrapper.style.transitionDuration = "0s";
              helperWrapper.style.left = "0px";
              helperWrapper.style.removeProperty("transition-duration");
            } else if (
              helperWrapper.style.left === "" ||
              helperWrapper.style.left === "0px"
            ) {
              setTimeout(function () {
                helperWrapper.style.transitionDuration =
                  (childrenWidth / pxPerSecond).toFixed() + "s";
                helperWrapper.style.left = childrenWidth * -1 + "px";
              }, 0);
            }
          }
          requestAnimationFrame(scrollTheStat);
        }
      })();

      countsm = 1;
    }
  }, []);

  const [lastScrollTop, setLastScrollTop] = useState(0); // Initialize the state

  // Header
  useEffect(() => {
    const header = document.getElementById("site-header");

    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      let scrollPos = window.pageYOffset;
      if (scrollPos <= 100) {
        header.style.backgroundColor = "transparent";
      }

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up
        header.style.transform = "translateY(0)";
        header.style.backgroundColor = "#B8CCBA"; // setting background to white when shown
        if (scrollPos <= 100) {
          header.style.backgroundColor = "transparent";
        }
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const QuickOption = ({ disabled, title, section, link, description }) => {
    return (
      <a
        disabled={disabled}
        href={section ? "#" + section : link}
        target={section ? "" : "_blank"}
        className={` mb-2 py-4 px-6 ${
          disabled
            ? ""
            : "lg:hover:bg-[#B8CCBA] hover:bg-[#B8CCBA] ease-in duration-300 cursor-pointer"
        } lg:bg-transparent w-full lg:h-48`}
      >
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <h1
            className="font-Raleway font-bold text-2xl mb-2 bg-gradient-to-r bg-clip-text"
            style={{ color: "#232323" }}
          >
            {title}
          </h1>
          <div className="relative flex flex-col justify-center">
            <p className="font-CerealMd text-sm lg:text-black text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </a>
    );
  };

  const OurRoots = ({ disabled, title, section, link }) => {
    return (
      <a
        disabled={disabled}
        href={section ? "#" + section : link}
        target={section ? "" : "_blank"}
        className={` mb-2 py-4 px-6 ${
          disabled
            ? ""
            : "lg:hover:bg-[#B8CCBA] hover:bg-[#B8CCBA] ease-in duration-300 cursor-pointer"
        } lg:bg-transparent w-full lg:h-10`}
      >
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <div className="relative flex flex-col justify-center">
            <p className="font-Raleway font-bold text-2xl text-[#585858] text-gray-500">
              {title}
            </p>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="overflow-hidden scroll-smooth">
      <div
        className="h-20 flex items-center lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 z-50 header w-full fixed"
        id="site-header"
      >
        <div className="py-10">
          <a href="#home">
            <Logo className="h-20" />{" "}
          </a>
        </div>
        <div className="h-20 flex items-center pt-10 pb-10">
          <a
            className="font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black"
            href="#home"
          >
            Home
          </a>
          <a
            className="font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black"
            href="#about"
          >
            About
          </a>
          <a
            className="font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black"
            href="#tracks"
          >
            Tracks
          </a>
          <a
            className="font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black"
            href="#sponsors"
          >
            Sponsors
          </a>
          <a
            className="font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black"
            href="#faqs"
          >
            FAQs
          </a>
          <a
            className="font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black"
            href="https://www.deanzahacks.com/"
          >
            2023
          </a>
          <a
            className="font-Raleway ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black"
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          >
            Apply
          </a>
        </div>
      </div>

      <section className="w-full pt-36 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 flex flex-col relative pb lg:items-center">
        <img
          src={sechootowImg}
          className="z-0 right-5 top-4 absolute dissapearWhenSmall"
          alt="Hoover Tower"
        />

        <div className="container mx-auto px-4">
          <h1
            className="text-center font-Raleway font-extrabold mb-4 bg-clip-text"
            style={{ color: "#232323", fontSize: "36px", lineHeight: "1.2" }}
          >
            DA Hacks is De Anza College's premier hackathon. Join<br></br> us
            for our 3th year to dream and build the future!
          </h1>
          <p
            className="description font-bold lg:text-center font-Raleway"
            style={{
              color: "#585858",
              fontSize: "18px",
              width: "80%",
              margin: "auto",
            }}
          >
            The country’s brightest engineering students are flown to De Anza
            College's campus <br></br> to build solutions to the world’s largest
            challenges for 48 hours.
          </p>
          <p
            className="description font-bold lg:text-center font-Raleway"
            style={{
              color: "#585858",
              fontSize: "18px",
              width: "80%",
              margin: "auto",
            }}
          ></p>
          <div className="button-container text-center mt-4">
            {/* <button className="font-Raleway font-bold hack-button bg-[#388F6B]">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeXjda0LUCaY1bhUxGkPcFmB6bbBjCNMNFQDBrSQ-081eXxhg/viewform?usp=sf_link"
              >
                {" "}
                Join our organizing team{" "}
              </a>{" "}
            </button> */}
            <button className="font-Raleway font-bold hack-button bg-[#4EB389]">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              >
                {" "}
                Apply to Hack{" "}
              </a>{" "}
            </button>
            <button className="font-Raleway font-bold hack-button bg-[#388F6B]">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              >
                {" "}
                Live Schedule{" "}
              </a>
            </button>
            <button className="font-Raleway font-bold hack-button bg-[#4EB389]">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              >
                Ultimate Guide
              </a>
            </button>
          </div>
        </div>
      </section>

      <section
        class="xl:h-[105vh] lg:h-[90vh] flex w-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex-col justify-center items-center"
        id="home"
      >
        <div class="scale-90 w-11/12 mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl absolute top-[2rem] bottom-[5rem] bottom-5 transform -translate-x-[2%]">
          <div class="rounded-2xl background-block left-0"></div>
        </div>
        <div class="scale-90 w-11/12 mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl absolute top-[2rem] bottom-[5rem] left-1/2 transform -translate-x-[48%]">
          <video
            src={introVideo}
            autoPlay
            muted
            loop
            class="brightness-[0.4] object-cover w-full h-full "
          />
        </div>

        <div className="translate-x-[10%] flex flex-row items-center w-full justify-content: start">
          <div className="lg:w-5/6 z-auto">
            <div className="inline-block">
              <p className="font-semibold xl:text-white lg:text-white md:text-white text-white mb-1 font-display xl:text-lg lg:text-md text-lg">
                June 7th-8th 2024 @ De Anza College
              </p>
              <div class="h-[2px] bg-gradient-to-r xl:bg-white lg:bg-white md:bg-white bg-white rounded-full mb-4"></div>
            </div>
            <Countdown
              className="xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white"
              targetDate="2024-06-07T00:00:00"
            />
            <div className="flex flex-row p-8 pl-20">
              <a href="https://medium.com/@hackwithtrees" target="_blank">
                <AiOutlineMedium
                  className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200"
                  size={30}
                />
              </a>
              <a href="https://www.facebook.com/DA Hacks" target="_blank">
                <AiOutlineFacebook
                  className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200"
                  size={30}
                />
              </a>
              <a href="https://twitter.com/hackwithtrees" target="_blank">
                <AiOutlineTwitter
                  className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200"
                  size={30}
                />
              </a>
              <a
                href="https://www.instagram.com/stanfordtreehacks/?hl=en"
                target="_blank"
              >
                <AiFillInstagram
                  className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200"
                  size={30}
                />
              </a>
              <a href="https://github.com/DA Hacks" target="_blank">
                <AiFillGithub
                  className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200"
                  size={30}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full xl:pt-8 lg:pt-8 md:pt-14 pt-14 xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 pl-4 pr-4 pb-12 flex flex-col relative justify-center items-center"
        id="about"
      >
        <img
          src={globeImage}
          className="small_img top-10 z-0 w-120 mb-160 -left-16 absolute lg:-ml-16 animate-spin-slow"
          alt="Revolving Globe"
        />
        <h1
          className="text-center font-Raleway font-extrabold mb-8 bg-clip-text"
          style={{ color: "#232323", fontSize: "36px", lineHeight: "1.2" }}
        >
          The Basics
        </h1>
        <div className="z-10 w-full flex relative lg:flex-row flex-col">
          <div className="flex flex-col lg:w-4/12 w-12/12 pl-1 pr-1">
            <QuickOption
              disabled={false}
              title="Applying"
              link="https://root.DA Hacks.com/"
              description="Non-De Anza College Students: Apply by December 11th 11:59 pm. De Anza College Students: Auto-accepted but need to RSVP by applying"
            />
            <QuickOption
              disabled={false}
              title="Learning"
              link="https://github.com/DA Hacks"
              description="Workshops beginning a week before the hackathon, hackpacks, and workshops during give you a ton of opportunites to learn new skills! Plus amazing mentors from the most innovative companies!"
            />
          </div>

          <div className="flex flex-col lg:w-4/12 w-12/12 pl-1 pr-1">
            <QuickOption
              disabled={false}
              title="Transportation"
              description="We provide busses for students from certain schools. The rest are eligible for a flight reimbursement up to a regional cap.More details soon!"
            />
            <QuickOption
              disabled={false}
              title="Hacking"
              link="https://DA Hacks-2023.devpost.com/"
              description="Verticals over horizontals- focus on the problem, think big. Check out Tracks to begin ideating! Hardware, resources, APIs, prizes, mentors, sponsors- we've got you covered!"
            />
          </div>

          <div className="flex flex-col lg:w-4/12 w-12/12 pl-1 pr-1">
            <QuickOption
              disabled={false}
              title="Teams"
              description="Teams are 1-4 people. You are accepted individually, not as a team. Find and register teams on our new 'teams' portal and we'll have events at the hackathon for team-forming!"
            />
            <QuickOption
              disabled={false}
              title="The Rest"
              description="We've got some yummmm food planned for the event and have designated sleeping spaces. On top of that, some fun events for you to relax- hello puppy hour, stargazing, the De Anza College dish hike!"
            />
          </div>
        </div>
      </section>

      <section
        className="w-full lg:pl-40 pr-40 lg:pr-40 md:pl-40 md:pr-20 flex flex-col relative pb-16 about"
        id="tracks"
      >
        <div className="lg:items-center flex flex-col">
          <h1
            className="text-center font-Raleway font-extrabold mb-8 bg-clip-text"
            style={{ color: "#232323", fontSize: "36px", lineHeight: "1.2" }}
          >
            The Tracks
          </h1>
          <p
            className="tracksDesc mb-16 description font-bold lg:text-center font-Raleway"
            style={{ color: "#585858", fontSize: "18px", width: "80%" }}
          >
            Every year we have a variety of tracks for you to choose from, but
            you can also create something completely new. We can't wait to see
            what you build!
          </p>
        </div>
        <div className="pl-40 flex lg:flex-row flex-col lg:mb-16 mb-4 justify-beg">
          <div className="lg:w-3/12 lg:mr-8 mb-4 lg:mb-0">
            <div className="w-full h-60 card">
              <div class="card__content" style={{ maxHeight: "100%" }}>
                <div
                  class="card__front flex flex-col justify-end align-middle items-center p-10"
                  style={{ maxHeight: "100%", padding: 0 }}
                >
                  <img
                    src={educationTrack}
                    className="track-icon lg:w-60 md:w-20"
                  />
                  <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black text-center">
                    Education{" "}
                  </h1>
                  <p className="text-transparent text-md font-CerealBK">
                    <i>placeholder</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/12 lg:mr-8 mb-4 lg:mb-0">
            <div className="w-full h-60 card">
              <div class="card__content" style={{ maxHeight: "100%" }}>
                <div
                  class="card__front flex flex-col justify-end align-middle items-center p-10"
                  style={{ maxHeight: "100%", padding: 0 }}
                >
                  <div className="track-icon">
                    <img
                      src={healthcareTrack}
                      className="track-icon lg:w-60 md:w-20"
                    />
                  </div>
                  <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black text-center">
                    Healthcare{" "}
                  </h1>
                  <p className="text-black text-md text-center font-CerealBK">
                    <i>
                      by{" "}
                      <a href="https://tryterra.co/" className="underline">
                        TerraAPI{" "}
                      </a>{" "}
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/12 lg:mr-8 mb-4 lg:mb-0">
            <div className="w-full h-60 card">
              <div class="card__content" style={{ maxHeight: "100%" }}>
                <div
                  class="card__front flex flex-col justify-end align-middle items-center p-10"
                  style={{ maxHeight: "100%", padding: 0 }}
                >
                  <img
                    src={sustainabilityTrack}
                    className="track-icon lg:w-60 md:w-20"
                  />
                  <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black text-center">
                    Sustainability{" "}
                  </h1>
                  <p className="text-black text-md text-center font-CerealBK">
                    <i>
                      by{" "}
                      <a
                        href="https://ecopreneurship.De Anza College.edu/"
                        className="underline"
                      >
                        De Anza College Ecopreneurship{" "}
                      </a>{" "}
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col">
          <div className="last_box lg:w-3/12 lg:mr-8 mb-4 lg:mb-0">
            <div className="w-full h-60 card">
              <div class="card__content">
                <div class="card__front flex flex-col justify-end align-middle items-center p-10"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/12 lg:mr-8 mb-4 lg:mb-0">
            <div className="w-full h-60 card">
              <div class="card__content" style={{ maxHeight: "100%" }}>
                <div
                  class="card__front flex flex-col justify-end align-middle items-center p-10"
                  style={{ maxHeight: "100%", padding: 0 }}
                >
                  <img
                    src={blockchainTrack}
                    className="track-icon lg:w-60 md:w-20"
                  />
                  <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black text-center">
                    Blockchain & Security{" "}
                  </h1>
                  <p className="text-black text-md font-CerealBK">
                    <i>
                      by{" "}
                      <a href="http://www.taisu.io/" className="underline">
                        Taisu{" "}
                      </a>{" "}
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/12 lg:mr-8 mb-4 lg:mb-0">
            <div className="w-full h-60 card">
              <div class="card__content" style={{ maxHeight: "100%" }}>
                <div
                  class="card__front flex flex-col justify-end align-middle items-center p-10"
                  style={{ maxHeight: "100%", padding: 0 }}
                >
                  <img
                    src={entertainmentTrack}
                    className="track-icon lg:w-60 md:w-20"
                  />
                  <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black text-center">
                    Entertainment & Interaction{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="last_box lg:w-3/12 lg:mr-8 mb-4 lg:mb-0">
            <div className="w-full h-60 card">
              <div class="card__content">
                <div class="card__front flex flex-col justify-end align-middle items-center p-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lex flex-col relative pb-8 mobile_about">
        <div className="items-center flex flex-col">
          <h1
            className="text-center font-Raleway font-extrabold mb-8 bg-clip-text"
            style={{ color: "#232323", fontSize: "36px", lineHeight: "1.2" }}
          >
            The Tracks
          </h1>
          <p
            className="mb-16 description font-bold text-center font-Raleway"
            style={{ color: "#585858", fontSize: "18px", width: "80%" }}
          >
            Every year we have a variety of tracks for you to choose from, but
            you can also create something completely new. We can't wait to see
            what you build!
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-6/12 w-12/12 h-full p-8 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <img src={educationTrack} className="w-40 h-auto" />
              </div>
              <h1 className="font-semibold text-xl pt-2 font-CerealBD text-black">
                Education
              </h1>
              <p className="text-transparent text-md font-CerealBK">
                <i>placeholder</i>
              </p>
            </div>
            <div className="lg:w-6/12 w-12/12 h-full p-8 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <img src={sustainabilityTrack} className="w-40 h-auto" />
              </div>
              <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black">
                Sustainability
              </h1>
              <p className="text-transparent text-md font-CerealBK">
                <i>placeholder</i>
              </p>
            </div>
            <div className="lg:w-6/12 w-12/12 h-full p-8 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <img src={healthcareTrack} className="w-40 h-auto" />
              </div>
              <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black">
                Healthcare
              </h1>
              <p className="text-black text-md font-CerealBK">
                <i>
                  by{" "}
                  <a href="https://tryterra.co/" className="underline">
                    TerraAPI
                  </a>
                </i>
              </p>
            </div>

            <div className="lg:w-6/12 w-12/12 h-full p-8 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <img src={blockchainTrack} className="w-40 h-auto" />
              </div>
              <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black text-center">
                Blockchain & Security{" "}
              </h1>
              <p className="text-black text-md font-CerealBK">
                <i>
                  by{" "}
                  <a href="http://www.taisu.io/" className="underline">
                    Taisu{" "}
                  </a>{" "}
                </i>
              </p>
            </div>

            <div className="lg:w-6/12 w-12/12 h-full p-8 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <img src={entertainmentTrack} className="w-40 h-auto" />
              </div>
              <h1 className="pt-2 font-semibold text-xl font-CerealBD text-black text-center">
                Entertainment and Interaction
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pt-20 lg:pb-20 flex flex-col relative justify-center items-center"
        id="speakers"
      >
        <div className="items-center flex flex-col">
          <h1
            className="text-center font-Raleway font-extrabold bg-clip-text"
            style={{ color: "#232323", fontSize: "36px", lineHeight: "1.2" }}
          >
            Speakers
          </h1>
          <div className="flex lg:flex-row flex-col w-full rounded-lg">
            <div className="lg:w-1/2 pt-16 w-full h-full p-8 flex justify-center items-center">
              <div className="aspect-square flex justify-center items-center p-2">
                <img src={elon} className="object-cover h-9/10 w-full" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full p-8 pt-0 flex flex-col justify-center">
              <h1
                className="font-Raleway font-extrabold text-left pt-8"
                style={{
                  color: "#232323",
                  fontSize: "24px",
                  lineHeight: "1.2",
                }}
              >
                Elon Musk
              </h1>
              <p className="font-Raleway lg:text-md text-sm mt-4">
                Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a
                businessman and investor. He is the founder, chairman, CEO, and
                CTO of SpaceX; angel investor, CEO, product architect, and
                former chairman of Tesla, Inc.; owner, executive chairman, and
                CTO of X Corp.; founder of the Boring Company and xAI;
                co-founder of Neuralink and OpenAI; and president of the Musk
                Foundation. He is one of the wealthiest people in the world; as
                of April 2024, Forbes estimates his net worth to be $178
                billion.
              </p>
            </div>
          </div>
        </div>
        {/* New Row */}
        <div className="flex lg:mt-6 lg:flex-row flex-col rounded-lg basis-0 justify-center">
          <div className="lg:w-4/12 w-12/12 h-full p-8 flex flex-col justify-center items-center">
            <div className="aspect-square h-64 flex justify-center items-center p-2 border-2">
              <img src={chou} className="object-cover h-full w-full" />
            </div>
            <h1 className="mt-8 font-CerealBD text-xl text-gray-600">
              Timothy Chou
            </h1>
            <p className="font-CerealBK text-sm text-center mt-4">
              Former President of Oracle
            </p>
          </div>
          <div className="lg:w-4/12 w-12/12 h-full p-8 flex flex-col justify-center items-center lg:border-r">
            <div className="aspect-square h-64 flex justify-center items-center p-2 border-2">
              <img src={durumeric} className="object-cover h-full w-full" />
            </div>
            <h1 className="mt-8 font-CerealBD text-xl text-gray-600">
              Zakir Durumeric
            </h1>
            <p className="font-CerealBK text-center text-sm mt-4">
              Assistant Professor, De Anza College CS
            </p>
          </div>
          <div className="lg:w-4/12 w-12/12 h-full p-8 flex flex-col justify-center items-center lg:border-r">
            <div className="aspect-square h-64 flex justify-center items-center p-2 border-2">
              <img src={kaliszan} className="object-cover h-full w-full" />
            </div>
            <h1 className="mt-8 font-CerealBD text-xl text-gray-600">
              Filip Kaliszan
            </h1>
            <p className="font-CerealBK text-center text-sm mt-4">
              CEO of Verkada
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full xl:pl-40 xl:pr-40 lg:pl-10 lg:pr-10 md:pl-20 md:pr-20 pl-4 pr-4 pb-12 flex flex-col relative justify-center items-center"
        id="about"
      >
        <h1
          className="text-center font-Raleway font-extrabold mb-8 bg-clip-text"
          style={{ color: "#232323", fontSize: "36px", lineHeight: "1.2" }}
        >
          This year we'll have
        </h1>
        <div className="scroll-container pt-10 z-0">
          <img src={stats} alt="Scrolling Image" />
          <img src={stats} alt="Scrolling Image" />
          <img src={stats} alt="Scrolling Image" />
          <img src={stats} alt="Scrolling Image" />
          <img src={stats} alt="Scrolling Image" />
        </div>
      </section>

      <section
        className="w-full lg:pl-40 lg:pr-40 flex flex-col relative 8 lg:pb-16"
        id="sponsors"
      >
        <div className="items-center flex flex-col">
          <h1
            className="text-center font-Raleway font-extrabold mb-8 bg-clip-text"
            style={{ color: "#232323", fontSize: "36px", lineHeight: "1.2" }}
          >
            Sponsors
          </h1>
          <p
            className="description font-bold text-center font-Raleway px-4"
            style={{ color: "#585858", fontSize: "18px", width: "80%" }}
          >
            DA Hacks would not be possible without the support of our incredible
            sponsors. Throughout the event, they’ll host workshops, discuss job
            opportunities, host prizes, and much more.
          </p>
        </div>
        <div className="pt-16 lg:pt-8 sponsorSection">
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="sponsorCard lg:w-12/12 w-full lg:mr-0">
              <a
                href="https://ecopreneurship.De Anza College.edu/"
                target="_blank"
              >
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={StanfordEco} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="sponsorCard lg:w-12/12 w-full lg:mr-0">
              <a href="https://www.intel.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Intel} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="sponsorCard lg:w-12/12 w-full lg:mr-0">
              <a href="https://tryterra.co/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Terra} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="sponsorCard lg:w-12/12 w-full lg:mr-0">
              <a href="https://fetch.ai/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={fetchAI} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="sponsorCard lg:w-12/12 w-full lg:mr-0">
              <a href="http://www.taisu.io/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Taisu} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4">
            <div className="sponsorCard lg:w-6/12 w-full lg:mr-4">
              <a href="https://convex.dev/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-14 relative">
                  <img src={Convex} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="sponsorCard lg:w-6/12 w-full">
              <a href="https://www.trychroma.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-6 relative">
                  <img src={Chroma} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4">
            <div className="sponsorCard lg:w-6/12 w-full lg:mr-4">
              <a href="https://www.intersystems.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Intersystems} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="sponsorCard lg:w-6/12 w-full">
              <a href="https://www.together.ai/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-12 relative">
                  <img src={TogetherAI} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4">
            <div className="sponsorCard lg:w-6/12 w-full lg:mr-4">
              <a href="https://qedprotocol.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={QED} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="sponsorCard lg:w-6/12 w-full">
              <a href="https://human.capital/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-12 relative">
                  <img src={HumanCap} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="sponsorCard lg:w-6/12 w-full lg:mr-4">
              <a href="https://www.ycombinator.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={YC} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4">
            <div className="lg:w-4/12 w-full lg:mr-4">
              <a href="https://corp.roblox.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-14 relative">
                  <img src={Roblox} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-4/12 w-full lg:mr-4">
              <a href="https://vespa.ai/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-14 relative">
                  <img src={Vespa} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-4/12 w-full">
              <a href="https://www.caldera.xyz/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Caldera} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4">
            <div className="lg:w-4/12 w-full lg:mr-4">
              <a href="https://pear.vc" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-6 relative">
                  <img src={Pear} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-4/12 w-full lg:mr-4">
              <a href="https://www.avalabs.org/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-14 relative">
                  <img src={Avalanche} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-4/12 w-full">
              <a href="https://bun.sh/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Bun} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.reflex.dev/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-16 relative">
                  <img src={Reflex} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.canva.com/developers/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Canva} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.parrot.com/us/drones" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Parrot} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full">
              <a href="https://www.hudsonrivertrading.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={HRT} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.pinterestcareers.com/en/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Pinterest} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://en.valuenex.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={OtsVal} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.deshaw.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={DEShaw} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full">
              <a href="https://www.warp.dev/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Warp} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://reazon.jp/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Reazon} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://endex.ai/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Endex} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://monsterapi.ai/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Monster} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full">
              <a href="https://www.samsungnext.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Samsung} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://pinecone.io" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Pinecone} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.bgbgroup.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={BGB} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.codegen.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Codegen} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full">
              <a href="https://www.verkada.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-8 relative">
                  <img src={Verkada} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.postman.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Postman} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://wispr.ai" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Wispr} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://coframe.ai" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Coframe} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.crossmint.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={CrossMint} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-3/12 w-full lg:mr-4">
              <a href="https://www.neo.com" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-10 relative">
                  <img src={Neo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <h1 className="font-semibold lg:text-2xl text-xl text-center mt-16 mb-6 font-CerealBD">
            Partners
          </h1>
          <div className="flex lg:flex-row flex-col mb-4 justify-center">
            <div className="lg:w-2/12 w-full lg:mr-4">
              <a href="https://hakkousa.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-6 relative">
                  <img src={Hakko} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-2/12 w-full lg:mr-4">
              <a href="https://www.seeedstudio.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-6 relative">
                  <img src={Seeed} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-2/12 w-full lg:mr-4">
              <a href="https://www.doordash.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-6 relative">
                  <img src={DoorDash} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-2/12 w-full lg:mr-4">
              <a href="https://edstem.org/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-6 relative">
                  <img src={EdStem} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-2/12 w-full lg:mr-4">
              <a href="https://merklebot.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-6 relative">
                  <img src={Merkle} className="object-contain" />
                </div>
              </a>
            </div>
            <div className="lg:w-2/12 w-full lg:mr-4">
              <a href="https://www.cotopaxi.com/" target="_blank">
                <div className="w-full flex justify-center border-2 rounded-md bg-[#B8CCBA] h-40 p-6 relative">
                  <img src={Cotopaxi} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 flex flex-col relative"
        id="faqs"
      >
        <img
          src={hootowImg}
          className="dissapearWhenSmall globe_img top-30 z-0 w-120 mb-160 right-20 absolute"
          alt="Hoover Tower"
        />
        <div className="items-center flex flex-col">
          <h1
            className="text-center font-Raleway font-extrabold mb-8 bg-clip-text"
            style={{ color: "#232323", fontSize: "36px", lineHeight: "1.2" }}
          >
            FAQs
          </h1>
          <p
            className="description font-bold pb-10 px-4 text-center font-Raleway"
            style={{ color: "#585858", fontSize: "18px", width: "80%" }}
          >
            Email us at deanzadevelopers@gmail.com if we missed anything!
          </p>
        </div>

        <div className="faqSection">
          <div class="font-CerealBK text-lg text-black pt-5">
            <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
              <p
                className="mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858", width: "80%" }}
              >
                What is a Hackathon?
              </p>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p
                className="bg-[#B8CCBA] p-5 mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858" }}
              >
                A hackathon is where you turn your crazy ideas into real
                projects. At DA Hacks, for 36 hours (February 16th to 18th) on
                De Anza College's campus, you'll be learning and building in an
                energetic environment with people as passionate as you are! This
                year is our 10th anniversary- and we're going ALL OUT! We cover
                flights (regional caps), food, and swag for all hackers, and
                also have designated sleeping spaces for hackers. Not to
                mention, some epic prizes, world-renowned guest speakers,
                incredible mentors, and deeply technical workshops and fun
                activities throughout the event. Basically, you take care of
                hacking and we'll take care of you!
              </p>
            </div>
          </div>

          <div class="font-CerealBK text-lg text-black">
            <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
              <p
                className="mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858", width: "80%" }}
              >
                Who can come?
              </p>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p
                className="bg-[#B8CCBA] p-5 mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858" }}
              >
                DA Hacks applications are open to any enrolled college student
                (undergrad or grad) from all over the world. All current De Anza
                College students that register by appropriate deadlines will be
                guaranteed admission.
              </p>
            </div>
          </div>

          <div class="font-CerealBK text-lg text-black">
            <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
              <p
                className="mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858", width: "80%" }}
              >
                What does it cost?
              </p>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p
                className="bg-[#B8CCBA] p-5 mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858" }}
              >
                DA Hacks is free for all admitted hackers! It's our pleasure to
                bring our virtual workshops, swag, and prizes to our hackers
                without any cost on your end. We're committed to making DA Hacks
                accessible!
              </p>
            </div>
          </div>

          <div class="font-CerealBK text-lg text-black">
            <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
              <p
                className="mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858", width: "80%" }}
              >
                What is the DA Hacks code of conduct?
              </p>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p
                className="bg-[#B8CCBA] p-5 mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858" }}
              >
                DA Hacks abides by this{" "}
                <a href="https://github.com/DA Hacks/policies" target="_blank">
                  Code of Conduct
                </a>
                , adapted from the Hack Code of Conduct. Every DA Hacks
                applicant must agree to this Code of Conduct to be considered
                for admission. DA Hacks is a safe place where everyone is
                welcome ❤️.
              </p>
            </div>
          </div>

          <div class="font-CerealBK text-lg text-black">
            <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
              <p
                className="mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858", width: "80%" }}
              >
                What if I don't know how to code?
              </p>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p
                className="bg-[#B8CCBA] p-5 mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858" }}
              >
                DA Hacks is the perfect time and place to learn. We provide
                starter code{" "}
                <a
                  href="https://github.com/da-hacks"
                  target="_blank"
                  className="underline"
                >
                  “hack packs”
                </a>{" "}
                on our github as well as beginner-friendly workshops and mentors
                to help you build something you can be proud of.
              </p>
            </div>
          </div>

          <div class="font-CerealBK text-lg text-black">
            <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
              <p
                className="mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858", width: "80%" }}
              >
                What if I don't have a team or idea?
              </p>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p
                className="bg-[#B8CCBA] p-5 mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858" }}
              >
                Many of our hackers don't have a team coming in, and find them
                at the event! Once your admission is confirmed, we open up a
                team-matching platform for you to find other teammates. We also
                have a ton of team-forming activities to help you find teammates
                and idea brainstorming sessions for all our tracks.
              </p>
            </div>
          </div>

          <div class="font-CerealBK text-lg text-black">
            <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
              <p
                className="mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858", width: "80%" }}
              >
                What can I build?
              </p>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p
                className="bg-[#B8CCBA] p-5 mb-2 description font-semibold text-left font-Raleway text-sm"
                style={{ color: "#585858" }}
              >
                Anything your heart desires! Hardware, web, mobile, gaming,
                VR...you name it, we'll support it. We have six tracks that will
                have extra resources, sponsored challenges, and other events to
                inspire you. Check out our{" "}
                <a
                  href="https://DA Hacks-2023.devpost.com/"
                  target="_blank"
                  className="underline"
                >
                  Devpost
                </a>{" "}
                for examples of what participants built in the past!!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-10 flex flex-col relative overflow-hidden border-b">
        <h1 className="font-semibold text-md font-CerealBK text-black text-center">
          Made with ❤️ by the DA Hacks team
        </h1>
      </div>
    </div>
  );
}

export default App;