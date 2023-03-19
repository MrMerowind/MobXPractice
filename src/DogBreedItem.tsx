import React from 'react'
import DogBreed from './DogBreed'
import { useDogBreedStore } from './DogBreedsStore';

interface DogBreedItemProps{
    dog: DogBreed;
}

export default function DogBreedItem(props: DogBreedItemProps) {

    const store = useDogBreedStore();

  if(props.dog !== null && props.dog !== undefined) return (
    <div><button type='button' onClick={p => {store.removeDog(props.dog)}}>X</button><strong>{props.dog.name}</strong><br />{"   " + props.dog.colors}<br /><br /></div>
  );
  else return null;
}
