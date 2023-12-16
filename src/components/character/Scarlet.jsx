import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Scarlet = () => {
  const { characterId } = useParams();
  const [name, setName] = useState("");
  const [classValue, setClass] = useState("");
  const [code, setCode] = useState("");
  const [weapon, setWeapon] = useState("");
  const [company, setCompany] = useState("");
  const [squad, setSquad] = useState("");
  const [burst, setBurst] = useState("");
  const [cube, setCube] = useState("");
  const [normal_attack, setNormal_attack] = useState("");
  const [skill_1, setSkill_1] = useState("");
  const [skill_2, setSkill_2] = useState("");
  const [burst_skill, setBurst_skill] = useState("");
  const [msg, setMsg] = useState(""); 

  useEffect(() => {
    const getCharId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/character/9`
        );

        setName(response.data.name);
        setClass(response.data.class.name);
        setCode(response.data.code);
        setWeapon(response.data.weapon);
        setCompany(response.data.company);
        setSquad(response.data.squad);
        setBurst(response.data.burst);
        setCube(response.data.cube);
        setNormal_attack(response.data.normal_attack);
        setSkill_1(response.data.skill_1);
        setSkill_2(response.data.skill_2);
        setBurst_skill(response.data.burst_skill);

      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };

    getCharId();
  }, [characterId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
          <ul>
            <li><strong>Class:</strong> {classValue}</li>
            <li><strong>Code:</strong> {code}</li>
            <li><strong>Weapon:</strong> {weapon}</li>
            <li><strong>Company:</strong> {company}</li>
            <li><strong>Squad:</strong> {squad}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Abilities</h2>
          <ul>
            <li><strong>Burst:</strong> {burst}</li>
            <li><strong>Cube:</strong> {cube}</li>
            <li><strong>Normal Attack:</strong> {normal_attack}</li>
            <li><strong>Skill 1:</strong> {skill_1}</li>
            <li><strong>Skill 2:</strong> {skill_2}</li>
            <li><strong>Burst Skill:</strong> {burst_skill}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Scarlet;
