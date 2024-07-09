import hero from "/assets/images/hero.jpeg";

export const heroImg = hero;

import hmv from "/assets/videos/hero.mp4";
import smallmv from "/assets/videos/smallHero.mp4";
import highlightFirstmv from "/assets/videos/highlight-first.mp4";
import highlightSectmv from "/assets/videos/hightlight-third.mp4";
import highlightThirdmv from "/assets/videos/hightlight-sec.mp4";
import highlightFourthmv from "/assets/videos/hightlight-fourth.mp4";
import exploremv from "/assets/videos/explore.mp4";
import framemv from "/assets/videos/frame.mp4";



import apple from "/assets/images/apple.svg";
import search from "/assets/images/search.svg";
import bag from "/assets/images/bag.svg";
import watch from "/assets/images/watch.svg";
import right from "/assets/images/right.svg";
import replay from "/assets/images/replay.svg";
import play from "/assets/images/play.svg";
import pause from "/assets/images/pause.svg";

import explore1 from "/assets/images/explore1.jpg";
import explore2 from "/assets/images/explore2.jpg";
import chip from "/assets/images/chip.jpeg";
import frame from "/assets/images/frame.png";

import imgc1 from "/assets/images/carousel1.jpg";
import imgc2 from "/assets/images/carousel2.png";
import imgc3 from "/assets/images/carousel3.jpg";
import imgc4 from "/assets/images/carousel4.jpg";
import imgc5 from "/assets/images/carousel5.jpg";

import imgc6 from "/assets/images/all colors.jpg";
import imgc7 from "/assets/images/blue titanium.jpg";
import imgc8 from "/assets/images/black titanium.jpg";
import imgc9 from "/assets/images/white titanium.jpg";
import imgc10 from "/assets/images/natural titanium.jpg";


export const colorImg1 = '#b6b6b1';
export const colorImg2 = '#2b2b33';
export const colorImg3 = '#c9c8c3';
export const colorImg4 = '#202731';


export const lookImg1 = imgc6;
export const lookImg2 = imgc7;
export const lookImg3 = imgc8;
export const lookImg4 = imgc9;
export const lookImg5 = imgc10;


export const carousel1Img = imgc1;
export const carousel2Img = imgc2;
export const carousel3Img = imgc3;
export const carousel4Img = imgc4;  
export const carousel5Img = imgc5;



export const heroVideo = hmv;
export const smallHeroVideo = smallmv;
export const highlightFirstVideo = highlightFirstmv;
export const highlightSecondVideo = highlightSectmv;
export const highlightThirdVideo = highlightThirdmv;
export const highlightFourthVideo = highlightFourthmv;
export const exploreVideo = exploremv;
export const frameVideo = framemv;

export const appleImg = apple;
export const searchImg = search;
export const bagImg = bag;
export const watchImg = watch;
export const rightImg = right;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;


export const explore1Img = explore1;
export const explore2Img = explore2;
export const chipImg = chip;
export const frameImg = frame;


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export function animateWithGsap(target, animationProps, scrollProps) {
    gsap.to(target, {
        ...animationProps, scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            end: 'bottom 15%',
            ...scrollProps
        }
    });
}