import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Helmet } from "react-helmet-async";
import iron from "../../img/iron.png"
import rl from "../../img/rl.png"

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

const Rapunzel = () => {
  const { characterId } = useParams();
  const [name, setName] = useState("");
  const [classChar, setClass] = useState("");
  const [burst, setBurst] = useState("");
  const [normal_attack, setNormal_attack] = useState("");
  const [skill_1, setSkill_1] = useState("");
  const [skill_2, setSkill_2] = useState("");
  const [burst_skill, setBurst_skill] = useState("");
  const [charimg, setCharImg] = useState("");
  const [msg, setMsg] = useState("");


  useEffect(() => {
    const getCharId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/character/13`
        );
        setName(response.data.name);
        setClass(response.data.charclass);
        setBurst(response.data.burst);
        setNormal_attack(response.data.normal_attack);
        setSkill_1(response.data.skill_1);
        setSkill_2(response.data.skill_2);
        setBurst_skill(response.data.burst_skill);
        setCharImg(response.data.charImg);

      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };

    getCharId();
  }, [characterId]);

  return (
    <div className="min-h-full bg-[#101633]">
      <Helmet>
        <title>Liter - Shifty.moe</title>
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

      <main className="container mx-auto max-w-screen-lg border-1 bg-[#1c1f46] p-7 mb-4 mt-5 rounded ">
        <div className="container mx-auto max-w-3/4 border-1 bg-[#24285a] xl:p-0 p-4 md:p-0 xl:p-0 2xl:p-0 rounded">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-24 mb-4 sm:mb-0 sm:mr-4 flex justify-center items-center">
                <img
                  className="object-cover rounded-md w-24"
                  src={charimg}
                  loading="lazy"
                  alt="char"
                />
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <p>{msg}</p>
                <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                  <h1 className="font-bold text-[#dbddef] text-2xl mb-2 sm:mb-0">{name}</h1>
                  <div className="flex space-x-4">
                    <img
                      className="object-cover rounded-md w-10"
                      src={iron}
                      loading="lazy"
                      alt="char"
                    />
                    {burst === 1 ? (
                      <img
                        alt="burst 1"
                        className="character-type-image"
                        src="https://static.dotgg.gg/nikke/icon/icn_burst_1.webp"
                      />
                    ) : burst === 2 ? (
                      <img
                        alt="burst 2"
                        className="character-type-image "
                        src="https://static.dotgg.gg/nikke/icon/icn_burst_2.webp"
                      />
                    ) : (
                      <img
                        alt="burst 3"
                        className="character-type-image"
                        src="https://static.dotgg.gg/nikke/icon/icn_burst_3.webp"
                      />
                    )}
                    {classChar === 1 ? (
                      <img
                        alt="class 1"
                        className="character-type-image"
                        src="https://static.dotgg.gg/nikke/icon/icn_class_attacker.webp"
                      />
                    ) : classChar === 2 ? (
                      <img
                        alt="class 2"
                        className="character-type-image "
                        src="https://static.dotgg.gg/nikke/icon/icn_class_defender.webp"
                      />
                    ) :   (
                      <img
                        alt="class 3"
                        className="character-type-image"
                        src="https://static.dotgg.gg/nikke/icon/icn_class_supporter.webp"
                      />
                    )}
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-4'>
                  <div className="bg-blue-500 text-white text-sm py-2 px-4 rounded mb-2 sm:mb-0">
                    <div className='flex flex-warp items-center gap-4 '>
                      <img
                        className="object-cover rounded-md lg:w-5 sm:w-7"
                        src={rl}
                        loading="lazy"
                        alt="char"
                      /> Rocket Launcher
                    </div>
                  </div>
                  <div className="bg-green-500 text-white text-sm py-2 px-4 rounded">
                    Supporter
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5 text-white text-[#ffd780]'>{name} Skills:</div>
            <div className='grid grid-rows-2 grid-flow-col gap-4 sm:grid-rows-none sm:grid-cols-4'>
              <div className="bg-blue-500 text-white text-sm py-2 px-4 rounded mb-5">
                <div className='flex flex-col items-center mb-3'>
                  <h1 className='font-bold'>Normal attack:</h1>
                  <h1 className='font-bold sm:ml-2'>Lv 1</h1>
                </div>
                <span className='text-[#dbddef]'>
                  {normal_attack}
                </span>
              </div>

              <div className="bg-blue-500 text-white text-sm py-2 px-4 rounded mb-5">
                <div className='flex flex-col items-center mb-3'>
                  <h1 className='font-bold'>Sacrifice:</h1>
                  <h1 className='font-bold sm:ml-2'>Lv 1</h1>
                </div>
                <span className='text-[#dbddef]'>
                  {skill_1}
                </span>
              </div>

              <div className="bg-blue-500 text-white text-sm py-2 px-4 rounded mb-5">
                <div className='flex flex-col items-center mb-3'>
                  <h1 className='font-bold'>Divine Blessing:</h1>
                  <h1 className='font-bold sm:ml-2'>Lv 1</h1>
                </div>
                <span className='text-[#dbddef]'>
                  {skill_2}
                </span>
              </div>

              <div className="bg-blue-500 text-white text-sm py-2 px-4 rounded mb-5">
                <div className='flex flex-col items-center mb-3'>
                  <h1 className='font-bold'>Garden of Shangri-La:</h1>
                  <h1 className='font-bold sm:ml-2'>Lv 1</h1>
                </div>
                <span className='text-[#dbddef]'>
                  {burst_skill}
                </span>
              </div>
            </div>


            <div className='mt-5 text-white text-[#ffd780]'>Skill Priority:</div>
            <table class="border-collapse border border-slate-400 ... mt-5">
              <thead>
                <tr>
                  <th class="border border-slate-300 ... text-[#ffd780]">Skill1</th>
                  <th class="border border-slate-300 ... text-[#ffd780]">Skill2</th>
                  <th class="border border-slate-300 ... text-[#ffd780]">Burst</th>
                  <th class="border border-slate-300 ... text-[#ffd780]">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-300 ... text-white">7</td>
                  <td class="border border-slate-300 ... text-white">6</td>
                  <td class="border border-slate-300 ... text-white">4</td>
                  <td class="border border-slate-300 ... text-[#dbddef]">Skill 1 and 2 are both good sustain skills to invest into. Her burst won't be used often and is used for emergency heals or resurrection; also has a bug where units sometimes revive with 1 HP anyways.</td>
                </tr>

              </tbody>
            </table>

            <div className='mt-5 text-white text-[#ffd780]'>Recommended Cubes:</div>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>
              <div className="w-24 sm:w-24 mb-4 sm:mb-0 sm:mr-4">
                <img
                  className="object-cover rounded-md w-full"
                  src="https://static.dotgg.gg/nikke/cubes/ie_13001.webp"
                  loading="lazy"
                  alt="char"
                />
              </div>
              <div className="w-24 sm:w-24 mb-4 sm:mb-0 sm:mr-4">
                <img
                  className="object-cover rounded-md w-full"
                  src="https://static.dotgg.gg/nikke/cubes/ie_10003.webp"
                  loading="lazy"
                  alt="char"
                />
              </div>
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
};

export default Rapunzel;
