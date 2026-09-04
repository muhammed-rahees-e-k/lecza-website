import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './ProductsPage.css';
import './Products.css';


export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tabsRef = useRef(null);

  const categories = ['All', 'Clay', 'Floor Drains', 'Jalies', 'Stones', 'Tiles'];

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
    });
    AOS.refresh();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (tabsRef.current) {
      const activeEl = tabsRef.current.querySelector('.filter-tab.active');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const productItems = [
    { id: 1, src: '/RED SHADOW TILE - F6206 240X60.png', title: 'Terracotta Clay', category: 'Clay' },
    { id: 301, src: '/CLAY/IMPORTED CERAMIC SPLIT TILES/RED SHADOW TILE - 6302 SIZE 230x60.png', title: 'Red Shadow Tile 6302', category: 'Clay' },
    { id: 302, src: '/CLAY/IMPORTED CERAMIC SPLIT TILES/RED SHADOW TILE - 6303 SIZE 240x60.png', title: 'Red Shadow Tile 6303', category: 'Clay' },
    { id: 303, src: '/CLAY/IMPORTED CERAMIC SPLIT TILES/RED SHADOW TILE - F6206 SIZE 240X60.png', title: 'Red Shadow Tile F6206', category: 'Clay' },
    { id: 304, src: '/CLAY/IMPORTED CERAMIC SPLIT TILES/YELLOW SHADOW TILE - 6303 SIZE 230x60.png', title: 'Yellow Shadow Tile 6303', category: 'Clay' },
    { id: 305, src: '/CLAY/IMPORTED CLAY FLOOR TILES/BURGUNDY 300x300.png', title: 'Burgundy 300x300', category: 'Clay' },
    { id: 306, src: '/CLAY/IMPORTED CLAY FLOOR TILES/CAPPUCCINO 300x300.png', title: 'Cappuccino 300x300', category: 'Clay' },
    { id: 307, src: '/CLAY/IMPORTED CLAY FLOOR TILES/CLAY TILE GLAZED 500x500.png', title: 'Clay Tile Glazed 500x500', category: 'Clay' },
    { id: 308, src: '/CLAY/IMPORTED CLAY FLOOR TILES/CLAY TILE LIGHT RED 3D.png', title: 'Clay Tile Light Red 3D', category: 'Clay' },
    { id: 309, src: '/CLAY/IMPORTED CLAY FLOOR TILES/CLAY TILE LIGHT RED 500x500.png', title: 'Clay Tile Light Red 500x500', category: 'Clay' },
    { id: 310, src: '/CLAY/IMPORTED CLAY FLOOR TILES/DOUBLE COLOUR 300x300.png', title: 'Double Colour 300x300', category: 'Clay' },
    { id: 311, src: '/CLAY/IMPORTED CLAY FLOOR TILES/TERRACOTTA 300x300.png', title: 'Terracotta 300x300', category: 'Clay' },
    { id: 312, src: '/CLAY/IMPORTED CLAY SPLIT TILES/ARTIFICIAL RED SJHADOW SIZE 240x60.png', title: 'Artificial Red Shadow 240x60', category: 'Clay' },
    { id: 313, src: '/CLAY/IMPORTED CLAY SPLIT TILES/ARTIFICIAL YELLOW SHADOW SIZE 240X60.png', title: 'Artificial Yellow Shadow 240x60', category: 'Clay' },
    { id: 314, src: '/CLAY/IMPORTED CLAY SPLIT TILES/COFFEE SHADOW SIZE 240 X60.png', title: 'Coffee Shadow 240x60', category: 'Clay' },
    { id: 315, src: '/CLAY/IMPORTED CLAY SPLIT TILES/COFFEE SIZE 240X60.png', title: 'Coffee 240x60', category: 'Clay' },
    { id: 316, src: '/CLAY/IMPORTED CLAY SPLIT TILES/LIGHT GREY SIZE 240X60.png', title: 'Light Grey 240x60', category: 'Clay' },
    { id: 317, src: '/CLAY/IMPORTED CLAY SPLIT TILES/RED SHADOW MIX SIZE 240X80.png', title: 'Red Shadow Mix 240x80', category: 'Clay' },
    { id: 318, src: '/CLAY/IMPORTED CLAY SPLIT TILES/RED SHADOW PLAIN SIZE 240X60.png', title: 'Red Shadow Plain 240x60', category: 'Clay' },
    { id: 319, src: '/CLAY/IMPORTED CLAY SPLIT TILES/RED SHADOW SIZE 240X60.png', title: 'Red Shadow 240x60', category: 'Clay' },
    { id: 320, src: '/CLAY/IMPORTED CLAY SPLIT TILES/TERRACOTTA SIZE 240X60.png', title: 'Terracotta 240x60', category: 'Clay' },
    { id: 321, src: '/CLAY/IMPORTED CLAY SPLIT TILES/VIETNAM SPLIT COFFEE SIZE 240X60.png', title: 'Vietnam Split Coffee 240x60', category: 'Clay' },
    { id: 322, src: '/CLAY/IMPORTED CLAY SPLIT TILES/VIETNAM SPLIT TERRACOTTA SIZE 240X60.png', title: 'Vietnam Split Terracotta 240x60', category: 'Clay' },
    { id: 323, src: '/CLAY/IMPORTED CLAY SPLIT TILES/WHITE SIZE SIZE 240X60.png', title: 'White 240x60', category: 'Clay' },
    { id: 324, src: '/CLAY/IMPORTED CLAY SPLIT TILES/YELLOW SHADOW PLAIN SIZE  200X200.png', title: 'Yellow Shadow Plain 200x200', category: 'Clay' },
    { id: 325, src: '/CLAY/IMPORTED CLAY SPLIT TILES/YELLOW SHADOW PLAIN SIZE 240X60.png', title: 'Yellow Shadow Plain 240x60', category: 'Clay' },
    { id: 326, src: '/CLAY/IMPORTED CLAY SPLIT TILES/YELLOW SHADOW SIZE 240X60.png', title: 'Yellow Shadow 240x60', category: 'Clay' },
    { id: 327, src: '/CLAY/IMPORTED CLAY SPLIT TILES/YELLOW SIZE SIZE 240X60.png', title: 'Yellow 240x60', category: 'Clay' },
    { id: 328, src: '/CLAY/Mud series/REC 718 SIZE 9.5X2.5.png', title: 'REC 718', category: 'Clay' },
    { id: 329, src: '/CLAY/Mud series/REC 737 SIZE9.5X2.5.png', title: 'REC 737', category: 'Clay' },
    { id: 330, src: '/CLAY/Mud series/RHC 616  SIZE 9.5X2.5.png', title: 'RHC 616', category: 'Clay' },
    { id: 331, src: '/CLAY/Mud series/RHC 725 SIZE9.5X2.5.png', title: 'RHC 725', category: 'Clay' },
    { id: 332, src: '/CLAY/Mud series/RHC 740 SIZE 9.5X2.5.png', title: 'RHC 740', category: 'Clay' },
    { id: 333, src: '/CLAY/Mud series/TERECOTTA 3D.png', title: 'Terracotta 3D', category: 'Clay' },
    { id: 2, src: '/FLOOR DRAINS/LG222 3D.png', title: 'Linear Floor Drain', category: 'Floor Drains' },
    { id: 3, src: '/JALIES/LILLY JALI.png', title: 'Lilly Jali', category: 'Jalies' },
    { id: 4, src: '/BIDASAR BROWN SIZE12X12.png', title: 'Granite Stone', category: 'Stones' },
    { id: 5, src: '/9803.png', title: 'Porcelain Tile', category: 'Tiles' },
    { id: 6, src: '/06_retail_space.png', title: 'Natural Stone', category: 'Stones' },
    { id: 7, src: '/07_tile_details.png', title: 'Ceramic Tile', category: 'Tiles' },
    { id: 10, src: '/JALIES/ARCUS JALI.png', title: 'Arcus Jali', category: 'Jalies' },
    { id: 11, src: '/JALIES/ARROW JALI.png', title: 'Arrow Jali', category: 'Jalies' },
    { id: 12, src: '/JALIES/CRYSTAL JALI.png', title: 'Crystal Jali', category: 'Jalies' },
    { id: 13, src: '/JALIES/CUBIC JALI.png', title: 'Cubic Jali', category: 'Jalies' },
    { id: 14, src: '/JALIES/FLOWER JALI.png', title: 'Flower Jali', category: 'Jalies' },
    { id: 15, src: '/JALIES/INIGMA CAMP JALI.png', title: 'Inigma Camp Jali', category: 'Jalies' },
    { id: 16, src: '/JALIES/KORESH.png', title: 'Koresh', category: 'Jalies' },
    { id: 17, src: '/JALIES/LOTUS JALI.png', title: 'Lotus Jali', category: 'Jalies' },
    { id: 18, src: '/JALIES/MANDALA JALI.png', title: 'Mandala Jali', category: 'Jalies' },
    { id: 19, src: '/JALIES/MATRIX JALI 10X10.png', title: 'Matrix Jali 10x10', category: 'Jalies' },
    { id: 20, src: '/JALIES/NEXUS JALI.png', title: 'Nexus Jali', category: 'Jalies' },
    { id: 21, src: '/JALIES/PETAL PANAMA JALI.png', title: 'Petal Panama Jali', category: 'Jalies' },
    { id: 22, src: '/JALIES/PLUTO.png', title: 'Pluto', category: 'Jalies' },
    { id: 23, src: '/JALIES/SLICE JALI.png', title: 'Slice Jali', category: 'Jalies' },
    { id: 24, src: '/JALIES/SWASTIK.png', title: 'Swastik', category: 'Jalies' },
    { id: 25, src: '/JALIES/TULIP JALI.png', title: 'Tulip Jali', category: 'Jalies' },
    { id: 26, src: '/JALIES/TV SQURE JALI.png', title: 'Tv Squre Jali', category: 'Jalies' },
    { id: 27, src: '/JALIES/VIVO OPEL JALI.png', title: 'Vivo Opel Jali', category: 'Jalies' },
    { id: 28, src: '/JALIES/W JALI.png', title: 'W Jali', category: 'Jalies' },
    { id: 29, src: '/JALIES/ZEEBRA 2.png', title: 'Zeebra 2', category: 'Jalies' },
    { id: 30, src: '/JALIES/ZEEBRA JALI.png', title: 'Zeebra Jali', category: 'Jalies' },
    { id: 31, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER BLACK LB214.jpeg', title: '150x150 Square Floor Drainer Black LB214', category: 'Floor Drains' },
    { id: 32, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER BLACK LB215.jpeg', title: '150x150 Square Floor Drainer Black LB215', category: 'Floor Drains' },
    { id: 33, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER BLACK LB218.jpeg', title: '150x150 Square Floor Drainer Black LB218', category: 'Floor Drains' },
    { id: 34, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER BLACK LB219.jpeg', title: '150x150 Square Floor Drainer Black LB219', category: 'Floor Drains' },
    { id: 35, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER GREY LG214.jpeg', title: '150x150 Square Floor Drainer Grey LG214', category: 'Floor Drains' },
    { id: 36, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER GREY LG215.jpeg', title: '150x150 Square Floor Drainer Grey LG215', category: 'Floor Drains' },
    { id: 37, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER GREY LG218.jpeg', title: '150x150 Square Floor Drainer Grey LG218', category: 'Floor Drains' },
    { id: 38, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER GREY LG219.jpeg', title: '150x150 Square Floor Drainer Grey LG219', category: 'Floor Drains' },
    { id: 39, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER MARBLE  LM214.jpeg', title: '150x150 Square Floor Drainer Marble LM214', category: 'Floor Drains' },
    { id: 40, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER MARBLE  LM215.jpeg', title: '150x150 Square Floor Drainer Marble LM215', category: 'Floor Drains' },
    { id: 41, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER MARBLE  LM218.jpeg', title: '150x150 Square Floor Drainer Marble LM218', category: 'Floor Drains' },
    { id: 42, src: '/FLOOR DRAINS/150X150 SQUARE FLOOR DRAINER MARBLE  LM219.jpeg', title: '150x150 Square Floor Drainer Marble LM219', category: 'Floor Drains' },
    { id: 43, src: '/FLOOR DRAINS/COACHROACH TRAP BLACK LB222.jpeg', title: 'Cockroach Trap Black LB222', category: 'Floor Drains' },
    { id: 44, src: '/FLOOR DRAINS/COACHROACH TRAP GREY LG222.jpeg', title: 'Cockroach Trap Grey LG222', category: 'Floor Drains' },
    { id: 45, src: '/FLOOR DRAINS/COACHROACH TRAP MARBLE LM222.jpeg', title: 'Cockroach Trap Marble LM222', category: 'Floor Drains' },
    { id: 46, src: '/FLOOR DRAINS/LB215 3D.png', title: 'LB215 3D', category: 'Floor Drains' },
    { id: 47, src: '/FLOOR DRAINS/LG214 3D.png', title: 'LG214 3D', category: 'Floor Drains' },
    { id: 48, src: '/FLOOR DRAINS/LG222 3D.png', title: 'LG222 3D', category: 'Floor Drains' },
    { id: 49, src: '/FLOOR DRAINS/LM218 3D.png', title: 'LM218 3D', category: 'Floor Drains' },
    { id: 50, src: '/FLOOR DRAINS/LM219 3D.png', title: 'LM219 3D', category: 'Floor Drains' },
    { id: 51, src: '/STONES/MOSAICS/BIDASAR BROWN SIZE12X12.png', title: 'Bidasar Brown 12x12', category: 'Stones' },
    { id: 52, src: '/STONES/MOSAICS/BIDASAR GREEN SIZE12X12.png', title: 'Bidasar Green 12x12', category: 'Stones' },
    { id: 53, src: '/STONES/MOSAICS/BLACK GOLD MINI PATTER SIZE12X12.png', title: 'Black Gold Mini Patter 12x12', category: 'Stones' },
    { id: 54, src: '/STONES/MOSAICS/FOREST TEAK GREEN SIZE12X12.png', title: 'Forest Teak Green 12x12', category: 'Stones' },
    { id: 55, src: '/STONES/MOSAICS/MINT AGRA RED ZIG-ZAG SIZE 12X12.png', title: 'Mint Agra Red Zig-Zag 12x12', category: 'Stones' },
    { id: 56, src: '/STONES/MOSAICS/MINT RAINBOW ZIG-ZAG   SIZE12X12.png', title: 'Mint Rainbow Zig-Zag 12x12', category: 'Stones' },
    { id: 57, src: '/STONES/MOSAICS/MIX SLATE FLAG SIZE 12X12.png', title: 'Mix Slate Flag 12x12', category: 'Stones' },
    { id: 58, src: '/STONES/MOSAICS/MOSAICS 3D.png', title: 'Mosaics 3D', category: 'Stones' },
    { id: 59, src: '/STONES/MOSAICS/STAR GALAXY MARBLE ZIG-ZAG SIZE12X12.png', title: 'Star Galaxy Marble Zig-Zag 12x12', category: 'Stones' },
    { id: 60, src: '/STONES/MOSAICS/TEAK MINT AGRA RED ZIG-ZAG SIZE12X12.png', title: 'Teak Mint Agra Red Zig-Zag 12x12', category: 'Stones' },
    { id: 61, src: '/STONES/PANELS/ANTI BLACK PANEL SIZE 24X6.png', title: 'Anti Black Panel 24x6', category: 'Stones' },
    { id: 62, src: '/STONES/PANELS/BIDASAR BROWN LAPTRO POLISH MARBLE SIZE 24X6.png', title: 'Bidasar Brown Laptro Polish 24x6', category: 'Stones' },
    { id: 63, src: '/STONES/PANELS/BLACK AND GOLD PANEL 24X6.png', title: 'Black And Gold Panel 24x6', category: 'Stones' },
    { id: 64, src: '/STONES/PANELS/BLACK HAND CUT SIZE 24X6.png', title: 'Black Hand Cut 24x6', category: 'Stones' },
    { id: 65, src: '/STONES/PANELS/BLACK PANEL SIZE 24X6.png', title: 'Black Panel 24x6', category: 'Stones' },
    { id: 66, src: '/STONES/PANELS/D GREEN PANEL SIZE 24X6.png', title: 'D Green Panel 24x6', category: 'Stones' },
    { id: 67, src: '/STONES/PANELS/KK WHITE PANEL SIZE 24X6.png', title: 'Kk White Panel 24x6', category: 'Stones' },
    { id: 68, src: '/STONES/PANELS/KUMBAL LAWA 24X6.png', title: 'Kumbal Lawa 24x6', category: 'Stones' },
    { id: 69, src: '/STONES/PANELS/M GREEN RUSTICK PANEL SIZE 24X6.png', title: 'M Green Rustick Panel 24x6', category: 'Stones' },
    { id: 70, src: '/STONES/PANELS/RED QUARTZITE SIZE 24X6.png', title: 'Red Quartzite 24x6', category: 'Stones' },
    { id: 71, src: '/STONES/PANELS/SILVER GREY SIZE 24X6.png', title: 'Silver Grey 24x6', category: 'Stones' },
    { id: 72, src: '/STONES/PANELS/TEAK MARBLE MOULD PANEL SIZE 24X6.png', title: 'Teak Marble Mould Panel 24x6', category: 'Stones' },
    { id: 73, src: '/STONES/PANELS/TEAK MINT GROUP PANEL SIZE 24X6.png', title: 'Teak Mint Group Panel 24x6', category: 'Stones' },
    { id: 74, src: '/STONES/PANELS/TEAK PANEL PLAIN UP-DOWN SIZE 24X6.png', title: 'Teak Panel Plain Up-Down 24x6', category: 'Stones' },
    { id: 75, src: '/STONES/PANELS/TEAK RUSTIC PANEL SIZE 24X6.png', title: 'Teak Rustic Panel 24x6', category: 'Stones' },
    { id: 76, src: '/STONES/PANELS/Z BLACK PANEL SIZE 24X6.png', title: 'Z Black Panel 24x6', category: 'Stones' },
    { id: 77, src: '/STONES/ROCK FACE CLADS/C BLACK SOFT FINISH 4,6X4-24.png', title: 'C Black Soft Finish 4,6x4-24', category: 'Stones' },
    { id: 78, src: '/STONES/ROCK FACE CLADS/JAISALMER SOFT FINISH SIZE 4,6X4-24.png', title: 'Jaisalmer Soft Finish 4,6x4-24', category: 'Stones' },
    { id: 79, src: '/STONES/ROCK FACE CLADS/M.YELLOW SAND STONE SIZE4,6X4-24.png', title: 'M.yellow Sand Stone 4,6x4-24', category: 'Stones' },
    { id: 80, src: '/STONES/ROCK FACE CLADS/OLIVE GREY SAND STONE 4,6X4-24.png', title: 'Olive Grey Sand Stone 4,6x4-24', category: 'Stones' },
    { id: 81, src: '/STONES/ROCK FACE CLADS/PINK QUARTZITE SIZE4,6X4-24.png', title: 'Pink Quartzite 4,6x4-24', category: 'Stones' },
    { id: 82, src: '/STONES/ROCK FACE CLADS/ROCK FACE CLADS 3D.png', title: 'Rock Face Clads 3D', category: 'Stones' },
    { id: 83, src: '/STONES/ROCK FACE CLADS/SCOOP ROCK FINISH SIZE4,6X4-12.png', title: 'Scoop Rock Finish 4,6x4-12', category: 'Stones' },
    { id: 84, src: '/STONES/RR STONE/AUTOM GREY TUMBELED.png', title: 'Autom Grey Tumbeled', category: 'Stones' },
    { id: 85, src: '/STONES/RR STONE/AUTUM BROWN RR .png', title: 'Autum Brown RR', category: 'Stones' },
    { id: 86, src: '/STONES/RR STONE/AUTUM BRWN RR STONE.jpeg', title: 'Autum Brwn RR Stone', category: 'Stones' },
    { id: 87, src: '/STONES/RR STONE/MANSOON BLACK RR STONE.png', title: 'Mansoon Black RR Stone', category: 'Stones' },
    { id: 88, src: '/STONES/RR STONE/MANSOON BLACK TUMBELED.png', title: 'Mansoon Black Tumbeled', category: 'Stones' },
    { id: 89, src: '/STONES/RR STONE/RR STONE 3D.png', title: 'RR Stone 3D', category: 'Stones' },
    { id: 90, src: '/STONES/RR STONE/RR STONE BLACK.png', title: 'RR Stone Black', category: 'Stones' },
    { id: 91, src: '/STONES/RR STONE/RR STONE MINT MULTI.jpeg', title: 'RR Stone Mint Multi', category: 'Stones' },
    { id: 92, src: '/STONES/RR STONE/RR STONE RED.png', title: 'RR Stone Red', category: 'Stones' },
    { id: 93, src: '/STONES/RR STONE/RR STONE WHITE.png', title: 'RR Stone White', category: 'Stones' },
    { id: 94, src: '/STONES/RR STONE/RR STONE YELLOW.jpeg', title: 'RR Stone Yellow', category: 'Stones' },
    { id: 95, src: '/STONES/RR STONE/SAGAR MULTI TUMBELED.png', title: 'Sagar Multi Tumbeled', category: 'Stones' },
    { id: 96, src: '/STONES/RR STONE/SAGAR MULTY RR STONE.png', title: 'Sagar Multy RR Stone', category: 'Stones' },
    { id: 97, src: '/STONES/RR STONE/SAGAR YELLOW RR STONE.png', title: 'Sagar Yellow RR Stone', category: 'Stones' },
    { id: 98, src: '/TILES/PICS OF 12X12 TILES/18004.png', title: '18004', category: 'Tiles' },
    { id: 99, src: '/TILES/PICS OF 12X12 TILES/18151.png', title: '18151', category: 'Tiles' },
    { id: 100, src: '/TILES/PICS OF 12X12 TILES/9933.png', title: '9933', category: 'Tiles' },
    { id: 101, src: '/TILES/PICS OF 12X12 TILES/ARROW COSMO AQUA.png', title: 'ARROW COSMO AQUA', category: 'Tiles' },
    { id: 102, src: '/TILES/PICS OF 12X12 TILES/ARROW COSMO BIANCO.png', title: 'ARROW COSMO BIANCO', category: 'Tiles' },
    { id: 103, src: '/TILES/PICS OF 12X12 TILES/FRENDI COSMO AMAZON.png', title: 'FRENDI COSMO AMAZON', category: 'Tiles' },
    { id: 104, src: '/TILES/PICS OF 12X12 TILES/FRENDI COSMO MOS.png', title: 'FRENDI COSMO MOS', category: 'Tiles' },
    { id: 105, src: '/TILES/PICS OF 12X12 TILES/ICE COOL 607.png', title: 'ICE COOL 607', category: 'Tiles' },
    { id: 106, src: '/TILES/PICS OF 12X12 TILES/ICE COOL 608.png', title: 'ICE COOL 608', category: 'Tiles' },
    { id: 107, src: '/TILES/PICS OF 12X12 TILES/KITKAT MONO 15.png', title: 'KITKAT MONO 15', category: 'Tiles' },
    { id: 108, src: '/TILES/PICS OF 12X12 TILES/MC-114.png', title: 'MC 114', category: 'Tiles' },
    { id: 109, src: '/TILES/PICS OF 12X12 TILES/MC-226.png', title: 'MC 226', category: 'Tiles' },
    { id: 110, src: '/TILES/PICS OF 12X12 TILES/OSLA COSMO YALE.png', title: 'OSLA COSMO YALE', category: 'Tiles' },
    { id: 111, src: '/TILES/PICS OF 12X12 TILES/OSLO COSMO FOREST.png', title: 'OSLO COSMO FOREST', category: 'Tiles' },
    { id: 112, src: '/TILES/PICS OF 12X12 TILES/PRISM COSMO ABALONE.png', title: 'PRISM COSMO ABALONE', category: 'Tiles' },
    { id: 113, src: '/TILES/PICS OF 12X12 TILES/PRISM COSMO AQUA.png', title: 'PRISM COSMO AQUA', category: 'Tiles' },
    { id: 114, src: '/TILES/PICS OF 12X12 TILES/RAVELO GRACE BIANCO.png', title: 'RAVELO GRACE BIANCO', category: 'Tiles' },
    { id: 115, src: '/TILES/PICS OF 12X12 TILES/RONDA COSMO AVIO.png', title: 'RONDA COSMO AVIO', category: 'Tiles' },
    { id: 116, src: '/TILES/PICS OF 12X12 TILES/SUPER COOL 605.png', title: 'SUPER COOL 605', category: 'Tiles' },
    { id: 117, src: '/TILES/PICS OF SUBWAY/AQUA MIST FEATHER.png', title: 'AQUA MIST FEATHER', category: 'Tiles' },
    { id: 118, src: '/TILES/PICS OF SUBWAY/AQUA MIST TEXTURAX.png', title: 'AQUA MIST TEXTURAX', category: 'Tiles' },
    { id: 119, src: '/TILES/PICS OF SUBWAY/BEVEL OCEAN BLUE.png', title: 'BEVEL OCEAN BLUE', category: 'Tiles' },
    { id: 120, src: '/TILES/PICS OF SUBWAY/BEVEL SANDLE BEIGE.png', title: 'BEVEL SANDLE BEIGE', category: 'Tiles' },
    { id: 121, src: '/TILES/PICS OF SUBWAY/BEVEL SMOKEY GREY.png', title: 'BEVEL SMOKEY GREY', category: 'Tiles' },
    { id: 122, src: '/TILES/PICS OF SUBWAY/BEVEL WHITE.png', title: 'BEVEL WHITE', category: 'Tiles' },
    { id: 123, src: '/TILES/PICS OF SUBWAY/BEVEL Z BLACK.png', title: 'BEVEL Z BLACK', category: 'Tiles' },
    { id: 124, src: '/TILES/PICS OF SUBWAY/CREAM ALLOY FEATHER.png', title: 'CREAM ALLOY FEATHER', category: 'Tiles' },
    { id: 125, src: '/TILES/PICS OF SUBWAY/CREAM ALLOY TEXTUREX.png', title: 'CREAM ALLOY TEXTUREX', category: 'Tiles' },
    { id: 126, src: '/TILES/PICS OF SUBWAY/FERN GLOW FEATHER.png', title: 'FERN GLOW FEATHER', category: 'Tiles' },
    { id: 127, src: '/TILES/PICS OF SUBWAY/FERN GLOW TEXTURAX.png', title: 'FERN GLOW TEXTURAX', category: 'Tiles' },
    { id: 128, src: '/TILES/PICS OF SUBWAY/FLUTED BAMBOO GREEN.png', title: 'FLUTED BAMBOO GREEN', category: 'Tiles' },
    { id: 129, src: '/TILES/PICS OF SUBWAY/FLUTED DUSTY GREY.png', title: 'FLUTED DUSTY GREY', category: 'Tiles' },
    { id: 130, src: '/TILES/PICS OF SUBWAY/FLUTED_LINEN_WHITE.png', title: 'FLUTED LINEN WHITE', category: 'Tiles' },
    { id: 131, src: '/TILES/PICS OF SUBWAY/HONEY SHINE FEATHER.png', title: 'HONEY SHINE FEATHER', category: 'Tiles' },
    { id: 132, src: '/TILES/PICS OF SUBWAY/HONEY SHINE TEXTURAX.png', title: 'HONEY SHINE TEXTURAX', category: 'Tiles' },
    { id: 133, src: '/TILES/PICS OF SUBWAY/ICEAGE AQUA.png', title: 'ICEAGE AQUA', category: 'Tiles' },
    { id: 134, src: '/TILES/PICS OF SUBWAY/ICEAGE DECORE.png', title: 'ICEAGE DECORE', category: 'Tiles' },
    { id: 135, src: '/TILES/PICS OF SUBWAY/ICEAGE GREEN DECORE (2).png', title: 'ICEAGE GREEN DECORE (2)', category: 'Tiles' },
    { id: 136, src: '/TILES/PICS OF SUBWAY/ICEAGE GREEN.png', title: 'ICEAGE GREEN', category: 'Tiles' },
    { id: 137, src: '/TILES/PICS OF SUBWAY/Ocean.png', title: 'Ocean', category: 'Tiles' },
    { id: 138, src: '/TILES/PICS OF SUBWAY/POLO_SNOW.png', title: 'POLO SNOW', category: 'Tiles' },
    { id: 139, src: '/TILES/PICS OF SUBWAY/PORTO COZY COREL.png', title: 'PORTO COZY COREL', category: 'Tiles' },
    { id: 140, src: '/TILES/PICS OF SUBWAY/PORTO FIERY EMBER.png', title: 'PORTO FIERY EMBER', category: 'Tiles' },
    { id: 141, src: '/TILES/PICS OF SUBWAY/PORTO ICY MINT.png', title: 'PORTO ICY MINT', category: 'Tiles' },
    { id: 142, src: '/TILES/PICS OF SUBWAY/PORTO MAIZE YELLOW.png', title: 'PORTO MAIZE YELLOW', category: 'Tiles' },
    { id: 143, src: '/TILES/PICS OF SUBWAY/PORTO PEARL MIST.png', title: 'PORTO PEARL MIST', category: 'Tiles' },
    { id: 144, src: '/TILES/PICS OF SUBWAY/ROME AQUA GEO.png', title: 'ROME AQUA GEO', category: 'Tiles' },
    { id: 145, src: '/TILES/PICS OF SUBWAY/ROME AQUA.png', title: 'ROME AQUA', category: 'Tiles' },
    { id: 146, src: '/TILES/PICS OF SUBWAY/ROME GREEN GEO.png', title: 'ROME GREEN GEO', category: 'Tiles' },
    { id: 147, src: '/TILES/PICS OF SUBWAY/ROME GREEN.png', title: 'ROME GREEN', category: 'Tiles' },
    { id: 148, src: '/TILES/PICS OF SUBWAY/ROME WHITE GEO.png', title: 'ROME WHITE GEO', category: 'Tiles' },
    { id: 149, src: '/TILES/PICS OF SUBWAY/ROME WHITE.png', title: 'ROME WHITE', category: 'Tiles' },
    { id: 150, src: '/TILES/PICS OF SUBWAY/RUBY RESH FEATHER.png', title: 'RUBY RESH FEATHER', category: 'Tiles' },
    { id: 151, src: '/TILES/PICS OF SUBWAY/RUBY RESH TEXTURAX.png', title: 'RUBY RESH TEXTURAX', category: 'Tiles' },
    { id: 152, src: '/TILES/PICS OF SUBWAY/Swiss White Base.png', title: 'Swiss White Base', category: 'Tiles' },
    { id: 153, src: '/TILES/PICS OF SUBWAY/Swiss White Decor.png', title: 'Swiss White Decor', category: 'Tiles' },
    { id: 154, src: '/TILES/PICS OF SUBWAY/TEAL NEO FEATHER.png', title: 'TEAL NEO FEATHER', category: 'Tiles' },
    { id: 155, src: '/TILES/PICS OF SUBWAY/TEAL NEO TEXTURAX.png', title: 'TEAL NEO TEXTURAX', category: 'Tiles' },
    { id: 156, src: '/TILES/PICS OF SUBWAY/Verde.png', title: 'Verde', category: 'Tiles' },
    { id: 157, src: '/TILES/PICS OF SUBWAY/WAVE COTTO.jpg', title: 'WAVE COTTO', category: 'Tiles' },
    { id: 158, src: '/TILES/PICS OF SUBWAY/WAVE DUST.jpg', title: 'WAVE DUST', category: 'Tiles' },
    { id: 159, src: '/TILES/PICS OF SUBWAY/WAVE LAGOON.jpg', title: 'WAVE LAGOON', category: 'Tiles' },
    { id: 160, src: '/TILES/PICS OF SUBWAY/WAVE LETTE.jpg', title: 'WAVE LETTE', category: 'Tiles' },
    { id: 161, src: '/TILES/PICS OF SUBWAY/WAVE MIDNIGHT.jpg', title: 'WAVE MIDNIGHT', category: 'Tiles' },
    { id: 162, src: '/TILES/PICS OF SUBWAY/WAVE OCHRE.jpg', title: 'WAVE OCHRE', category: 'Tiles' },
    { id: 163, src: '/TILES/PICS OF SUBWAY/WAVE PEARL.png', title: 'WAVE PEARL', category: 'Tiles' },
    { id: 164, src: '/TILES/PICS OF SUBWAY/WAVE SILVA.png', title: 'WAVE SILVA', category: 'Tiles' },
    { id: 165, src: '/TILES/PICS OF SUBWAY/Wild Green Base.png', title: 'Wild Green Base', category: 'Tiles' },
    { id: 166, src: '/TILES/PICS OF SUBWAY/Wild Green Decor.png', title: 'Wild Green Decor', category: 'Tiles' },
    { id: 167, src: '/TILES/TILES 2X1/AROCA GRAPHITE.png', title: 'AROCA GRAPHITE', category: 'Tiles' },
    { id: 168, src: '/TILES/TILES 2X1/ARRONS GRIS HL-1  SUGAR.png', title: 'ARRONS GRIS HL 1  SUGAR', category: 'Tiles' },
    { id: 169, src: '/TILES/TILES 2X1/BALI ALMOND DECOR.png', title: 'BALI ALMOND DECOR', category: 'Tiles' },
    { id: 170, src: '/TILES/TILES 2X1/BALI CREAMA DECOR.png', title: 'BALI CREAMA DECOR', category: 'Tiles' },
    { id: 171, src: '/TILES/TILES 2X1/BIOME SOIL 1.png', title: 'BIOME SOIL 1', category: 'Tiles' },
    { id: 172, src: '/TILES/TILES 2X1/BLACK G 2022.png', title: 'BLACK G 2022', category: 'Tiles' },
    { id: 173, src: '/TILES/TILES 2X1/BRICKLANE DUSK.png', title: 'BRICKLANE DUSK', category: 'Tiles' },
    { id: 174, src: '/TILES/TILES 2X1/BRICKLANE PORPOISE.png', title: 'BRICKLANE PORPOISE', category: 'Tiles' },
    { id: 175, src: '/TILES/TILES 2X1/CEDRA COSMO ALBASTER.png', title: 'CEDRA COSMO ALBASTER', category: 'Tiles' },
    { id: 176, src: '/TILES/TILES 2X1/CEDRA COSMO FLAME.png', title: 'CEDRA COSMO FLAME', category: 'Tiles' },
    { id: 177, src: '/TILES/TILES 2X1/FOSTER COSMO SANGRIA.png', title: 'FOSTER COSMO SANGRIA', category: 'Tiles' },
    { id: 178, src: '/TILES/TILES 2X1/GAMA GREEN.png', title: 'GAMA GREEN', category: 'Tiles' },
    { id: 179, src: '/TILES/TILES 2X1/GAMA RED.png', title: 'GAMA RED', category: 'Tiles' },
    { id: 180, src: '/TILES/TILES 2X1/GAMA YELLOW.png', title: 'GAMA YELLOW', category: 'Tiles' },
    { id: 181, src: '/TILES/TILES 2X1/Girona Oxed.png', title: 'Girona Oxed', category: 'Tiles' },
    { id: 182, src: '/TILES/TILES 2X1/HALTON COSMO BIANCO.png', title: 'HALTON COSMO BIANCO', category: 'Tiles' },
    { id: 183, src: '/TILES/TILES 2X1/HALTON COSMO VARDE.png', title: 'HALTON COSMO VARDE', category: 'Tiles' },
    { id: 184, src: '/TILES/TILES 2X1/HEDGE BIANCO.png', title: 'HEDGE BIANCO', category: 'Tiles' },
    { id: 185, src: '/TILES/TILES 2X1/HEDGE BOTTILE GREEN.png', title: 'HEDGE BOTTILE GREEN', category: 'Tiles' },
    { id: 186, src: '/TILES/TILES 2X1/HOKKADIO ALGAE(ORNABRICK).png', title: 'HOKKADIO ALGAE(ORNABRICK)', category: 'Tiles' },
    { id: 187, src: '/TILES/TILES 2X1/HOKKADIO MOSS (ORNABRICK PUNCH).png', title: 'HOKKADIO MOSS (ORNABRICK PUNCH)', category: 'Tiles' },
    { id: 188, src: '/TILES/TILES 2X1/KASTONE NATURAL.png', title: 'KASTONE NATURAL', category: 'Tiles' },
    { id: 189, src: '/TILES/TILES 2X1/KESTO GRAPHITE .png', title: 'KESTO GRAPHITE ', category: 'Tiles' },
    { id: 190, src: '/TILES/TILES 2X1/KESTO GRAPHITE.png', title: 'KESTO GRAPHITE', category: 'Tiles' },
    { id: 191, src: '/TILES/TILES 2X1/KESTONE BRONZO.png', title: 'KESTONE BRONZO', category: 'Tiles' },
    { id: 192, src: '/TILES/TILES 2X1/KESTONE CREMA.png', title: 'KESTONE CREMA', category: 'Tiles' },
    { id: 193, src: '/TILES/TILES 2X1/LATERITE TILE 601.png', title: 'LATERITE TILE 601', category: 'Tiles' },
    { id: 194, src: '/TILES/TILES 2X1/LATERITE TILE HL-2.png', title: 'LATERITE TILE HL 2', category: 'Tiles' },
    { id: 195, src: '/TILES/TILES 2X1/LINEA CHERRY.png', title: 'LINEA CHERRY', category: 'Tiles' },
    { id: 196, src: '/TILES/TILES 2X1/LITHUNIA 03.png', title: 'LITHUNIA 03', category: 'Tiles' },
    { id: 197, src: '/TILES/TILES 2X1/LOUVERS TEAK.png', title: 'LOUVERS TEAK', category: 'Tiles' },
    { id: 198, src: '/TILES/TILES 2X1/LUMINA COSMO PINE.png', title: 'LUMINA COSMO PINE', category: 'Tiles' },
    { id: 199, src: '/TILES/TILES 2X1/LUMINA COSMO PUMICE.png', title: 'LUMINA COSMO PUMICE', category: 'Tiles' },
    { id: 200, src: '/TILES/TILES 2X1/LUNA AQUA MATT.png', title: 'LUNA AQUA MATT', category: 'Tiles' },
    { id: 201, src: '/TILES/TILES 2X1/LUNA BLUE GLOSSY.png', title: 'LUNA BLUE GLOSSY', category: 'Tiles' },
    { id: 202, src: '/TILES/TILES 2X1/LUNA BROWN MATT.png', title: 'LUNA BROWN MATT', category: 'Tiles' },
    { id: 203, src: '/TILES/TILES 2X1/LUNA GREEN MATT.png', title: 'LUNA GREEN MATT', category: 'Tiles' },
    { id: 204, src: '/TILES/TILES 2X1/LUNA GREY GLOSSY.png', title: 'LUNA GREY GLOSSY', category: 'Tiles' },
    { id: 205, src: '/TILES/TILES 2X1/LUNA OCEAN BLUE GLOSSY.png', title: 'LUNA OCEAN BLUE GLOSSY', category: 'Tiles' },
    { id: 206, src: '/TILES/TILES 2X1/LUNA RED GLOSSY.png', title: 'LUNA RED GLOSSY', category: 'Tiles' },
    { id: 207, src: '/TILES/TILES 2X1/LUNA WHITE GLOSSY.png', title: 'LUNA WHITE GLOSSY', category: 'Tiles' },
    { id: 208, src: '/TILES/TILES 2X1/LUNA WHITE MATT.png', title: 'LUNA WHITE MATT', category: 'Tiles' },
    { id: 209, src: '/TILES/TILES 2X1/LUNA YELLOW GLOSSY.png', title: 'LUNA YELLOW GLOSSY', category: 'Tiles' },
    { id: 210, src: '/TILES/TILES 2X1/MONOLITH NATURAL.png', title: 'MONOLITH NATURAL', category: 'Tiles' },
    { id: 211, src: '/TILES/TILES 2X1/MOROCCAN HL 2.png', title: 'MOROCCAN HL 2', category: 'Tiles' },
    { id: 212, src: '/TILES/TILES 2X1/MOROCCAN SUGAR HL 1.png', title: 'MOROCCAN SUGAR HL 1', category: 'Tiles' },
    { id: 213, src: '/TILES/TILES 2X1/MOUNT EVEREST-02.png', title: 'MOUNT EVEREST 02', category: 'Tiles' },
    { id: 214, src: '/TILES/TILES 2X1/MOUNT EVEREST-03.png', title: 'MOUNT EVEREST 03', category: 'Tiles' },
    { id: 215, src: '/TILES/TILES 2X1/Montenegro-02.png', title: 'Montenegro 02', category: 'Tiles' },
    { id: 216, src: '/TILES/TILES 2X1/Montenegro-07.png', title: 'Montenegro 07', category: 'Tiles' },
    { id: 217, src: '/TILES/TILES 2X1/Montenegro-08.png', title: 'Montenegro 08', category: 'Tiles' },
    { id: 218, src: '/TILES/TILES 2X1/Montenegro-11.png', title: 'Montenegro 11', category: 'Tiles' },
    { id: 219, src: '/TILES/TILES 2X1/Montengaro -12.png', title: 'Montengaro  12', category: 'Tiles' },
    { id: 220, src: '/TILES/TILES 2X1/Montengaro-09.png', title: 'Montengaro 09', category: 'Tiles' },
    { id: 221, src: '/TILES/TILES 2X1/POOL TILE HL 1.png', title: 'POOL TILE HL 1', category: 'Tiles' },
    { id: 222, src: '/TILES/TILES 2X1/POOL TILE HL 2.png', title: 'POOL TILE HL 2', category: 'Tiles' },
    { id: 223, src: '/TILES/TILES 2X1/Page_167_600x300mm_ULTRA_HQ.png', title: 'Page 167 600x300mm ULTRA HQ', category: 'Tiles' },
    { id: 224, src: '/TILES/TILES 2X1/RAVELO GRACE EMARALD.png', title: 'RAVELO GRACE EMARALD', category: 'Tiles' },
    { id: 225, src: '/TILES/TILES 2X1/RAVLO GRACE BIANCO.png', title: 'RAVLO GRACE BIANCO', category: 'Tiles' },
    { id: 226, src: '/TILES/TILES 2X1/RISLET MULTI TILE.png', title: 'RISLET MULTI TILE', category: 'Tiles' },
    { id: 227, src: '/TILES/TILES 2X1/SAGA GREY.png', title: 'SAGA GREY', category: 'Tiles' },
    { id: 228, src: '/TILES/TILES 2X1/SAGA WHITE.png', title: 'SAGA WHITE', category: 'Tiles' },
    { id: 229, src: '/TILES/TILES 2X1/SAREEN NATURAL.png', title: 'SAREEN NATURAL', category: 'Tiles' },
    { id: 230, src: '/TILES/TILES 2X1/SERBIA_07_600x300mm_300dpi_HQ.png', title: 'SERBIA 07 600x300mm 300dpi HQ', category: 'Tiles' },
    { id: 231, src: '/TILES/TILES 2X1/SERBIA_10_600x300mm_300dpi_HQ.png', title: 'SERBIA 10 600x300mm 300dpi HQ', category: 'Tiles' },
    { id: 232, src: '/TILES/TILES 2X1/SILVES_BOTTLE_600x300mm_300dpi_HQ.png', title: 'SILVES BOTTLE 600x300mm 300dpi HQ', category: 'Tiles' },
    { id: 233, src: '/TILES/TILES 2X1/SILVES_GOLDEN_600x300mm_300dpi_HQ.png', title: 'SILVES GOLDEN 600x300mm 300dpi HQ', category: 'Tiles' },
    { id: 234, src: '/TILES/TILES 2X1/TEMBA OLIVE.png', title: 'TEMBA OLIVE', category: 'Tiles' },
    { id: 235, src: '/TILES/TILES 2X1/TEMBA_BLUE_600x300mm_300dpi_HQ.png', title: 'TEMBA BLUE 600x300mm 300dpi HQ', category: 'Tiles' },
    { id: 236, src: '/TILES/TILES 2X1/TEMBA_OLIVE_600x300mm_300dpi_HQ.png', title: 'TEMBA OLIVE 600x300mm 300dpi HQ', category: 'Tiles' },
    { id: 237, src: '/TILES/TILES 2X1/TERRA_BRICK_ULTRA_HQ_600x300mm.png', title: 'TERRA BRICK ULTRA HQ 600x300mm', category: 'Tiles' },
    { id: 238, src: '/TILES/TILES 2X1/TERRA_RED_FUSION_600x300mm_ULTRA_HQ.png', title: 'TERRA RED FUSION 600x300mm ULTRA HQ', category: 'Tiles' },
    { id: 239, src: '/TILES/TILES 2X1/TERRA_RED_SHADOW_600x300mm_ULTRA_HQ.png', title: 'TERRA RED SHADOW 600x300mm ULTRA HQ', category: 'Tiles' },
    { id: 240, src: '/TILES/TILES 2X1/Trendy Gold Decor 15.png', title: 'Trendy Gold Decor 15', category: 'Tiles' },
    { id: 241, src: '/TILES/TILES 2X1/UNIKA_COSMO_AQUA_8K_600x300mm.tif', title: 'UNIKA COSMO AQUA 8K 600x300mm', category: 'Tiles' },
    { id: 242, src: '/TILES/TILES 2X1/UNIKA_COSMO_PICKLE_8K_600x300mm.png', title: 'UNIKA COSMO PICKLE 8K 600x300mm', category: 'Tiles' },
    { id: 243, src: '/TILES/TILES 2X1/WHITE G 1022.png', title: 'WHITE G 1022', category: 'Tiles' },
    { id: 244, src: '/TILES/TILES 2X1/ZETA BIANCO.png', title: 'ZETA BIANCO', category: 'Tiles' },
    { id: 245, src: '/TILES/TILES 2X1/ZETA BOTTLE.png', title: 'ZETA BOTTLE', category: 'Tiles' },
    { id: 246, src: '/TILES/TILES 2X1/ZETA SUPER WHITE.png', title: 'ZETA SUPER WHITE', category: 'Tiles' },
  ];

  const filteredItems = activeTab === 'All'
    ? productItems
    : productItems.filter(item => item.category === activeTab);

  return (
    <div className="products-page-container">
      <header className={`site-header light-header ${isScrolled ? 'scrolled' : ''}`} id="top">
        <Link to="/" className="brand" aria-label="LECZA home">
          <img src="/logo.png" alt="LECZA Logo" className="brand-logo" />
        </Link>

        <nav id="site-nav-new" className={isMobileMenuOpen ? 'open' : ''} aria-label="Main navigation">
          <Link to="/#" onClick={() => setIsMobileMenuOpen(false)}>Home <span className="dot"></span></Link>
          <Link to="/#about" onClick={() => setIsMobileMenuOpen(false)}>About Us <span className="dot"></span></Link>
          <Link to="/products" className="active" onClick={() => setIsMobileMenuOpen(false)}>Products <span className="dot"></span></Link>
          <a href="/#gallery" onClick={() => setIsMobileMenuOpen(false)}>Collection <span className="dot"></span></a>
          <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us <span className="dot"></span></Link>
        </nav>

        <button className={`menu-button ${isMobileMenuOpen ? 'open' : ''}`} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-controls="site-nav-new">
          <span className="dark-bar"></span><span className="dark-bar"></span><span className="dark-bar"></span><span className="sr-only">Open menu</span>
        </button>
      </header>

      <main className="products-page-main">
        <div className="products-page-title-section" data-aos="fade-up">
          <p className="eyebrow-new">OUR CATALOG</p>
          <h1>Exceptional Products</h1>
          <p className="products-page-subtitle">
            Browse our full catalog of premium clay, floor drains, jalies, stones, and tiles.<br />
            Find the perfect material for your next project.
          </p>
        </div>

        <div className="filter-tabs-wrapper" data-aos="fade-up" data-aos-delay="100">
          <button
            className="tab-scroll-btn prev-btn"
            onClick={() => scrollTabs('left')}
            aria-label="Previous categories"
          >
            ‹
          </button>
          <div className="products-filter-tabs" ref={tabsRef}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            className="tab-scroll-btn next-btn"
            onClick={() => scrollTabs('right')}
            aria-label="Next categories"
          >
            ›
          </button>
        </div>

        <div className="detailed-products-grid">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className="product-category-card" data-aos="fade-up" data-aos-delay={(idx % 6) * 50}>
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }}
              />
              <div className="product-category-content">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="site-footer-new">
        <div className="footer-top">
          <div className="footer-cta">
            {/* <Link to="/#" className="footer-btn">Start a Project <span>↗</span></Link> */}
          </div>
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/products">Products</Link>
              <a href="/#gallery">Collection</a>
              <a href="/#about">About Us</a>
              <a href="/#reviews">Reviews</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>Hillton Convention Center<br />Manjeri, Malappuram<br />Kerala - 676122</p>
              <a href="mailto:cladcraftinnovations@gmail.com" className="footer-contact-link">cladcraftinnovations@gmail.com</a>
              <a href="tel:+919745055044" className="footer-contact-link">+91 97450 55044</a>
            </div>
            <div className="footer-col">
              <h4>Social</h4>
              <a href="https://www.instagram.com/lecza_clad.craft/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61568854973018" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://wa.me/919745055044" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-branches-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', paddingBottom: '40px' }}>
          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#666', marginBottom: '20px', fontWeight: '700' }}>Branch Details</h4>
          <div className="footer-links-grid" style={{ gap: '30px' }}>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Ernakulam, Panayikulam</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br />XIV/575C Ground Floor, Alangad<br />Panayikulam, Ernakulam 683511</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Kollam, Mylakkad</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br />Bldg XVI/650, Adhichanallor Panchayath<br />Mylakkad P.O, Kollam 691571</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Kannur, Narath</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br />Step Road, Narath<br />Kannur 670601</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Malappuram, Manjeri</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br />Door No. EP.15/352-361<br />Edavanna, Pathapiriyam, School Padi</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <Link to="/" className="brand footer-brand-new">
            <img src="/logo-footer.png" alt="LECZA Logo" style={{ height: '40px', objectFit: 'contain' }} />
          </Link>
          <p className="copyright-new">
            © {new Date().getFullYear()} LECZA BY GLADCRAFT | Designed & Developed by <a href="https://www.seconders.tech" target="_blank" rel="noopener noreferrer" style={{ color: '#921313', fontWeight: '600', textDecoration: 'none' }}>www.seconders.tech</a>
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
