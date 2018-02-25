import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";
import TabContent from "./modules/TabContent";
import Tab2Content from "./modules/Tab2Content";
//import SlideShow from "./modules/SlideShow";

var mobileMenu = new MobileMenu();

new RevealOnScroll($('.reveal-team'), "70%");
new RevealOnScroll($('.reveal-contact'), "70%");
new RevealOnScroll($('.reveal-about'), "70%");
new RevealOnScroll($('.reveal-events'), "70%");
new RevealOnScroll($('.reveal-program'), "70%");

var stickyHeader = new StickyHeader();

var modal = new Modal();
var tabContent = new TabContent;
var tab2Content = new Tab2Content;

//var slideShow = new SlideShow();

