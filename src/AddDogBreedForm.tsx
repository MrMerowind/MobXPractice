import React, { useRef, useState } from 'react'
import { useDogBreedStore } from './DogBreedsStore';
import './AddDogBreedForm.scss';

export default function AddDogBreedForm() {
  
    const dogNameInput = useRef<HTMLInputElement>(null);
    const dogColorsInput = useRef<HTMLInputElement>(null);
    const [dogName, setDogName] = useState("");
    const [dogColors, setDogColors] = useState("");
    const dogs = useDogBreedStore();

    return (
    <div className="dogBreedForm">
        <label>Wpisz nazwę psa:<br /><input ref={dogNameInput} value={dogName} onChange={p => {setDogName(r => p.target.value)}}></input></label><br />
        <label>Wpisz kolory psa oddzielone spacją:<br /><input ref={dogColorsInput} value={dogColors} onChange={p => {setDogColors(r => p.target.value)}}></input></label><br />
        <button type="button" onClick={p => {dogs.addDog(dogName, ...dogColors.split(' '))}}>Dodaj</button><br />
    </div>
  )
}
