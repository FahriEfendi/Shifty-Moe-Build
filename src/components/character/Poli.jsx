import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Helmet } from "react-helmet-async";
import water from "../../img/water.png"
import sg from "../../img/sg.png"


const users = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Characters', href: '#', current: true },
  { name: 'Teams', href: '#', current: false },
  { name: 'Tier List', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Poli = () => {
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
          `http://localhost:5000/character/10`
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
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={users.imageUrl} alt="#" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
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
                      src={water}
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
                        src={sg}
                        loading="lazy"
                        alt="char"
                      /> Shotgun
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
                  <h1 className='font-bold'>Brave Call:</h1>
                  <h1 className='font-bold sm:ml-2'>Lv 1</h1>
                </div>
                <span className='text-[#dbddef]'>
                  {skill_1}
                </span>
              </div>

              <div className="bg-blue-500 text-white text-sm py-2 px-4 rounded mb-5">
                <div className='flex flex-col items-center mb-3'>
                  <h1 className='font-bold'>That's a Good Boy:</h1>
                  <h1 className='font-bold sm:ml-2'>Lv 1</h1>
                </div>
                <span className='text-[#dbddef]'>
                  {skill_2}
                </span>
              </div>

              <div className="bg-blue-500 text-white text-sm py-2 px-4 rounded mb-5">
                <div className='flex flex-col items-center mb-3'>
                  <h1 className='font-bold'>Poli's Defense Line:</h1>
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
                  <td class="border border-slate-300 ... text-white">3.5</td>
                  <td class="border border-slate-300 ... text-white">2</td>
                  <td class="border border-slate-300 ... text-white">7</td>
                  <td class="border border-slate-300 ... text-[#dbddef]">Skill 1 Has a basically permanent uptime; but very nerfed score because of how small the buff is. Burst has a good attack buff that lasts 10s that also comes with a shield; decent sidegrade to anne for SW and MX teams.</td>
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
                  src="https://static.dotgg.gg/nikke/cubes/ie_10004.webp"
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

export default Poli;
