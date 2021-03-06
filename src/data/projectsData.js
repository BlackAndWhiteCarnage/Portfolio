// RWD IMAGES
import lamiapassionemalteseRwdImage from 'assets/images/projectsRwd/LaMiaPassioneMaltese.png';
import euphoriaRwdImage from 'assets/images/projectsRwd/Euphoria.png';
import nicetomeetyouRwdImage from 'assets/images/projectsRwd/NiceToMeetYou.png';
// POSTERS
import euphoriaPosterImage from 'assets/images/projectsPosters/Euphoria.jpg';
import laMiaPassioneMaltesePosterImage from 'assets/images/projectsPosters/LaMiaPassioneMaltese.jpg';
import niceToMeetYouPosterImage from 'assets/images/projectsPosters/NiceToMeetYou.jpg';
// POSTERS PL
import euphoriaPosterImagePL from 'assets/images/projectsPosters/EuphoriaPL.jpg';
import laMiaPassioneMaltesePosterImagePL from 'assets/images/projectsPosters/LaMiaPassioneMaltesePL.jpg';
import niceToMeetYouPosterImagePL from 'assets/images/projectsPosters/NiceToMeetYouPL.jpg';
// JUST A SCREENSHOTS
import euphoriaScreenshot from 'assets/images/projectsScreenshots/Euphoria.jpg';
import laMiaPassioneMalteseScreenshot from 'assets/images/projectsScreenshots/LaMiaPassioneMaltese.jpg';
import niceToMeetYouScreenshot from 'assets/images/projectsScreenshots/NiceToMeetYou.jpg';

export const projects = [
  {
    title: 'La Mia Passione Maltese',
    live: 'https://lamiapassionemaltese.pl/',
    repo: 'https://github.com/BlackAndWhiteCarnage/La-Mia-Passione-Maltese',
    aboutProject:
      'La Mia Passione Maltese is a name of my parents breeding, its mostly my Mother but they needed a website! So I made it for them, it was my first project in React that Im not proud of, I shoud target for pure js cause its not so complex like my other projects. Afterall I learned couple things... and made a lots of non good practice lines of code.',
    projectProblems:
      'I think my biggest problem was to get all the data together in Exhibitions Section and renter them by choosing right year. Ive solved it by adding onClick event on each year button which causes state change. Then Ive checked if state number matches id of any object from the array of all exhibitions and render it with the right information for this year.',
    features: [
      'For be honest I really like the svg serpents and making them visable by playing with their paths after theyre on view.',
      'Im pretty sure that I mess two really important things. First one is that I didnt add on ANY section hard coded height, I beleve all of them are set to auto. Second one is form validation, its fine for a begginer but after this time Ive learned how can I make this better. Btw Its not mobile responsive after 1920px...',
    ],
    projectPoster: laMiaPassioneMaltesePosterImage,
    projectPosterPL: laMiaPassioneMaltesePosterImagePL,
    projectRwdImage: lamiapassionemalteseRwdImage,
    projectScreenshot: laMiaPassioneMalteseScreenshot,
    layer: laMiaPassioneMalteseScreenshot,
    layerPL: laMiaPassioneMalteseScreenshot,
    usedTools: ['React', 'Styled Components', 'Framer Motion', 'React Scroll'],
  },
  {
    title: 'Euphoria',
    live: 'https://euphorianoszonabielizna.pl/',
    repo: 'https://github.com/BlackAndWhiteCarnage/EUPHORI',
    aboutProject:
      'Euphoria is a e-commerce shop for my Wife. Ive made it after two attempts, first one was me really jumping on a deep water. Something tempted me that adding products by updating the array of objects in js file (Also naming images with a special pattern I made), then rebuilding whole app and deploying it on hosting website is going to be great idea! Ill give you a couple of seconds to laugh at me now... So after a while I mobilized myself to make it work well by adding strapi and connect it to AWS. Im pretty proud of this project, there is one thing that I didnt made until now and its payments with deleting products after someone purchase.',
    projectProblems:
      'For a while I didnt relize there is something like /:id in react-router-dom... And I didnt knew how to get a specyfic product after copy/paste ulr with it. Ive solved it by fetching them from url of data by passing product id from current url of a website.',
    features: [
      'Its my biggest project for now, there is couple of things to make better like animations but afterall Im really proud of everething I made here.',
      'Im glad that Ive solved the problem with adding new products by adding strapi cms connected with AWS for images storage.',
    ],
    projectPoster: euphoriaPosterImage,
    projectPosterPL: euphoriaPosterImagePL,
    projectRwdImage: euphoriaRwdImage,
    projectScreenshot: euphoriaScreenshot,
    usedTools: ['React', 'Styled Components', 'Framer Motion', 'Strapi.js', 'React Router Dom'],
  },
  {
    title: 'Nice To Meet You',
    live: 'https://hungry-davinci-f14f97.netlify.app/',
    repo: 'https://github.com/BlackAndWhiteCarnage/NiceToMeetYou',
    aboutProject:
      'Nice To Meet You is a imaginary website for buisness meetings. There is an interactive walkout with you can play, images sliders and price calculator for guests. Also Ive added scrolling on desktop section by section with pure js. Whole project purpose for me was to remind myself principles of vanilla javascript.',
    projectProblems:
      'My biggest problem was with interactive walkout, I couldnt defined next steps and refer them to previos steps cause "acces before initialization" is not allowed. Then I relise there is something like eval method in javascript so after current data is loaded it takes string and converts it to variable whitch is the next step.',
    features: [
      'Definitely my interactive walkout, I know its not a rocket science but you shoud try it!',
      'Im proud of myself that Ive made scrolling sections by sections without using any npm packages',
    ],
    projectPoster: niceToMeetYouPosterImage,
    projectPosterPL: niceToMeetYouPosterImagePL,
    projectRwdImage: nicetomeetyouRwdImage,
    projectScreenshot: niceToMeetYouScreenshot,
    usedTools: ['Vanilla Js', 'SCSS'],
  },
];
