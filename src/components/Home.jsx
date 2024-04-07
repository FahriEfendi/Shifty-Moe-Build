import React, { useState, useEffect } from "react";
import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from "axios";
import { Helmet } from "react-helmet-async";
import el from "../img/el.png"
import fire from "../img/fire.png"
import water from "../img/water.png"
import iron from "../img/iron.png"
import wind from "../img/wind.png"
import ar from "../img/ar.png"
import sniper from "../img/sr.png"
import rl from "../img/rl.png"
import sg from "../img/sg.png"
import smg from "../img/smg.png"
import sr from "../img/rarity_4.png"
import ssr from "../img/rarity_5.png"


const navigation = [
  { name: 'Characters', href: '/', current: true },
  { name: 'Teams', href: '/teams', current: false },
  { name: 'Item', href: '/item', current: false },
  { name: 'Rapture', href: '#', current: false },
  { name: 'Tools', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function sortCharactersByStartDate(characters) {
  return characters.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function Dashboard() {
  const [charData, setCharData] = useState([]);
  const sortedCharacterData = sortCharactersByStartDate(charData);
  const [currentSr, setSr] = useState(null);
  const [currentSsr, setSsr] = useState(null);
  const [currentEl, setEl] = useState(null);
  const [currentFire, setFire] = useState(null);
  const [currentWater, setWater] = useState(null);
  const [currentIron, setIron] = useState(null);
  const [currentWind, setWind] = useState(null);
  const [currentAr, setAr] = useState(null);
  const [currentSniper, setSniper] = useState(null);
  const [currentRl, setRl] = useState(null);
  const [currentSg, setSg] = useState(null);
  const [currentSmg, setSmg] = useState(null);


  const handleSrClick = (srValue) => {
    const sr = currentSr === srValue ? null : srValue;
    setSr(sr);
  };

  const handleSsrClick = (classValue) => {
    const newClass = currentSsr === classValue ? null : classValue;
    setSsr(newClass);
  };

  const handleElClick = (elValue) => {
    const El = currentEl === elValue ? null : elValue;
    setEl(El);
  };

  const handleFireClick = (fireValue) => {
    const Fire = currentFire === fireValue ? null : fireValue;
    setFire(Fire);
  };

  const handleWaterClick = (waterValue) => {
    const Water = currentWater === waterValue ? null : waterValue;
    setWater(Water);
  };

  const handleIronClick = (ironValue) => {
    const Iron = currentIron === ironValue ? null : ironValue;
    setIron(Iron);
  };

  const handleWindClick = (windValue) => {
    const Wind = currentWind === windValue ? null : windValue;
    setWind(Wind);
  };

  const handleArClick = (arValue) => {
    const Ar = currentAr === arValue ? null : arValue;
    setAr(Ar);
  };

  const handleSniperClick = (srValue) => {
    const Sr = currentSniper === srValue ? null : srValue;
    setSniper(Sr);
  };

  const handleRlClick = (rlValue) => {
    const Rl = currentRl === rlValue ? null : rlValue;
    setRl(Rl);
  };

  const handleSgClick = (sgValue) => {
    const Sg = currentSg === sgValue ? null : sgValue;
    setSg(Sg);
  };

  const handleSmgClick = (smgValue) => {
    const Smg = currentSmg === smgValue ? null : smgValue;
    setSmg(Smg);
  };


  const filteredCharacterData = sortedCharacterData.filter(
    (character) =>
      (currentSr === null || character.rarity === currentSr) &&
      (currentSsr === null || character.rarity === currentSsr) &&
      (currentEl === null || character.code === currentEl) &&
      (currentFire === null || character.code === currentFire) &&
      (currentWater === null || character.code === currentWater) &&
      (currentIron === null || character.code === currentIron) &&
      (currentWind === null || character.code === currentWind) &&
      (currentAr === null || character.weapon === currentAr) &&
      (currentSniper === null || character.weapon === currentSniper) &&
      (currentRl === null || character.weapon === currentRl) &&
      (currentSg === null || character.weapon === currentSg) &&
      (currentSmg === null || character.weapon === currentSmg)
  );

  useEffect(() => {
    getAllChar();
  }, []);

  const getAllChar = async () => {
    const response = await axios.get("http://localhost:5000/character");
    setCharData(response.data);
  };

  return (
    <div className="min-h-full bg-[#101633]">
      <Helmet>
        <title>Nikke Characters List - Shifty.moe</title>
      </Helmet>

      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
             
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main className="container mx-auto max-w-screen-lg border-1 bg-[#1c1f46] p-7 mb-4 mt-5 rounded">
        <div className="container mx-auto max-w-3/4 border-1 bg-sky-600 p-4 mb-4 rounded">
          <p>Nikke Characters List</p>
        </div>
        <div className="container mx-auto max-w-3/4 border-1 bg-sky-600 p-4 mb-4 rounded">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={ssr}
                loading="lazy"
                alt="char"
                onClick={() => handleSsrClick(2)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">SSR</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={sr}
                loading="lazy"
                alt="char"
                onClick={() => handleSrClick(1)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">SR</p>
            </div> |
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={el}
                loading="lazy"
                alt="char"
                onClick={() => handleElClick(4)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">Electric</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={fire}
                loading="lazy"
                alt="char"
                onClick={() => handleFireClick(1)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">Fire</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={water}
                loading="lazy"
                alt="char"
                onClick={() => handleWaterClick(2)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">Water</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={iron}
                loading="lazy"
                alt="char"
                onClick={() => handleIronClick(5)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">Iron</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={wind}
                loading="lazy"
                alt="char"
                onClick={() => handleWindClick(3)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">Wind</p>
            </div> |
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={ar}
                loading="lazy"
                alt="char"
                onClick={() => handleArClick(1)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">AR</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={sniper}
                loading="lazy"
                alt="char"
                onClick={() => handleSniperClick(4)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">SR</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={rl}
                loading="lazy"
                alt="char"
                onClick={() => handleRlClick(5)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">RL</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={sg}
                loading="lazy"
                alt="char"
                onClick={() => handleSgClick(3)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">SG</p>
            </div>
            <div className="relative group">
              <img
                className={`character-type-icon object-cover rounded-md cursor-pointer`}
                src={smg}
                loading="lazy"
                alt="char"
                onClick={() => handleSmgClick(2)}
              />
              <p className="absolute bottom-8 opacity-0 group-hover:opacity-100 text-white bg-blue-500 rounded">SMG</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-3/4 border-1 bg-blue-600 p-4 rounded">
          <div className="mx-auto max-w-screen-lg py-6 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-8 gap-2 ">
              {filteredCharacterData.map((character, index) => (
                <div
                  key={index}
                  className={`relative bg-black p-1 rounded-md h-20 w-20 sm:h-20 sm:w-20 mb-4 hovered mr-4`}
                >
                  <a href={`/character/${character.slug}`}>
                    <img
                      className={`character-type-icon object-cover rounded-md mb-1 `}
                      src={character.charimg}
                      loading="lazy"
                      alt="char"
                    />
                    <div>
                      <div className="absolute bg-black bg-opacity-60 rounded-md top-0 left-1 mt-1 mr-1">
                        {character.burst === 1 ? (
                          <img
                            alt="class 1"
                            className="character-type-image w-5"
                            src="https://static.dotgg.gg/nikke/icon/icn_burst_1.webp"
                          />
                        ) : character.burst === 2 ? (
                          <img
                            alt="class 2"
                            className="character-type-image w-5"
                            src="https://static.dotgg.gg/nikke/icon/icn_burst_2.webp"
                          />
                        ) : (
                          <img
                            alt="class 3"
                            className="character-type-image w-5"
                            src="https://static.dotgg.gg/nikke/icon/icn_burst_3.webp"
                          />
                        )}
                      </div>
                      <div className="absolute bg-black bg-opacity-60 rounded-md top-0 left-6 mt-1 mr-1">
                        {character.charclass === 1 ? (
                          <img
                            alt="class 1"
                            className="character-type-image w-5"
                            src="https://static.dotgg.gg/nikke/icon/icn_class_attacker.webp"
                          />
                        ) : character.charclass === 2 ? (
                          <img
                            alt="class 2"
                            className="character-type-image w-5"
                            src="https://static.dotgg.gg/nikke/icon/icn_class_defender.webp"
                          />
                        ) : (
                          <img
                            alt="class 3"
                            className="character-type-image w-5"
                            src="https://static.dotgg.gg/nikke/icon/icn_class_supporter.webp"
                          />
                        )}
                      </div>
                    </div>
                  </a>
                  <div className="text-center">
                    <p className="text-sm text-white sm:text-base lg:text-lg xl:text-lg xl:text-sm xl:font-bold xl:text-slate-300">
                      {character.name.length > 8 ? `${character.name.substring(0, 8)}...` : character.name}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>Built with 💖 dear Shifty</p>
      </footer>

    </div>



  );
}

export default Dashboard;